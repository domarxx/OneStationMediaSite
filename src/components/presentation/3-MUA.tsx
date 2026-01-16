import { ScanFace, TrendingUp } from "lucide-react";
import { useFadeIn } from "@/hooks/use-gsap-animations";

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
  const ref = useFadeIn({ y: 30, delay: 0.2 });

  return (
    <section id="MUA" className="py-12 md:py-24 relative overflow-hidden bg-background">
      <div ref={ref} className="container px-4 md:px-6 invisible">
        <div className="grid lg:grid-cols-2 gap-6 md:gap-12 items-center">

          {/* LADO ESQUERDO: Texto e Métricas */}
          <div className="flex flex-col animate-slide-right">

            {/* Tag / Subtítulo */}
            <div className="flex items-center gap-4 mb-4 md:mb-6">
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
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 leading-tight">
              CTR Mínimo <br className="hidden md:block" /><span className="text-gradient">Garantido de 1%</span>
            </h2>

            {/* Texto Descritivo */}
            <p className="text-base md:text-lg text-muted-foreground mb-4 md:mb-6 leading-relaxed">
              Tecnologia de análise automática de público saturado por anúncio, com menos propensão ao clique favorecendo o aumento de CTR.
            </p>
            <p className="text-base md:text-lg text-muted-foreground mb-6 md:mb-10 leading-relaxed">
              Com isso garantimos um CTR mínimo de 1% de usuários qualificados, o que é um número 3X maior da média do mercado.
            </p>

            {/* Cards de Destaque */}
            <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
              {metrics.map((metric, index) => (
                <div
                  key={index}
                  className="group card-gradient rounded-xl p-4 md:p-5 border-2 border-dashed border-white/20 hover-glow flex items-center gap-3 md:gap-5"
                >

                  {/* LADO ESQUERDO DO CARD: Ícone */}
                  <div className={`shrink-0 inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-lg transition-colors ${metric.color === 'primary'
                      ? 'bg-primary/20 text-primary group-hover:bg-primary/30'
                      : 'bg-secondary/20 text-secondary group-hover:bg-secondary/30'
                    }`}>
                    <metric.icon className="w-6 h-6 md:w-8 md:h-8" />
                  </div>

                  {/* LADO DIREITO DO CARD: Texto */}
                  <div className="flex flex-col min-w-0">
                    {/* Valor Gigante */}
                    <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground leading-none mb-1">
                      {metric.value}
                    </h3>

                    {/* Label */}
                    <p className="text-xs md:text-sm font-semibold text-foreground/90 uppercase tracking-wide break-words">
                      {metric.label}
                    </p>

                    {/* Descrição */}
                    <p className="text-[10px] md:text-xs text-muted-foreground mt-1">
                      {metric.description}
                    </p>
                  </div>

                </div>
              ))}
            </div>

          </div>

          {/* LADO DIREITO: Imagem */}
          <div className="relative flex items-center justify-center lg:justify-end animate-slide-left mt-8 lg:mt-0">

            {/* Glow de fundo */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-secondary/10 to-transparent blur-3xl opacity-60 rounded-full" />

            {/* Imagem Limpa - Flutuando */}
            <img
              src={performanceImage}
              alt="Gráfico de Performance de CTR"
              className="relative z-10 w-full h-auto max-w-[300px] md:max-w-[400px] lg:max-w-[500px] object-contain animate-float"
              style={{ animationDuration: '3s' }}
            />

          </div>

        </div>
      </div>
    </section>
  );
};

export default MaximizeUserAwareness;