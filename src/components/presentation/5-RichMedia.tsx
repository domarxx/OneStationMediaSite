import {
  Layers,
  Smartphone,
  Maximize,
  ArrowRight
} from "lucide-react";
import { useFadeIn } from "@/hooks/use-gsap-animations";
import { Button } from "@/components/ui/button";

import inFeedImage from "@/assets/in-feed.png";
import fullscreenImage from "@/assets/fullscreen.png";

const traditionalFormats = [
  "IABs", "Vídeo", "Áudio", "Native", "Push Notification", "Social to Prog"
];

const FormatosAltoImpacto = () => {
  const ref = useFadeIn({ y: 30, delay: 0.2 });

  return (
    <section id="RichMedia" className="py-12 md:py-24 relative overflow-hidden bg-background">
      <div ref={ref} className="container px-4 md:px-6 invisible">

        {/* --- CABEÇALHO --- */}
        <div className="flex flex-col animate-slide-right mb-8 md:mb-16">
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

          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
            Formatos de <span className="text-gradient">Rich Media</span>
          </h2>

          <div className="max-w-[100%]">
            <p className="text-base md:text-lg text-muted-foreground mb-4 md:mb-6 leading-relaxed">
              Além de todos os formatos tradicionais, contamos com mais de 60 tipos diferentes de Rich Media, já pré-formatados e integrados em nossa plataforma.
            </p>

            <div className="flex flex-wrap gap-2">
              {traditionalFormats.map((format, index) => (
                <span
                  key={index}
                  className="px-2 py-1 md:px-3 md:py-1 rounded-full border border-white/10 bg-secondary/20 text-[10px] md:text-xs font-medium text-muted-foreground"
                >
                  {format}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* --- GRID DE FORMATOS --- */}
        <div className="grid lg:grid-cols-2 gap-4 md:gap-8">

          {/* ================= CARD 1: IN FEED (Primary Color) ================= */}
          <div className="group card-gradient rounded-2xl p-3 md:p-6 lg:p-8 border-2 border-dashed border-white/20 hover-glow grid grid-cols-[40%_1fr] md:grid-cols-2 gap-3 md:gap-6 items-center transition-all duration-500 relative overflow-hidden">

            {/* Imagem */}
            <div className="relative w-full flex justify-center items-center h-full">
              <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full opacity-30 group-hover:opacity-60 transition-opacity duration-500" />
              <img
                src={inFeedImage}
                alt="Exemplo In Feed no Celular"
                className="relative z-10 w-full max-w-[90px] md:max-w-[160px] lg:max-w-[220px] h-auto object-contain drop-shadow-2xl transform group-hover:scale-[1.02] transition-transform duration-500"
              />
            </div>

            {/* Texto + Botão */}
            <div className="flex flex-col h-full justify-center gap-2 md:gap-6 py-1 md:py-2">
              <div>
                <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-4">
                  <div className="shrink-0 inline-flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-lg bg-primary/20 text-primary group-hover:bg-primary/30 transition-colors">
                    <Smartphone className="w-4 h-4 md:w-5 md:h-5" />
                  </div>
                  <h3 className="font-display text-sm md:text-xl lg:text-2xl font-bold text-foreground">
                    IN FEED
                  </h3>
                </div>

                <div className="space-y-2 md:space-y-3">
                  <div>
                    <p className="text-xs md:text-base lg:text-lg font-bold text-foreground leading-tight">+40 tipos de formatos.</p>
                  </div>
                  <div className="flex items-start gap-2 text-[10px] md:text-sm text-muted-foreground">
                    <Layers className="w-3 h-3 md:w-4 md:h-4 text-primary mt-0.5 shrink-0" />
                    <span className="leading-tight">Formatação dinâmica na plataforma.</span>
                  </div>
                </div>
              </div>

              <div className="mt-1 md:mt-2">
                <a href="https://preview.nexd.com/c/4ct5X7ospn" target="_blank" rel="noopener noreferrer">
                  {/* Botão Padrão (Primary Outline) */}
                  <Button variant="outline" className="w-auto text-[10px] md:text-sm h-8 md:h-10 gap-2 px-3 border-primary text-primary hover:bg-primary hover:text-white">
                    Formatos In Feed
                    <ArrowRight className="w-3 h-3 md:w-4 md:h-4" />
                  </Button>
                </a>
              </div>
            </div>
          </div>

          {/* ================= CARD 2: FULLSCREEN (Secondary Color) ================= */}
          <div className="group card-gradient rounded-2xl p-3 md:p-6 lg:p-8 border-2 border-dashed border-white/20 hover-glow grid grid-cols-[40%_1fr] md:grid-cols-2 gap-3 md:gap-6 items-center transition-all duration-500 relative overflow-hidden">

            {/* Imagem */}
            <div className="relative w-full flex justify-center items-center h-full">
              <div className="absolute inset-0 bg-secondary/20 blur-3xl rounded-full opacity-30 group-hover:opacity-60 transition-opacity duration-500" />
              <img
                src={fullscreenImage}
                alt="Exemplo Fullscreen no Celular"
                className="relative z-10 w-full max-w-[90px] md:max-w-[160px] lg:max-w-[220px] h-auto object-contain drop-shadow-2xl transform group-hover:scale-[1.02] transition-transform duration-500"
              />
            </div>

            {/* Texto + Botão */}
            <div className="flex flex-col h-full justify-center gap-2 md:gap-6 py-1 md:py-2">
              <div>
                <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-4">
                  <div className="shrink-0 inline-flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-lg bg-secondary/20 text-secondary group-hover:bg-secondary/30 transition-colors">
                    <Maximize className="w-4 h-4 md:w-5 md:h-5" />
                  </div>
                  <h3 className="font-display text-sm md:text-xl lg:text-2xl font-bold text-foreground">
                    FULLSCREEN
                  </h3>
                </div>

                <div className="space-y-2 md:space-y-3">
                  <div>
                    <p className="text-xs md:text-base lg:text-lg font-bold text-foreground leading-tight">+20 tipos de formatos.</p>
                  </div>
                  <div className="flex items-start gap-2 text-[10px] md:text-sm text-muted-foreground">
                    <Layers className="w-3 h-3 md:w-4 md:h-4 text-secondary mt-0.5 shrink-0" />
                    <span className="leading-tight">Formatação dinâmica na plataforma.</span>
                  </div>
                </div>
              </div>

              <div className="mt-1 md:mt-2">
                <a href="https://preview.nexd.com/c/T1jybQVAh3" target="_blank" rel="noopener noreferrer">
                  {/* ALTERAÇÃO AQUI: Botão com cores secundárias forçadas */}
                  <Button
                    variant="outline"
                    className="w-auto text-[10px] md:text-sm h-8 md:h-10 gap-2 px-3 border-secondary text-secondary hover:bg-secondary hover:text-white"
                  >
                    Formatos Fullscreen
                    <ArrowRight className="w-3 h-3 md:w-4 md:h-4" />
                  </Button>
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FormatosAltoImpacto;