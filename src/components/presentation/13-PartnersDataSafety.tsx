import { ShieldCheck } from "lucide-react";

// 1. Importação Automática das Imagens da pasta 'src/assets/safety'
// Certifique-se de criar essa pasta e colocar os logos lá
const logosImports = import.meta.glob('@/assets/partners_ds/*.{png,jpg,jpeg,svg,webp}', { 
  eager: true, 
  query: '?url', 
  import: 'default' 
});

// Transforma em array de URLs para usar no Grid
const logoUrls = Object.values(logosImports) as string[];

// 2. Lista de Nomes (Mantida para o texto correndo no rodapé)
const safetyList = [
  "IAB Europe", "Digiseg", "Zeotap", "Google Tag Manager", 
  "Edge", "Ad Integrity", "The Media Trust", "AdSquare", 
  "Navegg", "Nielsen", "Peer39", "Adjust", "Appsflyer", 
  "Branch", "Innovid", "IAS Integral Ad Science", "Kochava", 
  "NEXD", "Geofusion", "MOAT by Oracle"
];

const PartnersDataSafety = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-background">
      {/* Background sutilmente diferente */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,hsl(var(--primary)/0.03)_0%,transparent_70%)]" />

      <div className="container px-6 relative z-10">
        
        {/* CABEÇALHO */}
        <div className="flex flex-col items-start text-left animate-slide-up mb-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="accent-bar h-12 w-1 bg-secondary" /> {/* Cor Secondary mantida */}
            <div className="flex flex-col items-start">
              <span className="text-secondary font-semibold tracking-wide uppercase text-sm">
                Partners - Data & Safety
              </span>
              <span className="text-muted-foreground text-xs uppercase tracking-widest">
                Segurança e Otimização
              </span>
            </div>
          </div>

          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Brand Safety e <span className="text-gradient-secondary">Dados Confiáveis</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Parceiros líderes em Brand Safety, Dados e Otimizações criativas para garantir a integridade e a performance da sua marca.
          </p>
        </div>

        {/* GRID DE LOGOS */}
        {logoUrls.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 animate-slide-up">
            {logoUrls.map((url, index) => (
              <div 
                key={index}
                className="group h-24 flex items-center justify-center p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-secondary/20 transition-all duration-300"
              >
                <img 
                  src={url} 
                  alt={`Safety Partner ${index + 1}`} 
                  // --- MUDANÇA AQUI ---
                  // Mesma aplicação de restrição dupla (largura e altura)
                  className="w-auto h-auto max-w-[70%] max-h-[60%] object-contain opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
                />
              </div>
            ))}
          </div>
        ) : (
           /* Fallback caso a pasta esteja vazia */
           <div className="text-center p-8 border border-dashed border-white/10 rounded-xl text-muted-foreground mb-8">
             <p>Nenhum logo encontrado em <code>src/assets/safety/</code></p>
           </div>
        )}

        {/* Scrolling Safety names (Texto correndo embaixo) */}
        <div className="mt-20 w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex gap-8 w-max animate-scroll">
            {/* Duplicamos a lista para loop infinito */}
            {[...safetyList, ...safetyList].map((name, index) => (
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

export default PartnersDataSafety;