import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const BOT_URL = import.meta.env.VITE_BOT_URL ?? "";

export default function ErrorReportWidget() {
  const [open, setOpen] = useState(false);
  const [phone, setPhone] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
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

  useEffect(() => {
    if (status === "success") {
      const t = setTimeout(() => {
        setOpen(false);
        setStatus("idle");
        setPhone("");
        setDescription("");
      }, 2000);
      return () => clearTimeout(t);
    }
  }, [status]);

  async function handleSubmit(e) {
    e.preventDefault();
    if (!description.trim()) return;
    setStatus("loading");
    try {
      const res = await fetch(`${BOT_URL}/report-error`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone: phone.trim() || null, description: description.trim() }),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div ref={panelRef} className="fixed right-4 top-4 z-50">
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label="Report an issue"
        className="flex h-8 w-8 items-center justify-center rounded-full bg-white/80 text-sea-600 shadow-md ring-1 ring-sea-200/70 backdrop-blur-md transition-opacity hover:opacity-80"
      >
        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true">
          <path
            d="M7.5 1a6.5 6.5 0 1 0 0 13A6.5 6.5 0 0 0 7.5 1ZM7 5a.5.5 0 0 1 1 0v3.5a.5.5 0 0 1-1 0V5Zm.5 6a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"
            fill="currentColor"
          />
        </svg>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -6, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.97 }}
            transition={{ duration: 0.18 }}
            className="glass-panel absolute right-0 top-10 w-72 rounded-2xl p-5 shadow-xl"
          >
            {status === "success" ? (
              <p className="text-center text-sm font-medium text-sea-700">
                Got it. Thanks for letting me know.
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <p className="text-sm font-semibold text-sea-900">Report an issue</p>
                <input
                  type="tel"
                  placeholder="Your phone number (optional)"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full rounded-lg border border-sea-200/70 bg-white/60 px-3 py-2 text-sm text-sea-900 placeholder-sea-400 outline-none focus:ring-1 focus:ring-sea-400"
                />
                <textarea
                  placeholder="What went wrong?"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                  rows={3}
                  className="w-full resize-none rounded-lg border border-sea-200/70 bg-white/60 px-3 py-2 text-sm text-sea-900 placeholder-sea-400 outline-none focus:ring-1 focus:ring-sea-400"
                />
                {status === "error" && (
                  <p className="text-xs text-red-500">Something went wrong. Try again.</p>
                )}
                <button
                  type="submit"
                  disabled={status === "loading" || !description.trim()}
                  className="rounded-lg bg-sea-600 px-4 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-85 disabled:opacity-40"
                >
                  {status === "loading" ? "Sending..." : "Send"}
                </button>
              </form>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
