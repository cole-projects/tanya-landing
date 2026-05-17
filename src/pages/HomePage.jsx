import LandingShell from "../components/LandingShell.jsx";
import LandingHeroCard from "../components/LandingHeroCard.jsx";
import LearnMoreAccordion from "../components/LearnMoreAccordion.jsx";
import Wordmark from "../components/Wordmark.jsx";

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
    </LandingShell>
  );
}
