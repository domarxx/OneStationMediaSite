import { 
  Layers, 
  Smartphone, 
  Maximize 
} from "lucide-react";

// Placeholders para as imagens (Celulares e QR Codes)
import inFeedImage from "@/assets/in-feed.png";
import inFeedQr from "@/assets/in-feed-qrcode.png"; // NOVO: Imagem do QR Code In Feed

import fullscreenImage from "@/assets/fullscreen.png";
import fullscreenQr from "@/assets/fullscreen-qrcode.png"; // NOVO: Imagem do QR Code Fullscreen

const traditionalFormats = [
  "IABs", "Vídeo", "Áudio", "Native", "Push Notification", "Social to Prog"
];

const FormatosAltoImpacto = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-background">
      <div className="container px-6">
        
        {/* --- CABEÇALHO --- */}
        <div className="flex flex-col animate-slide-right mb-16">
          <div className="flex items-center gap-4 mb-4">
            <div className="accent-bar h-12 w-1 bg-primary" />
            <div className="flex flex-col">
              <span className="text-primary font-semibold tracking-wide uppercase text-sm">
                Alto Impacto
              </span>
              <span className="text-muted-foreground text-xs uppercase tracking-widest">
                Formatos Diferenciados
              </span>
            </div>
          </div>

          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Formatos de <span className="text-gradient">Rich Media</span>
          </h2>

          <div className="max-w-[100%]">
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Além de todos os formatos tradicionais, contamos com mais de 60 tipos diferentes de Rich Media, já pré-formatados e integrados em nossa plataforma.
            </p>
            
            {/* Badges dos formatos tradicionais */}
            <div className="flex flex-wrap gap-2">
              {traditionalFormats.map((format, index) => (
                <span 
                  key={index} 
                  className="px-3 py-1 rounded-full border border-white/10 bg-secondary/20 text-xs font-medium text-muted-foreground"
                >
                  {format}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* --- GRID DE FORMATOS --- */}
        <div className="grid lg:grid-cols-2 gap-8">
          
          {/* ================= CARD 1: IN FEED ================= */}
          {/* Mudado para grid-cols-2 para equilibrar o espaço (50% imagem / 50% texto) */}
          <div className="group card-gradient rounded-2xl p-6 md:p-8 border-2 border-dashed border-white/20 hover-glow grid md:grid-cols-2 gap-6 items-center transition-all duration-500 relative overflow-hidden">
            
            {/* --- COLUNA ESQUERDA: IMAGEM DO CELULAR --- */}
            <div className="relative w-full flex justify-center">
               {/* Glow atrás do celular */}
               <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full opacity-30 group-hover:opacity-60 transition-opacity duration-500" />
               
               <img 
                src={inFeedImage} 
                alt="Exemplo In Feed no Celular" 
                className="relative z-10 w-[60%] max-w-[180px] md:max-w-[220px] h-auto object-contain drop-shadow-2xl transform group-hover:scale-[1.02] transition-transform duration-500"
              />
            </div>

            {/* --- COLUNA DIREITA: TEXTO + QR CODE --- */}
            <div className="flex flex-col h-full justify-center gap-6">
              
              {/* Bloco de Texto */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="shrink-0 inline-flex items-center justify-center w-10 h-10 rounded-lg bg-primary/20 text-primary group-hover:bg-primary/30 transition-colors">
                    <Smartphone className="w-5 h-5" />
                  </div>
                  <h3 className="font-display text-xl md:text-2xl font-bold text-foreground">
                    IN FEED
                  </h3>
                </div>

                <div className="space-y-3">
                  <div>
                    <p className="text-base md:text-lg font-bold text-foreground">Formatos de alto impacto Infeed.</p>
                    <p className="text-sm text-muted-foreground font-medium">+40 tipos.</p>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Layers className="w-4 h-4 text-primary" />
                    <span className="leading-tight">Formatação dinâmica na plataforma.</span>
                  </div>
                </div>
              </div>

              {/* Bloco do QR Code (Sem borda, logo abaixo do texto) */}
              <div className="mt-2">
                <div className="bg-white p-2 rounded-xl w-fit shadow-lg group-hover:shadow-primary/20 transition-shadow">
                  <img 
                    src={inFeedQr} 
                    alt="QR Code In Feed" 
                    className="w-24 h-24 object-contain"
                  />
                </div>
              </div>

            </div>
          </div>

          {/* ================= CARD 2: FULLSCREEN ================= */}
          <div className="group card-gradient rounded-2xl p-6 md:p-8 border-2 border-dashed border-white/20 hover-glow grid md:grid-cols-2 gap-6 items-center transition-all duration-500 relative overflow-hidden">
            
            {/* --- COLUNA ESQUERDA: IMAGEM DO CELULAR --- */}
            <div className="relative w-full flex justify-center">
               <div className="absolute inset-0 bg-secondary/20 blur-3xl rounded-full opacity-30 group-hover:opacity-60 transition-opacity duration-500" />
               
               <img 
                src={fullscreenImage} 
                alt="Exemplo Fullscreen no Celular" 
                className="relative z-10 w-[60%] max-w-[180px] md:max-w-[220px] h-auto object-contain drop-shadow-2xl transform group-hover:scale-[1.02] transition-transform duration-500"
              />
            </div>

            {/* --- COLUNA DIREITA: TEXTO + QR CODE --- */}
            <div className="flex flex-col h-full justify-center gap-6">
              
              {/* Bloco de Texto */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="shrink-0 inline-flex items-center justify-center w-10 h-10 rounded-lg bg-secondary/20 text-secondary group-hover:bg-secondary/30 transition-colors">
                    <Maximize className="w-5 h-5" />
                  </div>
                  <h3 className="font-display text-xl md:text-2xl font-bold text-foreground">
                    FULLSCREEN
                  </h3>
                </div>

                <div className="space-y-3">
                  <div>
                    <p className="text-base md:text-lg font-bold text-foreground">Formatos de alto impacto Fullscreen.</p>
                    <p className="text-sm text-muted-foreground font-medium">+20 tipos.</p>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Layers className="w-4 h-4 text-secondary" />
                    <span className="leading-tight">Formatação dinâmica na plataforma.</span>
                  </div>
                </div>
              </div>

              {/* Bloco do QR Code */}
              <div className="mt-2">
                <div className="bg-white p-2 rounded-xl w-fit shadow-lg group-hover:shadow-secondary/20 transition-shadow">
                  <img 
                    src={fullscreenQr} 
                    alt="QR Code Fullscreen" 
                    className="w-24 h-24 object-contain"
                  />
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FormatosAltoImpacto;