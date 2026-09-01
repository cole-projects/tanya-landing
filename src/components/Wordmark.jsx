import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion, useInView } from "framer-motion";
import { brandEase, drop } from "../lib/motion.js";
import VCardLink from "./VCardLink.jsx";

function easeOutQuart(t) {
  return 1 - Math.pow(1 - t, 4);
}

function useCountUp(end, duration = 1800) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let startTime = null;

    function animate(timestamp) {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(easeOutQuart(progress) * end));
      if (progress < 1) requestAnimationFrame(animate);
      else setCount(end);
    }

    requestAnimationFrame(animate);
  }, [isInView, end, duration]);

  return { count, ref };
}

function formatCount(n, end) {
  if (end >= 1000) {
    if (n >= 1000) return `${(n / 1000).toFixed(1)}k+`;
    return n.toString();
  }
  return n.toString();
}

export default function Wordmark({ onOpenTerms }) {
  const reduceMotion = useReducedMotion();
  const { count: messages, ref: messagesRef } = useCountUp(2200, 1800);
  const { count: convos, ref: convosRef } = useCountUp(45, 1400);

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
      <p className="mx-auto mt-2 max-w-md text-balance text-xs font-medium uppercase tracking-[0.22em] text-sea-700/95">
        When you&apos;re here, I&apos;m here 💛
      </p>
      <VCardLink onClick={onOpenTerms} className="mx-auto mt-6 block w-fit">Start on iMessage</VCardLink>
      <p className="mt-2.5 text-center text-xs leading-snug text-[#6b5c4a]/60">
        Test it free for 25 messages. No signup required, no credit card.
      </p>
      <div className="mt-4 flex items-center justify-center gap-3">
        <div ref={messagesRef} className="flex items-center gap-1.5 rounded-full bg-white/60 px-3 py-1.5 text-xs font-medium text-sea-800/80 ring-1 ring-sea-200/60 backdrop-blur-sm">
          <span className="text-sm">💬</span>
          <span className="tabular-nums">{formatCount(messages, 2200)}</span> messages sent
        </div>
        <div ref={convosRef} className="flex items-center gap-1.5 rounded-full bg-white/60 px-3 py-1.5 text-xs font-medium text-sea-800/80 ring-1 ring-sea-200/60 backdrop-blur-sm">
          <span className="text-sm">✨</span>
          <span className="tabular-nums">{convos}+</span> conversations
        </div>
      </div>
    </motion.header>
  );
}
