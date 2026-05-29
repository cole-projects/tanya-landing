import { useEffect } from "react";
import { motion } from "framer-motion";
import { MotionGlassPanel } from "./GlassPanel.jsx";
import VCardLink from "./VCardLink.jsx";
import DemoVideo from "./DemoVideo.jsx";
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
  { label: "Regain trust in yourself", size: "lg", id: 13 },
  { label: "Remembers your story", size: "lg", id: 4 },
  { label: "No diagnosis", size: "sm", id: 8 },
  { label: "Guides your next step", size: "md", id: 9 },
  { label: "Professional support", size: "lg", id: 11 },
  { label: "Master-level coaching", size: "lg", id: 16 },
  { label: "Show up as you are", size: "lg", id: 18 },
  { label: "Safe space to be honest", size: "md", id: 19 },
];

export function WhatIsTanyaTalk({ onOpenTerms }) {
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
          className="px-7 pb-3 pt-7 text-center text-xl font-semibold tracking-tight text-sea-900 sm:pt-8 sm:text-2xl"
        >
          What is TanyaTalk?
        </h2>
        <div className="px-7 pb-8 pt-1 sm:px-10 sm:pb-9">

          {/* Hook */}
          <div className="mx-auto mb-7 max-w-xl sm:mb-8">
            <p className="text-2xl font-bold leading-tight tracking-tight text-sea-900 sm:text-3xl">
              You&apos;re spiraling. It&apos;s 2am. Nobody to call.
            </p>
          <div className="mt-4 space-y-2">
              <p className="text-lg leading-snug text-sea-800/70 sm:text-xl">Is this relationship worth saving?</p>
              <p className="text-lg leading-snug text-sea-800/70 sm:text-xl">Am I even on the right path?</p>
              <p className="text-lg leading-snug text-sea-800/70 sm:text-xl">Why does everyone else look fine?</p>
            </div>
          </div>

          {/* Problem */}
          <p className="mx-auto max-w-xl text-left text-base font-semibold text-sea-900 sm:text-[1.05rem]">
            These options exist, but there are gaps.
          </p>
          <div className="mx-auto mt-3 grid max-w-xl grid-cols-2 gap-3 sm:mt-4">
            {[
              { who: "Therapy", strength: "Deep emotional processing", problem: "Has a waitlist. No in-between session guidance." },
              { who: "Friends & Family", strength: "Love and connection", problem: "Biased and based on their own fears." },
              { who: "Google & Chatbots", strength: "Endless information", problem: "Broad purpose. Generic memory. Not specialized in transformation." },
              { who: "Journaling", strength: "Self-reflection and awareness", problem: "Doesn't respond." },
              { who: "Coaching", strength: "Powerful transformation", problem: "Not covered by insurance." },
              { who: "Social Media", strength: "Inspiration", problem: "Dopamine hit without direction." },
            ].map(({ who, strength, problem }) => (
              <div
                key={who}
                className="rounded-2xl bg-sea-100/70 px-4 py-4 ring-1 ring-sea-200/60"
              >
                <p className="text-sm font-semibold text-sea-800">{who}</p>
                <p className="mt-0.5 text-xs italic leading-snug text-sea-700/55">{strength}</p>
                <p className="mt-1.5 text-sm leading-snug text-sea-700/75">{problem}</p>
              </div>
            ))}
          </div>

          {/* Nobody prepares you */}
          <p className="mx-auto mt-7 max-w-xl text-left text-base font-semibold text-sea-900 sm:mt-8 sm:text-[1.05rem]">
            Nobody prepares you for the real stuff:
          </p>
          <ul className="mx-auto mt-3 max-w-xl space-y-2 pl-1">
            <li className="flex items-start gap-2 text-base leading-relaxed text-sea-800/90 sm:text-[1.05rem]">
              <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-sea-300" />
              Figuring out <em>how</em> to get what you want
            </li>
            <li className="flex items-start gap-2 text-base leading-relaxed text-sea-800/90 sm:text-[1.05rem]">
              <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-sea-300" />
              Trusting your decisions
            </li>
            <li className="flex items-start gap-2 text-base font-semibold leading-relaxed sm:text-[1.05rem]" style={{ color: "#0e9e97" }}>
              <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full" style={{ background: "#0e9e97" }} />
              Deciding who you&apos;re becoming
            </li>
          </ul>

          {/* Pivot */}
          <p className="mx-auto mt-7 max-w-xl text-left text-base leading-relaxed text-sea-800/92 sm:mt-8 sm:text-[1.05rem]">
            TanyaTalk is a personal coaching experience backed by nearly a decade of professional-level expertise from Tanya Wannemacher, built on the full depth of her heart, available 24/7 right in your iMessage.
          </p>

          <div className="mt-7 sm:mt-8">
            <DemoVideo />
          </div>

          {/* Bubble map */}
          <style>{`
            @keyframes bubble-wave {
              0%, 100% { transform: translateY(0px); }
              50% { transform: translateY(-7px); }
            }
          `}</style>
          <div className="mx-auto mt-5 flex max-w-xl flex-wrap justify-center gap-2 sm:mt-6">
            {BUBBLES.map(({ label, size }, index) => {
              const padding = size === "lg" ? "px-3 py-2 text-xs font-medium" : size === "sm" ? "px-2.5 py-1.5 text-xs font-medium" : "px-3 py-1.5 text-xs font-medium";
              return (
                <span
                  key={label}
                  style={{
                    animation: `bubble-wave 3s ease-in-out ${-(index * 0.3).toFixed(2)}s infinite`,
                    display: "inline-block",
                  }}
                >
                  <motion.span
                    className={`rounded-full bg-sea-100 text-sea-800 ring-1 ring-sea-200/80 shadow-sm ${padding}`}
                    style={{ cursor: "grab", touchAction: "none", display: "inline-block" }}
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
            Whether you&apos;re working through something hard, building on something good, or simply trying to move through life with more intention, TanyaTalk is built to meet you there.
          </p>
          <p className="mx-auto mt-8 max-w-xl text-center text-lg font-semibold leading-relaxed text-sea-900 sm:mt-10 sm:text-xl">
            That&apos;s TanyaTalk, right in your pocket!
          </p>
          <div className="flex justify-center mt-8 sm:mt-9">
            <VCardLink className="" onClick={onOpenTerms}>Start on iMessage</VCardLink>
          </div>
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
          className="px-7 pb-2 pt-7 text-center text-xl font-semibold tracking-tight text-sea-900 sm:pt-8 sm:text-2xl"
        >
          Who is Tanya?
        </h2>
        <div className="px-7 pb-8 pt-3 sm:px-10 sm:pb-9">
          <div className="mb-6 sm:mb-7">
            <img
              src="/tanya-who.png"
              alt={WHO_SECTION_PHOTO_ALT}
              className="mx-auto aspect-[3/4] w-full max-w-[190px] rounded-2xl object-cover object-[center_20%] shadow-md ring-1 ring-sea-900/10"
              decoding="async"
            />
            <div className="mx-auto mt-4 max-w-xs rounded-2xl bg-sea-100/70 px-4 py-3 ring-1 ring-sea-200/60">
              <p className="mb-2 text-center text-xs font-semibold uppercase tracking-widest text-sea-600">
                Tanya&apos;s Professional Certifications
              </p>
              <div className="flex items-center justify-center gap-4">
                <img
                  src="/icf-badge.png"
                  alt="ICF International Coaching Federation"
                  className="h-24 w-auto"
                  decoding="async"
                />
                <img
                  src="/cert.webp"
                  alt="ICF PCC Professional Certified Coach"
                  className="h-24 w-auto"
                  decoding="async"
                />
              </div>
            </div>
          </div>
          <p className="mx-auto max-w-xl text-base leading-relaxed text-sea-800/92 sm:text-[1.05rem]">
            Tanya Wannemacher began as an elementary school teacher before
            pursuing an ICF accredited Professional Coaching Degree. Today, as
            a master level coach, she helps you see the world through a
            completely different lens, so you show up empowered in every area
            of your life. When who you want to become and the identity you hold
            don&apos;t fully match yet, Tanya helps you close that gap.
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
              <span className="text-2xl font-bold tracking-tight text-sea-700 sm:text-3xl">~10 yrs</span>
              <span className="text-xs font-medium leading-snug text-sea-800/75 sm:text-sm">years of experience</span>
            </div>
            <div className="flex flex-col items-center justify-center gap-1 rounded-2xl bg-sea-100/70 px-4 py-5 text-center ring-1 ring-sea-200/60">
              <span className="text-2xl font-bold tracking-tight text-sea-700 sm:text-3xl">2,000+</span>
              <span className="text-xs font-medium leading-snug text-sea-800/75 sm:text-sm">hours of coaching</span>
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
