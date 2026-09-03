import { motion, AnimatePresence } from "framer-motion";
import { SMS_LINK, TERMS_ACCEPTED_KEY } from "../content/brand.js";

const PARAGRAPHS = [
  "Hi, I'm Tanya. I've spent years helping people work through what's on their mind, and I'm here for you too. Everything here is built with my heart, so you always have someone to come to whenever you need it, 24/7.",
  "Your conversations are stored securely and encrypted. They exist to help me remember you and go deeper with you over time -- not to be read casually or shared. To protect the quality of what I offer, I may occasionally review conversations to improve the experience. You can cancel anytime by texting 'cancel subscription', and your profile stays intact so I remember you if you come back. If you ever want everything permanently deleted, just text 'delete my data' and it's gone.",
  "TanyaTalk is a coaching tool built for reflection, clarity, and growth. Tanya is not a licensed therapist, and TanyaTalk is not a replacement for therapy, medical care, or crisis support. If you are in crisis or need immediate help, please reach out to a qualified professional or call 988. By continuing, you agree to use TanyaTalk as the coaching companion it is. TanyaTalk is intended for adults 18 and older.",
  "When you're ready, the more you share with TanyaTalk, the deeper you can go together. You don't have to have everything figured out, just start wherever you are.",
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
                onClick={() => { localStorage.setItem(TERMS_ACCEPTED_KEY, "1"); onClose(); }}
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
