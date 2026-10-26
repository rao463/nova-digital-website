import { cn } from "@/lib/utils.ts";
import Reveal from "./reveal.tsx";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <Reveal className={cn("max-w-2xl", align === "center" && "mx-auto text-center")}>
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
        {eyebrow}
      </p>
      <h2 className="pt-3 font-serif text-3xl font-bold tracking-tight text-balance text-primary sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
        {title}
      </h2>
      {description && (
        <p className="pt-4 text-lg text-muted-foreground">{description}</p>
      )}
    </Reveal>
  );
}
