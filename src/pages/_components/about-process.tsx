import { CheckCircle2 } from "lucide-react";
import { PRINCIPLES, PROCESS_STEPS } from "@/lib/site-data.ts";
import SectionHeading from "@/components/site/section-heading.tsx";
import Reveal from "@/components/site/reveal.tsx";

export function About() {
  return (
    <section id="about" className="bg-primary py-20 text-primary-foreground lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[oklch(0.75_0.14_275)]">
            About
          </p>
          <h2 className="pt-3 font-serif text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-5xl lg:leading-[1.08]">
            Small Details. Thoughtful Solutions. Better Digital Experiences.
          </h2>
          <p className="pt-6 text-lg text-primary-foreground/75">
            Nova Digital is a creative digital agency concept focused on
            building useful, beautiful, and accessible online experiences. We
            combine thoughtful design with modern web technologies to create
            digital solutions that help businesses communicate clearly and grow
            online.
          </p>
        </Reveal>
        <ul className="flex flex-col justify-center gap-4">
          {PRINCIPLES.map((p, i) => (
            <Reveal key={p} delay={i * 0.1}>
              <li className="flex items-center gap-4 rounded-2xl border border-primary-foreground/10 bg-primary-foreground/5 p-5">
                <CheckCircle2 className="size-6 shrink-0 text-[oklch(0.75_0.14_275)]" />
                <span className="text-lg font-semibold">{p}</span>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Process() {
  return (
    <section className="py-20 lg:py-28" aria-labelledby="process-title">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Work Process"
          title="A simple, transparent process."
          align="center"
        />
        <ol className="relative grid gap-8 pt-14 lg:grid-cols-4 lg:gap-6">
          {/* Connecting line: vertical on mobile, horizontal on desktop */}
          <div className="absolute bottom-6 left-6 top-20 w-px bg-border lg:left-0 lg:right-0 lg:top-[5.25rem] lg:bottom-auto lg:h-px lg:w-auto" />
          {PROCESS_STEPS.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.1}>
              <li className="relative flex gap-5 lg:flex-col">
                <span className="relative grid size-12 shrink-0 place-items-center rounded-full border-4 border-background bg-accent font-serif font-bold text-accent-foreground">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-serif text-xl font-bold text-primary">{step.title}</h3>
                  <p className="pt-2 text-muted-foreground">{step.description}</p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
