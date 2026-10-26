import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, Info } from "lucide-react";
import { Button } from "@/components/ui/button.tsx";
import { PROJECTS } from "@/lib/site-data.ts";
import Reveal from "@/components/site/reveal.tsx";
import ProjectImage from "@/components/site/project-image.tsx";
import HashLink from "@/components/site/hash-link.tsx";
import NotFound from "../NotFound.tsx";

export default function ProjectPage() {
  const { slug } = useParams();
  const index = PROJECTS.findIndex((p) => p.slug === slug);
  const project = PROJECTS[index];

  useEffect(() => {
    if (project) document.title = `${project.name} | Nova Digital`;
  }, [project]);

  if (!project) return <NotFound />;
  const next = PROJECTS[(index + 1) % PROJECTS.length];

  const details = [
    { label: "Category", value: project.category },
    { label: "Year", value: project.year },
    { label: "Type", value: "Concept project" },
  ];

  return (
    <article className="pb-24 pt-10">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <HashLink hash="projects" className="inline-flex items-center gap-2 rounded-md text-sm font-semibold text-muted-foreground hover:text-primary focus-visible:outline-2 focus-visible:outline-ring">
          <ArrowLeft className="size-4" /> All projects
        </HashLink>
        <Reveal className="pt-8">
          <p className="font-semibold text-accent">{project.category}</p>
          <h1 className="pt-2 font-serif text-4xl font-extrabold tracking-tight text-primary sm:text-6xl">{project.name}</h1>
          <p className="max-w-2xl pt-4 text-xl text-muted-foreground">{project.description}</p>
          <p className="mt-6 inline-flex items-start gap-2 rounded-xl border border-border bg-card p-3 text-sm text-muted-foreground">
            <Info className="mt-0.5 size-4 shrink-0 text-accent" />
            A concept project created for portfolio demonstration, not real client work.
          </p>
        </Reveal>
        <Reveal delay={0.1} className="pt-10">
          <div className="aspect-[4/3] overflow-hidden rounded-3xl border border-border bg-secondary shadow-xl sm:aspect-[16/9]">
            <ProjectImage src={project.image} alt={`${project.name} website concept mockup`} />
          </div>
        </Reveal>

        <div className="grid gap-12 pt-16 lg:grid-cols-[1fr_2fr]">
          <aside className="space-y-8">
            <dl className="space-y-4">
              {details.map((d) => (
                <div key={d.label} className="border-b border-border pb-4">
                  <dt className="text-sm text-muted-foreground">{d.label}</dt>
                  <dd className="font-semibold text-primary">{d.value}</dd>
                </div>
              ))}
            </dl>
            <div>
              <h2 className="text-sm text-muted-foreground">Color palette</h2>
              <ul className="flex gap-3 pt-3">
                {project.palette.map((c) => (
                  <li key={c.hex} className="text-center">
                    <span className="block size-14 rounded-xl border border-border shadow-sm" style={{ backgroundColor: c.hex }} />
                    <span className="block pt-2 text-xs font-medium text-primary">{c.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
          <div className="space-y-10">
            {[
              { title: "The challenge", body: project.challenge },
              { title: "Our approach", body: project.solution },
            ].map((s) => (
              <section key={s.title}>
                <h2 className="font-serif text-2xl font-bold text-primary">{s.title}</h2>
                <p className="pt-3 text-lg text-muted-foreground">{s.body}</p>
              </section>
            ))}
            <section>
              <h2 className="font-serif text-2xl font-bold text-primary">Deliverables</h2>
              <ul className="flex flex-wrap gap-2 pt-4">
                {project.deliverables.map((d) => (
                  <li key={d} className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-primary">{d}</li>
                ))}
              </ul>
            </section>
          </div>
        </div>

        <div className="mt-20 flex flex-col items-start justify-between gap-6 rounded-3xl bg-primary p-8 text-primary-foreground sm:flex-row sm:items-center sm:p-10">
          <div>
            <p className="text-sm text-primary-foreground/60">Next project</p>
            <Link to={`/projects/${next.slug}`} className="font-serif text-2xl font-bold hover:text-[oklch(0.75_0.14_275)] focus-visible:outline-2 focus-visible:outline-accent">
              {next.name}
            </Link>
          </div>
          <Button asChild size="lg" className="rounded-full bg-accent text-accent-foreground hover:bg-accent/90">
            <HashLink hash="contact">Start a Project <ArrowRight /></HashLink>
          </Button>
        </div>
      </div>
    </article>
  );
}
