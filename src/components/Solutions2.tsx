import { MapPin, Tv, PanelTop, BarChart3, Store, Layers } from "lucide-react";
import mobileHand from "@/assets/mobile-hand.jpg";

const services = [
  {
    icon: Tv,
    title: "CTV + HHS (HOUSEHOLD SYNC)",
    subtitle: "ONDE A TV TERMINA, O IMPACTO CONTINUA",
    description: "Sincronização CTV-Mobile. Entrega de anúncios nos celulares dos expectadores que estão assistindo na tela grande, aumentando sensivelmente o engajamento da campanha e podendo dar continuidade a jornada Omnichannel. Acesso a 100% do inventario, e todos publishers (streaming) disponíveis no Brasil e no mundo, alem de nossa curadoria. ",
    stats: ["Segmentações Avançadas", "Audiência", "Contextual", "Geofences", "Deals"],
  },
  {
    icon: PanelTop,
    title: "DOOH URBAN SYNC - LOOKAHEAD",
    subtitle: "DO PAINEL DE DOOH À TELA DO CELULAR",
    description: "Análise de dados geográficos estáticos + sinais de móbile em tempo real. Identificação de dispositivos moveis no campo visual dos painéis. Exibição contextualizada baseada em audiência presente. Compilação de dados moveis para retargeting programático ou em mídias sociais, e até para mensuração de visitas ao PDV.",
    stats: ["+ de 16k pontos", "+ de 30k telas", "Sincronização Mobile", "Ativação DOOH", " First Party Data"],
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
            Distribuição
          </span>
        </div>

        <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 ">
          Tecnologia de ponta para <span className="text-gradient">resultados excepcionais</span>.
        </h2>

        <p className="text-lg text-muted-foreground mb-16">
          Nossas soluções combinam inteligência artificial, dados geográficos e compra programática para maximizar o ROI das suas campanhas.
        </p>

{/* Services Grid */}
<div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
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
