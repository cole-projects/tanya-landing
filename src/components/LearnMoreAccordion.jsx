import { useEffect } from "react";
import { motion } from "framer-motion";
import { MotionGlassPanel } from "./GlassPanel.jsx";
import { brandEase, rise } from "../lib/motion.js";
import { WHO_SECTION_PHOTO_ALT } from "../content/brand.js";

const SECTION_IDS = ["what-is-tanyatalk", "who-is-tanya"];

function useHashScroll() {
  useEffect(() => {
    const scrollToHash = () => {
      const h = window.location.hash.replace(/^#/, "");
      if (!SECTION_IDS.includes(h)) return;
      requestAnimationFrame(() => {
        document.getElementById(h)?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    };
    scrollToHash();
    window.addEventListener("hashchange", scrollToHash);
    return () => window.removeEventListener("hashchange", scrollToHash);
  }, []);
}

function Panel({ children }) {
  return (
    <MotionGlassPanel
      as="div"
      className="overflow-hidden rounded-[1.35rem] p-0"
      initial={rise.initial}
      whileInView={rise.animate}
      viewport={{ once: true, amount: 0.05, margin: "0px 0px -40px 0px" }}
      transition={{ duration: 0.65, ease: brandEase }}
    >
      {children}
    </MotionGlassPanel>
  );
}

const BUBBLES = [
  { label: "Available 24/7", size: "lg", id: 0 },
  { label: "No scheduling", size: "md", id: 1 },
  { label: "No waiting", size: "md", id: 2 },
  { label: "She follows up", size: "md", id: 3 },
  { label: "Memory that grows with you", size: "lg", id: 4 },
  { label: "Decision points", size: "md", id: 5 },
  { label: "Identity wobbles", size: "md", id: 6 },
  { label: "Life transitions", size: "md", id: 7 },
  { label: "No diagnosis", size: "sm", id: 8 },
  { label: "Names your next step", size: "md", id: 9 },
  { label: "Like a flashlight in the dark", size: "lg", id: 10 },
  { label: "Concierge-style support", size: "lg", id: 11 },
  { label: "Forward movement", size: "md", id: 12 },
  { label: "Regain trust in yourself", size: "lg", id: 13 },
  { label: "Clarity", size: "sm", id: 14 },
  { label: "Feel better", size: "sm", id: 15 },
  { label: "Master-level coaching", size: "lg", id: 16 },
  { label: "Stuck or overwhelmed?", size: "md", id: 17 },
  { label: "Just you being human", size: "lg", id: 18 },
  { label: "Safe space to be honest", size: "md", id: 19 },
];

export function WhatIsTanyaTalk() {
  useHashScroll();
  return (
    <section
      id="what-is-tanyatalk"
      className="w-full min-w-0 max-w-2xl scroll-mt-6 sm:scroll-mt-8"
      aria-labelledby="what-is-tanyatalk-heading"
    >
      <Panel>
        <h2
          id="what-is-tanyatalk-heading"
          className="px-7 pb-3 pt-7 text-center text-lg font-semibold tracking-tight text-sea-900 sm:pt-8 sm:text-xl"
        >
          What is TanyaTalk?
        </h2>
        <div className="px-7 pb-8 pt-1 sm:px-10 sm:pb-9">
          {/* Hook */}
          <p className="mx-auto max-w-xl text-left text-base leading-relaxed text-sea-800/92 sm:text-[1.05rem]">
            TanyaTalk is a personal coaching experience built on the full
            depth of Tanya&apos;s heart and master-level coaching expertise,
            available 24/7. If you want to live your life with more
            intention, TanyaTalk is for you.
          </p>

          {/* Bubble map */}
          <style>{`
            @keyframes bubble-wave {
              0%, 100% { transform: translateY(0px); }
              50% { transform: translateY(-7px); }
            }
          `}</style>
          <div className="mx-auto mt-5 flex max-w-xl flex-wrap justify-center gap-2 sm:mt-6">
            {BUBBLES.map(({ label, size, id }) => {
              const gradients = [
                "linear-gradient(135deg, #fffaf8 0%, #fceff0 100%)",
                "linear-gradient(135deg, #faf6f0 0%, #f5dfe3 100%)",
                "linear-gradient(135deg, #fff8f9 0%, #f9d6df 100%)",
              ];
              const padding = size === "lg" ? "px-4 py-2.5 text-sm font-medium" : size === "sm" ? "px-3 py-1.5 text-sm font-medium" : "px-3.5 py-2 text-sm font-medium";
              return (
                <span
                  key={label}
                  style={{
                    animation: `bubble-wave 3s ease-in-out ${-(id * (3 / 20)).toFixed(2)}s infinite`,
                    display: "inline-block",
                  }}
                >
                  <motion.span
                    className={`rounded-full text-sea-800 ring-1 ring-sea-200/80 shadow-sm ${padding}`}
                    style={{ background: gradients[id % gradients.length], cursor: "grab", touchAction: "none", display: "inline-block" }}
                    drag
                    dragElastic={0.15}
                    dragSnapToOrigin
                    whileDrag={{ scale: 1.12, cursor: "grabbing", zIndex: 50 }}
                  >
                    {label}
                  </motion.span>
                </span>
              );
            })}
          </div>

          <p className="mx-auto mt-8 max-w-xl text-left text-base leading-relaxed text-sea-800/92 sm:mt-9 sm:text-[1.05rem]">
            Whether you&apos;re working through something hard, building on
            something good, or simply trying to move through life with more
            intention, TanyaTalk is built to meet you there.
          </p>
          <p className="mx-auto mt-8 max-w-xl text-center text-lg font-semibold leading-relaxed text-sea-900 sm:mt-10 sm:text-xl">
            That&apos;s TanyaTalk, right in your pocket!
          </p>
        </div>
      </Panel>
    </section>
  );
}

export function WhoIsTanya() {
  return (
    <section
      id="who-is-tanya"
      className="w-full min-w-0 max-w-2xl scroll-mt-6 sm:scroll-mt-8"
      aria-labelledby="who-is-tanya-heading"
    >
      <Panel>
        <h2
          id="who-is-tanya-heading"
          className="px-7 pb-3 pt-7 text-center text-lg font-semibold tracking-tight text-sea-900 sm:pt-8 sm:text-xl"
        >
          Who is Tanya?
        </h2>
        <div className="px-7 pb-8 pt-1 sm:px-10 sm:pb-9">
          <img
            src="/tanya-who.png"
            alt={WHO_SECTION_PHOTO_ALT}
            className="mx-auto mb-6 aspect-[3/4] w-full max-w-[190px] rounded-2xl object-cover object-[center_20%] shadow-md ring-1 ring-sea-900/10 sm:mb-7"
            decoding="async"
          />
          <p className="mx-auto max-w-xl text-base leading-relaxed text-sea-800/92 sm:text-[1.05rem]">
            Tanya is a master level life coach who helps you experience life
            through a completely different lens, so you show up empowered in
            every area of your life. When the life you want and the identity
            you hold don&apos;t fully match yet, Tanya helps you close that gap.
          </p>
          <div className="mx-auto mt-5 flex max-w-xl flex-wrap justify-center gap-2 sm:mt-6">
            {["Neuroscience", "Identity Transformation", "Spiritual Growth", "Perspective Shifts", "Emotional Regulation"].map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-sea-100 px-4 py-1.5 text-sm font-medium text-sea-800 ring-1 ring-sea-200/80"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="mx-auto mt-5 grid max-w-xl grid-cols-2 gap-3 sm:mt-6">
            <div className="flex flex-col items-center justify-center gap-1 rounded-2xl bg-sea-100/70 px-4 py-5 text-center ring-1 ring-sea-200/60">
              <span className="text-2xl font-bold tracking-tight text-sea-700 sm:text-3xl">2,000+</span>
              <span className="text-xs font-medium leading-snug text-sea-800/75 sm:text-sm">coaching hours logged</span>
            </div>
            <div className="flex flex-col items-center justify-center gap-1 rounded-2xl bg-sea-100/70 px-4 py-5 text-center ring-1 ring-sea-200/60">
              <span className="text-2xl font-bold tracking-tight text-sea-700 sm:text-3xl">~10 yrs</span>
              <span className="text-xs font-medium leading-snug text-sea-800/75 sm:text-sm">helping people transform</span>
            </div>
          </div>
          <div className="mx-auto mt-5 max-w-xl rounded-2xl bg-sea-100/70 px-5 py-4 ring-1 ring-sea-200/60 sm:mt-6">
            <p className="text-sm font-semibold uppercase tracking-widest text-sea-600 sm:text-xs">
              Her Core Belief
            </p>
            <p className="mt-1.5 text-base leading-relaxed text-sea-900 sm:text-[1.05rem]">
              Your alignment begins the moment you stop outsourcing your peace,
              worth, and happiness to the outside world.
            </p>
          </div>
          <div className="mx-auto mt-5 flex max-w-xl flex-wrap justify-center gap-2 sm:mt-6">
            {["Coaches beside you, not above you", "Holds space while moving you forward"].map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-sea-200/60 px-4 py-1.5 text-sm font-medium text-sea-800 ring-1 ring-sea-200/80"
              >
                {tag}
              </span>
            ))}
          </div>
          <p className="mx-auto mt-6 max-w-xl text-center text-base font-semibold leading-relaxed text-sea-900 sm:mt-7 sm:text-[1.05rem]">
            Tanya&apos;s methodologies help you listen to that little whisper in your
            soul telling you that you were meant for something more&hellip; let&apos;s go get it!!
          </p>
        </div>
      </Panel>
    </section>
  );
}

export default function LearnMoreAccordion() {
  return (
    <>
      <WhatIsTanyaTalk />
      <WhoIsTanya />
    </>
  );
}
