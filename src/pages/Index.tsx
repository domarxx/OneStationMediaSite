import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Services from "@/components/Services";
import Differentiators from "@/components/Differentiators";
import Clients from "@/components/Clients";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
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
