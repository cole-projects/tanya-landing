import { MotionGlassPanel } from "./GlassPanel.jsx";
import { brandEase, rise } from "../lib/motion.js";

const testimonials = [
  {
    quote:
      "Tanya I think you may just have saved my marriage lol. Something has definitely shifted in my brain.",
    author: "Shivali",
    gradient: "linear-gradient(135deg, #fffaf8 0%, #fceff0 100%)",
  },
  {
    quote:
      "Tanya is a complete package, so genuine, experienced and able to read the room and know what to do with it.",
    author: "Anonymous",
    gradient: "linear-gradient(135deg, #faf6f0 0%, #f5dfe3 100%)",
  },
  {
    quote:
      "Just wanted to come in here and share that I just had my first 1:1 coaching call today. My coach is Tanya and I can't really articulate how amazing that call was. I'd venture to say that call alone was worth $6,000.00. Thank you from the bottom of my heart, Tanya !!!",
    author: "Marggie",
    gradient: "linear-gradient(135deg, #fff8f9 0%, #f9d6df 100%)",
  },
  {
    quote: "One of the most valuable hours of my life each week. So much appreciation Tanya.",
    author: "Anonymous",
    gradient: "linear-gradient(135deg, #fffaf8 0%, #fceff0 100%)",
  },
];

export default function Testimonials() {
  return (
    <section
      className="w-full min-w-0 max-w-2xl"
      aria-label="What people are saying about Tanya"
    >
      <MotionGlassPanel
        as="div"
        className="overflow-hidden rounded-[1.35rem] p-0"
        initial={rise.initial}
        whileInView={rise.animate}
        viewport={{ once: true, amount: 0.05, margin: "0px 0px -40px 0px" }}
        transition={{ duration: 0.65, ease: brandEase }}
      >
        <div className="px-7 pb-8 pt-7 sm:px-10 sm:pb-9 sm:pt-8">
          <h2 className="pb-3 text-center text-lg font-semibold tracking-tight text-sea-900 sm:text-xl">
            What people are saying
          </h2>
          <div className="mt-2 flex flex-col gap-4">
            {testimonials.map(({ quote, author, gradient }, i) => (
              <blockquote
                key={i}
                className="relative overflow-hidden rounded-2xl px-5 pb-5 pt-4 ring-1 ring-sea-200/70 shadow-sm"
                style={{ background: gradient }}
              >
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -top-3 left-3 select-none font-serif text-[5rem] leading-none text-sea-300/50"
                >
                  &ldquo;
                </span>
                <p className="relative text-base leading-relaxed text-sea-800/90 sm:text-[1.05rem]">
                  {quote}
                </p>
                <footer className="mt-3 text-sm font-semibold text-sea-700">
                  — {author}
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </MotionGlassPanel>
    </section>
  );
}
