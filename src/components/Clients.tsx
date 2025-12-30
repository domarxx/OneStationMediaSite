import { useMemo } from "react";
import clientsLogos from "@/assets/clients-logos.jpg";

// Lista revisada com 114 clientes
const clientNames = [
  "GWM", "99", "Abbraccio", "Abrafati", "Acer", "Shopping Anália Franco", "Universidade Anhembi Morumbi", "Ânima Educação", "ApexBrasil", "Autostar", 
  "Banco do Nordeste", "Banestes", "Banrisul", "Baterias Moura", "Becel", "Bem-te-vi", "Bernardo Concept", "O Boticário", 
  "Braskem", "Brother", "BYD Dahruj", "Caedu", "Caixa", "Carajás Home Center", "Carrefour", "Cemig", "Centro Europeu", "CFL", 
  "Clínica Sanabria", "Copa Energia", "Copasa", "Cruzeiro do Sul Educacional", "Cyrela", "Nissan Dahruj", "Distac", "Dom Bosco", 
  "Ecovias", "EDP", "Electrolux", "Energisa", "Entre Amigos", "EPD", "Epoch", "Eskala", "Estrella Galicia", "FDB", "FEI", 
  "FEMSA", "Futurecom", "GE HealthCare", "Governo do Ceará", "Rede Graal", "Greco Design", "Grupo Mateus", "Grupo Pão de Açúcar", 
  "Grupo Roma", "GT Building", "GWM Dahruj", "H2O Filmes", "Hermes Pardini", "Hirota Food", "Idea!Zarvos", "Intimissimi", 
  "Invicto", "iPlace", "JPR", "Kia", "Leroy Merlin", "Libresse", "L'Occitane", "Lojas Gang", "Mangabeiras", 
  "Mercedes-Benz", "Motoparts", "NBA", "Nissan Dahruj", "Nissei", "NorteShopping", "Oba Hortifruti", "Patriani", "Pernambucanas", 
  "Cerveja Petra", "Pilecco Nobre", "Planik", "Prefeitura do Recife", "(re)energisa", "Recife Outlet", "Redemac", "Ri Happy", "Richester", 
  "Samsung", "São Judas", "Senac", "SETUR", "Shell", "Shopping Ibirapuera", "Shopping Pátio Higienópolis", 
  "Salvador Shopping", "Sicredi", "SKY", "Supermercado DIA", "TCL", "Telhanorte", "Lojas Torra", "Treloso", "Tumelero", 
  "Tupan", "Unilever", "Unimed", "Unisa", "Univag", "Vale", "Vero", "Vitamedic", "ZEISS"
];

const Clients = () => {
  // 1. Divide a lista em 4 partes (Melhor distribuição para 114 itens)
  const rows = useMemo(() => {
    // Definimos o número de linhas desejado aqui
    const numRows = 4;
    const chunkSize = Math.ceil(clientNames.length / numRows);
    
    return Array.from({ length: numRows }, (_, i) => 
      clientNames.slice(i * chunkSize, (i + 1) * chunkSize)
    );
  }, []);

  return (
    <section id="clientes" className="py-24 relative overflow-hidden bg-background">
      
      {/* Aumentei o tempo para 90s. 
         Como temos menos nomes por linha (28 em vez de 38), a animação correria mais rápido.
         Aumentar o tempo mantém a leitura suave e elegante.
      */}
      <style>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scroll-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-scroll-left {
          animation: scroll-left 90s linear infinite;
        }
        .animate-scroll-right {
          animation: scroll-right 90s linear infinite;
        }
      `}</style>

      <div className="container px-6 relative z-10">
        {/* Header */}
        <div className="flex items-center gap-4 mb-4">
          <div className="accent-bar h-12" />
          <span className="text-primary font-semibold tracking-wide uppercase">
            Clientes
          </span>
        </div>

        <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
          Clientes <span className="text-gradient">Atendidos</span>
        </h2>

        <p className="text-lg text-muted-foreground mb-12">
          Trabalhamos com as maiores marcas do mercado global, entregando resultados excepcionais.
        </p>

        {/* Imagem dos Logos 
        <div className="relative rounded-2xl overflow-hidden border-2 border-dashed border-white/20 bg-card/20 p-8 mb-16">
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
          <img
            src={clientsLogos}
            alt="Logos de clientes atendidos"
            className="w-full h-auto opacity-80"
          />
        </div>*/}

        {/* --- SCROLLING TEXT WALL --- */}
        {/* Adicionei 'gap-x' para espaçamento vertical e horizontal equilibrado */}
        <div className="mt-12 flex flex-col gap-5 w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          
          {rows.map((rowItems, rowIndex) => (
            <div key={rowIndex} className="flex overflow-hidden w-full">
              <div 
                className={`flex gap-10 w-max ${
                  // Linhas Pares (0, 2) vão para Esquerda
                  // Linhas Ímpares (1, 3) vão para Direita
                  rowIndex % 2 === 0 ? 'animate-scroll-left' : 'animate-scroll-right'
                }`}
              >
                {/* Duplicamos o array para loop infinito */}
                {[...rowItems, ...rowItems].map((name, idx) => (
                  <span
                    key={`${rowIndex}-${idx}`}
                    className="text-sm text-muted-foreground whitespace-nowrap font-medium select-none hover:text-primary transition-colors duration-300"
                  >
                    {name}
                  </span>
                ))}
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Clients;