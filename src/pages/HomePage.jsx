import LandingShell from "../components/LandingShell.jsx";
import LandingHeroCard from "../components/LandingHeroCard.jsx";
import LearnMoreAccordion from "../components/LearnMoreAccordion.jsx";
import Wordmark from "../components/Wordmark.jsx";
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
      <LearnMoreAccordion />
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
    </LandingShell>
  );
}
