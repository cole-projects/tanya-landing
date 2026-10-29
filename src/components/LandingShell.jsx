export default function LandingShell({ children, loose = false, hero = false }) {
  const safeX =
    "pl-[max(22px,env(safe-area-inset-left))] pr-[max(22px,env(safe-area-inset-right))]";

  return (
    <div
      className={[
        "relative z-10 flex min-h-screen min-h-[100dvh] flex-col items-center",
        safeX,
        hero
          ? "justify-start gap-8 pb-[max(6.5rem,env(safe-area-inset-bottom))] pt-[max(0.65rem,env(safe-area-inset-top))] sm:gap-10"
          : loose
            ? "justify-start gap-8 pt-[max(2.5rem,env(safe-area-inset-top))] pb-[max(7rem,env(safe-area-inset-bottom))] sm:gap-12 sm:pb-[max(8rem,env(safe-area-inset-bottom))]"
            : "justify-center pt-[max(3.5rem,env(safe-area-inset-top))] pb-[max(3.5rem,env(safe-area-inset-bottom))]",
      ].join(" ")}
    >
      {children}
    </div>
  );
}
