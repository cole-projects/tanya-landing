import { motion, useReducedMotion } from "framer-motion";
import { brandEase, drop } from "../lib/motion.js";
import VCardLink from "./VCardLink.jsx";

export default function Wordmark({ onOpenTerms }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.header
      className="mb-3 w-full text-center"
      initial={reduceMotion === true ? false : drop.initial}
      animate={drop.animate}
      transition={{ duration: 0.7, ease: brandEase }}
    >
      <h1 className="inline-flex items-center justify-center gap-2.5 text-[2.15rem] font-semibold tracking-tight text-neutral-900 sm:text-5xl">
        TanyaTalk
      </h1>
      <p className="mx-auto mt-2 max-w-xs text-balance text-base font-semibold text-sea-800/85">
        Your personal life coaching tool on iMessage
      </p>
      <div className="mx-auto mt-6 max-w-xs text-center">
        <p className="text-2xl font-bold leading-tight tracking-tight text-sea-900">
          You&apos;re spiraling. It&apos;s 2am. Nobody to call.
        </p>
        <div className="mt-3 space-y-1">
          <p className="text-base leading-snug text-sea-800/70">Is your relationship worth saving?</p>
          <p className="text-base leading-snug text-sea-800/70">Are you on the right path?</p>
          <p className="text-base leading-snug text-sea-800/70">Why does everyone else look fine?</p>
        </div>
      </div>
      <VCardLink onClick={onOpenTerms} className="mx-auto mt-6 block w-fit">Start on iMessage</VCardLink>
      <p className="mt-2.5 text-center text-sm font-semibold leading-snug text-sea-800/80">
        Start the conversation now. No signup or credit card.
      </p>
      <p className="mt-1.5 text-center text-xs leading-snug text-[#6b5c4a]/45">
        By continuing you agree to our{" "}
        <a href="/terms" className="underline underline-offset-2 hover:text-[#6b5c4a]/70">
          Terms of Service
        </a>
        .
      </p>
      <div className="mt-4 flex items-center justify-center gap-3">
        <div className="flex items-center gap-1.5 rounded-full bg-white/60 px-3 py-1.5 text-xs font-medium text-sea-800/80 ring-1 ring-sea-200/60 backdrop-blur-sm">
          <span className="text-sm">⚡️</span>
          Responds in seconds
        </div>
        <div className="flex items-center gap-1.5 rounded-full bg-white/60 px-3 py-1.5 text-xs font-medium text-sea-800/80 ring-1 ring-sea-200/60 backdrop-blur-sm">
          <span className="text-sm">🌙</span>
          Available 24/7
        </div>
      </div>
      <figure className="mx-auto mt-5 max-w-xs rounded-2xl bg-white/60 px-5 py-4 text-left ring-1 ring-sea-200/60 backdrop-blur-sm">
        <blockquote className="text-sm leading-relaxed text-sea-900/80 italic">
          &ldquo;I texted at 11pm completely overwhelmed and honestly didn&apos;t know what I was even looking for. Within a few messages it helped me see exactly what I was doing and why I kept ending up in the same place. I didn&apos;t expect that from a text. I came back the next morning.&rdquo;
        </blockquote>
        <figcaption className="mt-2 text-xs font-medium text-sea-700/60">
          -- Anonymous
        </figcaption>
      </figure>
    </motion.header>
  );
}
