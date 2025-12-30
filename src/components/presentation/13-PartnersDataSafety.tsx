import { ShieldCheck } from "lucide-react";

// 1. Importação Automática das Imagens da pasta 'src/assets/partners_ds'
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

// Função para extrair o nome do partner da URL
const getPartnerNameFromUrl = (url: string): string => {
  const fileName = url.split('/').pop()?.replace(/\.(png|jpg|jpeg|svg|webp)$/i, '') || '';
  return fileName.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ') || 'Safety Partner';
};

const PartnersDataSafety = () => {
  return (
    <section className="py-12 md:py-24 relative overflow-hidden bg-background">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,hsl(var(--primary)/0.03)_0%,transparent_70%)]" />

      <div className="container px-4 md:px-6 relative z-10">
        
        {/* CABEÇALHO */}
        <div className="flex flex-col items-start text-left animate-slide-up mb-8 md:mb-16">
          <div className="flex items-center gap-4 mb-4 md:mb-6">
            <div className="accent-bar h-12 w-1 bg-secondary" />
            <div className="flex flex-col items-start">
              <span className="text-secondary font-semibold tracking-wide uppercase text-sm">
                Partners - Data & Safety
              </span>
              <span className="text-muted-foreground text-xs uppercase tracking-widest">
                Segurança e Otimização
              </span>
            </div>
          </div>

          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
            Brand Safety e <span className="text-gradient-secondary">Dados Confiáveis</span>
          </h2>
          
          <p className="text-sm md:text-lg text-muted-foreground leading-relaxed">
            Parceiros líderes em Brand Safety, Dados e Otimizações criativas para garantir a integridade e a performance da sua marca.
          </p>
        </div>

        {/* GRID DE LOGOS */}
        {logoUrls.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4 animate-slide-up">
            {logoUrls.map((url, index) => {
              const partnerName = getPartnerNameFromUrl(url);
              return (
                <div 
                  key={index}
                  className="group h-20 md:h-24 flex items-center justify-center p-3 md:p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-secondary/20 transition-all duration-300"
                >
                  <img 
                    src={url} 
                    alt={`Logo do parceiro ${partnerName} - Brand Safety e Data`}
                    // ALTERAÇÃO AQUI:
                    // 1. 'brightness-0 invert': Branco chapado por padrão.
                    // 2. 'group-hover:brightness-100 group-hover:invert-0': Cor original no hover.
                    className="w-auto h-auto max-w-[70%] max-h-[60%] object-contain opacity-70 brightness-0 invert group-hover:brightness-100 group-hover:invert-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
                  />
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center p-6 md:p-8 border border-dashed border-white/10 rounded-xl text-muted-foreground mb-6 md:mb-8">
            <p className="text-sm md:text-base">Nenhum logo encontrado em <code className="text-xs md:text-sm">src/assets/partners_ds/</code></p>
          </div>
        )}

        {/* Scrolling Safety names 
        <div className="mt-12 md:mt-20 w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex gap-6 md:gap-8 w-max animate-scroll">
            {[...safetyList, ...safetyList].map((name, index) => (
              <span
                key={`${name}-${index}`}
                className="text-xs md:text-sm text-muted-foreground whitespace-nowrap font-medium select-none uppercase tracking-widest opacity-70"
              >
                {name}
              </span>
            ))}
          </div>
        </div>*/}

      </div>
    </section>
  );
};

export default PartnersDataSafety;