import { SERVICES } from "@/lib/site-data.ts";
import SectionHeading from "@/components/site/section-heading.tsx";
import Reveal from "@/components/site/reveal.tsx";

export default function Services() {
  return (
    <section id="services" className="border-y border-border bg-secondary/60 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Services"
          title="Everything you need to launch and grow online."
          description="Focused services that work together, from first sketch to final launch."
        />
        <div className="grid gap-5 pt-14 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map(({ title, description, icon: Icon }, i) => (
            <Reveal key={title} delay={i * 0.08}>
              <article className="group h-full rounded-2xl border border-border bg-card p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-xl hover:shadow-accent/5">
                <div className="grid size-12 place-items-center rounded-xl bg-primary text-primary-foreground transition-colors duration-300 group-hover:bg-accent">
                  <Icon className="size-5" />
                </div>
                <p className="pt-6 text-sm font-semibold text-muted-foreground">0{i + 1}</p>
                <h3 className="pt-1 font-serif text-xl font-bold text-primary">{title}</h3>
                <p className="pt-3 text-muted-foreground">{description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
