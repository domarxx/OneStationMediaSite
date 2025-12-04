import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { studies } from "@/data/studies";

const Estudos = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-24 pb-16 md:pb-24">
        {/* Hero meia página */}
        <section className="relative min-h-[50vh] flex items-center overflow-hidden grid-background mb-12 md:mb-16">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(350_78%_52%/0.08)_0%,transparent_60%)]" />
          <div className="container relative z-10 px-6">
            <div className="grid gap-10 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] items-center">
              <div className="max-w-xl">
                <p className="text-sm font-semibold tracking-[0.25em] text-muted-foreground uppercase">
                  Estudos de Caso
                </p>
                <h1 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground">
                  DECODIFICANDO:
                  Inteligência de mídia aplicada a resultados reais
                </h1>
                <p className="mt-4 text-muted-foreground text-sm md:text-base">
                  Uma curadoria de campanhas em que combinamos dados, tecnologia e
                  criatividade para entregar performance consistente em diferentes
                  mercados e verticais.
                </p>
              </div>

              {/* Bloco de imagem exemplo */}
              <div className="relative w-full max-w-md mx-auto">
                <div className="aspect-[4/3] rounded-3xl overflow-hidden border border-border/70 bg-gradient-to-br from-primary/15 via-background to-secondary/20 shadow-lg shadow-primary/10">
                  {/* Placeholder de imagem - troque pelo conteúdo real depois */}
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-xs md:text-sm text-muted-foreground px-6 text-center">
                      Espaço para uma imagem ou composição visual dos seus cases
                      de sucesso (por exemplo, gráficos de performance, telas de
                      campanhas ou colagem de marcas).
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Lista de estudos */}
        <section className="container px-6">
          <div className="grid gap-6 md:gap-8 md:grid-cols-2">
            {studies.map((study) => (
              <Link key={study.id} to={`/estudos/${study.slug}`}>
                <article className="rounded-2xl border border-border/70 bg-muted/40 overflow-hidden hover:border-primary/70 hover:bg-background/80 transition-colors">
                  {/* Thumbnail */}
                  <div className="relative w-full aspect-[16/9] bg-background/60 border-b border-border/60">
                    <img
                      src={study.image}
                      alt={study.imageAlt}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>

                  <div className="p-6 md:p-7">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-2">
                      {study.sector}
                    </p>
                    <h2 className="text-lg md:text-xl font-semibold text-foreground mb-2">
                      {study.title}
                    </h2>
                    <p className="text-sm text-muted-foreground mb-4">
                      {study.summary}
                    </p>
                    <p className="text-xs font-medium text-foreground/90 mb-3">
                      {study.resultHighlight}
                    </p>
                    <span className="text-sm font-medium text-primary hover:text-primary/80 underline-offset-4 hover:underline">
                      Ver estudo completo
                    </span>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Estudos;


