import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import osm_logo from "/osm_logo_3.svg"; // Certifique-se que o caminho está correto

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
    { label: "Quem Somos", href: "/QuemSomos" },
    { label: "Estudos", href: "/estudos" },
    { label: "Partners", href: "/#partners" }, // ID minúsculo por convenção
    { label: "Clientes", href: "/#clientes" },
  ];

  // Links do Dropdown "Funil Omnichannel"
  const etapasLinks = [
    { label: "Alcance e Impacto", href: "/#Multiplataforma" },
    { label: "Precision Geo Lift", href: "/#PrecisionGeoLift" },
    { label: "MUA", href: "/#MUA" },
    { label: "Drive To Store", href: "/#DriveToStore" },
    { label: "Rich Media", href: "/#RichMedia" },
    { label: "CTV + HHS", href: "/#CTVHHS" },
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
            <img src={osm_logo} alt="One Station Media Logo" className="w-[30%] h-[30%] object-contain" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            
            {/* DROPDOWN MENU (Funil Omnichannel) */}
            <div className="relative group">
              <button className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors focus:outline-none py-2">
                Funil Omnichannel
                <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
              </button>
              
              {/* Área do Dropdown (Absoluta) */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className="w-56 bg-background/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-xl overflow-hidden p-1 max-h-[80vh] overflow-y-auto">
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
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border/50 h-[calc(100vh-80px)] overflow-y-auto pb-20">
            <div className="flex flex-col gap-2">
              
              {/* Mobile Dropdown (Etapas) */}
              <div>
                <button 
                  onClick={() => setMobileSubmenuOpen(mobileSubmenuOpen === "etapas" ? null : "etapas")}
                  className="w-full flex items-center justify-between text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-3 px-2"
                >
                  Funil Omnichannel
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobileSubmenuOpen === "etapas" ? "rotate-180" : ""}`} />
                </button>
                
                {/* Submenu Mobile Expandível */}
                {mobileSubmenuOpen === "etapas" && (
                  <div className="flex flex-col bg-white/5 rounded-lg mb-2 overflow-hidden ml-2 border-l border-white/10">
                    {etapasLinks.map((sublink) => (
                      <Link
                        key={sublink.label}
                        to={sublink.href}
                        className="px-4 py-3 text-sm text-muted-foreground/80 hover:text-foreground hover:bg-white/5 transition-colors block"
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

              <div className="mt-6 px-2">
                <Link to="/#contato" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button variant="glow" size="sm" className="w-full h-12 text-base">
                    Fale Conosco
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;