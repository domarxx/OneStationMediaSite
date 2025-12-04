import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Services from "@/components/Services";
import Differentiators from "@/components/Differentiators";
import Clients from "@/components/Clients";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import StudiesPreview from "@/components/StudiesPreview";

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        const yOffset = -80; // altura aproximada da navbar
        const y =
          element.getBoundingClientRect().top + window.scrollY + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    } else {
      window.scrollTo({ top: 0 });
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main>
        <Hero />

        <section id="solucoes">
          <Features />
          <Services />
        </section>

        <section id="diferenciais">
          <Differentiators />
        </section>

        <StudiesPreview />

        <section id="clientes">
          <Clients />
        </section>

        <section id="contato">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
