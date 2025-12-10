import { Shield, Database, LineChart, Users, Zap, Globe, Check } from "lucide-react";

const differentiators = [
  {
    icon: Database,
    title: "DATA SCIENCE - COMPILAÇÃO DE IDS",
    description: "Nossa tecnologia permite capturar o Device IDs dos aparelhos celulares, formando uma base proprietária First Party) que e tratada e estruturada com técnicas de Data Quality, gerando assim uma inteligência que tem auxiliado otimizações e assertividade das campanhas. Tudo em conformidade ao LGPD. Os IDs específicos de cada campanha pode ser compartilhada com o cliente, podendo ser trabalhada em campanhas de Meta, Tik Tok e Linkedin.",
    topics: [
    ]
  },
  {
    icon: LineChart,
    title: "DASHBOARD AVANÇADO",
    description: "Sua Campanha em tempo Real. Transparência completa de dados de entrega. Possibilitando tomadas de decisão imediata para uma campanha de sucesso. Transparência Completa:",
    topics: [
      "Acesso a dados de investimento",
      "CPM",
      "CPC",
      "CPVA"
    ]
  },
  {
    icon: Shield,
    title: "VISÃO MACRO E REGIONAL",
    description: "Confiança e transparência na entrega de dados possibilitando acesso a todos os usuários que necessitarem acompanhar os indicadores.",
    topics: [
      "Dados macro da campanha no período selecionado.",
      "Visão com dados de entrega dia por dia com possibilidade de download para excel.",
      "Detalhamento de entrega loja a loja.",
      "Detalhamento de entrega aberta para análise de desempenho.",
      "Análise de cada criativo para otimização."
    ]
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
          
          <p className="text-lg text-muted-foreground mx-auto">
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

                {/* --- AQUI ESTA A NOVA LISTA DE TÓPICOS --- */}
                {/* mt-auto empurra a lista para baixo se os cards tiverem alturas diferentes */}
                <ul className="mt-auto space-y-2 pt-4">
                  {item.topics.map((topic, i) => (
                    <li key={i} className="flex items-start gap-2">
                      {/* Ícone de Check pequeno e alinhado */}
                      <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span className="text-xs font-medium text-muted-foreground/80 group-hover:text-foreground transition-colors">
                        {topic}
                      </span>
                    </li>
                  ))}
                </ul>

                
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Differentiators;
