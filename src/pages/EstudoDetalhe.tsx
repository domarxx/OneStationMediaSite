import { useMemo, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { studies } from "@/data/studies";
import { Button } from "@/components/ui/button";
import { Download, ArrowLeft } from "lucide-react";
import LeadFormModal from "@/components/LeadFormModal"; // Import do Modal

const EstudoDetalhe = () => {
  const { slug } = useParams<{ slug: string }>();
  
  // --- ESTADOS DO MODAL ---
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Rola para o topo ao abrir a página
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  const study = useMemo(
    () => studies.find((s) => s.slug === slug),
    [slug]
  );

  // Esta função só roda DEPOIS que o usuário preenche o form
  const handleRealDownload = () => {
    if (!study) return;
    const link = document.createElement("a");
    link.href = study.pdfUrl;
    link.download = `${study.title.replace(/[^a-z0-9]/gi, "_")}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Se não encontrar o estudo (404)
  if (!study) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="pt-32 pb-16 container px-6 text-center">
            <h1 className="text-3xl font-display font-bold text-foreground">
                Estudo não encontrado
            </h1>
            <p className="mt-4 text-muted-foreground">
                O conteúdo que você procura pode ter sido movido.
            </p>
            <div className="mt-8">
                <Button variant="outline" asChild>
                    <Link to="/estudos">Voltar para a lista</Link>
                </Button>
            </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* --- O MODAL FICA AQUI --- */}
      <LeadFormModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSuccess={handleRealDownload}
        studyTitle={study.title}
      />

      <main className="pt-32 pb-20 container px-6">
        
        {/* Breadcrumb / Voltar */}
        <Link 
            to="/estudos" 
            className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Voltar para estudos
        </Link>

        <div className="max-w-4xl mx-auto">
          {/* --- HERO DO ESTUDO --- */}
          <div className="mb-10">
            <span className="text-primary font-semibold tracking-widest uppercase text-xs">
              {study.sector}
            </span>
            <h1 className="mt-3 text-3xl md:text-5xl font-bold font-display text-balance leading-tight">
              {study.title}
            </h1>
            
            <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed">
              {study.detailSubtitle || study.summary}
            </p>
          </div>

          {/* --- IMAGEM DE CAPA --- */}
          <div className="w-full aspect-video rounded-2xl overflow-hidden border border-white/10 mb-12 bg-muted/20 relative shadow-2xl shadow-primary/5">
            <img 
              src={study.image} 
              alt={study.imageAlt} 
              className="w-full h-full object-cover"
            />
          </div>

          {/* --- CONTEÚDO --- */}
          {study.sections && (
            <div className="space-y-12 mb-16">
                {study.sections.map((section) => (
                <article key={section.id} className="space-y-4">
                    <h2 className="text-2xl font-semibold text-foreground border-l-4 border-primary pl-4">
                        {section.title}
                    </h2>
                    <div className="space-y-4 pl-4 md:pl-0">
                        {section.paragraphs.map((paragraph, idx) => (
                        <p key={idx} className="text-base md:text-lg text-muted-foreground leading-relaxed">
                            {paragraph}
                        </p>
                        ))}
                    </div>
                </article>
                ))}
            </div>
          )}

          {/* --- ÁREA DE DOWNLOAD E DESTAQUE --- */}
          <div className="bg-gradient-to-br from-muted/30 to-background border border-white/10 rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8 mt-12">
            <div className="flex-1 space-y-2 text-center md:text-left">
              <h3 className="text-lg font-semibold text-foreground">Principal Insight</h3>
              <p className="text-muted-foreground italic text-lg">"{study.resultHighlight}"</p>
            </div>
            
            <Button 
              size="lg" 
              className="w-full md:w-auto gap-3 min-w-[240px] h-14 text-base shadow-lg shadow-primary/20"
              onClick={() => setIsModalOpen(true)}
            >
              <Download className="w-5 h-5" />
              Baixar PDF Completo
            </Button>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default EstudoDetalhe;