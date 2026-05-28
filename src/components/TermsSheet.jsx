import { motion, AnimatePresence } from "framer-motion";

const SMS_LINK = "sms:+13177282783&body=hey%20tanya";

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
          <motion.div
            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div
            className="fixed bottom-0 left-0 right-0 z-50 mx-auto max-w-2xl rounded-t-[1.75rem] px-6 pb-10 pt-4 shadow-2xl"
            style={{ background: "#faf8f6" }}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 32, stiffness: 320 }}
          >
            <div className="mx-auto mb-5 h-1 w-10 rounded-full bg-sea-200" />

            <div className="mb-1 flex items-center justify-between">
              <h2 className="text-base font-semibold tracking-tight text-sea-900">
                Before you start
              </h2>
              <button
                onClick={onClose}
                className="flex h-7 w-7 items-center justify-center rounded-full bg-sea-100 text-sm text-sea-600 transition hover:bg-sea-200"
                aria-label="Close"
              >
                ✕
              </button>
            </div>

            <div className="mb-6 max-h-[52vh] space-y-4 overflow-y-auto pr-1 pt-3">
              {PARAGRAPHS.map((para, i) => (
                <p key={i} className="text-sm leading-relaxed text-sea-800/80">
                  {para}
                </p>
              ))}
            </div>

            <p className="mb-1.5 text-center text-xs text-sea-700/60">
              Your first 25 messages are free — no credit card needed.
            </p>
            <p className="mb-3 text-center text-xs text-sea-700/60">
              You will not be charged by pressing Agree and Continue.
            </p>
            <a
              href={SMS_LINK}
              onClick={onClose}
              className="btn-shimmer block w-full rounded-full py-3.5 text-center text-sm font-semibold shadow-md"
            >
              <span className="add-contact-cta__label">Agree and Continue</span>
            </a>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
