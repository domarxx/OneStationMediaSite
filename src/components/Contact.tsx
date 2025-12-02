import { Button } from "@/components/ui/button";
import { Phone, Mail, Globe, Rocket, ArrowRight } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(350_78%_52%/0.1)_0%,transparent_50%)]" />
      
      <div className="container px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/30 mb-8 animate-pulse-glow">
            <Rocket className="w-10 h-10 text-primary" />
          </div>

          {/* Heading */}
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-6">
            Bem-vindo ao <span className="text-gradient">Futuro</span>
          </h2>
          
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Pronto para transformar suas campanhas de marketing com tecnologia de ponta e resultados incomparáveis?
          </p>

          {/* Contact info */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12">
            <a
              href="tel:+5511941485853"
              className="flex items-center gap-3 px-6 py-4 rounded-xl bg-card/50 border border-border/50 hover:border-primary/50 transition-colors group"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <span className="text-foreground font-medium">11 94148-5853</span>
            </a>

            <a
              href="mailto:sales@onestationmedia.com"
              className="flex items-center gap-3 px-6 py-4 rounded-xl bg-card/50 border border-border/50 hover:border-primary/50 transition-colors group"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <span className="text-foreground font-medium">sales@onestationmedia.com</span>
            </a>

            <a
              href="https://onestationmedia.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-4 rounded-xl bg-card/50 border border-border/50 hover:border-primary/50 transition-colors group"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                <Globe className="w-5 h-5 text-primary" />
              </div>
              <span className="text-foreground font-medium">onestationmedia.com</span>
            </a>
          </div>

          {/* CTA */}
          <Button variant="hero" size="lg" className="group">
            Solicitar Proposta
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
