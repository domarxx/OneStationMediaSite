import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Rocket, Menu, X, ChevronDown } from "lucide-react";
import LogoOSM from "@/assets/osm_icon.svg";
import LogoOSM_White from "@/assets/osm_icon_white.svg";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Estado para controlar o submenu no mobile
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Links normais
  const navLinks = [
    { label: "Estudos", href: "/estudos", type: "route" as const },
    { label: "Partners", href: "/#Partners", type: "anchor" as const },
    { label: "Clientes", href: "/#clientes", type: "anchor" as const },
    ];

  // Links do Dropdown "Etapas"
  const etapasLinks = [
    { label: "Diferenciais", href: "/#Multiplataforma" },
    { label: "PrecisionGeoLift", href: "/#PrecisionGeoLift" },
    { label: "MUA", href: "/#MUA" },
    { label: "DriveToStore", href: "/#DriveToStore" },
    { label: "RichMedia", href: "/#RichMedia" },
    { label: "CTVHHS", href: "/#CTVHHS" },
    { label: "DOOH", href: "/#DOOH" },
    { label: "Omnichannel", href: "/#Omnichannel" },
    { label: "1st Party", href: "/#STParty" },
    { label: "Dashboard", href: "/#Dashboard" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen
          ? "bg-background/90 backdrop-blur-lg border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      <div className="container px-4 sm:px-6">
        <div className="flex items-center md:justify-between h-20 gap-2">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 min-w-0 flex-1 md:flex-none">
            <div className="w-10 h-10 shrink-0 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/30 flex items-center justify-center">
              <img src={LogoOSM_White} alt="Logo" className="w-[60%] h-[60%]" />
            </div>
            <span className="font-display text-xl font-bold text-foreground">
              one station <span className="text-gradient">media</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            
            {/* DROPDOWN MENU (ETAPAS) */}
            <div className="relative group">
              <button className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors focus:outline-none">
                Funil Omnichannel
                <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
              </button>
              
              {/* Área do Dropdown (Absoluta) */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className="w-48 bg-background/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-xl overflow-hidden p-1">
                  {etapasLinks.map((sublink) => (
                    <Link
                      key={sublink.label}
                      to={sublink.href}
                      className="block px-4 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-white/5 rounded-lg transition-colors"
                    >
                      {sublink.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Links Normais */}
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}

            <Link to="/#contato">
              <Button variant="glow" size="sm">
                Fale Conosco
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground shrink-0 ml-auto"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border/50 h-[calc(100vh-80px)] overflow-y-auto">
            <div className="flex flex-col gap-2">
              
              {/* Mobile Dropdown (Etapas) */}
              <div>
                <button 
                  onClick={() => setMobileSubmenuOpen(mobileSubmenuOpen === "etapas" ? null : "etapas")}
                  className="w-full flex items-center justify-between text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-3 px-2"
                >
                  Etapas
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobileSubmenuOpen === "etapas" ? "rotate-180" : ""}`} />
                </button>
                
                {/* Submenu Mobile Expandível */}
                {mobileSubmenuOpen === "etapas" && (
                  <div className="flex flex-col bg-white/5 rounded-lg mb-2 overflow-hidden">
                    {etapasLinks.map((sublink) => (
                      <Link
                        key={sublink.label}
                        to={sublink.href}
                        className="px-6 py-3 text-sm text-muted-foreground/80 hover:text-foreground hover:bg-white/5 transition-colors border-l-2 border-transparent hover:border-primary"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {sublink.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Links Normais Mobile */}
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-3 px-2 border-b border-white/5 last:border-0"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}

              <Link to="/#contato" onClick={() => setIsMobileMenuOpen(false)} className="mt-4">
                <Button variant="glow" size="sm" className="w-full">
                  Fale Conosco
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;