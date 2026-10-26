import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button.tsx";
import HashLink from "@/components/site/hash-link.tsx";

const TRUST = ["Creative thinking", "Thoughtful design", "Reliable development"];

export default function Hero() {
  const reduce = useReducedMotion();
  const fade = (delay: number) => ({
    initial: reduce ? false : { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease: "easeOut" as const },
  });

  return (
    <section id="top" className="relative overflow-hidden">
      {/* Subtle dot grid for depth */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(oklch(0.24_0.07_268/0.08)_1px,transparent_1px)] [background-size:22px_22px] [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 pb-20 pt-14 sm:px-8 lg:grid-cols-[1.05fr_1fr] lg:pb-28 lg:pt-20">
        <div>
          <motion.p
            {...fade(0)}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-1.5 text-sm font-medium text-muted-foreground shadow-sm"
          >
            <Sparkles className="size-4 text-accent" /> Digital agency concept
          </motion.p>
          <motion.h1
            {...fade(0.1)}
            className="pt-6 font-serif text-[2.5rem] font-extrabold leading-[1.05] tracking-tight text-balance text-primary sm:text-6xl lg:text-[4.25rem]"
          >
            We Build Digital Experiences That{" "}
            <span className="text-accent">Move Businesses</span> Forward.
          </motion.h1>
          <motion.p
            {...fade(0.2)}
            className="max-w-xl pt-6 text-lg text-muted-foreground sm:text-xl"
          >
            From stunning websites to thoughtful digital experiences, we help
            ambitious brands turn their ideas into meaningful results.
          </motion.p>
          <motion.div {...fade(0.3)} className="flex flex-col gap-3 pt-9 sm:flex-row">
            <Button asChild size="lg" className="h-12 rounded-full px-7 text-base">
              <HashLink hash="contact">
                Start a Project <ArrowRight />
              </HashLink>
            </Button>
            <Button asChild size="lg" variant="secondary" className="h-12 rounded-full border border-border bg-card px-7 text-base hover:bg-secondary">
              <HashLink hash="projects">Explore Our Work</HashLink>
            </Button>
          </motion.div>
          <motion.ul {...fade(0.4)} className="flex flex-wrap gap-x-6 gap-y-2 pt-9">
            {TRUST.map((t) => (
              <li key={t} className="flex items-center gap-2 text-sm font-medium text-primary">
                <span className="grid size-5 place-items-center rounded-full bg-accent/10">
                  <Check className="size-3 text-accent" />
                </span>
                {t}
              </li>
            ))}
          </motion.ul>
        </div>
        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.25, ease: "easeOut" }}
        >
          <HeroMockup />
        </motion.div>
      </div>
    </section>
  );
}

// A browser-window mockup built from simple shapes, so it never breaks.
function HeroMockup() {
  return (
    <div className="relative mx-auto w-full max-w-xl" aria-hidden="true">
      <div className="absolute -right-6 -top-6 size-40 rounded-full bg-accent/20 blur-3xl" />
      <div className="relative rounded-2xl border border-border bg-card shadow-[0_30px_80px_-30px_oklch(0.24_0.07_268/0.35)]">
        <div className="flex items-center gap-1.5 border-b border-border px-4 py-3">
          <span className="size-2.5 rounded-full bg-border" />
          <span className="size-2.5 rounded-full bg-border" />
          <span className="size-2.5 rounded-full bg-border" />
          <span className="ml-3 h-5 flex-1 rounded-md bg-secondary" />
        </div>
        <div className="space-y-5 p-5 sm:p-7">
          <div className="flex items-center justify-between">
            <span className="h-3 w-20 rounded-full bg-primary" />
            <div className="flex gap-2">
              <span className="h-2 w-8 rounded-full bg-border" />
              <span className="h-2 w-8 rounded-full bg-border" />
              <span className="h-2 w-8 rounded-full bg-border" />
            </div>
          </div>
          <div className="grid grid-cols-[1.3fr_1fr] gap-4">
            <div className="space-y-3 pt-2">
              <span className="block h-4 w-full rounded-full bg-primary" />
              <span className="block h-4 w-4/5 rounded-full bg-primary" />
              <span className="block h-2 w-full rounded-full bg-border" />
              <span className="block h-2 w-3/4 rounded-full bg-border" />
              <span className="mt-4 block h-7 w-24 rounded-full bg-accent" />
            </div>
            <div className="aspect-square rounded-xl bg-primary p-3">
              <div className="grid h-full place-items-center rounded-lg bg-[conic-gradient(from_200deg,oklch(0.54_0.24_275),oklch(0.24_0.07_268),oklch(0.7_0.15_275))]">
                <span className="size-10 rounded-full bg-primary-foreground/90" />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {[0, 1, 2].map((i) => (
              <div key={i} className="space-y-2 rounded-lg border border-border p-3">
                <span className="block size-5 rounded-md bg-accent/15" />
                <span className="block h-2 w-full rounded-full bg-border" />
                <span className="block h-2 w-2/3 rounded-full bg-border" />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute -bottom-6 -left-4 rounded-xl border border-border bg-card px-4 py-3 shadow-lg sm:-left-8">
        <p className="text-xs text-muted-foreground">Performance score</p>
        <p className="font-serif text-2xl font-bold text-primary">
          98<span className="text-accent">/100</span>
        </p>
      </div>
    </div>
  );
}
