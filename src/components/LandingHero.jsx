import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import HeroIMessagePreview from "./HeroIMessagePreview.jsx";

function ChatBubbleIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
      className="shrink-0"
    >
      <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
    </svg>
  );
}

function HeroLegal({ className = "" }) {
  return (
    <p className={`text-center text-[11px] leading-snug text-[#6b5c4a]/55 ${className}`}>
      Not for emergencies. In crisis, call or text 988. By continuing you agree to our{" "}
      <a href="/terms" className="underline underline-offset-2 hover:text-[#6b5c4a]/75">
        Terms
      </a>
      .
    </p>
  );
}

function PrimaryCta({ onOpenTerms, className = "" }) {
  return (
    <motion.button
      type="button"
      className={`add-contact-cta add-contact-cta--hero w-full ${className}`}
      onClick={onOpenTerms}
      whileTap={{ scale: 0.98 }}
    >
      <span className="add-contact-cta__label inline-flex items-center justify-center gap-2">
        <ChatBubbleIcon />
        Text Tanya now
      </span>
    </motion.button>
  );
}

export default function LandingHero({ onOpenTerms }) {
  const endRef = useRef(null);
  const [stickyCta, setStickyCta] = useState(false);

  useEffect(() => {
    const el = endRef.current;
    if (!el) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => setStickyCta(!entry.isIntersecting),
      { root: null, threshold: 0, rootMargin: "0px 0px -8px 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section
        id="top"
        className="hero-atf scroll-mt-6 sm:scroll-mt-8"
        aria-label="TanyaTalk introduction"
      >
        <div className="hero-atf__inner mx-auto w-full max-w-[440px] md:max-w-4xl">
          <div className="hero-atf__grid">
            <div className="hero-atf__copy">
              <header className="text-center md:text-left">
                <p className="text-[2.125rem] font-extrabold leading-none tracking-[-0.03em] text-[#52333a]">
                  TanyaTalk
                </p>
                <p className="mt-1.5 text-[13px] font-semibold text-sea-800/85">
                  Life coaching, over iMessage
                </p>
              </header>

              <h1 className="mt-3 text-center text-[2.375rem] font-extrabold leading-[1.05] tracking-[-0.03em] text-[#52333a] md:mt-5 md:text-left">
                It&apos;s 2am.
                <br />
                You&apos;re spiraling.
              </h1>

              <p className="mt-3 text-center text-[17px] leading-snug text-[#6b5c4a]/75 md:text-left">
                Text Tanya. Real coaching back in seconds.
              </p>

              <div className="mt-3 md:mt-5">
                <PrimaryCta onOpenTerms={onOpenTerms} />
                <p className="mt-2 text-center text-[13px] font-medium text-sea-800/65 md:text-left">
                  Free to start. No signup, no card.
                </p>
              </div>
            </div>

            <div className="hero-atf__aside">
              <HeroIMessagePreview />
              <ul className="mt-3 flex flex-wrap items-center justify-center gap-x-2 gap-y-1.5 text-[12px] font-medium text-sea-800/72 md:justify-start">
                <li>Replies in seconds</li>
                <li aria-hidden className="text-sea-400/80">
                  ·
                </li>
                <li>24/7</li>
                <li aria-hidden className="text-sea-400/80">
                  ·
                </li>
                <li>ICF-certified coach methods</li>
              </ul>
              <HeroLegal className="mt-3 hidden md:block" />
            </div>
          </div>

          <HeroLegal className="mt-4 md:hidden" />
        </div>
        <div ref={endRef} className="h-px w-full" aria-hidden />
      </section>

      <div
        className={[
          "hero-sticky-cta pointer-events-none fixed inset-x-0 bottom-0 z-30 px-[22px] pb-[max(0.75rem,env(safe-area-inset-bottom))] transition-transform duration-300",
          stickyCta ? "translate-y-0" : "translate-y-full",
        ].join(" ")}
        aria-hidden={!stickyCta}
      >
        <div className="pointer-events-auto mx-auto w-full max-w-[440px]">
          <PrimaryCta onOpenTerms={onOpenTerms} />
        </div>
      </div>
    </>
  );
}
