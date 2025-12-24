import { useMemo } from "react";
import { Rocket, Target, TrendingUp, CheckCircle2 } from "lucide-react";

// Placeholder para a imagem 3D do Foguete
import rocketImage from "@/assets/rocket.png";

const highlights = [
  { label: "+ PRECISÃO", icon: Target, delay: "100ms" },
  { label: "+ ASSERTIVIDADE", icon: CheckCircle2, delay: "300ms" },
  { label: "+ ROI", icon: TrendingUp, delay: "500ms" }
];

const ResultadosROI = () => {
  const stars = useMemo(() => {
    return Array.from({ length: 25 }).map((_, i) => ({
      id: i,
      top: `${Math.random() * -100}%`, 
      left: `${Math.random() * 100 + 50}%`,
      size: Math.random() > 0.5 ? 'w-[2px] h-[2px]' : 'w-[1px] h-[1px]',
      duration: `${Math.random() * 5 + 5}s`,
      delay: `${Math.random() * -10}s`
    }));
  }, []);

  return (
    <section className="py-12 md:py-24 relative overflow-hidden bg-background flex items-center min-h-[60vh] md:min-h-[80vh]">
      
      {/* 1. Gradiente de fundo */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.1)_0%,transparent_70%)] z-0" />
      
      <style>{`
        /* Keyframes */
        @keyframes rocket-float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        @keyframes rocket-sway {
          0%, 100% { transform: rotate(-5deg); }
          50% { transform: rotate(5deg); }
        }

        @keyframes shooting-star-diagonal {
          0% { transform: translate(0, 0); opacity: 0; }
          10% { opacity: 0.8; }
          90% { opacity: 0.8; }
          100% { transform: translate(-200vw, 200vh); opacity: 0; }
        }
      `}</style>

      {/* 2. Camada das Estrelas (OTIMIZAÇÃO: 'hidden md:block' esconde APENAS as estrelas no mobile) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none hidden md:block">
        {stars.map((star) => (
          <div
            key={star.id}
            className={`absolute rounded-full bg-white ${star.size} blur-[0.5px]`}
            style={{
              top: star.top,
              left: star.left,
              boxShadow: '0 0 4px 1px rgba(255, 255, 255, 0.3)',
              animation: `shooting-star-diagonal ${star.duration} linear infinite ${star.delay}`
            }}
          />
        ))}
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-6 md:gap-12 items-center">
          
          {/* LADO ESQUERDO: Imagem Foguete */}
          <div className="relative flex justify-center animate-slide-right order-1">
            <div className="absolute inset-0 bg-primary/30 blur-[100px] rounded-full opacity-50 z-10" />
            
            {/* Animação do Foguete (Flutuar): Ativa em TODOS os dispositivos novamente */}
            <div 
              className="relative z-20"
              style={{ animation: 'rocket-float 3s ease-in-out infinite' }}
            >
              {/* Animação do Foguete (Balançar): Ativa em TODOS os dispositivos novamente */}
              <img 
                src={rocketImage} 
                alt="Foguete representando crescimento e ROI" 
                className="w-full max-w-[300px] md:max-w-[400px] lg:max-w-[500px] h-auto object-contain drop-shadow-[0_0_50px_rgba(var(--primary),0.5)]"
                style={{ animation: 'rocket-sway 5s ease-in-out infinite' }}
              />
            </div>
          </div>

          {/* LADO DIREITO: Texto */}
          <div className="flex flex-col items-center md:items-start animate-slide-left order-2 z-20">
            <div className="flex flex-col w-fit md:w-full">
              <h2 className="font-display text-2xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-left">
                One Station <span className="text-gradient">Media</span> 
              </h2>
              <div className="flex flex-col gap-4 md:gap-6 w-full">
                {highlights.map((item, index) => (
                  <div 
                    key={index}
                    className="flex items-center justify-start gap-3 md:gap-6 group w-full"
                    style={{ animationDelay: item.delay }}
                  >
                    <div className="p-2 md:p-4 rounded-xl md:rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 group-hover:border-primary/50 group-hover:bg-primary/20 transition-all duration-500 shrink-0">
                      <item.icon className="w-5 h-5 md:w-8 md:h-8 text-white group-hover:text-primary transition-colors" />
                    </div>
                    <span className="font-display text-2xl md:text-4xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60 group-hover:from-primary group-hover:to-secondary transition-all duration-500 cursor-default break-words">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ResultadosROI;