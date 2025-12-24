import { CheckCircle2, TrendingUp } from "lucide-react";
// Substitua este import pelo seu PNG do gráfico transparente
import chartImage from "@/assets/Omnichannel.png"; 

const benefits = [    
  "Mobile: Retargeting e Geofencing preciso",
  "CTV: Impacto imersivo na sala de estar",
  "DOOH: Presença visual no trajeto urbano",
  "PDV: Influência decisiva no checkout"
];

const DataInsights = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-background">
      <div className="container px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* LADO ESQUERDO: Texto e Título */}
          <div className="flex flex-col justify-center animate-slide-right">
            
            {/* Header Tag */}
            <div className="flex items-center gap-4 mb-6">
              <div className="accent-bar h-12" />
              <span className="text-primary font-semibold tracking-wide uppercase">
                Omnichannel de verdade
              </span>
            </div>

            {/* Título Principal */}
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Jornadas integradas <span className="text-gradient">Omnichannel</span>.
            </h2>

            {/* Descrição */}
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Potencialize seus resultados com uma estratégia integrada que permite a interatividade dos anúncios moveis (móbile), a narrativa dos anúncios de TV, o Impacto de DOOH, e a capacidade de mensuração programática extrapolando até o PDV.
            </p>

            {/* Lista de Benefícios (Checkmarks) */}
            <div className="grid sm:grid-cols-2 gap-4">
              {benefits.map((item, index) => (
                <div key={index} className="flex items-center gap-3 group">
                  <div className="p-1 rounded-full bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-medium text-foreground/80">
                    {item}
                  </span>
                </div>
              ))}
            </div>


          </div>

          {/* LADO DIREITO: Imagem do Gráfico */}
          <div className="relative flex items-center justify-center lg:justify-end animate-slide-left">
            
            {/* Glow de fundo para destacar o gráfico sem usar bordas */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-secondary/10 to-transparent blur-3xl opacity-60 rounded-full" />
            
            {/* O Gráfico PNG */}
            {/* Nota: object-contain garante que o gráfico não distorça */}
            <img 
              src={chartImage} 
              alt="Gráfico de Performance e Dados" 
              className="relative z-10 w-full h-auto max-w-[600px] object-contain drop-shadow-2xl"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default DataInsights;