import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

type RevealProps = { children: ReactNode; delay?: number; className?: string };

// Fades content up when it scrolls into view. Disabled for reduced-motion users.
export default function Reveal({ children, delay = 0, className }: RevealProps) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
