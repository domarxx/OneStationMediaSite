import clientsLogos from "@/assets/clients-logos.jpg";

const clientNames = [
  "Philips", "Dell", "HP", "Intel", "LG", "Toyota", "Hyundai", "Peugeot",
  "Siemens", "Nike", "Puma", "Dyson", "Fiat", "Samsung", "Spotify", "Netflix",
  "HBO Max", "Disney", "Emirates", "Booking", "Zara", "Diesel", "Swarovski", "Pandora"
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

        <p className="text-lg text-muted-foreground max-w-2xl mb-12">
          Trabalhamos com as maiores marcas do mercado global, entregando resultados excepcionais em campanhas de marketing digital.
        </p>

        {/* Clients image showcase */}
        <div className="relative rounded-2xl overflow-hidden border border-border/30 bg-card/20 p-8">
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
          
          <img
            src={clientsLogos}
            alt="Logos de clientes atendidos"
            className="w-full h-auto opacity-80"
          />
        </div>

        {/* Scrolling client names */}
        <div className="mt-12 overflow-hidden">
          <div className="flex gap-8 animate-[scroll_30s_linear_infinite]">
            {[...clientNames, ...clientNames].map((name, index) => (
              <span
                key={`${name}-${index}`}
                className="text-sm text-muted-foreground whitespace-nowrap font-medium"
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
