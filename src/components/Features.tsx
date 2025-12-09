import { MapPinned, ScanFace, Store, Layers } from "lucide-react";

const features = [
  {
    icon: MapPinned,
    title: "Precision Geo Lift IA",
    description: "Inteligência que analisa Geofences baseado em mais de 400 fontes confiáveis. Reunindo dados demográficos, socioeconômicos e perfil de consumo, com isso realizamos um planejamento mais assertivo, com o objetivo de impactar o publico em áreas corretas e sem dispersão.",
    color: "primary",
  },
  {
    icon: ScanFace,
    title: "Maximize User Awareness",
    description: "Tecnologia de análise automática de publico saturado por anúncio, com menos propensão ao clique favorecendo o aumento de CTR, com isso garantimos um CTR mínimo de 1%, o que é um número aproximadamente 3X maior que a média do mercado.",
    color: "secondary",
  },
  {
    icon: Store,
    title: "Drive to Store Footfall",
    description: "Conecte até 50.000 pontos simultaneamente e análise performance em tempo real, publico observado, visitas atribuídas nas áreas de conversão das lojas, tempo impacto X visita, tempo medio de permanência, criativos.",
    color: "primary",
  },
  {
    icon: Layers,
    title: "Formatos Diferenciados",
    description: "Além de todos os formatos tradicionais (IABs, Vídeo, Áudio, Native e Push Notification, Social Prog), contamos com mais de 60 tipos diferentes de Rich Media, já pré-formatados e integrados em nossa plataforma.",
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
        
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 ">
          Multiplataforma Programática <span className="text-gradient">Omnichannel</span>
        </h2>
        
        <p className="text-lg text-muted-foreground mb-16">
          Alcance e impacto acima da média em toda jornada do funil, reunindo a precisão de nossa tecnologia avançada e uma compra programática em 100% do inventário disponível no mundo. Desta forma, campanhas com objetivos awareness, consideration, retail e Brand Lift trazem sempre resultados incomparáveis.
        </p>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          
        {features.map((feature, index) => (
  <div
    key={feature.title}
    // 1. flex-col garante que o "Cabeçalho" fique em cima e a "Descrição" em baixo
    className="group card-gradient rounded-xl p-6 border-2 border-dashed border-white/20 hover-glow flex flex-col"
    style={{ animationDelay: `${index * 0.1}s` }}
  >
    
    {/* --- BLOCO DO CABEÇALHO (Ícone + Título) --- */}
    {/* items-center: Alinha o Título exatamente no meio vertical do Ícone */}
    <div className="flex items-center gap-4 mb-4">
      
      {/* Ícone */}
      <div className={`shrink-0 inline-flex items-center justify-center w-16 h-16 rounded-lg transition-colors ${
        feature.color === 'primary' 
          ? 'bg-primary/20 text-primary group-hover:bg-primary/30' 
          : 'bg-secondary/20 text-secondary group-hover:bg-secondary/30'
      }`}>
        <feature.icon className="w-[60%] h-[60%]" />
      </div>

      {/* Título */}
      <h3 className="font-display text-lg font-bold text-foreground leading-tight">
        {feature.title}
      </h3>
    </div>

    {/* --- DESCRIÇÃO --- */}
    {/* Fica fora do flex acima, ocupando a largura total abaixo */}
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
