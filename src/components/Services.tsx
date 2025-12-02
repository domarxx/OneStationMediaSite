import { MapPin, Tv, PanelTop, BarChart3, Store, Layers } from "lucide-react";
import mobileHand from "@/assets/mobile-hand.jpg";

const services = [
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
    icon: BarChart3,
    title: "MUA - MAXIMIZE USER AWARENESS",
    subtitle: "CTR MÍNIMO GARANTIDO DE 1%",
    description: "Tecnologia de análise automática de público saturado por anúncio, favorecendo o aumento de CTR - aproximadamente 3x maior da média do mercado.",
    stats: ["1% CTR", "3x Média", "Otimizado"],
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
        className="absolute right-0 top-1/4 w-1/3 h-96 rounded-l-3xl overflow-hidden opacity-30 hidden lg:block"
        style={{
          backgroundImage: `url(${mobileHand})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
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

        <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 max-w-3xl">
          Tecnologia de ponta para <span className="text-gradient">resultados excepcionais</span>
        </h2>

        <p className="text-lg text-muted-foreground max-w-2xl mb-16">
          Nossas soluções combinam inteligência artificial, dados geográficos e compra programática para maximizar o ROI das suas campanhas.
        </p>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative card-gradient rounded-xl p-6 border border-border/50 hover-glow overflow-hidden"
            >
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-primary/10 to-transparent" />
              
              <div className="relative">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/20 text-primary mb-4 group-hover:bg-primary/30 transition-colors">
                  <service.icon className="w-6 h-6" />
                </div>

                <span className="text-xs font-semibold text-primary tracking-wider uppercase">
                  {service.subtitle}
                </span>
                
                <h3 className="font-display text-xl font-bold mt-1 mb-3 text-foreground">
                  {service.title}
                </h3>
                
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {service.description}
                </p>

                {/* Stats */}
                <div className="flex flex-wrap gap-2">
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
