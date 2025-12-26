import { useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { studies } from "@/data/studies";

const EstudoDetalhe = () => {
  const { slug } = useParams<{ slug: string }>();

  const study = useMemo(
    () => studies.find((s) => s.slug === slug),
    [slug]
  );

  if (!study) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="pt-24 pb-16">
          <section className="container px-6">
            <div className="max-w-xl">
              <p className="text-sm font-semibold tracking-[0.25em] text-muted-foreground uppercase">
                Estudos de Caso
              </p>
              <h1 className="mt-3 text-2xl md:text-3xl font-display font-bold text-foreground">
                Estudo não encontrado
              </h1>
              <p className="mt-3 text-muted-foreground text-sm md:text-base">
                Não encontramos o estudo que você tentou acessar. Ele pode ter sido movido ou ainda está em produção.
              </p>
              <div className="mt-6">
                <Link
                  to="/estudos"
                  className="text-sm font-medium text-primary hover:text-primary/80 underline-offset-4 hover:underline"
                >
                  Voltar para todos os estudos
                </Link>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-24 pb-16 md:pb-24">
        {/* Hero do case */}
        <section className="container px-6 mb-10 md:mb-16">
          <div className="grid gap-10 md:grid-cols-2 items-start md:items-center lg:items-start">
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-2">
                {study.sector}
              </p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground">
                {study.title}
              </h1>
              {study.detailSubtitle && (
                <p className="mt-3 text-muted-foreground text-sm md:text-base max-w-xl">
                  {study.detailSubtitle}
                </p>
              )}
              <p className="mt-4 text-xs md:text-sm font-medium text-foreground/90">
                {study.resultHighlight}
              </p>

              <div className="mt-6">
                <Link
                  to="/estudos"
                  className="text-sm font-medium text-primary hover:text-primary/80 underline-offset-4 hover:underline"
                >
                  ← Voltar para todos os estudos
                </Link>
              </div>
            </div>

            <div className="w-full max-w-sm md:max-w-md md:ml-auto">
              <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden border border-border/70 bg-background/60 shadow-lg shadow-primary/10">
                <img
                  src={study.image}
                  alt={study.imageAlt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Conteúdo detalhado */}
        <section className="container px-6">
          <div className="space-y-10">
            {study.sections?.map((section) => (
              <article key={section.id} className="space-y-3">
                <h2 className="text-xl md:text-2xl font-semibold text-foreground">
                  {section.title}
                </h2>
                {section.paragraphs.map((paragraph, idx) => (
                  <p
                    key={idx}
                    className="text-sm md:text-base leading-relaxed text-muted-foreground"
                  >
                    {paragraph}
                  </p>
                ))}
              </article>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default EstudoDetalhe;


