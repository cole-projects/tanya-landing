import { motion, useReducedMotion } from "framer-motion";
import { brandEase, drop } from "../lib/motion.js";

/** Hero wordmark - solid black for strong contrast on the beach palette */
export default function Wordmark() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.header
      className="mb-10 w-full text-center"
      initial={reduceMotion === true ? false : drop.initial}
      animate={drop.animate}
      transition={{ duration: 0.7, ease: brandEase }}
    >
      <h1 className="inline-flex items-center justify-center gap-2.5 text-[2.15rem] font-semibold tracking-tight text-neutral-900 sm:text-5xl">
        TanyaTalk
        <span className="rounded-full bg-sea-100 px-2.5 py-1 text-[0.6rem] font-semibold uppercase tracking-widest text-sea-600 sm:text-[0.65rem]">
          Beta
        </span>
      </h1>
      <p className="mx-auto mt-2 max-w-md text-balance text-xs font-medium uppercase tracking-[0.22em] text-sea-700/95">
        When you&apos;re here, I&apos;m here 💛
      </p>
    </motion.header>
  );
}
