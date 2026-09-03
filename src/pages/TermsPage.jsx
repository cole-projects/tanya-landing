export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white px-6 py-12">
      <div className="mx-auto max-w-xl">
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-[#8e8e93]">A note from Tanya</p>
        <h1 className="mb-8 text-2xl font-semibold text-[#1c1c1e]">TanyaTalk Terms</h1>

        <div className="space-y-6 text-[15px] leading-relaxed text-[#3a3a3c]">
          <p>To whoever is reading this,</p>
          <p>
            Hi, I'm Tanya. I've spent years helping people work through what's on their mind,
            and I'm here for you too. Everything here is built with my heart, so you always
            have someone to come to whenever you need it, 24/7.
          </p>

          <p>
            Your conversations are stored securely and encrypted. They exist to help TanyaTalk remember you and go deeper with you over time. They stay private and are only
            ever looked at if something on TanyaTalk's end needs to be fixed. That's it. You can cancel anytime by texting
            "cancel subscription", and your profile stays intact so TanyaTalk remembers you if you
            come back. If you ever want everything permanently deleted, just text "delete my
            data" and it's gone.
          </p>

          <p>
            TanyaTalk is a coaching tool built for reflection, clarity, and growth. I am not
            a licensed therapist, and TanyaTalk is not a replacement for therapy, medical
            care, or crisis support. If you are in crisis or need immediate help, please reach
            out to a qualified professional or call 988. By continuing, you agree to use
            TanyaTalk as the coaching companion it is. TanyaTalk is intended for adults 18
            and older.
          </p>

          <p>
            When you're ready, the more you share with TanyaTalk, the deeper you can go
            together. You don't have to have everything figured out. Just start wherever
            you are.
          </p>
        </div>

        <div className="mt-10 flex flex-col items-end">
          <p className="text-[15px] text-[#3a3a3c]">Sincerely,</p>
          <p className="mt-1 text-[15px] font-semibold text-[#1c1c1e]">Tanya</p>
          <img src="/loading-spiral.png" alt="Mesh Coaching" className="mt-4 h-10 w-10 object-contain opacity-70" />
        </div>

        <button
          onClick={() => window.history.back()}
          className="mt-10 text-sm font-medium text-[#8e8e93] hover:text-[#3a3a3c] transition-colors"
        >
          ← Back
        </button>
      </div>
    </div>
  );
}
