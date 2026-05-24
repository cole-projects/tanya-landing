import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SMS_START = "sms:+13177282783&body=hey%20tanya";

const PLAN_FEATURES = [
  "24/7 access to Tanya's master-level coaching by text",
  "250 messages every billing month, refills automatically",
  "Personal follow-up texts a couple days after your sessions",
  "Add more messages ($5 for 60) if you run out",
  "Cancel anytime by texting \"cancel subscription\"",
];

export default function PricingWidget() {
  const [open, setOpen] = useState(false);
  const panelRef = useRef(null);

  useEffect(() => {
    if (!open) return;
    function handleClick(e) {
      if (panelRef.current && !panelRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open]);

  return (
    <div ref={panelRef} className="fixed right-4 top-2 z-50">
      <button
        onClick={() => setOpen((o) => !o)}
        className="rounded-full bg-white/70 px-3 py-1.5 text-xs font-semibold text-sea-700 ring-1 ring-sea-200/70 transition-opacity hover:opacity-80"
      >
        Pricing
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -6, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.97 }}
            transition={{ duration: 0.18 }}
            className="glass-panel absolute right-0 top-10 z-50 w-72 rounded-2xl p-5 shadow-xl"
          >
            <p className="text-2xl font-bold tracking-tight text-sea-900">
              $21
              <span className="ml-1 text-sm font-normal text-sea-700">/ month</span>
            </p>

            <ul className="mt-4 space-y-2.5">
              {PLAN_FEATURES.map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-xs leading-relaxed text-sea-800/90">
                  <svg
                    className="mt-0.5 h-3.5 w-3.5 shrink-0 text-sea-600"
                    viewBox="0 0 16 16"
                    fill="none"
                    aria-hidden="true"
                  >
                    <circle cx="8" cy="8" r="7.5" stroke="currentColor" strokeOpacity="0.35" />
                    <path
                      d="M5 8l2 2 4-4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  {f}
                </li>
              ))}
            </ul>
            <a
              href={SMS_START}
              className="mt-5 block rounded-full bg-sea-900 px-4 py-2 text-center text-xs font-semibold text-white transition-opacity hover:opacity-85"
            >
              Start free
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
