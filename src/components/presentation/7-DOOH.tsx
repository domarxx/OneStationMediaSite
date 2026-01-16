import {
  MonitorPlay,
  Smartphone,
  Signal,
  Database,
  Map
} from "lucide-react";
import { useFadeIn } from "@/hooks/use-gsap-animations";

// Placeholder para a imagem de DOOH (Cidade com painéis digitais)
import doohImage from "@/assets/dooh.jpeg";

// Estatísticas de Alcance
const stats = [
  { label: "+ Inteligência", value: "pDOOH" },
  { label: "Pontos", value: "+16.000" },
  { label: "Telas", value: "+30.000" }
];

// Features do DOOH Urban Sync
const features = [
  {
    title: "Planejamento com precisão científica",
    description: "Análise de dados geográficos estáticos + sinais de móbile em tempo real.",
    icon: Map,
    color: "primary"
  },
  {
    title: "Sincronização Mobile",
    description: "Identificação de dispositivos móveis no campo visual dos painéis.",
    icon: Smartphone,
    color: "secondary"
  },
  {
    title: "Ativação DOOH",
    description: "Exibição contextualizada baseada em audiência presente.",
    icon: MonitorPlay,
    color: "primary"
  },
  {
    title: "First Party Data",
    description: "Compilação de dados móveis para retargeting programático ou em mídias sociais, e até para mensuração de visitas ao PDV.",
    icon: Database,
    color: "secondary"
  }
];

const DoohUrbanSync = () => {
  const ref = useFadeIn({ y: 30, delay: 0.2 });

  return (
    <section id="DOOH" className="py-12 md:py-24 relative overflow-hidden bg-background">
      <div ref={ref} className="container px-4 md:px-6 invisible">
        <div className="grid lg:grid-cols-2 gap-6 md:gap-12 items-center">

          {/* LADO ESQUERDO: Texto e Features */}
          <div className="flex flex-col animate-slide-right">

            {/* Tag / Subtítulo */}
            <div className="flex items-center gap-4 mb-4 md:mb-6">
              <div className="accent-bar h-12 w-1 bg-primary" />
              <div className="flex flex-col">
                <span className="text-primary font-semibold tracking-wide uppercase text-sm">
                  DOOH Urban Sync
                </span>
                <span className="text-muted-foreground text-xs uppercase tracking-widest">
                  Lookahead
                </span>
              </div>
            </div>

            {/* Título Principal */}
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 leading-tight">
              Do Painel de DOOH <br className="hidden md:block" /> à <span className="text-gradient">Tela do Celular</span>
            </h2>

            {/* Bloco de Estatísticas */}
            <div className="flex gap-4 md:gap-8 mb-2 pb-4 md:pb-6">
              {stats.map((stat, index) => (
                <div key={index} className="flex flex-col">
                  <span className="text-2xl md:text-3xl font-bold text-foreground">{stat.value}</span>
                  <span className="text-sm md:text-lg uppercase tracking-wider text-muted-foreground">{stat.label}</span>
                </div>
              ))}
            </div>

            {/* Lista de Features */}
            <div className="flex flex-col gap-3 md:gap-4">
              {features.map((item, index) => (
                <div
                  key={index}
                  className="group card-gradient rounded-xl p-3 md:p-4 border-2 border-dashed border-white/20 hover-glow flex items-start gap-3 md:gap-5 transition-all hover:-translate-y-1"
                >

                  {/* Ícone */}
                  <div className={`shrink-0 inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-lg transition-colors mt-1 ${item.color === 'primary'
                      ? 'bg-primary/20 text-primary group-hover:bg-primary/30'
                      : 'bg-secondary/20 text-secondary group-hover:bg-secondary/30'
                    }`}>
                    <item.icon className="w-5 h-5 md:w-6 md:h-6" />
                  </div>

                  {/* Conteúdo */}
                  <div className="flex flex-col min-w-0">
                    <h3 className="text-sm md:text-base font-bold text-foreground mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                </div>
              ))}
            </div>

          </div>

          {/* LADO DIREITO: Imagem */}
          <div className="relative flex items-center justify-center lg:justify-end animate-slide-left h-full min-h-[300px] md:min-h-[400px] lg:min-h-[600px] mt-8 lg:mt-0">

            {/* Glow de fundo */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-secondary/10 to-transparent blur-3xl opacity-60 rounded-full" />

            {/* Container da Imagem */}
            <div className="relative z-10 w-full rounded-2xl overflow-hidden border-2 border-dashed border-white/20  shadow-2xl bg-black/40 backdrop-blur-sm group">
              <img
                src={doohImage}
                alt="DOOH e Sincronização Mobile em Ambiente Urbano"
                className="w-full h-auto object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
              />

              {/* Elemento Decorativo: Sincronização Visual */}
              <div className="absolute bottom-4 right-4 md:bottom-10 md:right-10 flex items-center gap-2 md:gap-3 animate-pulse">
                <Signal className="w-4 h-4 md:w-6 md:h-6 text-green-400" />
                <span className="text-[10px] md:text-xs font-mono text-green-400 bg-green-400/10 px-1.5 py-0.5 md:px-2 md:py-1 rounded">SYNC ACTIVE</span>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default DoohUrbanSync;