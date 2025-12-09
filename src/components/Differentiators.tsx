import { Shield, Database, LineChart, Users, Zap, Globe } from "lucide-react";

const differentiators = [
  {
    icon: Database,
    title: "FIRST PARTY DATA",
    description: "Captura de Device IDs formando base proprietária tratada com técnicas de Data Quality.",
  },
  {
    icon: Shield,
    title: "LGPD COMPLIANT",
    description: "100% em conformidade com a Lei Geral de Proteção de Dados.",
  },
  {
    icon: LineChart,
    title: "DASHBOARD AVANÇADO",
    description: "Transparência completa de dados em tempo real com mapas de calor.",
  },
  {
    icon: Zap,
    title: "OTIMIZAÇÃO IA",
    description: "Análise automática para decisões imediatas e campanhas de sucesso.",
  },
  {
    icon: Users,
    title: "MATCH MULTIPLATAFORMA",
    description: "IDs compartilhados para campanhas em Meta, TikTok e LinkedIn.",
  },
  {
    icon: Globe,
    title: "COBERTURA GLOBAL",
    description: "Acesso a 100% do inventário disponível em todo o mundo.",
  },
];

const Differentiators = () => {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,hsl(350_78%_52%/0.05)_0%,transparent_60%)]" />

      <div className="container px-6 relative z-10">
        {/* Central content */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-8 h-1 bg-primary rounded-full" />
            <span className="text-primary font-semibold tracking-wide uppercase text-sm">
              Diferenciais
            </span>
            <div className="w-8 h-1 bg-primary rounded-full" />
          </div>
          
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">PRECISÃO</span>
            <span className="text-foreground mx-4">·</span>
            <span className="text-gradient">ASSERTIVIDADE</span>
            <span className="text-foreground mx-4">·</span>
            <span className="text-gradient">ROI</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Esta audiência é sua. Nossa tecnologia entrega inteligência que tem auxiliado otimizações e assertividade das campanhas.
          </p>
        </div>

        {/* Differentiators Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {differentiators.map((item, index) => (
            <div
              key={item.title}
              className="flex gap-4 p-6 rounded-xl border-2 border-dashed border-white/20 bg-card/30 hover:bg-card/50 transition-colors group"
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="font-display font-bold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Differentiators;
