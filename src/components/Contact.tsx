import { Button } from "@/components/ui/button";
import { Phone, Mail, Globe, ArrowRight } from "lucide-react";
import LogoOSM_White from "@/assets/osm_icon_white.svg";


const Contact = () => {
  return (
    <section className="py-12 md:py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(350_78%_52%/0.1)_0%,transparent_50%)]" />
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/30 mb-6 md:mb-8 animate-pulse-glow">
            <img src={LogoOSM_White} alt="Logo" className="w-[70%] h-[70%]" />
          </div>

          {/* Heading */}
          <h2 className="font-display text-3xl md:text-4xl lg:text-6xl font-bold mb-4 md:mb-6 px-4">
            Bem-vindo ao <span className="text-gradient">Futuro</span>!
          </h2>
          
          <p className="text-base md:text-xl text-muted-foreground mb-8 md:mb-12 max-w-2xl mx-auto px-4">
            Pronto para transformar suas campanhas de marketing com tecnologia de ponta e resultados incomparáveis?
          </p>

          {/* Contact info */}
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-center gap-4 md:gap-8 mb-8 md:mb-12 px-4">
            <a
              href="tel:+5511941485853"
              className="flex items-center justify-center gap-3 px-4 py-3 md:px-6 md:py-4 rounded-xl bg-card/50 border-2 border-dashed border-white/20 hover:border-primary/50 transition-colors group"
            >
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                <Phone className="w-4 h-4 md:w-5 md:h-5 text-primary" />
              </div>
              <span className="text-sm md:text-base text-foreground font-medium">11 94148-5853</span>
            </a>

            <a
              href="mailto:sales@onestationmedia.com"
              className="flex items-center justify-center gap-3 px-4 py-3 md:px-6 md:py-4 rounded-xl bg-card/50 border-2 border-dashed border-white/20 hover:border-primary/50 transition-colors group"
            >
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                <Mail className="w-4 h-4 md:w-5 md:h-5 text-primary" />
              </div>
              <span className="text-sm md:text-base text-foreground font-medium break-all">sales@onestationmedia.com</span>
            </a>

            <a
              href="https://onestationmedia.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 px-4 py-3 md:px-6 md:py-4 rounded-xl bg-card/50 border-2 border-dashed border-white/20 hover:border-primary/50 transition-colors group"
            >
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                <Globe className="w-4 h-4 md:w-5 md:h-5 text-primary" />
              </div>
              <span className="text-sm md:text-base text-foreground font-medium">onestationmedia.com</span>
            </a>
          </div>

          {/* CTA */}
          <a href="https://api.whatsapp.com/send?phone=5511941485853&text=Quero%20informa%C3%A7%C3%B5es%20sobre%20a%20One%20Station%20media" target="_blank" rel="noopener noreferrer">
          <Button variant="hero" size="lg" className="group">
            Solicitar Proposta
            <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;