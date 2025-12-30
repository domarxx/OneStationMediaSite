import { useState } from "react";
import { Link } from "react-router-dom";
import { getLatestStudies, Study } from "@/data/studies";
import { Button } from "@/components/ui/button";
import { Download, ArrowRight } from "lucide-react"; // Importei ArrowRight
import LeadFormModal from "@/components/LeadFormModal"; 

const StudiesPreview = () => {
  const latestStudies = getLatestStudies(3);

  // --- ESTADOS DO MODAL ---
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedStudy, setSelectedStudy] = useState<Study | null>(null);

  // Função que abre o modal
  const openDownloadModal = (e: React.MouseEvent, study: Study) => {
    e.preventDefault(); 
    e.stopPropagation(); 
    setSelectedStudy(study);
    setIsModalOpen(true);
  };

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
    <section className="py-16 md:py-24 bg-muted/40 relative">
      
      <LeadFormModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSuccess={handleRealDownload}
        studyTitle={selectedStudy?.title || ""}
      />

      <div className="container px-6">
        <div className="flex items-center gap-4 mb-4">
          <div className="accent-bar h-12" />
          <span className="text-primary font-semibold tracking-wide uppercase">
            Estudos de Caso
          </span>
        </div>
        
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 ">
            Resultados que comprovam a  <span className="text-gradient">performance</span>.
        </h2>

        <p className="text-lg text-muted-foreground mb-16">
          Conheça alguns cases recentes em que combinamos dados, criatividade e inventário premium para gerar impacto real para as marcas.
        </p>

        <div className="flex flex-wrap justify-center gap-6">
          {latestStudies.map((study) => (
            <article
              key={study.id}
              className="group relative rounded-xl border-2 border-dashed border-white/20 bg-background/60 overflow-hidden hover:border-primary/60 hover:bg-background/90 transition-colors flex flex-col w-full md:w-[30%]"
            >
              {/* 1. LINK GLOBAL DO CARD */}
              <Link 
                to={`/estudos/${study.slug}`} 
                className="absolute inset-0 z-0"
                aria-label={`Ver detalhes de ${study.title}`}
              />

              {/* IMAGEM (pointer-events-none) */}
              <div className="relative w-full aspect-[16/9] bg-background/60 border-b border-border/60 pointer-events-none">
                <img
                  src={study.image}
                  alt={study.imageAlt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* CONTEÚDO (pointer-events-none) */}
              <div className="p-5 flex flex-col h-full pointer-events-none">
                <div className="relative z-0">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary mb-2">
                    {study.sector}
                    </p>
                    <h3 className="text-base md:text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {study.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3 line-clamp-3">
                    {study.summary}
                    </p>
                </div>
                
                <div className="mt-auto pt-2">
                    <p className="text-[11px] font-medium text-foreground mb-4">
                    {study.resultHighlight}
                    </p>
                    
                    {/* ÁREA DOS DOIS BOTÕES */}
                    <div className="flex flex-col xl:flex-row gap-3">
                        
                        {/* BOTÃO 1: SABER MAIS (Decorativo, deixa o clique passar pro card) */}
                        <Button 
                            variant="secondary" 
                            size="sm"
                            className="flex-1 gap-2 pointer-events-none border border-primary/20 bg-primary/5 text-primary group-hover:bg-primary/10"
                        >
                            Ler mais
                            <ArrowRight className="w-3 h-3" />
                        </Button>

                        {/* BOTÃO 2: BAIXAR (Funcional, intercepta o clique) */}
                        <Button
                            variant="outline"
                            size="sm"
                            className="flex-1 gap-2 border-primary/50 text-primary hover:bg-primary hover:text-white transition-all duration-300 relative z-10 pointer-events-auto"
                            onClick={(e) => openDownloadModal(e, study)}
                        >
                            <Download className="w-3 h-3" />
                            Baixar
                        </Button>
                    </div>

                </div>
              </div>
            </article>
          ))}
        </div>
          
        <div className="hidden md:flex justify-center mt-16 pb-12">  
          <Button variant="outline" size="lg" asChild>
            <Link to="/estudos">
              Ver todos os estudos
            </Link>
          </Button>
        </div>

        <div className="mt-8 md:hidden text-center">
          <Button variant="outline" size="lg" asChild>
            <Link to="/estudos">
              Ver todos os estudos
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default StudiesPreview;