import { Share2 } from "lucide-react";

// 1. Importação Automática das Imagens da pasta 'src/assets/partners'
const logosImports = import.meta.glob('@/assets/partners/*.{png,jpg,jpeg,svg,webp}', { 
  eager: true, 
  query: '?url', 
  import: 'default' 
});

// Transforma em array de URLs para usar no Grid
const logoUrls = Object.values(logosImports) as string[];

// 2. Lista de Nomes (Mantida para o texto correndo no rodapé)
const partnersList = [
  "AdColony", "Fyber", "Axonix", "Digital Turbine", "Evadav", 
  "Equativ", "Meta X", "VIOOH", "Index Exchange", "Magnite", 
  "Mobfox", "PubMatic", "AudienceXpress", "Comcast", "InMobi", 
  "Xandr", "LMX", "Improve Digital", "PubNative", "Taboola", 
  "LoopMe", "Affle", "MGID", "Smaato", "Vistar Media", 
  "TripleLift", "Google Ad Manager", "MediaSmart", "Display & Video 360"
];

const PartnersInventory = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-background">
      <div className="container px-6">
        
        {/* CABEÇALHO */}
        <div className="flex flex-col items-start text-left animate-slide-up mb-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="accent-bar h-12 w-1 bg-primary" />
            <div className="flex flex-col items-start">
              <span className="text-primary font-semibold tracking-wide uppercase text-sm">
                Partners
              </span>
              <span className="text-muted-foreground text-xs uppercase tracking-widest">
                Integrações Programáticas
              </span>
            </div>
          </div>

          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Alcance Global de <span className="text-gradient">Inventário</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Integrações programáticas através de plataformas conectadas, garantindo acesso aos principais publishers e inventory sources do mercado.
          </p>
        </div>

        {/* GRID DE LOGOS */}
        {logoUrls.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 animate-slide-up">
            {logoUrls.map((url, index) => (
              <div 
                key={index}
                // Mantive o container h-24 e p-4
                className="group h-24 flex items-center justify-center p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-primary/20 transition-all duration-300"
              >
                <img 
                  src={url} 
                  alt={`Partner ${index + 1}`} 
                  // --- MUDANÇA AQUI ---
                  // Antes: max-h-12 w-auto object-contain ...
                  // Depois: Adicionamos max-w-[85%] e reduzimos um pouco o max-h para equilibrar
                  className="w-auto h-auto max-w-[70%] max-h-[60%] object-contain opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
                />
              </div>
            ))}
          </div>
        ) : (
          /* Fallback caso a pasta esteja vazia */
          <div className="text-center p-8 border border-dashed border-white/10 rounded-xl text-muted-foreground mb-8">
            <p>Nenhum logo encontrado em <code>src/assets/partners/</code></p>
          </div>
        )}

        {/* Scrolling Partners names (Texto correndo embaixo) */}
        <div className="mt-20 w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex gap-8 w-max animate-scroll">
            {/* Duplicamos a lista para garantir o loop infinito perfeito */}
            {[...partnersList, ...partnersList].map((name, index) => (
              <span
                key={`${name}-${index}`}
                className="text-sm text-muted-foreground whitespace-nowrap font-medium select-none uppercase tracking-widest opacity-70"
              >
                {name}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default PartnersInventory;