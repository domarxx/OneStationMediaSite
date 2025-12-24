import { ScanFace, TrendingUp } from "lucide-react";

// Placeholder para a imagem ilustrativa
import performanceImage from "@/assets/seta.png";

const metrics = [
  {
    label: "1% CTR Mínimo Garantido",
    value: "",
    description: "Garantia de performance",
    icon: ScanFace,
    color: "secondary"
  },
  {
    label: "3X Performance de Mercado",
    value: "",
    description: "Maior que a média",
    icon: TrendingUp,
    color: "primary"
  }
];

const MaximizeUserAwareness = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-background">
      <div className="container px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* LADO ESQUERDO: Texto e Métricas */}
          <div className="flex flex-col animate-slide-right">
            
            {/* Tag / Subtítulo */}
            <div className="flex items-center gap-4 mb-6">
              <div className="accent-bar h-12 w-1 bg-primary" />
              <div className="flex flex-col">
                <span className="text-primary font-semibold tracking-wide uppercase text-sm">
                  MUA - Maximize User Awareness
                </span>
                <span className="text-muted-foreground text-xs uppercase tracking-widest">
                  Tecnologia de Performance
                </span>
              </div>
            </div>

            {/* Título Principal */}
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 leading-tight">
              CTR Mínimo <br></br><span className="text-gradient">Garantido de 1%</span>
            </h2>

            {/* Texto Descritivo */}
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Tecnologia de análise automática de público saturado por anúncio, com menos propensão ao clique favorecendo o aumento de CTR.
            </p>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              Com isso garantimos um CTR mínimo de 1%, o que é um número aproximadamente 3X maior da média do mercado.
            </p>

            {/* Cards de Destaque - Layout Horizontal (Ícone Esq | Texto Dir) */}
            <div className="grid sm:grid-cols-2 gap-6">
              {metrics.map((metric, index) => (
                <div 
                  key={index}
                  className="group card-gradient rounded-xl p-5 border-2 border-dashed border-white/20 hover-glow flex items-center gap-5"
                >
                  
                  {/* LADO ESQUERDO DO CARD: Ícone */}
                  <div className={`shrink-0 inline-flex items-center justify-center w-16 h-16 rounded-lg transition-colors ${
                    metric.color === 'primary' 
                      ? 'bg-primary/20 text-primary group-hover:bg-primary/30' 
                      : 'bg-secondary/20 text-secondary group-hover:bg-secondary/30'
                  }`}>
                    <metric.icon className="w-8 h-8" />
                  </div>

                  {/* LADO DIREITO DO CARD: Texto (Valor + Label + Descrição) */}
                  <div className="flex flex-col">
                    {/* Valor Gigante */}
                    <h3 className="font-display text-3xl font-bold text-foreground leading-none mb-1">
                      {metric.value}
                    </h3>
                    
                    {/* Label */}
                    <p className="text-sm font-semibold text-foreground/90 uppercase tracking-wide">
                      {metric.label}
                    </p>
                    
                    {/* Descrição */}
                    <p className="text-xs text-muted-foreground mt-1">
                      {metric.description}
                    </p>
                  </div>

                </div>
              ))}
            </div>

          </div>

          {/* LADO DIREITO: Imagem "Solta" */}
          <div className="relative flex items-center justify-center lg:justify-end animate-slide-left">
            
            {/* Glow de fundo */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-secondary/10 to-transparent blur-3xl opacity-60 rounded-full" />
            
            {/* Imagem Limpa - Flutuando */}
            <img 
              src={performanceImage} 
              alt="Gráfico de Performance de CTR" 
              className="relative z-10 w-full h-auto max-w-[500px] object-contain animate-float"
              style={{ animationDuration: '3s' }} // Animação lenta de flutuar
            />
            
          </div>

        </div>
      </div>
    </section>
  );
};

export default MaximizeUserAwareness;