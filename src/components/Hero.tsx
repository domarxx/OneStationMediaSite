import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Rocket, ChevronDown } from "lucide-react";
import LogoOSM from "@/assets/osm_icon.svg";
import LogoOSM_White from "@/assets/osm_icon_white.svg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 z-0 grid-background opacity-50 [mask-image:linear-gradient(to_bottom_right,black_10%,transparent)]"></div>  
      
      {/* Glow effect */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(350_78%_52%/0.08)_0%,transparent_60%)]" />
      
      {/* Content */}
      <div className="container relative z-10 px-6 py-20">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Logo/Icon */}
          <div className="mb-8 animate-slide-up">
            <div className="inline-flex items-center justify-center w-[150px] h-[150px] rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/30 animate-pulse-glow">
             <img src={LogoOSM_White} alt="Logo" className="w-[70%] h-[70%]" />
            </div>
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 animate-slide-up delay-100">
            <span className="text-foreground">one station</span> <span className="text-gradient">media</span>
          </h1>

          {/* Brand */}
          <div className="mb-6 animate-slide-up delay-200">
            <span className="text-[24px] md:text-[30px] lg:text-[38px] font-bold uppercase">
              Precision Marketing Data
            </span>
          </div>
          
          {/* Linha Tracejada */}
          <div className="w-full max-w-3xl mx-auto mb-8 animate-slide-up delay-300">
            {/* Ajuste a espessura no border-t-[3px] e a cor/opacidade no final */}
            <div className="border-t-[5px] border-dashed border-primary/60 w-[90%] mx-auto"></div>
          </div>
          
          {/* Tagline */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mb-8 animate-slide-up delay-400">
            Atuando em <span className="text-foreground font-semibold">LATAM desde 2019</span>, 
            entregamos campanhas de sucesso para as marcas mais importantes do mercado.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-12 animate-slide-up delay-500">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary">100%</div>
              <div className="text-sm font-bold">Inventário Global</div>
            </div>
            <div className="w-px h-16 bg-border hidden md:block" />
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary">1%</div>
              <div className="text-sm font-bold">CTR Mínimo Garantido</div>
            </div>
            <div className="w-px h-16 bg-border hidden md:block" />
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary">3x</div>
              <div className="text-sm font-bold">Acima da Média</div>
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up delay-600">
            <Link to="/#solucoes">
              <Button variant="outline" size="lg">
                Conheça os Serviços
              </Button>
            </Link>
            <Link to="/#contato">
              <Button variant="hero" size="lg">
                Fale Conosco
              </Button>
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <ChevronDown className="w-8 h-8 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
