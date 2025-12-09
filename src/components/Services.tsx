import { MapPin, Tv, PanelTop, BarChart3, Store, Layers } from "lucide-react";
import mobileHand from "@/assets/mobile-hand.jpg";

const services = [
  {
    icon: Tv,
    title: "CTV + HHS",
    subtitle: "ONDE A TV TERMINA, O IMPACTO CONTINUA",
    description: "Sincronização CTV-Mobile para entrega de anúncios nos celulares dos espectadores da tela grande, aumentando o engajamento.",
    stats: ["Smart TV", "Globoplay", "Netflix"],
  },
  {
    icon: PanelTop,
    title: "DOOH URBAN SYNC",
    subtitle: "DO PAINEL DE DOOH À TELA DO CELULAR",
    description: "Mais de 16.000 pontos e 30.000 telas com sincronização mobile e ativação contextualizada baseada em audiência presente.",
    stats: ["16k Pontos", "30k Telas", "First Party"],
  },
  {
    icon: MapPin,
    title: "GEO LIFT IA",
    subtitle: "O PODER DA MÍDIA MÓVEL",
    description: "Inteligência que analisa Geofences baseado em mais de 400 fontes confiáveis. Planejamento assertivo para impactar o público em áreas corretas sem dispersão.",
    stats: ["13k Audiência", "122k População", "19k Fluxo"],
  },
  {
    icon: Store,
    title: "DRIVE TO STORE",
    subtitle: "PDV COM O PÚBLICO CERTO",
    description: "Conecte até 50.000 pontos simultaneamente e analise performance em tempo real: visitas atribuídas, tempo de permanência e criativos.",
    stats: ["50k Pontos", "Real-time", "Conversão"],
  },
  {
    icon: Layers,
    title: "RICH MEDIA",
    subtitle: "FORMATOS DIFERENCIADOS",
    description: "Mais de 60 tipos de Rich Media pré-formatados e integrados: In Feed, Fullscreen, Native, Push Notification e Social to Prog.",
    stats: ["+60 Formatos", "In Feed", "Fullscreen"],
  },
];

const Services = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background image */}
      <div
  className="absolute right-0 top-0 bottom-0 w-1/2 lg:w-2/5 hidden lg:block z-0 [mask-image:linear-gradient(to_left,black,transparent)]"
  style={{
    backgroundImage: `url(${mobileHand})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center left',
  }}
>
        <div className="absolute inset-0 bg-gradient-to-l from-transparent to-background" />
      </div>

      <div className="container px-6 relative z-10">
        {/* Header */}
        <div className="flex items-center gap-4 mb-4">
          <div className="accent-bar h-12" />
          <span className="text-primary font-semibold tracking-wide uppercase">
            Soluções
          </span>
        </div>

        <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 ">
          Tecnologia de ponta para <span className="text-gradient">resultados excepcionais</span>
        </h2>

        <p className="text-lg text-muted-foreground mb-16">
          Nossas soluções combinam inteligência artificial, dados geográficos e compra programática para maximizar o ROI das suas campanhas.
        </p>

{/* Services Grid */}
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
  {services.map((service, index) => (
    <div
      key={service.title}
      className="
        group relative card-gradient rounded-xl p-6 
        border-2 border-dashed border-white/20 
        hover-glow overflow-hidden
        flex flex-col h-full
      "
    >
      {/* Corner accent (Mantido) */}
      <div className="absolute -top-12 -right-12 w-32 h-32 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      
      {/* Wrapper de Conteúdo (z-10 para ficar acima do accent) */}
      <div className="relative z-10 flex flex-col h-full">
        
        {/* --- CABEÇALHO: ÍCONE + TEXTOS --- */}
        <div className="flex items-center gap-4 mb-4">
          
          {/* Ícone (Estilo Grande e Reforçado) */}
          <div className="
            shrink-0 inline-flex items-center justify-center 
            w-16 h-16 rounded-lg transition-colors
            bg-primary/20 text-primary group-hover:bg-primary/30
          ">
            <service.icon className="w-[60%] h-[60%]" />
          </div>

          {/* Coluna de Texto (Subtitle + Title) */}
          <div className="flex flex-col justify-center">
            {/* Título */}
            <h3 className="font-display text-xl font-bold text-foreground leading-tight">
              {service.title}
            </h3>
            {/* Subtitle (opcional, mantive pois estava no seu código) */}
            <span className="text-xs text-muted-foreground tracking-wider uppercase mb-1">
              {service.subtitle}
            </span>
          </div>

        </div>
        
        {/* --- DESCRIÇÃO --- */}
        {/* flex-1 empurra as stats para baixo */}
        <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">
          {service.description}
        </p>

        {/* --- STATS --- */}
        <div className="flex flex-wrap gap-2 mt-auto">
          {service.stats.map((stat) => (
            <span
              key={stat}
              className="text-xs px-3 py-1 rounded-full bg-muted/50 text-muted-foreground border border-border/50"
            >
              {stat}
            </span>
          ))}
        </div>

      </div>
    </div>
  ))}
</div>
      </div>
    </section>
  );
};

export default Services;
