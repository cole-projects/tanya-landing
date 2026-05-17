import { MotionGlassPanel } from "./GlassPanel.jsx";
import HeroIntro from "./HeroIntro.jsx";
import IMessagePhoneMockup from "./IMessagePhoneMockup.jsx";
import VCardLink from "./VCardLink.jsx";
import { useReducedMotion } from "framer-motion";
import { brandEase, rise } from "../lib/motion.js";

const copy = {
  title: "The conversation that changes your day",
  subtitle: "Think clearer, make progress, and feel better doing it",
};

export default function LandingHeroCard() {
  const reduceMotion = useReducedMotion();

  return (
    <MotionGlassPanel
      as="article"
      className="w-full max-w-lg rounded-[1.35rem] px-7 pb-10 pt-9 text-center sm:px-9"
      initial={reduceMotion === true ? false : rise.initial}
      animate={rise.animate}
      transition={{ duration: 0.75, delay: 0.12, ease: brandEase }}
    >
      <HeroIntro title={copy.title} subtitle={copy.subtitle} />
      <IMessagePhoneMockup />
      <VCardLink href="/tanya.vcf">Add contact</VCardLink>
    </MotionGlassPanel>
  );
}
