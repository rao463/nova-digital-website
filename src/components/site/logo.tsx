import { Link } from "react-router-dom";
import { cn } from "@/lib/utils.ts";

export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link
      to="/"
      className="group flex items-center gap-2.5 rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
      aria-label="Nova Digital home"
    >
      <span
        className={cn(
          "relative grid size-9 place-items-center rounded-xl",
          light ? "bg-primary-foreground" : "bg-primary",
        )}
      >
        <span className="size-3.5 rounded-full bg-accent transition-transform duration-300 group-hover:scale-125" />
      </span>
      <span
        className={cn(
          "font-serif text-xl font-bold tracking-tight",
          light ? "text-primary-foreground" : "text-primary",
        )}
      >
        Nova<span className="text-accent">.</span>Digital
      </span>
    </Link>
  );
}
