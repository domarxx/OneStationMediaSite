import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Rocket, ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden grid-background">
      {/* Glow effect */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(350_78%_52%/0.08)_0%,transparent_60%)]" />
      
      {/* Content */}
      <div className="container relative z-10 px-6 py-20">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Logo/Icon */}
          <div className="mb-8 animate-slide-up">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/30 animate-pulse-glow">
              <Rocket className="w-10 h-10 text-primary" />
            </div>
          </div>

          {/* Brand */}
          <div className="mb-4 animate-slide-up delay-100">
            <span className="text-sm font-semibold tracking-[0.3em] text-muted-foreground uppercase">
              Precision Marketing Data
            </span>
          </div>

          {/* Main heading */}
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-slide-up delay-200">
            <span className="text-foreground">one station</span>
            <br />
            <span className="text-gradient">media</span>
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mb-8 animate-slide-up delay-300">
            Atuando em <span className="text-foreground font-semibold">LATAM desde 2019</span>, 
            entregamos campanhas de sucesso para as marcas mais importantes do mercado.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-12 animate-slide-up delay-400">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary">100%</div>
              <div className="text-sm text-muted-foreground">Inventário Global</div>
            </div>
            <div className="w-px h-16 bg-border hidden md:block" />
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary">1%</div>
              <div className="text-sm text-muted-foreground">CTR Mínimo Garantido</div>
            </div>
            <div className="w-px h-16 bg-border hidden md:block" />
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary">3x</div>
              <div className="text-sm text-muted-foreground">Acima da Média</div>
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up delay-500">
            <Link to="/#contato">
              <Button variant="hero" size="lg">
                Fale Conosco
              </Button>
            </Link>
            <Link to="/#solucoes">
              <Button variant="outline" size="lg">
                Conheça os Serviços
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
