import { Link } from "react-router-dom";
import { getLatestStudies } from "@/data/studies";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const StudiesPreview = () => {
  const latestStudies = getLatestStudies(3);

  const handleDownloadPDF = (pdfUrl: string, title: string) => {
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = `${title.replace(/[^a-z0-9]/gi, "_")}.pdf`;
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="py-16 md:py-24 bg-muted/40">
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

        {/* ALTERAÇÃO 1: Troquei 'grid' por 'flex' para permitir centralização */}
        <div className="flex flex-wrap justify-center gap-6">
          {latestStudies.map((study) => (
            <article
              key={study.id}
              // ALTERAÇÃO 2: Adicionei 'w-full md:w-[30%]' para manter o visual de 3 colunas, mas flexível
              className="group rounded-xl border-2 border-dashed border-white/20 bg-background/60 overflow-hidden hover:border-primary/60 hover:bg-background/90 transition-colors flex flex-col w-full md:w-[30%]"
            >
              {/* Thumbnail */}
              <div className="relative w-full aspect-[16/9] bg-background/60 border-b border-border/60">
                <img
                  src={study.image}
                  alt={study.imageAlt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              <div className="p-5 flex flex-col h-full">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary mb-2">
                  {study.sector}
                </p>
                <h3 className="text-base md:text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {study.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-3 line-clamp-3">
                  {study.summary}
                </p>
                
                <div className="mt-auto">
                    <p className="text-[11px] font-medium text-foreground mb-4">
                    {study.resultHighlight}
                    </p>
                    
                    <Button
                        variant="outline"
                        size="sm"
                        className="w-full gap-2 border-primary/50 text-primary hover:bg-primary hover:text-white transition-all duration-300"
                        onClick={(e) => {
                            e.preventDefault();
                            handleDownloadPDF(study.pdfUrl, study.title);
                        }}
                    >
                        <Download className="w-4 h-4" />
                        Baixar Estudo
                    </Button>
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