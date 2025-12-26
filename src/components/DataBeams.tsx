// src/components/DataBeams.tsx

const DataBeams = () => {
    // Criamos um array de 20 itens para gerar os feixes
    const beams = Array.from({ length: 20 });
  
    return (
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {beams.map((_, i) => {
          // Geramos valores aleatórios para cada feixe parecer único
          const leftPos = Math.floor(Math.random() * 100); // Posição horizontal (0 a 100%)
          const delay = Math.random() * 5; // Atraso aleatório (0 a 5s)
          const duration = 2 + Math.random() * 3; // Duração aleatória (2s a 5s)
          const height = 20 + Math.random() * 30; // Altura aleatória (20% a 50% da tela)
  
          return (
            <div
              key={i}
              className="absolute bottom-0 w-[2px] bg-gradient-to-t from-primary via-primary/50 to-transparent origin-bottom animate-beam opacity-0"
              style={{
                left: `${leftPos}%`,
                height: `${height}%`,
                animationDelay: `${delay}s`,
                animationDuration: `${duration}s`,
              }}
            />
          );
        })}
      </div>
    );
  };
  
  export default DataBeams;