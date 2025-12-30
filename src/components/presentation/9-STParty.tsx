import { 
  Database, 
  ShieldCheck, 
  Share2, 
  Target, 
  FileCheck 
} from "lucide-react";

// Fluxo de Processamento de Dados
const dataFlow = [
  {
    title: "Impacto na mídia",
    description: "Primeiro ponto de contato com o usuário.",
    icon: Target,
    color: "primary"
  },
  {
    title: "Compilação dos dados",
    description: "Captura e estruturação dos Device IDs.",
    icon: Database,
    color: "secondary"
  },
  {
    title: "Compartilhamento anonimizado",
    description: "Segurança e privacidade dos dados.",
    icon: FileCheck,
    color: "primary"
  },
  {
    title: "Match nas plataformas",
    description: "Integração com Meta, TikTok e LinkedIn.",
    icon: Share2,
    color: "secondary"
  }
];

const FirstPartyData = () => {
  return (
    <section id="STParty" className="py-12 md:py-24 relative overflow-hidden bg-background">
      <div className="container px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-6 md:gap-12 lg:gap-16 items-center">
          
          {/* LADO ESQUERDO: Conceito e Explicação Técnica */}
          <div className="flex flex-col animate-slide-right">
            
            {/* Tag / Subtítulo */}
            <div className="flex items-center gap-4 mb-4 md:mb-6">
              <div className="accent-bar h-12 w-1 bg-primary" />
              <div className="flex flex-col">
                <span className="text-primary font-semibold tracking-wide uppercase text-sm">
                  Data Science OSM
                </span>
                <span className="text-muted-foreground text-xs uppercase tracking-widest">
                  Compilação de IDs
                </span>
              </div>
            </div>

            {/* Título Principal */}
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 leading-tight">
            <span className="text-gradient">1st Party</span> Sempre!
            </h2>

            {/* Texto Descritivo */}
            <p className="text-base md:text-lg text-muted-foreground mb-4 md:mb-6 leading-relaxed">
              Esta audiência é sua! Nossa tecnologia permite capturar o Device IDs dos aparelhos celulares, formando uma base proprietária (First Party) que é tratada e estruturada com técnicas de Data Quality, gerando assim uma inteligência que tem auxiliado otimizações e assertividade das campanhas.
            </p>

            {/* Texto Secundário */}
            <p className="text-base md:text-lg text-muted-foreground mb-6 md:mb-10 leading-relaxed">
              Os IDs específicos de cada campanha podem ser compartilhados com o cliente, podendo ser trabalhados em campanhas de Meta, TikTok e LinkedIn.
            </p>

            {/* Destaque LGPD */}
            <div className="flex items-center gap-2 md:gap-3 mb-6 p-3 md:p-4 rounded-lg bg-green-500/10 border border-green-500/20 w-fit">
              <ShieldCheck className="w-4 h-4 md:w-5 md:h-5 text-green-500" />
              <span className="text-xs md:text-sm font-bold text-green-400 uppercase tracking-wide">
                Tudo em conformidade ao LGPD
              </span>
            </div>
  
          </div>

          {/* LADO DIREITO: Fluxo de Dados */}
          <div className="flex flex-col gap-4 md:gap-5 animate-slide-left relative mt-8 lg:mt-0">
            
            {/* Linha conectora vertical (decorativa) - Oculto no mobile */}
            <div className="hidden md:block absolute left-[2.6rem] top-8 bottom-8 w-5 bg-gradient-to-b from-primary/50 via-secondary/50 to-transparent -z-10 opacity-30 dashed-line" />

            {dataFlow.map((step, index) => (
              <div 
                key={index}
                className="group card-gradient rounded-xl p-4 md:p-5 border-2 border-dashed border-white/20 hover-glow flex items-center gap-3 md:gap-5 transition-all hover:-translate-y-1 bg-background/80 backdrop-blur-sm"
              >
                
                {/* Ícone */}
                <div className={`shrink-0 inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-lg transition-colors shadow-lg ${
                  step.color === 'primary' 
                    ? 'bg-primary/20 text-primary group-hover:bg-primary/30' 
                    : 'bg-secondary/20 text-secondary group-hover:bg-secondary/30'
                }`}>
                  <step.icon className="w-5 h-5 md:w-7 md:h-7" />
                </div>

                {/* Texto */}
                <div className="flex flex-col min-w-0">
                  <h3 className="font-display text-base md:text-lg font-bold text-foreground mb-1">
                    {step.title}
                  </h3>
                  <p className="text-xs md:text-sm text-muted-foreground leading-snug">
                    {step.description}
                  </p>
                </div>

              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default FirstPartyData;