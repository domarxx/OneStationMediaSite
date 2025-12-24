import { Rocket, Target, TrendingUp, CheckCircle2 } from "lucide-react";

// Placeholder para a imagem 3D do Foguete
import rocketImage from "@/assets/rocket.png";

const highlights = [
  { label: "+ PRECISÃO", icon: Target, delay: "100ms" },
  { label: "+ ASSERTIVIDADE", icon: CheckCircle2, delay: "300ms" },
  { label: "+ ROI", icon: TrendingUp, delay: "500ms" }
];

const ResultadosROI = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-background flex items-center min-h-[80vh]">
      
      {/* Background Decorativo (Estrelas/Espaço) */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.1)_0%,transparent_70%)]" />
      
      <div className="container px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* LADO ESQUERDO: Imagem do Foguete (Flutuando) */}
          <div className="relative flex justify-center animate-slide-right">
            
            {/* Glow forte atrás do foguete */}
            <div className="absolute inset-0 bg-primary/30 blur-[100px] rounded-full opacity-50" />
            
            {/* Imagem */}
            <img 
              src={rocketImage} 
              alt="Foguete representando crescimento e ROI" 
              className="relative z-10 w-full max-w-[500px] h-auto object-contain drop-shadow-[0_0_50px_rgba(var(--primary),0.5)] animate-float"
              style={{ animationDuration: '3s' }} // Animação lenta de flutuar
            />
          </div>

          {/* LADO DIREITO: Texto de Impacto */}
          <div className="flex flex-col items-start animate-slide-left">
            
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            One Station <span className="text-gradient">Media</span> 
            </h2>

            <div className="flex flex-col gap-6">
              {highlights.map((item, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-6 group"
                  style={{ animationDelay: item.delay }}
                >
                  {/* Ícone Grande */}
                  <div className="p-4 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 group-hover:border-primary/50 group-hover:bg-primary/20 transition-all duration-500">
                    <item.icon className="w-8 h-8 text-white group-hover:text-primary transition-colors" />
                  </div>
                  
                  {/* Texto Gigante com Gradiente */}
                  <span className="font-display text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60 group-hover:from-primary group-hover:to-secondary transition-all duration-500 cursor-default">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default ResultadosROI;