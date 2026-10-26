import { useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { Button } from "@/components/ui/button.tsx";
import { NAV_LINKS } from "@/lib/site-data.ts";
import Logo from "./logo.tsx";
import HashLink from "./hash-link.tsx";

const LINK_CLASS =
  "rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-ring";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <nav
        className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 sm:px-8"
        aria-label="Main navigation"
      >
        <Logo />
        <ul className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.hash}>
              <HashLink hash={link.hash} className={LINK_CLASS}>
                {link.label}
              </HashLink>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <Button asChild className="hidden rounded-full px-5 md:inline-flex">
            <HashLink hash="contact">{"Let's Talk"}</HashLink>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X /> : <Menu />}
          </Button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="overflow-hidden border-t border-border md:hidden"
          >
            <ul className="flex flex-col gap-1 px-5 py-4">
              {NAV_LINKS.map((link) => (
                <li key={link.hash}>
                  <HashLink
                    hash={link.hash}
                    onClick={close}
                    className="block rounded-lg px-3 py-3 text-base font-medium text-primary hover:bg-secondary focus-visible:outline-2 focus-visible:outline-ring"
                  >
                    {link.label}
                  </HashLink>
                </li>
              ))}
              <li className="pt-2">
                <Button asChild className="w-full rounded-full" size="lg">
                  <HashLink hash="contact" onClick={close}>
                    {"Let's Talk"}
                  </HashLink>
                </Button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
