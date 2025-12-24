import { 
  Users, 
  MapPin, 
  Footprints, 
  GraduationCap, 
  Wallet, 
  TrendingUp 
} from "lucide-react";

// Placeholder para a imagem do Mapa com Geofences (Fundo)
import mapImage from "@/assets/mapa1.jpeg";
// Placeholder para a imagem do Pin 3D (Sobreposição)
import pinOverlayImage from "@/assets/area-de-influencia.png"; 

// Dados limpos e formatados (Mantidos)
const stats = [
  { label: "Audiência (7 dias)", value: "13k", icon: Users, color: "primary" },
  { label: "População Residente", value: "122k", icon: MapPin, color: "secondary" },
  { label: "Fluxo Passante (Média)", value: "511k", icon: Footprints, color: "primary" },
  { label: "Classe (Média)", value: "A", icon: Wallet, color: "secondary" },
  { label: "Ensino Superior", value: "55%", icon: GraduationCap, color: "primary" },
  { label: "Renda Média (R$)", value: "19k", icon: TrendingUp, color: "secondary" }
];

// --- NOVO: Coordenadas (porcentagem) para os pontos verdes piscantes ---
// Ajuste 'top' e 'left' para posicionar os pontos onde quiser sobre o mapa
const activePoints = [
  { top: '16%', left: '39%' },
  { top: '40%', left: '64%' },
  { top: '50%', left: '30%' },
  { top: '51%', left: '45%' },
  { top: '25%', left: '69%' },
];

const OPoderDaMidiaMovel = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-background">
      <div className="container px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* LADO ESQUERDO: Dados e Texto */}
          <div className="flex flex-col animate-slide-right">
            
            {/* Tag / Subtítulo */}
            <div className="flex items-center gap-4 mb-6">
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

            {/* Título Principal */}
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 leading-tight">
              O Poder da <span className="text-gradient">Mídia Móvel</span>
            </h2>

            {/* Descrição */}
            <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
              Inteligência que analisa Geofences baseado em mais de 400 fontes confiáveis.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Reunindo dados demográficos, socioeconômicos e perfil de consumo, realizamos um planejamento mais assertivo, com o objetivo de impactar o público em áreas corretas e sem dispersão.
            </p>

            {/* Grid de Estatísticas: 3 Colunas */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  // 1. ADICIONADO 'relative' aqui para permitir posicionamento absoluto dentro do card
                  className="relative group card-gradient rounded-xl p-4 border-2 border-dashed border-white/20 hover-glow flex items-center gap-4"
                >
                  
                  {/* 2. NOVO: Ponto Verde Piscante no Canto Superior Direito */}
                  <div className="absolute top-3 right-3 flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </div>
                  {/* ----------------------------------------------------- */}

                  {/* LADO ESQUERDO DO CARD: Ícone */}
                  <div className={`shrink-0 inline-flex items-center justify-center w-12 h-12 rounded-lg transition-colors ${
                    stat.color === 'primary' 
                      ? 'bg-primary/20 text-primary group-hover:bg-primary/30' 
                      : 'bg-secondary/20 text-secondary group-hover:bg-secondary/30'
                  }`}>
                    <stat.icon className="w-6 h-6" />
                  </div>

                  {/* LADO DIREITO DO CARD: Texto (Valor + Label) */}
                  <div className="flex flex-col justify-center">
                    <h3 className="font-display text-2xl font-bold text-foreground leading-none mb-1">
                      {stat.value}
                    </h3>
                    <p className="text-[10px] text-muted-foreground font-medium uppercase tracking-wide leading-tight">
                      {stat.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* LADO DIREITO: Mapa / Visual (Sem alterações) */}
          <div className="relative flex items-center justify-center lg:justify-end animate-slide-left h-full min-h-[500px]">
            
            <div className="absolute inset-0 bg-gradient-to-l from-primary/5 to-transparent rounded-3xl" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/5 blur-3xl rounded-full opacity-30" />
            
            <div className="relative z-10 w-full h-full rounded-2xl border border-white/10 shadow-2xl bg-black/40 backdrop-blur-sm overflow-hidden">
              
              <img src={mapImage} alt="Mapa de Calor e Geolocalização" className="w-full h-full object-cover opacity-60" />

              {/* Pontos Verdes Piscantes no Mapa */}
              {activePoints.map((point, index) => (
                <div key={index} className="absolute" style={{ top: point.top, left: point.left }}>
                  <span className="absolute inline-flex h-4 w-4 animate-ping rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex h-4 w-4 rounded-full bg-green-500 border-2 border-white/30 shadow-[0_0_15px_rgba(34,197,94,0.6)]"></span>
                </div>
              ))}

              {/* Overlay decorativo inferior */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-lg bg-black/60 backdrop-blur-md border border-white/10 z-20">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-xs font-medium text-white/90">Dados Coletados</span>
                  </div>
                  <span className="text-xs text-white/50">Atualizado agora</span>
                </div>
              </div>

            </div>

            {/* Imagem Sobreposta (Pin 3D) MAIOR */}
            <div className="absolute -top-12 -right-12 md:-top-16 md:-right-10 w-64 md:w-80 z-30 pointer-events-none">
              <img 
                src={pinOverlayImage} 
                alt="Destaque Geofence 3D" 
                className="w-full h-auto drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)] animate-float"
                style={{ animationDuration: '4s' }} 
              />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default OPoderDaMidiaMovel;