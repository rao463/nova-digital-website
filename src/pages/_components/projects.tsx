import { Link } from "react-router-dom";
import { ArrowUpRight, Info } from "lucide-react";
import { PROJECTS } from "@/lib/site-data.ts";
import SectionHeading from "@/components/site/section-heading.tsx";
import Reveal from "@/components/site/reveal.tsx";
import ProjectImage from "@/components/site/project-image.tsx";

export default function Projects() {
  return (
    <section id="projects" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="Featured Projects"
            title="Selected concept work."
            description="Explorations across branding, fitness, and e-commerce."
          />
          <p className="flex max-w-sm items-start gap-2 rounded-xl border border-border bg-card p-4 text-sm text-muted-foreground">
            <Info className="mt-0.5 size-4 shrink-0 text-accent" />
            These are concept projects created for portfolio demonstration, not
            real client work.
          </p>
        </div>
        <div className="grid gap-8 pt-14 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.1}>
              <Link
                to={`/projects/${p.slug}`}
                className="group block h-full overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
              >
                <div className="aspect-[4/3] overflow-hidden bg-secondary">
                  <ProjectImage
                    src={p.image}
                    alt={`${p.name} website concept mockup`}
                    className="transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <p className="text-sm font-semibold text-accent">{p.category}</p>
                  <h3 className="pt-1 font-serif text-2xl font-bold text-primary">{p.name}</h3>
                  <p className="pt-2 text-muted-foreground">{p.description}</p>
                  <span className="inline-flex items-center gap-1.5 pt-5 font-semibold text-primary">
                    View Project
                    <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
