import { Tv, Smartphone, Wifi, Zap } from "lucide-react";

// Placeholder para a imagem da Família no Sofá assistindo TV
const tvSyncImage = "@/assets/ctv.jpg";

// Lista de parceiros de streaming mencionados no PDF
const streamingPlatforms = [
  "Pluto TV", "PlayPlus", "Apple TV", "Globo Play", 
  "SKY+", "Claro TV", "Samsung TV", "LG TV", 
  "ESPN", "CNN", "Roku", "Netflix"
];

const streamingPlatforms2 = [
  "HBO MAX", "Disney+", "Prime Video"
];

const ConnectedTVHouseholdSync = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-background">
      <div className="container px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* LADO ESQUERDO: Texto e Conteúdo */}
          <div className="flex flex-col animate-slide-right">
            
            {/* Tag / Subtítulo */}
            <div className="flex items-center gap-4 mb-6">
              <div className="accent-bar h-12 w-1 bg-primary" />
              <div className="flex flex-col">
                <span className="text-primary font-semibold tracking-wide uppercase text-sm">
                  CTV + HHS (Household Sync)
                </span>
                <span className="text-muted-foreground text-xs uppercase tracking-widest">
                  Sincronização TV-Mobile
                </span>
              </div>
            </div>

            {/* Título Principal */}
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Onde a TV Termina, <span className="text-gradient">o Impacto Continua!</span>
            </h2>

            {/* Descrição da Tecnologia */}
            <div className="group card-gradient rounded-xl p-6 border-2 border-dashed border-white/20 mb-8 hover-glow">
              <div className="flex items-center gap-4 mb-3">
                <div className="p-2 rounded-lg bg-primary/20 text-primary">
                  <Zap className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Sincronização CTV-Mobile</h3>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Entrega de anúncios nos celulares dos espectadores que estão assistindo na tela grande, aumentando sensivelmente o engajamento da campanha e podendo dar continuidade a jornada Omnichannel.
              </p>
            </div>

            {/* --- BLOCO DE INFORMAÇÕES E LISTAS --- */}
            <div className="mb-8">
              
              {/* --- GRUPO 1: INVENTÁRIO --- */}
              <div className="space-y-4">
                {/* Texto Acesso 100% */}
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-full bg-secondary/20 text-secondary shrink-0">
                    <Tv className="w-5 h-5" />
                  </div>
                  <p className="text-base text-muted-foreground">
                    <strong className="text-foreground">Acesso a 100% do inventário:</strong> Todos os Publishers disponíveis no Brasil e no mundo.
                  </p>
                </div>

                {/* Grid de Parceiros 1 */}
                <div className="flex flex-wrap gap-2 pl-2">
                  {streamingPlatforms.map((platform, index) => (
                    <span 
                      key={index}
                      // EFEITO HOVER ADICIONADO AQUI: scale-105, bg-primary, text-white, shadow
                      className="px-3 py-1.5 rounded-lg border border-white/10 bg-black/40 text-xs font-medium text-white/80 transition-all duration-300 cursor-default hover:bg-primary hover:border-primary hover:text-white hover:scale-105 hover:shadow-lg hover:shadow-primary/20"
                    >
                      {platform}
                    </span>
                  ))}
                </div>
              </div>

              {/* --- GRUPO 2: SEGMENTAÇÕES (ESPAÇAMENTO AUMENTADO) --- */}
              {/* Adicionado 'mt-10' para dar o espaçamento que você pediu */}
              <div className="space-y-4 mt-10">
                
                {/* Texto Segmentações */}
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-full bg-primary/20 text-primary shrink-0">
                    <Wifi className="w-5 h-5" />
                  </div>
                  <p className="text-base text-muted-foreground">
                    <strong className="text-foreground">Segmentações Avançadas:</strong> Audiência, Contextual, Geofences e Deals exclusivos.
                  </p>
                </div>

                {/* Grid de Parceiros 2 */}
                <div className="flex flex-wrap gap-2 pl-2">
                  {streamingPlatforms2.map((platform, index) => (
                    <span 
                      key={index}
                      // MESMO EFEITO HOVER AQUI
                      className="px-3 py-1.5 rounded-lg border border-white/10 bg-black/40 text-xs font-medium text-white/80 transition-all duration-300 cursor-default hover:bg-primary hover:border-primary hover:text-white hover:scale-105 hover:shadow-lg hover:shadow-primary/20"
                    >
                      {platform}
                    </span>
                  ))}
                </div>
              </div>

            </div>
            {/* ------------------------------------------------ */}

          </div>

          {/* LADO DIREITO: Imagem da Família/TV */}
          <div className="relative flex items-center justify-center lg:justify-end animate-slide-left h-full min-h-[500px]">
            
            {/* Glow de fundo */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-secondary/10 to-transparent blur-3xl opacity-60 rounded-full" />
            
            {/* Container da Imagem */}
            <div className="relative z-10 w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-black/40 backdrop-blur-sm group">
              <img 
                src={tvSyncImage} 
                alt="Família assistindo CTV com sincronização Mobile" 
                className="w-full h-auto object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
              />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default ConnectedTVHouseholdSync;