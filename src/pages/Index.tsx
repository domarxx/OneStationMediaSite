import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Multiplataforma from "@/components/presentation/1-Multiplataforma";
import PrecisionGeoLift from "@/components/presentation/2-PrecisionGeoLift";
import MUA from "@/components/presentation/3-MUA";
import DriveToStore from "@/components/presentation/4-DriveToStore";
import RichMedia from "@/components/presentation/5-RichMedia";
import CTVHHS from "@/components/presentation/6-CTVHHS";
import DOOH from "@/components/presentation/7-DOOH";
import STParty from "@/components/presentation/9-STParty";
import Dashboard from "@/components/presentation/10-Dashboard";
import Partners from "@/components/presentation/12-Partners";
import PartnersDataSafety from "@/components/presentation/13-PartnersDataSafety";
import ROI from "@/components/presentation/14-ROI";
import Omnichannel from "@/components/presentation/8-Omnichannel";
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

        <section id="Multiplataforma">
          <Multiplataforma />
        </section>

        <section id="PrecisionGeoLift">
          <PrecisionGeoLift />
        </section>

        <section id="MUA">
          <MUA />
        </section>

        <section id="DriveToStore">
          <DriveToStore />
        </section>

        <section id="RichMedia">
          <RichMedia />
        </section>

        <section id="CTVHHS">
          <CTVHHS />
        </section>

        <section id="DOOH">
          <DOOH />
        </section>

        <section id="Omnichannel">
          <Omnichannel />
        </section>

        <section id="STParty">
          <STParty />
        </section>

        <section id="Dashboard">
          <Dashboard />
        </section>

        <StudiesPreview />

        <section id="Partners">
          <Partners />
        </section>

        <section id="PartnersDataSafety">
          <PartnersDataSafety />
        </section>

        <section id="ROI">
          <ROI />
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
