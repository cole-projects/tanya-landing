import { motion, AnimatePresence } from "framer-motion";
import { SMS_LINK, TERMS_ACCEPTED_KEY } from "../content/brand.js";

const PARAGRAPHS = [
  "Hi, I'm Tanya. I've spent years helping people work through what's on their mind, and I'm here for you too. Everything here is built with my heart, so you always have someone to come to whenever you need it, 24/7.",
  "All conversations are stored securely and encrypted. They may be privately reviewed only when necessary by me to maintain quality, functionality, and improve the TanyaTalk experience. They are not casually read or shared. You can cancel your subscription at any time by sending 'cancel subscription' and your profile and conversations will be kept so I remember you if you return. If you ever want everything permanently deleted, send 'delete my data' and it will all be wiped. So by continuing, you acknowledge and agree to these terms.",
  "TanyaTalk supports reflection, clarity, and growth, but it is not medical, legal, financial or emergency advice. Use of TanyaTalk is at your own discretion, and you are solely responsible for any decisions or actions you take based on my guidance. By sending your first message, you are confirming your agreement to our terms.",
  "When you're ready, the more you share with me, the deeper we can go together. You don't have to have everything figured out, just start wherever you are.",
];

export default function TermsSheet({ isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Sheet */}
          <motion.div
            className="fixed bottom-0 left-0 right-0 z-50 mx-auto max-w-sm overflow-hidden rounded-t-[20px] bg-white shadow-2xl"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 32, stiffness: 320 }}
          >
            {/* Drag handle */}
            <div className="flex justify-center pt-3 pb-1">
              <div className="h-[5px] w-[36px] rounded-full bg-[#d1d1d6]" />
            </div>

            {/* Header — icon + name, Apple Pay style */}
            <div className="flex flex-col items-center px-6 pb-4 pt-3">
              <img
                src="/icon-192.png"
                alt="TanyaTalk"
                className="mb-3 h-[60px] w-[60px] rounded-[14px] shadow-sm"
              />
              <p className="text-[17px] font-semibold leading-tight tracking-tight text-[#1c1c1e]">
                TanyaTalk
              </p>
              <p className="mt-0.5 text-[13px] text-[#8e8e93]">
                tanyatalk.ai
              </p>
            </div>

            {/* Divider */}
            <div className="h-px bg-[#e5e5ea]" />

            {/* Scrollable body */}
            <div className="max-h-[38vh] overflow-y-auto overscroll-contain px-6 py-4">
              <div className="space-y-3.5">
                {PARAGRAPHS.map((para, i) => (
                  <p key={i} className="text-[14px] leading-relaxed text-[#3a3a3c]">
                    {para}
                  </p>
                ))}
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-[#e5e5ea]" />

            {/* Footer */}
            <div className="px-6 pb-8 pt-4">
              <p className="mb-1 text-center text-[12px] leading-snug text-[#8e8e93]">
                Your first 25 messages are free, no credit card needed.
              </p>
              <p className="mb-4 text-center text-[12px] leading-snug text-[#8e8e93]">
                You will not be charged by pressing Agree and Continue.
              </p>

              <a
                href={SMS_LINK}
                onClick={(e) => {
                  e.preventDefault();
                  localStorage.setItem(TERMS_ACCEPTED_KEY, "1");
                  const eventId = crypto.randomUUID();
                  window.fbq?.("trackCustom", "AgreeAndContinue", {}, { eventID: eventId });
                  fetch("/api/track", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ event_id: eventId, event_name: "AgreeAndContinue" }),
                  }).catch(() => {});
                  onClose();
                  setTimeout(() => { window.location.href = SMS_LINK; }, 300);
                }}
                className="btn-shimmer add-contact-cta block w-full rounded-[14px] py-[14px] text-center text-[17px]"
              >
                <span className="add-contact-cta__label font-semibold">
                  Agree and Continue
                </span>
              </a>

              <button
                onClick={onClose}
                className="mt-3 w-full text-center text-[16px] font-medium text-[#8e8e93] active:opacity-60"
              >
                Cancel
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
