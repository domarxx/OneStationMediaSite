import { useState, useEffect } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";

// ... (Imports de imagem e função getPartnerNameFromUrl mantidos)
const logosImports = import.meta.glob('@/assets/partners/*.{png,jpg,jpeg,svg,webp}', { 
  eager: true, 
  query: '?url', 
  import: 'default' 
});
const logoUrls = Object.values(logosImports) as string[];
const getPartnerNameFromUrl = (url: string): string => {
  const fileName = url.split('/').pop()?.replace(/\.(png|jpg|jpeg|svg|webp)$/i, '') || '';
  return fileName.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ') || 'Partner';
};

const PartnersInventory = () => {
  const [showAll, setShowAll] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const initialLimit = isDesktop ? 15 : 6;
  const visibleLogos = showAll ? logoUrls : logoUrls.slice(0, initialLimit);
  const hasMoreLogos = logoUrls.length > initialLimit;

  return (
    <section id="partners" className="py-12 md:py-24 relative overflow-hidden bg-background">
      
      {/* Fundo Glow Azul */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--primary)/0.15)_0%,transparent_70%)] pointer-events-none" />

      <div className="container px-4 md:px-6 relative z-10">
        
        {/* CABEÇALHO */}
        <div className="flex flex-col items-start text-left animate-slide-up mb-8 md:mb-12">
          <div className="flex items-center gap-4 mb-4 md:mb-6">
            <div className="accent-bar h-12 w-1 bg-primary" />
            <div className="flex flex-col items-start">
              <span className="text-primary font-semibold tracking-wide uppercase text-sm">Partners</span>
              <span className="text-muted-foreground text-xs uppercase tracking-widest">Integrações Programáticas</span>
            </div>
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
            Alcance Global de <span className="text-gradient">Inventário</span>
          </h2>
          <p className="text-sm md:text-lg text-muted-foreground leading-relaxed">
            Integrações programáticas através de plataformas conectadas.
          </p>
        </div>

        {/* GRID DE LOGOS */}
        {visibleLogos.length > 0 ? (
          <div className="flex flex-col"> 
            
            {/* MÁGICA DO CSS MASK AQUI:
               1. Removi a div 'absolute' que fazia o degradê por cima.
               2. Adicionei a classe dinâmica '[mask-image:...]' no Grid.
               Isso faz os logos ficarem transparentes na base, revelando o fundo real do site.
            */}
            <div 
              className={`
                grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4 animate-slide-up transition-all duration-300
                ${!showAll && hasMoreLogos 
                  ? "[mask-image:linear-gradient(to_bottom,black_40%,transparent_100%)]" 
                  : ""
                }
              `}
            >
              {visibleLogos.map((url, index) => {
                const partnerName = getPartnerNameFromUrl(url);
                const isMediaSmart = url.toLowerCase().includes('mediasmart');

                return (
                  <div 
                    key={index}
                    className="group h-20 md:h-24 flex items-center justify-center p-3 md:p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-primary/20 transition-all duration-300"
                  >
                    <img 
                      src={url} 
                      alt={partnerName}
                      className={`
                        w-auto h-auto max-w-[70%] max-h-[60%] object-contain transition-all duration-500 group-hover:scale-110 group-hover:opacity-100 group-hover:filter-none
                        ${isMediaSmart 
                          ? "opacity-80 grayscale contrast-125 group-hover:grayscale-0" 
                          : "opacity-70 brightness-0 invert group-hover:brightness-100 group-hover:invert-0" 
                        }
                      `}
                    />
                  </div>
                );
              })}
            </div>

            {/* BOTÃO */}
            {hasMoreLogos && (
              <div className="flex justify-center mt-6 relative z-20">
                <Button 
                  variant="outline" 
                  onClick={() => setShowAll(!showAll)}
                  className="gap-2 group border-primary/20 hover:border-primary/50 hover:bg-primary/5 text-muted-foreground hover:text-primary transition-all"
                >
                  {showAll ? (
                    <>Isso menos <ChevronUp className="w-4 h-4" /></>
                  ) : (
                    <>Ver mais parceiros <ChevronDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" /></>
                  )}
                </Button>
              </div>
            )}
          </div>
        ) : (
          <div className="text-center p-6 md:p-8 border border-dashed border-white/10 rounded-xl text-muted-foreground">
            <p className="text-sm">Nenhum logo encontrado.</p>
          </div>
        )}

      </div>
    </section>
  );
};

export default PartnersInventory;