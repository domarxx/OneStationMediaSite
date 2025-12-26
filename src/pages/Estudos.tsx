import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { studies } from "@/data/studies";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import DataBeams from "@/components/DataBeams";

const Estudos = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

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
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-24 pb-16 md:pb-24">
        {/* Hero meia página */}
        <section className="relative min-h-[50vh] flex items-center overflow-hidden mb-12 md:mb-16">
          
          {/* === CAMADAS DE BACKGROUND === */}
          <div className="absolute inset-0 z-0 grid-background opacity-40 bg-top [mask-image:linear-gradient(to_bottom,black_40%,transparent_95%)]"></div> 
          <DataBeams />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(350_78%_52%/0.08)_0%,transparent_60%)]" />
          {/* =========================== */}

          <div className="container relative z-10 px-6">
            
            {/* ALTERAÇÃO AQUI:
               1. Removi 'grid' e 'gap-10'.
               2. Adicionei 'flex flex-col items-center text-center'.
               Isso faz o conteúdo ficar centralizado na tela.
            */}
            <div className="flex flex-col items-center text-center w-full">
              
              {/* ALTERAÇÃO AQUI:
                 1. Aumentei de 'max-w-3xl' para 'max-w-4xl' (ou 'max-w-5xl' se quiser ainda mais largo).
                 2. 'mx-auto' garante que o bloco fique no meio.
              */}
              <div className="max-w-4xl mx-auto">
                <p className="text-sm font-semibold tracking-[0.25em] text-muted-foreground uppercase">
                  Estudos de Caso
                </p>
                
                <h1 className="mt-3 text-3xl md:text-4xl lg:text-6xl font-display font-bold text-foreground text-balance">
                  <span className="text-gradient">DECODIFICANDO:</span> Inteligência de mídia aplicada a resultados reais
                </h1>
                
                {/* 'mx-auto' aqui também para centralizar o parágrafo */}
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
                className="rounded-2xl border border-border/70 bg-muted/40 overflow-hidden hover:border-primary/70 hover:bg-background/80 transition-colors flex flex-col"
              >
                <div className="relative w-full aspect-[16/9] bg-background/60 border-b border-border/60">
                  <img
                    src={study.image}
                    alt={study.imageAlt}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>

                <div className="p-6 md:p-7 flex flex-col flex-1">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-2">
                    {study.sector}
                  </p>
                  <h2 className="text-lg md:text-xl font-semibold text-foreground mb-2">
                    {study.title}
                  </h2>
                  <p className="text-sm text-muted-foreground mb-4">
                    {study.summary}
                  </p>
                  
                  <div className="flex-1 mt-auto">
                    <p className="text-xs font-medium text-foreground/90 mb-6">
                      {study.resultHighlight}
                    </p>
                    
                    <Button 
                      variant="outline" 
                      size="lg" 
                      className="w-full gap-2 border-primary/50 text-primary hover:bg-primary hover:text-white"
                      onClick={() => handleDownloadPDF(study.pdfUrl, study.title)}
                    >
                      <Download className="w-4 h-4" />
                      Baixar Estudo
                    </Button>
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