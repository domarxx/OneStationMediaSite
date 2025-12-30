import { useEffect, useState } from "react";
import { Link } from "react-router-dom"; 
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { studies, Study } from "@/data/studies";
import { Button } from "@/components/ui/button";
import { Download, ArrowRight } from "lucide-react"; // Adicionei ArrowRight para o botão "Saber mais"
import DataBeams from "@/components/DataBeams";
import LeadFormModal from "@/components/LeadFormModal"; 

const Estudos = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  // --- ESTADOS DO MODAL ---
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedStudy, setSelectedStudy] = useState<Study | null>(null);

  // Função que abre o modal
  const openDownloadModal = (e: React.MouseEvent, study: Study) => {
    e.preventDefault(); // Impede de abrir a página de detalhes
    e.stopPropagation(); // Impede o clique de "subir" para o link do card
    setSelectedStudy(study);
    setIsModalOpen(true);
  };

  // Função que faz o download real
  const handleRealDownload = () => {
    if (!selectedStudy) return;
    const link = document.createElement("a");
    link.href = selectedStudy.pdfUrl;
    link.download = `${selectedStudy.title.replace(/[^a-z0-9]/gi, "_")}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div id="estudos" className="min-h-screen bg-background">
      <Navbar />

      {/* --- MODAL DE LEAD --- */}
      <LeadFormModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSuccess={handleRealDownload}
        studyTitle={selectedStudy?.title || ""}
      />

      <main className="pt-24 pb-16 md:pb-24">
         <section className="relative min-h-[50vh] flex items-center overflow-hidden mb-12 md:mb-16">
          <div className="absolute inset-0 z-0 grid-background opacity-40 bg-top [mask-image:linear-gradient(to_bottom,black_40%,transparent_95%)]"></div> 
          <DataBeams />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(350_78%_52%/0.08)_0%,transparent_60%)]" />

          <div className="container relative z-10 px-6">
            <div className="flex flex-col items-center text-center w-full">
              <div className="max-w-4xl mx-auto">
                <p className="text-sm font-semibold tracking-[0.25em] text-muted-foreground uppercase">
                  Estudos de Caso
                </p>
                <h1 className="mt-3 text-3xl md:text-4xl lg:text-6xl font-display font-bold text-foreground text-balance">
                  <span className="text-gradient">DECODIFICANDO:</span> Inteligência de mídia aplicada a resultados reais
                </h1>
                <p className="mt-6 text-muted-foreground text-sm md:text-lg text-pretty max-w-3xl mx-auto leading-relaxed">
                  Uma curadoria de campanhas em que combinamos dados, tecnologia e criatividade para entregar performance consistente em diferentes mercados e verticais.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Lista de estudos */}
        <section className="container px-6">
          <div className="grid gap-6 md:gap-8 md:grid-cols-2">
            {studies.map((study) => (
              <article
                key={study.id}
                className="group relative rounded-2xl border border-border/70 bg-muted/40 overflow-hidden hover:border-primary/70 hover:bg-background/80 transition-colors flex flex-col"
              >
                
                {/* 1. LINK GLOBAL: Cobre todo o card e leva para DETALHES */}
                <Link to={`/estudos/${study.slug}`} className="absolute inset-0 z-0" aria-label="Ver detalhes" />

                {/* Imagem (pointer-events-none para deixar o clique passar para o Link Global) */}
                <div className="relative w-full aspect-[16/9] bg-background/60 border-b border-border/60 pointer-events-none">
                  <img
                    src={study.image}
                    alt={study.imageAlt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>

                {/* Container de Conteúdo (pointer-events-none para o texto não bloquear o clique) */}
                <div className="p-6 md:p-7 flex flex-col flex-1 pointer-events-none">
                  <div className="relative z-0">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-2">
                      {study.sector}
                    </p>
                    <h2 className="text-lg md:text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {study.title}
                    </h2>
                    <p className="text-sm text-muted-foreground mb-4">
                      {study.summary}
                    </p>
                  </div>
                  
                  <div className="flex-1 mt-auto pt-4">
                    <p className="text-xs font-medium text-foreground/90 mb-6">
                      {study.resultHighlight}
                    </p>
                    
                    {/* ÁREA DOS BOTÕES */}
                    <div className="flex flex-col sm:flex-row gap-3">
                        
                        {/* BOTÃO 1: SABER MAIS (Ação Secundária)
                            - pointer-events-none: O clique "atravessa" ele e pega o Link Global do card.
                            - Visualmente é um botão, funcionalmente é parte do card.
                        */}
                        <Button 
                            variant="secondary" 
                            className="flex-1 gap-2 pointer-events-none border border-primary/20 bg-primary/5 text-primary group-hover:bg-primary/10"
                        >
                            Saber mais
                            <ArrowRight className="w-4 h-4" />
                        </Button>

                        {/* BOTÃO 2: BAIXAR (Ação Primária) 
                            - pointer-events-auto: Reativa o clique.
                            - z-10: Fica acima do Link Global.
                            - onClick: Abre o modal.
                        */}
                        <Button 
                            variant="default" 
                            className="flex-1 gap-2 relative z-10 pointer-events-auto shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all"
                            onClick={(e) => openDownloadModal(e, study)}
                        >
                            <Download className="w-4 h-4" />
                            Baixar PDF
                        </Button>
                    </div>

                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Estudos;