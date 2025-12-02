import { Monitor, Smartphone, Radio, Target } from "lucide-react";

const features = [
  {
    icon: Monitor,
    title: "MULTIPLATAFORMA",
    description: "Acesso a 100% do inventário disponível no mundo através de compra programática avançada.",
    color: "primary",
  },
  {
    icon: Radio,
    title: "PROGRAMÁTICA",
    description: "Tecnologia avançada para otimização automática e entrega precisa de campanhas.",
    color: "secondary",
  },
  {
    icon: Smartphone,
    title: "OMNICHANNEL",
    description: "Integração completa entre mobile, CTV, DOOH e PDV em uma única estratégia.",
    color: "primary",
  },
  {
    icon: Target,
    title: "ALCANCE E IMPACTO",
    description: "Resultados incomparáveis em awareness, consideration, retail e Brand Lift.",
    color: "secondary",
  },
];

const Features = () => {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(280_70%_50%/0.05)_0%,transparent_60%)]" />
      
      <div className="container px-6 relative z-10">
        {/* Header */}
        <div className="flex items-center gap-4 mb-4">
          <div className="accent-bar h-12" />
          <span className="text-primary font-semibold tracking-wide uppercase">
            Alcance e Impacto
          </span>
        </div>
        
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 max-w-3xl">
          Alcance e impacto <span className="text-gradient">acima da média</span> em toda jornada do funil
        </h2>
        
        <p className="text-lg text-muted-foreground max-w-2xl mb-16">
          Reunindo a precisão de nossa tecnologia avançada e uma compra programática em 100% do inventário disponível no mundo.
        </p>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group card-gradient rounded-xl p-6 border border-border/50 hover-glow"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`inline-flex items-center justify-center w-14 h-14 rounded-lg mb-4 transition-colors ${
                feature.color === 'primary' 
                  ? 'bg-primary/20 text-primary group-hover:bg-primary/30' 
                  : 'bg-secondary/20 text-secondary group-hover:bg-secondary/30'
              }`}>
                <feature.icon className="w-7 h-7" />
              </div>
              
              <h3 className="font-display text-lg font-bold mb-2 text-foreground">
                {feature.title}
              </h3>
              
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
