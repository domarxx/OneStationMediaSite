import { useMemo, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft, Search } from "lucide-react";

// Reaproveitando a imagem do foguete (certifique-se que o caminho está correto)
import rocketImage from "@/assets/rocket.png";

const NotFound = () => {
  const location = useLocation();

  // Log do erro (opcional, bom para analytics)
  useEffect(() => {
    console.error("404 Error: Rota não encontrada:", location.pathname);
  }, [location.pathname]);

  // --- Lógica das Estrelas (Mesma do ROI) ---
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
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />

      {/* Main ocupa o espaço restante para empurrar o footer para baixo */}
      <main className="flex-1 flex items-center relative overflow-hidden py-12 md:py-24">
        
        {/* 1. Gradiente de fundo */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.1)_0%,transparent_70%)] z-0" />
        
        {/* Estilos das Animações */}
        <style>{`
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

        {/* 2. Camada das Estrelas (Hidden no mobile para performance, igual ao original) */}
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
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* LADO ESQUERDO: Foguete (Mantido a esquerda como no original) */}
            <div className="relative flex justify-center animate-slide-right order-1">
              <div className="absolute inset-0 bg-primary/30 blur-[100px] rounded-full opacity-50 z-10" />
              
              <div 
                className="relative z-20"
                style={{ animation: 'rocket-float 4s ease-in-out infinite' }}
              >
                <img 
                  src={rocketImage} 
                  alt="Foguete perdido no espaço" 
                  // Adicionei um grayscale leve para dar um tom de "inativo/erro"
                  className="w-full max-w-[280px] md:max-w-[400px] lg:max-w-[500px] h-auto object-contain drop-shadow-[0_0_50px_rgba(var(--primary),0.4)] opacity-90 grayscale-[0.2]"
                  style={{ animation: 'rocket-sway 6s ease-in-out infinite' }}
                />
              </div>
            </div>

            {/* LADO DIREITO: Texto de Erro */}
            <div className="flex flex-col items-center md:items-start animate-slide-left order-2 text-center md:text-left">
              <div className="space-y-6">
                
                {/* O Grande 404 */}
                <h1 className="font-display text-8xl md:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-white via-primary/50 to-transparent leading-none select-none">
                  404
                </h1>

                <div>
                    <h2 className="font-display text-2xl md:text-4xl font-bold text-foreground mb-3">
                    Houston, temos um problema!
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-md mx-auto md:mx-0 leading-relaxed">
                    Parece que a página que você procura se perdeu. O link pode estar quebrado ou ter sido movido.
                    </p>
                </div>

                {/* Botões de Ação */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
                  <Button asChild size="lg" className="gap-2 shadow-lg shadow-primary/20">
                    <Link to="/">
                      <Home className="w-4 h-4" /> 
                      Voltar para a Home
                    </Link>
                  </Button>
                  
                  <Button asChild variant="outline" size="lg" className="gap-2">
                    <Link to="/estudos">
                      <Search className="w-4 h-4" />
                      Explorar Estudos
                    </Link>
                  </Button>
                </div>

              </div>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NotFound;