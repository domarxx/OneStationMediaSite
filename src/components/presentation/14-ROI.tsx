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
  // --- GERAÇÃO DAS ESTRELAS (PONTOS DE LUZ) ---
  // Usamos useMemo para gerar esses dados apenas uma vez, evitando recálculos
  const stars = useMemo(() => {
    return Array.from({ length: 25 }).map((_, i) => ({
      id: i,
      // Posição inicial: Fora da tela, no quadrante superior direito
      top: `${Math.random() * -100}%`, 
      left: `${Math.random() * 100 + 50}%`,
      // Tamanho: Varia ligeiramente para dar profundidade
      size: Math.random() > 0.5 ? 'w-[2px] h-[2px]' : 'w-[1px] h-[1px]',
      // Velocidade e atraso: Aleatórios para parecer natural
      duration: `${Math.random() * 5 + 5}s`, // Entre 5s e 10s (lento = distante)
      delay: `${Math.random() * -10}s` // Atraso negativo para já começarem em movimento
    }));
  }, []);

  return (
    <section className="py-12 md:py-24 relative overflow-hidden bg-background flex items-center min-h-[60vh] md:min-h-[80vh]">
      
      {/* --- BACKGROUND LAYERS --- */}
      
      {/* 1. Gradiente de fundo original */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.1)_0%,transparent_70%)] z-0" />
      
      {/* --- DEFINIÇÃO DE TODAS AS ANIMAÇÕES --- */}
      <style>{`
        /* Foguete: Flutuar (Cima / Baixo) */
        @keyframes rocket-float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        /* Foguete: Balançar (Rotação) */
        @keyframes rocket-sway {
          0%, 100% { transform: rotate(-5deg); }
          50% { transform: rotate(5deg); }
        }

        /* NOVO: Estrelas Viajantes (Diagonal Topo-Direita -> Baixo-Esquerda) */
        @keyframes shooting-star-diagonal {
          0% {
            transform: translate(0, 0);
            opacity: 0;
          }
          10% { opacity: 0.8; } /* Aparece suavemente */
          90% { opacity: 0.8; }
          100% {
            /* Move muito para a esquerda e para baixo */
            transform: translate(-200vw, 200vh); 
            opacity: 0; /* Desaparece no final */
          }
        }
      `}</style>

      {/* 2. Camada das Estrelas em Movimento (Z-0 para ficar atrás do conteúdo) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {stars.map((star) => (
          <div
            key={star.id}
            // Classe base da estrela (pequeno ponto branco com brilho)
            className={`absolute rounded-full bg-white ${star.size} blur-[0.5px]`}
            style={{
              top: star.top,
              left: star.left,
              boxShadow: '0 0 4px 1px rgba(255, 255, 255, 0.3)', // Brilho sutil
              // Aplica a animação diagonal com os tempos aleatórios de cada estrela
              animation: `shooting-star-diagonal ${star.duration} linear infinite ${star.delay}`
            }}
          />
        ))}
      </div>

      {/* --- CONTEÚDO PRINCIPAL (Z-10 para ficar na frente) --- */}
      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-6 md:gap-12 items-center">
          
          {/* LADO ESQUERDO: Imagem Foguete */}
          <div className="relative flex justify-center animate-slide-right order-1">
            {/* Glow forte atrás do foguete (Z-10 para ficar na frente das estrelas) */}
            <div className="absolute inset-0 bg-primary/30 blur-[100px] rounded-full opacity-50 z-10" />
            
            <div 
              className="relative z-20" // Z-20 para ficar na frente do próprio glow
              style={{ animation: 'rocket-float 3s ease-in-out infinite' }}
            >
              <img 
                src={rocketImage} 
                alt="Foguete representando crescimento e ROI" 
                className="w-full max-w-[300px] md:max-w-[400px] lg:max-w-[500px] h-auto object-contain drop-shadow-[0_0_50px_rgba(var(--primary),0.5)]"
                style={{ animation: 'rocket-sway 5s ease-in-out infinite' }}
              />
            </div>
          </div>

          {/* LADO DIREITO: Texto de Impacto */}
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