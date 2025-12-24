import { 
  Users, 
  MapPin, 
  Footprints, 
  GraduationCap, 
  Wallet, 
  TrendingUp 
} from "lucide-react";

import mapImage from "@/assets/mapa1.jpeg";
import pinOverlayImage from "@/assets/area-de-influencia.png"; 

const stats = [
  { label: "Audiência (7 dias)", value: "13k", icon: Users, color: "primary" },
  { label: "População Residente", value: "122k", icon: MapPin, color: "secondary" },
  { label: "Fluxo Passante (Média)", value: "511k", icon: Footprints, color: "primary" },
  { label: "Classe (Média)", value: "A", icon: Wallet, color: "secondary" },
  { label: "Ensino Superior", value: "55%", icon: GraduationCap, color: "primary" },
  { label: "Renda Média (R$)", value: "19k", icon: TrendingUp, color: "secondary" }
];

const activePoints = [
  { top: '16%', left: '39%' },
  { top: '40%', left: '64%' },
  { top: '50%', left: '30%' },
  { top: '51%', left: '45%' },
  { top: '25%', left: '69%' },
];

const OPoderDaMidiaMovel = () => {
  return (
    <section className="py-12 md:py-24 relative overflow-hidden bg-background">
      <div className="container px-4 md:px-6">
        
        {/* GRID PRINCIPAL: 1 coluna no mobile, 2 no desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-8 items-start">
          
          {/* --- BLOCO 1: TEXTO (Order 1 no Mobile | Coluna 1 no Desktop) --- */}
          <div className="flex flex-col animate-slide-right order-1 lg:col-start-1 lg:row-start-1">
            
            {/* Tag */}
            <div className="flex items-center gap-4 mb-4 md:mb-6">
              <div className="accent-bar h-12 w-1 bg-primary" />
              <div className="flex flex-col">
                <span className="text-primary font-semibold tracking-wide uppercase text-sm">
                  Precision Geo Lift IA
                </span>
                <span className="text-muted-foreground text-xs uppercase tracking-widest">
                  Inteligência Geofence
                </span>
              </div>
            </div>

            {/* Título */}
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 leading-tight">
              O Poder da <span className="text-gradient">Mídia Móvel</span>
            </h2>

            {/* Descrição */}
            <p className="text-base md:text-lg text-muted-foreground mb-3 md:mb-4 leading-relaxed">
              Inteligência que analisa Geofences baseado em mais de 400 fontes confiáveis.
            </p>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Reunindo dados demográficos, socioeconômicos e perfil de consumo, realizamos um planejamento mais assertivo, com o objetivo de impactar o público em áreas corretas e sem dispersão.
            </p>
          </div>

          {/* --- BLOCO 2: MAPA (Order 2 no Mobile | Coluna 2 / Linhas 1 e 2 no Desktop) --- */}
          {/* row-span-2 faz ele ocupar toda a altura da direita, ao lado do texto E dos cards */}
          <div className="relative animate-slide-left order-2 w-full h-[300px] lg:h-full min-h-[300px] lg:min-h-[500px] lg:col-start-2 lg:row-start-1 lg:row-span-2 rounded-2xl overflow-visible">
            
            {/* Conteúdo do Mapa */}
            <div className="absolute inset-0 bg-gradient-to-l from-primary/5 to-transparent rounded-3xl" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/5 blur-3xl rounded-full opacity-30" />
            
            <div className="relative z-10 w-full h-full rounded-2xl border border-white/10 shadow-2xl bg-black/40 backdrop-blur-sm overflow-hidden">
              <img src={mapImage} alt="Mapa de Calor e Geolocalização" className="w-full h-full object-cover opacity-60" />

              {/* Pontos Verdes */}
              {activePoints.map((point, index) => (
                <div key={index} className="absolute" style={{ top: point.top, left: point.left }}>
                  <span className="absolute inline-flex h-3 w-3 md:h-4 md:w-4 animate-ping rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex h-3 w-3 md:h-4 md:w-4 rounded-full bg-green-500 border-2 border-white/30 shadow-[0_0_15px_rgba(34,197,94,0.6)]"></span>
                </div>
              ))}

              {/* Overlay Inferior */}
              <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6 p-3 md:p-4 rounded-lg bg-black/60 backdrop-blur-md border border-white/10 z-20">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-[10px] md:text-xs font-medium text-white/90">Dados Coletados</span>
                  </div>
                  <span className="text-[10px] md:text-xs text-white/50">Atualizado agora</span>
                </div>
              </div>
            </div>

            {/* Pin 3D (Visível apenas em sm/lg para não tapar o mapa no mobile muito pequeno) */}
            <div className="absolute -top-6 -right-6 md:-top-12 md:-right-12 lg:-top-16 lg:-right-10 w-32 md:w-48 lg:w-64 xl:w-80 z-30 pointer-events-none hidden sm:block">
              <img 
                src={pinOverlayImage} 
                alt="Destaque Geofence 3D" 
                className="w-full h-auto drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)] animate-float"
                style={{ animationDuration: '4s' }} 
              />
            </div>
          </div>

          {/* --- BLOCO 3: CARDS (Order 3 no Mobile | Coluna 1 / Linha 2 no Desktop) --- */}
          <div className="animate-slide-right order-3 lg:col-start-1 lg:row-start-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="relative group card-gradient rounded-xl p-3 md:p-4 border-2 border-dashed border-white/20 hover-glow flex items-center gap-3 md:gap-4"
                >
                  <div className="absolute top-2 right-2 md:top-3 md:right-3 flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </div>

                  <div className={`shrink-0 inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-lg transition-colors ${
                    stat.color === 'primary' 
                      ? 'bg-primary/20 text-primary group-hover:bg-primary/30' 
                      : 'bg-secondary/20 text-secondary group-hover:bg-secondary/30'
                  }`}>
                    <stat.icon className="w-5 h-5 md:w-6 md:h-6" />
                  </div>

                  <div className="flex flex-col justify-center min-w-0">
                    <h3 className="font-display text-xl md:text-2xl font-bold text-foreground leading-none mb-1">
                      {stat.value}
                    </h3>
                    <p className="text-[9px] md:text-[10px] text-muted-foreground font-medium uppercase tracking-wide leading-tight">
                      {stat.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default OPoderDaMidiaMovel;