import { useState, useEffect } from "react";

import { 
  Store, 
  Users, 
  MapPin, 
  Timer, 
  Clock, 
  Palette 
} from "lucide-react";

import dts1 from "@/assets/dts1.jpg";
import dts2 from "@/assets/dts2.jpg";

// Defina aqui suas imagens
const images = [
  dts1, // Imagem 0
  dts2 // Imagem 1
];

// Dados das métricas
const metrics = [
  { text: "Público observado", icon: Users, color: "primary" },
  { text: "Visitas atribuídas nas áreas de conversão", icon: MapPin, color: "secondary" },
  { text: "Tempo impacto X visita", icon: Timer, color: "primary" },
  { text: "Tempo médio de permanência", icon: Clock, color: "secondary" },
  { text: "Criativos", icon: Palette, color: "primary" }
];

const PdvPublicoCerto = () => {
  // Estado para controlar qual imagem está ativa (0 ou 1)
  const [currentImage, setCurrentImage] = useState(0);

  // Efeito para trocar a imagem automaticamente a cada 4 segundos
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev === 0 ? 1 : 0));
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-12 md:py-24 relative overflow-hidden bg-background">
      <div className="container px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-6 md:gap-12 items-center">
          
          {/* LADO ESQUERDO: Texto e Lista */}
          <div className="flex flex-col animate-slide-right">
            <div className="flex items-center gap-4 mb-4 md:mb-6">
              <div className="accent-bar h-12 w-1 bg-primary" />
              <div className="flex flex-col">
                <span className="text-primary font-semibold tracking-wide uppercase text-sm">
                  Drive to Store Footfall
                </span>
                <span className="text-muted-foreground text-xs uppercase tracking-widest">
                  Análise em Tempo Real
                </span>
              </div>
            </div>

            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 leading-tight">
              PDV com o <span className="text-gradient">Público Certo</span>
            </h2>

            <p className="text-base md:text-lg text-muted-foreground mb-6 md:mb-8 leading-relaxed">
              Conecte até 50.000 pontos simultaneamente e analise performance em tempo real:
            </p>

            <div className="flex flex-col gap-4 md:gap-5">
              {metrics.map((item, index) => (
                <div key={index} className="flex items-center gap-3 md:gap-4 group">
                  <div className={`shrink-0 p-2 rounded-full transition-colors ${
                    item.color === 'primary' 
                      ? 'bg-primary/10 text-primary group-hover:bg-primary/20' 
                      : 'bg-secondary/10 text-secondary group-hover:bg-secondary/20'
                  }`}>
                    <item.icon className="w-4 h-4 md:w-5 md:h-5" />
                  </div>
                  <span className="text-sm md:text-base text-muted-foreground group-hover:text-foreground transition-colors">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* LADO DIREITO: Bloco de Transição Animada */}
          <div className="relative flex items-center justify-center lg:justify-end animate-slide-left h-full min-h-[300px] md:min-h-[400px] lg:min-h-[500px] mt-8 lg:mt-0">
            
            {/* Glow de fundo */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-secondary/10 to-transparent blur-3xl opacity-60 rounded-full" />
            
            {/* Container Principal da Animação */}
            <div className="relative z-10 w-full h-[300px] md:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden border-2 border-dashed border-white/20 shadow-2xl bg-black/40 backdrop-blur-sm group">
              
              {/* Mapeia as imagens e controla a opacidade */}
              {images.map((src, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 w-full h-full transition-all duration-1000 ease-in-out ${
                    currentImage === index ? "opacity-100 scale-105" : "opacity-0 scale-100"
                  }`}
                >
                  <img 
                    src={src} 
                    alt={`Ambiente PDV ${index + 1}`} 
                    className="w-full h-full object-cover"
                  />
                  {/* Overlay escuro para garantir leitura do badge se a foto for clara */}
                  <div className="absolute inset-0 bg-black/20" />
                </div>
              ))}

              {/* Badge Flutuante (Fixo por cima da transição) */}
              <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6 flex items-center justify-between">
                
                {/* Info Box */}
                <div className="flex items-center gap-2 md:gap-3 px-3 py-2 md:px-4 md:py-3 rounded-lg bg-black/80 border border-white/10 backdrop-blur-md shadow-lg">
                  <Store className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                  <div className="flex flex-col">
                    <span className="text-[10px] md:text-xs font-bold text-white">Loja Conectada</span>
                    <span className="text-[8px] md:text-[10px] text-white/60">Monitoramento Ativo</span>
                  </div>
                </div>

                {/* Indicadores de Slide (Bolinhas) */}
                <div className="flex gap-2">
                  {images.map((_, idx) => (
                    <div 
                      key={idx}
                      className={`h-2 w-2 rounded-full transition-all duration-500 ${
                        currentImage === idx ? "bg-primary w-4 md:w-6" : "bg-white/30"
                      }`}
                    />
                  ))}
                </div>

              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default PdvPublicoCerto;