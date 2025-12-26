import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DataBeams from "@/components/DataBeams";

const QuemSomos = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-24 pb-16 md:pb-24">
        
        {/* --- HERO SECTION --- */}
        <section className="relative min-h-[50vh] flex items-center overflow-hidden mb-12 md:mb-16">
          {/* Camadas de Background */}
          <div className="absolute inset-0 z-0 grid-background opacity-40 bg-top [mask-image:linear-gradient(to_bottom,black_40%,transparent_95%)]"></div> 
          <DataBeams />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(350_78%_52%/0.08)_0%,transparent_60%)]" />

          <div className="container relative z-10 px-6">
            <div className="flex flex-col items-center text-center w-full">
              <div className="max-w-4xl mx-auto">
                <p className="text-sm font-semibold tracking-[0.25em] text-muted-foreground uppercase">
                  Sobre a Empresa
                </p>
                
                <h1 className="mt-3 text-3xl md:text-4xl lg:text-6xl font-display font-bold text-foreground text-balance">
                  One Station <span className="text-gradient">Media</span>
                </h1>
                
                {/* NOVA FRASE SUGERIDA (Foco Institucional) */}
                <p className="mt-6 text-muted-foreground text-sm md:text-lg text-pretty max-w-3xl mx-auto leading-relaxed">
                  A união definitiva entre inteligência de dados, tecnologia e criatividade para escalar resultados reais em toda a América Latina.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* --- BLOCO DE TEXTO "QUEM SOMOS" (Texto N1) --- */}
        <section className="container px-6 mb-24">
          <div className="max-w-3xl mx-auto text-center space-y-8 animate-slide-up">
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-pretty">
              A <strong className="text-foreground font-semibold">One Station Media</strong> é uma parceira estratégica de mídia nascida na era dos dados. Desde 2019, atuamos em toda a América Latina com uma missão clara: decodificar a complexidade do ecossistema digital para entregar performance previsível e escalável.
            </p>

            <p className="text-base md:text-lg text-muted-foreground leading-relaxed text-pretty">
              Não acreditamos em "achismos". Nossa metodologia combina inteligência de dados proprietária, inventário premium e formatos de alto impacto (Rich Media e CTV) para conectar marcas aos seus consumidores no momento exato de decisão. Somos a ponte entre a criatividade e o ROI.
            </p>
            
            {/* Elemento visual para fechar a seção sem os estudos */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 pt-12 border-t border-white/10 mt-12">
                <div>
                    <span className="block text-3xl md:text-4xl font-bold text-gradient">2019</span>
                    <span className="text-xs md:text-sm text-muted-foreground uppercase tracking-wider">Fundação</span>
                </div>
                <div>
                    <span className="block text-3xl md:text-4xl font-bold text-gradient">LATAM</span>
                    <span className="text-xs md:text-sm text-muted-foreground uppercase tracking-wider">Atuação Regional</span>
                </div>
                <div className="col-span-2 md:col-span-1">
                    <span className="block text-3xl md:text-4xl font-bold text-gradient">DATA</span>
                    <span className="text-xs md:text-sm text-muted-foreground uppercase tracking-wider">Driven DNA</span>
                </div>
            </div>

          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default QuemSomos;