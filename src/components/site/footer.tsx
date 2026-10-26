import { ArrowUp, ArrowUpRight } from "lucide-react";
import { NAV_LINKS, SOCIAL_LINKS } from "@/lib/site-data.ts";
import Logo from "./logo.tsx";
import HashLink from "./hash-link.tsx";

export default function Footer() {
  const year = new Date().getFullYear();
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 md:grid-cols-[1.4fr_1fr_1fr]">
        <div className="max-w-sm space-y-4">
          <Logo light />
          <p className="text-primary-foreground/70">
            A digital agency concept crafting thoughtful websites, brands, and
            digital strategies for ambitious businesses.
          </p>
        </div>
        <nav aria-label="Footer navigation">
          <h3 className="text-sm font-semibold uppercase tracking-widest text-primary-foreground/50">
            Navigate
          </h3>
          <ul className="space-y-2 pt-4">
            {NAV_LINKS.map((link) => (
              <li key={link.hash}>
                <HashLink
                  hash={link.hash}
                  className="text-primary-foreground/80 transition-colors hover:text-primary-foreground focus-visible:outline-2 focus-visible:outline-accent"
                >
                  {link.label}
                </HashLink>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-widest text-primary-foreground/50">
            Follow
          </h3>
          <ul className="space-y-2 pt-4">
            {SOCIAL_LINKS.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-primary-foreground/80 transition-colors hover:text-primary-foreground focus-visible:outline-2 focus-visible:outline-accent"
                >
                  {s.label} <ArrowUpRight className="size-3.5" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 px-5 py-6 text-sm text-primary-foreground/60 sm:flex-row sm:items-center sm:px-8">
          <p>
            &copy; {year} Nova Digital. A self-initiated portfolio concept.
          </p>
          <button
            type="button"
            onClick={scrollTop}
            className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 px-4 py-2 text-primary-foreground transition-colors hover:bg-primary-foreground/10 focus-visible:outline-2 focus-visible:outline-accent"
          >
            Back to top <ArrowUp className="size-4" />
          </button>
        </div>
  </div>
   </footer>
  );
}
