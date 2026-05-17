import { motion } from "framer-motion";

/** Beach - sand, blush, lagoon turquoise (tied to hero photo water) */
const mirror = {
  repeat: Infinity,
  repeatType: "mirror",
  ease: "easeInOut",
};

const blobStyle = {
  position: "absolute",
  borderRadius: "50%",
  pointerEvents: "none",
  willChange: "transform",
};

export default function AuroraBackdrop() {
  return (
    <div className="aurora-scene" aria-hidden>
      {/* Baby pink haze */}
      <motion.div
        className="aurora-blob"
        style={{
          ...blobStyle,
          width: "min(118vw, 900px)",
          height: "min(118vw, 900px)",
          left: "-22%",
          top: "-30%",
          background:
            "radial-gradient(circle at 32% 38%, rgba(255, 218, 225, 0.78) 0%, rgba(252, 206, 214, 0.52) 42%, rgba(248, 189, 200, 0.32) 60%, transparent 74%)",
        }}
        animate={{
          x: [0, "4vw", "-2vw", "2vw"],
          y: [0, "6vh", "-4vh", "2vh"],
          rotate: [0, 10, -6, 4],
          scale: [1, 1.08, 1.03, 1.06],
        }}
        transition={{ duration: 24, ...mirror }}
      />

      {/* Warm sand glow */}
      <motion.div
        className="aurora-blob"
        style={{
          ...blobStyle,
          width: "min(105vw, 820px)",
          height: "min(105vw, 820px)",
          right: "-30%",
          top: "2%",
          background:
            "radial-gradient(circle at 58% 40%, rgba(232, 205, 180, 0.82) 0%, rgba(220, 186, 158, 0.55) 45%, rgba(200, 168, 142, 0.34) 62%, transparent 76%)",
        }}
        animate={{
          x: [0, "-5vw", "3vw", "-2vw"],
          y: [0, "5vh", "8vh", "-2vh"],
          rotate: [0, -8, 6, -3],
          scale: [1.05, 1, 1.09, 1.04],
        }}
        transition={{ duration: 28, ...mirror }}
      />

      {/* Shell pink + sand */}
      <motion.div
        className="aurora-blob"
        style={{
          ...blobStyle,
          width: "min(95vw, 760px)",
          height: "min(95vw, 760px)",
          left: "8%",
          bottom: "-40%",
          background:
            "radial-gradient(circle at 48% 45%, rgba(252, 228, 232, 0.7) 0%, rgba(237, 196, 204, 0.48) 45%, rgba(200, 150, 158, 0.28) 58%, transparent 72%)",
        }}
        animate={{
          x: [0, "6vw", "-4vw", "3vw"],
          y: [0, "-5vh", "4vh", "-3vh"],
          rotate: [0, 7, -9, 5],
          scale: [1.02, 1.12, 1.04, 1.08],
        }}
        transition={{ duration: 21, ...mirror }}
      />

      {/* Lagoon turquoise - large wash (reads as coastal water) */}
      <motion.div
        className="aurora-blob aurora-blob--sea-glass"
        style={{
          ...blobStyle,
          width: "min(108vw, 880px)",
          height: "min(108vw, 880px)",
          right: "-20%",
          bottom: "-8%",
          background:
            "radial-gradient(circle at 40% 45%, rgba(85, 188, 178, 0.45) 0%, rgba(130, 212, 202, 0.32) 36%, rgba(185, 232, 224, 0.2) 54%, rgba(230, 248, 244, 0.1) 68%, transparent 78%)",
        }}
        animate={{
          x: [0, "-3vw", "4vw", "-1vw"],
          y: [0, "4vh", "-2vh", "1vh"],
          rotate: [0, -5, 4, -2],
          scale: [1, 1.05, 0.98, 1.02],
        }}
        transition={{ duration: 26, ...mirror }}
      />

      {/* Turquoise - lower-left balance (matches faint cool pockets in the UI) */}
      <motion.div
        className="aurora-blob aurora-blob--sea-glass"
        style={{
          ...blobStyle,
          width: "min(92vw, 720px)",
          height: "min(92vw, 720px)",
          left: "-22%",
          bottom: "-18%",
          background:
            "radial-gradient(circle at 58% 40%, rgba(95, 195, 185, 0.4) 0%, rgba(145, 218, 208, 0.26) 42%, rgba(200, 236, 230, 0.14) 58%, transparent 76%)",
        }}
        animate={{
          x: [0, "4vw", "-2vw", "2vw"],
          y: [0, "-3vh", "2vh", "-1vh"],
          rotate: [0, 5, -3, 2],
          scale: [1.02, 1, 1.06, 1.01],
        }}
        transition={{ duration: 30, ...mirror }}
      />

      {/* Dusty rose depth (soft) */}
      <motion.div
        className="aurora-blob aurora-blob--subtle"
        style={{
          ...blobStyle,
          width: "min(80vw, 640px)",
          height: "min(80vw, 640px)",
          left: "35%",
          top: "18%",
          background:
            "radial-gradient(circle at 50% 50%, rgba(168, 112, 128, 0.36) 0%, rgba(140, 92, 108, 0.24) 45%, rgba(255, 236, 239, 0.16) 60%, transparent 70%)",
        }}
        animate={{
          x: [0, "-3vw", "4vw"],
          y: [0, "4vh", "-3vh"],
          scale: [1, 1.06, 0.98],
        }}
        transition={{ duration: 32, ...mirror }}
      />

      {/* Soft highlight sheen */}
      <motion.div
        className="aurora-sheen-motion"
        style={{
          position: "absolute",
          inset: "-55%",
          pointerEvents: "none",
          background:
            "linear-gradient(118deg, transparent 0%, rgba(255, 255, 255, 0) 32%, rgba(255, 252, 250, 0.82) 44%, rgba(198, 236, 228, 0.36) 50%, rgba(210, 242, 235, 0.28) 53%, rgba(252, 220, 228, 0.3) 58%, transparent 70%)",
          mixBlendMode: "soft-light",
        }}
        animate={{
          x: ["-12%", "14%", "-8%"],
          y: ["-5%", "8%", "-3%"],
          rotate: [0, 3, -2, 1],
        }}
        transition={{ duration: 18, ...mirror }}
      />
    </div>
  );
}
