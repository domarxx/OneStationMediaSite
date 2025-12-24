import { 
  LayoutDashboard, 
  Eye, 
  BarChart3, 
  FileSpreadsheet, 
  Store, 
  DollarSign,
  Layers,
  Newspaper
} from "lucide-react";

// Placeholder para a imagem geral do Dashboard
const dashboardImage = "/placeholder.svg";

// --- DADOS PÁGINA 11 (Métricas Principais) ---
const mainMetrics = [
  { label: "Investimento", value: "R$ 9.448,34", icon: DollarSign },
  { label: "CPM", value: "R$ 14,56", icon: BarChart3 },
  { label: "CPVA", value: "R$ 1,62", icon: Eye }
];

// --- DADOS PÁGINA 11 e 12 (Features) ---
const features = [
  {
    title: "Sua Campanha em Tempo Real",
    description: "Transparência completa de dados de entrega. Possibilitando tomadas de decisão imediata.",
    icon: LayoutDashboard,
    color: "primary"
  },
  {
    title: "Visão Macro e Regional",
    description: "Dados de entrega diários com possibilidade de download para Excel e detalhamento loja a loja.",
    icon: Store,
    color: "secondary"
  },
  {
    title: "Transparência Completa",
    description: "Acesso a dados de investimento, CPM, CPC e CPVA, acessível a todos os usuários.",
    icon: FileSpreadsheet,
    color: "primary"
  }
];

// --- DADOS PÁGINA 13 (Tabela Publishers) ---
const publishersData = [
  { name: "Metropoles", impressions: "13.015", clicks: "198", ctr: "1,52%" },
  { name: "Valor investe - Globo", impressions: "10.948", clicks: "143", ctr: "1,31%" },
  { name: "Estadão", impressions: "8.442", clicks: "92", ctr: "1,09%" },
  { name: "IstoE - Dinheiro", impressions: "7.761", clicks: "81", ctr: "1,04%" },
  { name: "R7 - Portal de notícias", impressions: "7.041", clicks: "68", ctr: "0.97%" },
];

// --- DADOS PÁGINA 13 (Tabela Criativos) ---
const creativesData = [
  { name: "Planik_ibirapuera_320X50 VERDE", impressions: "26.325", clicks: "304", ctr: "1,15%" },
  { name: "Planik_ibirapuera_320X50 PRETO", impressions: "20.594", clicks: "244", ctr: "1,18%" },
  { name: "Planik_ibirapuera_320X50 BRANCO", impressions: "20.376", clicks: "232", ctr: "1,14%" },
  { name: "Planik_ibirapuera_320x480-LIVING", impressions: "11.800", clicks: "123", ctr: "1.04%" },
];

const DashboardCompleto = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-background">
      <div className="container px-6">
        
        {/* =================================================================
            SEÇÃO 1: INTRODUÇÃO E DASHBOARD GERAL (Páginas 11 e 12)
           ================================================================= */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-24">
          
          {/* LADO ESQUERDO: Texto e Features */}
          <div className="flex flex-col animate-slide-right">
            
            {/* Tag */}
            <div className="flex items-center gap-4 mb-6">
              <div className="accent-bar h-12 w-1 bg-primary" />
              <div className="flex flex-col">
                <span className="text-primary font-semibold tracking-wide uppercase text-sm">
                  Business Intelligence
                </span>
                <span className="text-muted-foreground text-xs uppercase tracking-widest">
                  Transparência Total
                </span>
              </div>
            </div>

            {/* Título */}
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Transparência para <span className="text-gradient">Tomar Decisões</span>
            </h2>

            {/* Descrição */}
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Confiança e transparência na entrega de dados, possibilitando acesso a todos os usuários que necessitarem acompanhar os indicadores e tomarem decisões imediatas para uma campanha de sucesso.
            </p>

            {/* Cards de Features (Padrão Horizontal) */}
            <div className="flex flex-col gap-5">
              {features.map((item, index) => (
                <div 
                  key={index}
                  className="group card-gradient rounded-xl p-5 border-2 border-dashed border-white/20 hover-glow flex items-center gap-5 transition-all hover:-translate-y-1"
                >
                  <div className={`shrink-0 inline-flex items-center justify-center w-14 h-14 rounded-lg transition-colors ${
                    item.color === 'primary' 
                      ? 'bg-primary/20 text-primary group-hover:bg-primary/30' 
                      : 'bg-secondary/20 text-secondary group-hover:bg-secondary/30'
                  }`}>
                    <item.icon className="w-7 h-7" />
                  </div>
                  <div className="flex flex-col">
                    <h3 className="font-display text-lg font-bold text-foreground mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-snug">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* LADO DIREITO: Visual Dashboard e Métricas Principais */}
          <div className="flex flex-col animate-slide-left">
            
            {/* Bloco de Métricas (Simulando o topo do Dashboard da Pág 11) */}
            <div className="grid grid-cols-3 gap-3 mb-6">
              {mainMetrics.map((metric, idx) => (
                <div key={idx} className="bg-secondary/10 border border-white/10 p-4 rounded-xl flex flex-col items-center text-center">
                  <metric.icon className="w-5 h-5 text-primary mb-2" />
                  <span className="text-[10px] uppercase text-muted-foreground font-bold mb-1">{metric.label}</span>
                  <span className="text-base sm:text-lg font-bold text-foreground">{metric.value}</span>
                </div>
              ))}
            </div>

            {/* Imagem do Dashboard */}
            <div className="relative z-10 w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-black/40 backdrop-blur-sm group">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent opacity-20" />
              <img 
                src={dashboardImage} 
                alt="Visão Macro e Regional do Dashboard" 
                className="w-full h-auto object-cover opacity-90 transition-transform duration-700 group-hover:scale-[1.02]"
              />
            </div>
          </div>

        </div>

        {/* =================================================================
            SEÇÃO 2: DETALHAMENTO ABERTO (Página 13)
           ================================================================= */}
        <div className="animate-slide-up">
          
          <div className="flex items-center gap-3 mb-8">
            <Layers className="w-6 h-6 text-primary" />
            <h3 className="text-2xl font-bold text-foreground">Detalhamento de Entrega Aberta</h3>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            
            {/* TABELA 1: PUBLISHERS */}
            <div className="rounded-xl border border-white/10 bg-black/20 overflow-hidden">
              <div className="p-4 border-b border-white/10 bg-white/5 flex items-center gap-2">
                <Newspaper className="w-4 h-4 text-secondary" />
                <h4 className="font-bold text-sm uppercase tracking-wide">Desempenho por Publisher</h4>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                  <thead className="text-xs text-muted-foreground uppercase bg-white/5">
                    <tr>
                      <th className="px-4 py-3">Publisher</th>
                      <th className="px-4 py-3 text-right">Imp.</th>
                      <th className="px-4 py-3 text-right">Cliques</th>
                      <th className="px-4 py-3 text-right">CTR</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {publishersData.map((row, i) => (
                      <tr key={i} className="hover:bg-white/5 transition-colors">
                        <td className="px-4 py-3 font-medium text-foreground">{row.name}</td>
                        <td className="px-4 py-3 text-right text-muted-foreground">{row.impressions}</td>
                        <td className="px-4 py-3 text-right text-muted-foreground">{row.clicks}</td>
                        <td className="px-4 py-3 text-right text-primary font-bold">{row.ctr}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* TABELA 2: CRIATIVOS */}
            <div className="rounded-xl border border-white/10 bg-black/20 overflow-hidden">
              <div className="p-4 border-b border-white/10 bg-white/5 flex items-center gap-2">
                <Layers className="w-4 h-4 text-secondary" />
                <h4 className="font-bold text-sm uppercase tracking-wide">Análise de Criativos</h4>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                  <thead className="text-xs text-muted-foreground uppercase bg-white/5">
                    <tr>
                      <th className="px-4 py-3">Criativo</th>
                      <th className="px-4 py-3 text-right">Imp.</th>
                      <th className="px-4 py-3 text-right">Cliques</th>
                      <th className="px-4 py-3 text-right">CTR</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {creativesData.map((row, i) => (
                      <tr key={i} className="hover:bg-white/5 transition-colors">
                        <td className="px-4 py-3 font-medium text-foreground truncate max-w-[150px]" title={row.name}>{row.name}</td>
                        <td className="px-4 py-3 text-right text-muted-foreground">{row.impressions}</td>
                        <td className="px-4 py-3 text-right text-muted-foreground">{row.clicks}</td>
                        <td className="px-4 py-3 text-right text-primary font-bold">{row.ctr}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

          </div>
          
          <p className="text-center text-sm text-muted-foreground mt-8">
            * Dados reais extraídos do sistema para análise de desempenho e otimização.
          </p>

        </div>

      </div>
    </section>
  );
};

export default DashboardCompleto;