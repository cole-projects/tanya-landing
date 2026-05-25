import { useEffect } from "react";
import { MotionGlassPanel } from "./GlassPanel.jsx";
import { brandEase, rise } from "../lib/motion.js";
import { WHO_SECTION_PHOTO_ALT } from "../content/brand.js";

const SECTION_IDS = ["what-is-tanyatalk", "who-is-tanya"];

function ContentBlock({ id, title, children, isFirst = false }) {
  return (
    <div
      id={id}
      role="region"
      className={[
        "scroll-mt-6 sm:scroll-mt-8",
        !isFirst ? "border-t border-sea-200/50" : "",
      ]
        .filter(Boolean)
        .join(" ")}
      aria-labelledby={`${id}-heading`}
    >
      <h2
        id={`${id}-heading`}
        className={[
          "px-7 text-center text-lg font-semibold tracking-tight text-sea-900 sm:text-xl",
          isFirst ? "pt-7 sm:pt-8" : "pt-8 sm:pt-9",
          "pb-3",
        ].join(" ")}
      >
        {title}
      </h2>
      <div className="px-7 pb-8 pt-1 text-center sm:px-10 sm:pb-9">{children}</div>
    </div>
  );
}

export default function LearnMoreAccordion() {
  useEffect(() => {
    const scrollToHash = () => {
      const h = window.location.hash.replace(/^#/, "");
      if (!SECTION_IDS.includes(h)) return;
      requestAnimationFrame(() => {
        document.getElementById(h)?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      });
    };
    scrollToHash();
    window.addEventListener("hashchange", scrollToHash);
    return () => window.removeEventListener("hashchange", scrollToHash);
  }, []);

  return (
    <section
      className="w-full min-w-0 max-w-2xl scroll-mt-6 sm:scroll-mt-8"
      aria-label="Learn more about TanyaTalk and Tanya"
    >
      <MotionGlassPanel
        as="div"
        className="overflow-hidden rounded-[1.35rem] p-0"
        initial={rise.initial}
        whileInView={rise.animate}
        viewport={{ once: true, amount: 0.05, margin: "0px 0px -40px 0px" }}
        transition={{ duration: 0.65, ease: brandEase }}
      >
        <ContentBlock id="what-is-tanyatalk" title="What is TanyaTalk?" isFirst>
          <div className="text-center">
            <p className="mx-auto max-w-xl text-base leading-relaxed text-sea-800/92 sm:text-[1.05rem]">
              TanyaTalk is a personal coaching experience built on the full
              depth of <mark className="rounded px-0.5 text-sea-800/92" style={{ background: "rgba(254,240,138,0.55)" }}>Tanya&apos;s heart</mark> and <mark className="rounded px-0.5 text-sea-800/92" style={{ background: "rgba(254,240,138,0.55)" }}>master-level coaching expertise</mark>,
              available 24/7. If you want to live your life with more
              intention, TanyaTalk is for you.
            </p>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-sea-800/92 sm:mt-6 sm:text-[1.05rem]">
              When you&apos;re stuck, overwhelmed, or ready to move but unsure
              of the <span className="italic">how</span>, Tanya helps you name
              the next step, like turning on a flashlight when the path is hard
              to read. No scheduling. No waiting. Just concierge-style support
              through decision points, identity wobbles, and life transitions.
              No diagnosis, just you being human in real life, from where you
              stand, with a thread of memory that grows the more you share.
            </p>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-sea-800/92 sm:mt-6 sm:text-[1.05rem]">
              Inside the experience, you find clarity, make progress, and feel better doing
              it, so you can create forward movement and regain trust in
              yourself.{" "}
              <mark className="rounded bg-yellow-200 px-0.5 text-sea-800/92" style={{ background: "rgba(254,240,138,0.55)" }}>
                Whether you&apos;re working through something hard, building on
                something good, or simply trying to move through life with more
                intention, TanyaTalk is built to meet you there.
              </mark>
            </p>
            <p className="mx-auto mt-5 max-w-xl text-base font-semibold leading-relaxed text-sea-900 sm:mt-6 sm:text-[1.05rem]">
              That&apos;s TanyaTalk, right in your pocket!
            </p>
          </div>
        </ContentBlock>

        <ContentBlock id="who-is-tanya" title="Who is Tanya?">
          <div className="text-center">
            <img
              src="/tanya-who.png"
              alt={WHO_SECTION_PHOTO_ALT}
              className="mx-auto mb-6 aspect-[3/4] w-full max-w-[190px] rounded-2xl object-cover object-[center_20%] shadow-md ring-1 ring-sea-900/10 sm:mb-7"
              decoding="async"
            />
            <p className="mx-auto max-w-xl text-base leading-relaxed text-sea-800/92 sm:text-[1.05rem]">
              Tanya is a master level life coach whose <mark className="rounded px-0.5 text-sea-800/92" style={{ background: "rgba(254,240,138,0.55)" }}>work blends neuroscience,
              nervous system awareness, mindset, and identity transformation</mark>.
              Tanya doesn&apos;t just help you think differently about your circumstances, she helps you
              experience life through a completely different lens, allowing you
              to show up empowered in every area of your life.
            </p>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-sea-800/92 sm:mt-6 sm:text-[1.05rem]">
              <span className="font-semibold text-sea-900">Her Core Belief:</span>{" "}
              Your alignment begins the moment you stop outsourcing your peace,
              worth, and happiness to the outside world.
            </p>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-sea-800/92 sm:mt-6 sm:text-[1.05rem]">
              When the life you want and the identity you hold don&apos;t fully
              match yet, Tanya helps you close that gap. What makes her distinct
              is how she does it. She coaches from beside you, not above you,
              holding space for how hard something feels while helping you
              reconnect to the version of yourself that already knows the way
              forward.
            </p>
            <p className="mx-auto mt-5 max-w-xl text-base font-semibold leading-relaxed text-sea-900 sm:mt-6 sm:text-[1.05rem]">
              In one line: Tanya's methodologies help you listen to that little whisper in your
              soul telling you that you were meant for something more...
              let&apos;s go get it!!
            </p>
          </div>
        </ContentBlock>
      </MotionGlassPanel>
    </section>
  );
}
