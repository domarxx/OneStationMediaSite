import { 
    Database, 
    ShieldCheck, 
    Share2, 
    Target, 
    FileCheck 
  } from "lucide-react";
  
  // Fluxo de Processamento de Dados (Baseado no rodapé da página 10)
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
      <section className="py-24 relative overflow-hidden bg-background">
        <div className="container px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* LADO ESQUERDO: Conceito e Explicação Técnica */}
            <div className="flex flex-col animate-slide-right">
              
              {/* Tag / Subtítulo */}
              <div className="flex items-center gap-4 mb-6">
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
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 leading-tight">
              <span className="text-gradient">1st Party</span> Sempre!
              </h2>
  
              {/* Texto Descritivo */}
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Esta audiência é sua! Nossa tecnologia permite capturar o Device IDs dos aparelhos celulares, formando uma base proprietária (First Party) que é tratada e estruturada com técnicas de Data Quality, gerando assim uma inteligência que tem auxiliado otimizações e assertividade das campanhas.
              </p>

              {/* Texto Secundário */}
              <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
                Os IDs específicos de cada campanha podem ser compartilhados com o cliente, podendo ser trabalhados em campanhas de Meta, TikTok e LinkedIn.
              </p>
  
              {/* Destaque LGPD */}
              <div className="flex items-center gap-3 mb-6 p-4 rounded-lg bg-green-500/10 border border-green-500/20 w-fit">
                <ShieldCheck className="w-5 h-5 text-green-500" />
                <span className="text-sm font-bold text-green-400 uppercase tracking-wide">
                  Tudo em conformidade ao LGPD
                </span>
              </div>
    
            </div>
  
            {/* LADO DIREITO: Fluxo de Dados (Cards Horizontais) */}
            <div className="flex flex-col gap-5 animate-slide-left relative">
              
              {/* Linha conectora vertical (decorativa) */}
              <div className="absolute left-[2.6rem] top-8 bottom-8 w-5 bg-gradient-to-b from-primary/50 via-secondary/50 to-transparent -z-10 opacity-30 dashed-line" />
  
              {dataFlow.map((step, index) => (
                <div 
                  key={index}
                  className="group card-gradient rounded-xl p-5 border-2 border-dashed border-white/20 hover-glow flex items-center gap-5 transition-all hover:-translate-y-1 bg-background/80 backdrop-blur-sm"
                >
                  
                  {/* Ícone (Esquerda) */}
                  <div className={`shrink-0 inline-flex items-center justify-center w-14 h-14 rounded-lg transition-colors shadow-lg ${
                    step.color === 'primary' 
                      ? 'bg-primary/20 text-primary group-hover:bg-primary/30' 
                      : 'bg-secondary/20 text-secondary group-hover:bg-secondary/30'
                  }`}>
                    <step.icon className="w-7 h-7" />
                  </div>
  
                  {/* Texto (Direita) */}
                  <div className="flex flex-col">
                    <h3 className="font-display text-lg font-bold text-foreground mb-1">
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-snug">
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