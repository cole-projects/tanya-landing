import LandingShell from "../components/LandingShell.jsx";
import LandingHeroCard from "../components/LandingHeroCard.jsx";
import DemoVideo from "../components/DemoVideo.jsx";
import VCardLink from "../components/VCardLink.jsx";
import { WhatIsTanyaTalk, WhoIsTanya } from "../components/LearnMoreAccordion.jsx";
import Testimonials from "../components/Testimonials.jsx";
import Wordmark from "../components/Wordmark.jsx";
import { MotionGlassPanel } from "../components/GlassPanel.jsx";
import Sparkles from "../components/Sparkles.jsx";
import { brandEase, rise } from "../lib/motion.js";
import { BEACH_FOOTER_IMAGE_ALT } from "../content/brand.js";

export default function HomePage() {
  return (
    <LandingShell loose>
      <div
        id="top"
        className="flex w-full min-w-0 max-w-2xl flex-col items-center scroll-mt-6 sm:scroll-mt-8"
      >
        <Wordmark />
        <LandingHeroCard />
      </div>
      <WhatIsTanyaTalk />
      <VCardLink>Add Contact</VCardLink>
      <DemoVideo />
      <WhoIsTanya />
      <Testimonials />
      <figure className="w-full min-w-0 max-w-2xl">
        <img
          src="/tanya-beach-footer.png"
          alt={BEACH_FOOTER_IMAGE_ALT}
          className="mx-auto w-full rounded-2xl object-cover object-[center_35%] shadow-md ring-1 ring-sea-900/10"
          width={838}
          height={978}
          sizes="(max-width: 640px) 100vw, 42rem"
          decoding="async"
          fetchPriority="low"
        />
      </figure>

      <section className="w-full min-w-0 max-w-2xl" aria-label="BecomingYOU program">
        <MotionGlassPanel
          as="div"
          className="relative overflow-hidden rounded-[1.35rem] p-0"
          style={{
            background: "linear-gradient(145deg, #1ab5ae 0%, #0e9e97 50%, #0b8c86 100%)",
            border: "1px solid rgba(255,255,255,0.18)",
            boxShadow: "0 24px 70px rgba(14, 158, 151, 0.28), 0 2px 14px rgba(14, 158, 151, 0.18), inset 0 1px 0 rgba(255,255,255,0.25)",
          }}
          initial={rise.initial}
          whileInView={rise.animate}
          viewport={{ once: true, amount: 0.05, margin: "0px 0px -40px 0px" }}
          transition={{ duration: 0.65, ease: brandEase }}
        >
          <Sparkles count={16} minSize={8} maxSize={20} color="rgba(255,255,255,0.8)" interval={250} />
          <div className="relative px-7 pb-8 pt-7 text-center sm:px-10 sm:pb-9 sm:pt-8">
            <h2 className="text-lg font-semibold tracking-tight text-white sm:text-xl">
              Want to go to the next level?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-left text-base leading-relaxed text-white/90 sm:mt-5 sm:text-[1.05rem]">
              Interested in working with Tanya more personally? <span className="font-semibold text-white">BecomingYOU</span> is a{" "}
              <span className="underline decoration-white/60 underline-offset-2">16-week Inner Circle Coaching Program</span> designed to help
              you deeply understand the brain, nervous system patterns, identity,
              emotional healing, and the deeper mechanics behind how you
              experience life. You don&apos;t just learn new information, you
              begin thinking differently, responding differently, seeing
              differently, and becoming someone who moves through life with more
              clarity, confidence, self-trust, and emotional steadiness.
            </p>
            <p className="mx-auto mt-4 max-w-xl text-left text-base leading-relaxed text-white/90 sm:mt-5 sm:text-[1.05rem]">
              Weekly teachings, tools, and group coaching calls included.
            </p>
            <a
              href="sms:+15627149917"
              className="btn-shimmer mt-6 inline-block rounded-full border border-white/60 bg-white/10 px-7 py-3 text-sm font-semibold text-white shadow-md backdrop-blur-sm transition hover:bg-white/20 sm:mt-7 sm:text-base"
            >
              Call or text Tanya directly
            </a>
          </div>
        </MotionGlassPanel>
      </section>
    </LandingShell>
  );
}
