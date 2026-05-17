import { Outlet } from "react-router-dom";
import AuroraBackdrop from "../components/AuroraBackdrop.jsx";

export default function SiteLayout() {
  return (
    <>
      <AuroraBackdrop />
      <main className="relative z-10 isolate min-h-screen min-h-[100dvh]">
        <Outlet />
      </main>
    </>
  );
}
