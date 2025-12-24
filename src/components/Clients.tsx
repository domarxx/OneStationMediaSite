import clientsLogos from "@/assets/clients-logos.jpg";

const clientNames = [
  // Tech & Eletrônicos
  "Philips", "Dell", "HP", "Intel", "LG", "Samsung", "Siemens", "Nokia", "Dyson", "Nikon", "Cognizant", "Zebra", "MSI", "Hansgrohe", "Geberit",
  
  // Automotivo
  "Toyota", "Hyundai", "Peugeot", "Fiat", "BMW", "Kia", "Mazda", "Seat", "Alfa Romeo", "DS Automobiles",
  
  // Mídia & Streaming
  "Spotify", "Netflix", "HBO Max", "Disney", "Hulu", "ESPN", "Warner Bros", "Universal", "Deezer", "Canal+", "BBC", "Sky", "Gaumont",
  
  // Moda & Esportes
  "Nike", "Puma", "Asics", "Salomon", "Levi's", "Zara", "Uniqlo", "Hugo Boss", "Diesel", "G-Star Raw", "Fossil", "Fanatics", "Lacoste", "Petit Bateau", "IKKS", "River Island",
  
  // Varejo & E-commerce
  "Amazon", "eBay", "Carrefour", "Leroy Merlin", "Decathlon", "Lowe's", "Darty", "Boulanger", "Electro Dépôt", "Fnac", "El Corte Inglés",
  
  // Viagem & Turismo
  "Emirates", "Booking.com", "Etihad Airways", "British Airways", "AirAsia", "Vueling", "Havas Voyages", "Samsonite",
  
  // Finanças & Seguros
  "Santander", "Allianz", "American Express", "Chase", "ING", "Sabadell", "Liberty Seguros", "Absa",
  
  // Outros (Casa, Joias, Cosméticos)
  "Swarovski", "Pandora", "Kärcher", "Eucerin", "Ixina", "Exotica"
];

const Clients = () => {
  return (
    <section className="py-24 relative overflow-hidden">
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
          Trabalhamos com as maiores marcas do mercado global, entregando resultados excepcionais em campanhas de marketing digital.
        </p>

        {/* Clients image showcase */}
        <div className="relative rounded-2xl overflow-hidden border-2 border-dashed border-white/20  bg-card/20 p-8">
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
          
          <img
            src={clientsLogos}
            alt="Logos de clientes atendidos"
            className="w-full h-auto opacity-80"
          />
        </div>

        {/* Scrolling client names */}
        <div className="mt-12 w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          {/* O container interno precisa ser largo o suficiente para não quebrar linha */}
          <div className="flex gap-8 w-max animate-scroll">
            {/* Renderizamos a lista DUAS vezes para garantir o loop infinito sem buracos */}
            {[...clientNames].map((name, index) => (
              <span
                key={`${name}-${index}`}
                className="text-sm text-muted-foreground whitespace-nowrap font-medium select-none"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
