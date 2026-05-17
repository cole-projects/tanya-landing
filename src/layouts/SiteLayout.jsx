import { Outlet } from "react-router-dom";
import AuroraBackdrop from "../components/AuroraBackdrop.jsx";

export default function SiteLayout() {
  return (
    <>
      <AuroraBackdrop />
      <main className="relative z-10 isolate min-h-screen min-h-[100dvh]">
        <Outlet />
      </main>
      {import.meta.env.DEV ? (
        <div
          className="pointer-events-none fixed bottom-3 left-1/2 z-[100] -translate-x-1/2 rounded-full border border-sea-200/80 bg-white/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-sea-700 shadow-sm backdrop-blur-sm"
          aria-hidden
        >
          Local dev
        </div>
      ) : null}
    </>
  );
}
