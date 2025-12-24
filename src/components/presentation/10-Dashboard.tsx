import { useState, useEffect } from "react";
import { 
  LayoutDashboard, 
  BarChart3, 
  Map, 
  PieChart, 
  TrendingUp,
  Target
} from "lucide-react";

import dash1 from "@/assets/dash1.jpeg";
import dash2 from "@/assets/dash2.jpeg";

// --- PLACEHOLDERS PARA AS IMAGENS ---

// Bloco 1: Imagens Animadas (Dashboard Geral)
const dashOverviewImages = [
  dash1,
  dash2
];

// Bloco 2: Visão Macro e Regional (5 Imagens)
import macroDataImg from "@/assets/dash3.png";
import dailyViewImg from "@/assets/dash4.png";
import regionalDetailImg from "@/assets/dash5.png";
import extraCardImg1 from "@/assets/tabela1.png";
import extraCardImg2 from "@/assets/tabela2.png";

const DashboardIntegrado = () => {
  // Estado para controlar a animação das imagens do Bloco 1
  const [currentImage, setCurrentImage] = useState(0);

  // Efeito de transição automática (4 segundos)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev === 0 ? 1 : 0));
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container px-6 space-y-32">

        {/* =================================================================
            ETAPA 1: TRANSPARÊNCIA EM TEMPO REAL (Com Animação)
           ================================================================= */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Conteúdo de Texto */}
          <div className="flex flex-col animate-slide-right">
            <div className="flex items-center gap-4 mb-6">
              <div className="accent-bar h-12 w-1 bg-primary" />
              <div className="flex flex-col">
                <span className="text-primary font-semibold tracking-wide uppercase text-sm">
                  Dashboard Avançado
                </span>
                <span className="text-muted-foreground text-xs uppercase tracking-widest">
                  Tempo Real
                </span>
              </div>
            </div>

            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Transparência para <span className="text-gradient">Tomar Decisões</span>
            </h2>

            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Sua campanha em tempo real. Oferecemos transparência completa dos dados de entrega, possibilitando tomadas de decisão imediatas para garantir o sucesso da sua estratégia.
            </p>

            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <div className="mt-1 p-1 rounded-full bg-primary/20 text-primary">
                  <LayoutDashboard className="w-4 h-4" />
                </div>
                <span className="text-muted-foreground">
                  <strong className="text-foreground">Monitoramento Completo:</strong> Acesso a dados de investimento, CPM, CPC e CPVA atualizados instantaneamente.
                </span>
              </li>
            </ul>
          </div>

          {/* Área da Imagem Animada (Igual ao PDV) */}
          <div className="relative group w-full h-[400px] sm:h-[500px] rounded-2xl overflow-hidden border border-white/10 bg-black/40 shadow-2xl">
            
            {/* Efeito de Glow no Fundo */}
            <div className="absolute inset-0 bg-primary/10 blur-3xl opacity-20 group-hover:opacity-30 transition-opacity z-0" />

            {/* Loop de Imagens com Transição Suave */}
            {dashOverviewImages.map((src, index) => (
              <div
                key={index}
                className={`absolute inset-0 w-full h-full transition-all duration-1000 ease-in-out ${
                  currentImage === index ? "opacity-100 scale-105" : "opacity-0 scale-100"
                }`}
              >
                <img 
                  src={src} 
                  alt={`Dashboard Visão ${index + 1}`} 
                  className="w-full h-full object-cover"
                />
                {/* Overlay leve para uniformizar */}
                <div className="absolute inset-0 bg-black/10" />
              </div>
            ))}

            {/* Indicadores de Slide (Bolinhas) */}
            <div className="absolute bottom-6 right-6 flex gap-2 z-20">
              {dashOverviewImages.map((_, idx) => (
                <div 
                  key={idx}
                  className={`h-2 w-2 rounded-full transition-all duration-500 ${
                    currentImage === idx ? "bg-primary w-6" : "bg-white/30"
                  }`}
                />
              ))}
            </div>

          </div>

        </div>

        {/* =================================================================
            ETAPA 2: VISÃO MACRO E REGIONAL (Estrutura 3 + 2)
           ================================================================= */}
        <div className="flex flex-col">
          
          {/* Cabeçalho da Seção */}
          <div className="text-center max-w-3xl mx-auto mb-16 animate-slide-up">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              Visão Macro <span className="text-gradient-secondary">& Regional</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Confiança na entrega de dados com granularidade. Acesso a indicadores macro e detalhamentos regionais para todos os usuários.
            </p>
          </div>

          {/* Container Principal dos Cards */}
          <div className="flex flex-col gap-8">
            
            {/* --- LINHA 1: 3 CARDS --- */}
            <div className="grid md:grid-cols-3 gap-8">
              
              {/* Card 1 */}
              <div className="group flex flex-col gap-4">
                <div className="relative rounded-xl overflow-hidden border border-white/10 bg-black/40 aspect-[4/3] shadow-lg hover:border-secondary/50 transition-all">
                  <img 
                    src={macroDataImg} 
                    alt="Gráficos de Dados Macro" 
                    className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                  />
                  <div className="absolute top-3 right-3 p-2 bg-black/60 backdrop-blur-md rounded-lg border border-white/10">
                    <PieChart className="w-5 h-5 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Dados Macro</h3>
                  <p className="text-sm text-muted-foreground">
                    Visão consolidada dos principais indicadores da campanha no período selecionado.
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="group flex flex-col gap-4">
                <div className="relative rounded-xl overflow-hidden border border-white/10 bg-black/40 aspect-[4/3] shadow-lg hover:border-secondary/50 transition-all">
                  <img 
                    src={dailyViewImg} 
                    alt="Gráfico de Evolução Diária" 
                    className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                  />
                  <div className="absolute top-3 right-3 p-2 bg-black/60 backdrop-blur-md rounded-lg border border-white/10">
                    <BarChart3 className="w-5 h-5 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Visão Dia a Dia</h3>
                  <p className="text-sm text-muted-foreground">
                    Acompanhamento diário de entrega com possibilidade de exportação de dados para Excel.
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="group flex flex-col gap-4">
                <div className="relative rounded-xl overflow-hidden border border-white/10 bg-black/40 aspect-[4/3] shadow-lg hover:border-secondary/50 transition-all">
                  <img 
                    src={regionalDetailImg} 
                    alt="Tabela Regional" 
                    className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                  />
                  <div className="absolute top-3 right-3 p-2 bg-black/60 backdrop-blur-md rounded-lg border border-white/10">
                    <Map className="w-5 h-5 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Detalhamento Regional</h3>
                  <p className="text-sm text-muted-foreground">
                    Análise granular de entrega loja a loja.
                  </p>
                </div>
              </div>

            </div>

            {/* --- LINHA 2: 2 CARDS CENTRALIZADOS --- */}
            <div className="grid md:grid-cols-2 gap-8 md:w-2/3 mx-auto">
              
              {/* Card 4 (Novo) */}
              <div className="group flex flex-col gap-4">
                <div className="relative rounded-xl overflow-hidden border border-white/10 bg-black/40 aspect-[4/3] shadow-lg hover:border-secondary/50 transition-all">
                  <img 
                    src={extraCardImg1} 
                    alt="Extra Card 1" 
                    className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                  />
                  <div className="absolute top-3 right-3 p-2 bg-black/60 backdrop-blur-md rounded-lg border border-white/10">
                    <TrendingUp className="w-5 h-5 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Detalhamento de Entrega</h3>
                  <p className="text-sm text-muted-foreground">
                  Detalhamento de entrega aberta para análise de desempenho.
                  </p>
                </div>
              </div>

              {/* Card 5 (Novo) */}
              <div className="group flex flex-col gap-4">
                <div className="relative rounded-xl overflow-hidden border border-white/10 bg-black/40 aspect-[4/3] shadow-lg hover:border-secondary/50 transition-all">
                  <img 
                    src={extraCardImg2} 
                    alt="Extra Card 2" 
                    className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                  />
                  <div className="absolute top-3 right-3 p-2 bg-black/60 backdrop-blur-md rounded-lg border border-white/10">
                    <Target className="w-5 h-5 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Análise de Criativo</h3>
                  <p className="text-sm text-muted-foreground">
                  Análise de cada criativo para otimização..
                  </p>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default DashboardIntegrado;