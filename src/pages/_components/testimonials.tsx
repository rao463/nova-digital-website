import { Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/site-data.ts";
import SectionHeading from "@/components/site/section-heading.tsx";
import Reveal from "@/components/site/reveal.tsx";

export default function Testimonials() {
  return (
    <section className="border-y border-border bg-secondary/60 py-20 lg:py-28" aria-labelledby="testimonials">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Testimonials"
          title="What working together could feel like."
          description="Sample testimonials. These are fictional and shown for demonstration only."
          align="center"
        />
        <div className="grid gap-6 pt-14 md:grid-cols-2">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.1}>
              <figure className="h-full rounded-2xl border border-border bg-card p-8 shadow-sm">
                <div className="flex items-center justify-between">
                  <Quote className="size-8 text-accent" />
                  <span className="rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-muted-foreground">
                    Fictional example
                  </span>
                </div>
                <blockquote className="pt-6 text-lg text-primary">{`"${t.quote}"`}</blockquote>
                <figcaption className="flex items-center gap-3 pt-6">
                  <span className="grid size-11 place-items-center rounded-full bg-primary font-semibold text-primary-foreground">
                    {t.name.split(" ").map((n) => n[0]).join("")}
                  </span>
                  <span>
                    <span className="block font-semibold text-primary">{t.name}</span>
                    <span className="block text-sm text-muted-foreground">{t.role}</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
