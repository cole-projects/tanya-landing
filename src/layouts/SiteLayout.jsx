import { Outlet } from "react-router-dom";
import AuroraBackdrop from "../components/AuroraBackdrop.jsx";
import ErrorReportWidget from "../components/ErrorReportWidget.jsx";
import PricingWidget from "../components/PricingWidget.jsx";

export default function SiteLayout() {
  return (
    <>
      <AuroraBackdrop />
      <ErrorReportWidget />
      <PricingWidget />
      <main className="relative z-10 isolate min-h-screen min-h-[100dvh]">
        <Outlet />
      </main>
    </>
  );
}
