import { Link } from "react-router-dom";
import { getLatestStudies } from "@/data/studies";
import { Button } from "@/components/ui/button";


const StudiesPreview = () => {
  const latestStudies = getLatestStudies(3);

  return (
    <section className="py-16 md:py-24 bg-muted/40">
      <div className="container px-6">
        <div className="flex items-center justify-between gap-4 mb-8">
          <div>
            <p className="text-sm font-semibold tracking-[0.25em] text-muted-foreground uppercase">
              Estudos de Caso
            </p>
            <h2 className="mt-2 text-2xl md:text-3xl font-display font-bold text-foreground">
              Resultados que comprovam a performance
            </h2>
            <p className="mt-2 text-muted-foreground text-sm md:text-base">
              Conheça alguns cases recentes em que combinamos dados, criatividade e inventário premium para gerar impacto real para as marcas.
            </p>
          </div>

        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {latestStudies.map((study) => (
            <article
              key={study.id}
              className="group rounded-xl border-2 border-dashed border-white/20 bg-background/60 overflow-hidden hover:border-primary/60 hover:bg-background/90 transition-colors"
            >
              {/* Thumbnail */}
              <div className="relative w-full aspect-[16/9] bg-background/60 border-b border-border/60">
                <img
                  src={study.image}
                  alt={study.imageAlt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              <div className="p-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary mb-2">
                  {study.sector}
                </p>
                <h3 className="text-base md:text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {study.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-3 line-clamp-3">
                  {study.summary}
                </p>
                <p className="text-[11px] font-medium text-foreground mb-4">
                  {study.resultHighlight}
                </p>
                <Link
                  to={`/estudos/${study.slug}`}
                  className="text-sm font-medium text-primary hover:text-primary/80 underline-offset-4 hover:underline"
                >
                  Ver detalhes
                </Link>
              </div>
            </article>
          ))}
        </div>
          
        <div className="hidden md:flex justify-center mt-16 pb-12">  
          <Button variant="outline" size="lg" asChild>
            <Link to="/estudos">
              Ver todos os estudos
            </Link>
          </Button>
        </div>

        <div className="mt-8 md:hidden text-center">
          <Button variant="outline" size="lg" asChild>
            <Link to="/estudos">
              Ver todos os estudos
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default StudiesPreview;


