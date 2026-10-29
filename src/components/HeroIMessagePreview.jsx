import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

const USER_QUESTIONS = [
  "why does everyone else look fine except me",
  "is my relationship worth saving?",
  "am I even on the right path?",
];

const TANYA_REPLY =
  "Because you're comparing your inside to their outside. What happened today that brought this up?";

export default function HeroIMessagePreview() {
  const reduceMotion = useReducedMotion();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (reduceMotion) return undefined;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % USER_QUESTIONS.length);
    }, 4000);
    return () => window.clearInterval(id);
  }, [reduceMotion]);

  return (
    <div className="hero-imessage-preview w-full rounded-2xl bg-white/72 px-3.5 py-3 ring-1 ring-sea-200/55 backdrop-blur-md">
      <p className="mb-2.5 text-center text-[11px] font-semibold tracking-wide text-sea-700/55">
        iMessage · 2:04 AM
      </p>
      <div className="flex flex-col gap-2">
        <div className="flex justify-end">
          <AnimatePresence mode="wait">
            <motion.p
              key={USER_QUESTIONS[index]}
              initial={reduceMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={reduceMotion ? undefined : { opacity: 0 }}
              transition={{ duration: 0.55 }}
              className="max-w-[92%] rounded-[1.1rem] rounded-br-md bg-[#007aff] px-3 py-2 text-left text-[13px] leading-snug text-white"
            >
              {USER_QUESTIONS[index]}
            </motion.p>
          </AnimatePresence>
        </div>
        <div className="flex justify-start">
          <p className="max-w-[92%] rounded-[1.1rem] rounded-bl-md bg-[#e9e9eb] px-3 py-2 text-left text-[13px] leading-snug text-[#1c1c1e]">
            {TANYA_REPLY}
          </p>
        </div>
      </div>
    </div>
  );
}
