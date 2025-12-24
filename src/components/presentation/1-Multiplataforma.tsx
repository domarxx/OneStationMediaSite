import { Target, Globe2, CheckCircle2 } from "lucide-react";
// Usando o placeholder conforme solicitado
import mobileImage from "@/assets/mobile-hand.jpg";

const benefits = [    
    { label: "100% do Inventário Global", icon: Globe2 },
    { label: "Precisão Avançada", icon: Target }
  ];

const MultiplataformaProgramaticaOmnichannel = () => {
  return (
    <section className="py-12 md:py-24 relative overflow-hidden bg-background">
      <div className="container px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-6 md:gap-12 items-center">
          
          {/* LADO ESQUERDO: Texto e Conteúdo */}
          <div className="flex flex-col justify-center animate-slide-right">
            
            {/* Header Tag - "ALCANCE E IMPACTO" do PDF */}
            <div className="flex items-center gap-4 mb-4 md:mb-6">
              <div className="accent-bar h-12 w-1 bg-primary" />
              <span className="text-primary font-semibold tracking-wide uppercase text-sm">
                Alcance e Impacto
              </span>
            </div>

            {/* Título Principal */}
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 leading-tight">
              Multiplataforma Programática <span className="text-gradient">Omnichannel</span>
            </h2>

            {/* Parágrafo 1 */}
            <p className="text-base md:text-lg text-muted-foreground mb-4 md:mb-6 leading-relaxed">
              Alcance e impacto acima da média em toda jornada do funil, reunindo a precisão de nossa tecnologia avançada e uma compra programática em 100% do inventário disponível no mundo.
            </p>

            {/* Parágrafo 2 */}
            <p className="text-base md:text-lg text-muted-foreground mb-6 md:mb-8 leading-relaxed">
              Desta forma, campanhas com objetivos awareness, consideration, retail e Brand Lift trazem sempre resultados incomparáveis.
            </p>

            {/* Lista de Benefícios (Checkmarks) */}
            <div className="flex flex-col sm:flex-row gap-4 md:gap-8 mt-2">
              {benefits.map((item, index) => (
                <div key={index} className="flex items-center gap-3 group">
                  <div className="p-1 rounded-full bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-4 h-4 md:w-5 md:h-5" />
                  </div>
                  <span className="text-xs md:text-sm font-medium text-foreground/80">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>

          </div>

          {/* LADO DIREITO: Imagem */}
          <div className="relative flex items-center justify-center lg:justify-end animate-slide-left mt-8 lg:mt-0">
            
            {/* Glow de fundo */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-secondary/10 to-transparent blur-3xl opacity-60 rounded-full" />
            
            {/* Imagem */}
            <img 
              src={mobileImage} 
              alt="Multiplataforma Programática em dispositivo móvel" 
              className="relative z-10 w-full h-auto object-cover rounded-2xl drop-shadow-2xl border border-white/10"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default MultiplataformaProgramaticaOmnichannel;