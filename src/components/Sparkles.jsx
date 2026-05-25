import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function SparkleIcon({ size, color }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path
        d="M12 0 L13.8 10.2 L24 12 L13.8 13.8 L12 24 L10.2 13.8 L0 12 L10.2 10.2 Z"
        fill={color}
      />
    </svg>
  );
}

function Sparkle({ x, y, size, color, onDone }) {
  return (
    <motion.span
      style={{ position: "absolute", left: `${x}%`, top: `${y}%`, pointerEvents: "none" }}
      initial={{ scale: 0, opacity: 0, rotate: 0 }}
      animate={{ scale: [0, 1, 0.8, 0], opacity: [0, 1, 1, 0], rotate: 30 }}
      transition={{ duration: 1.4, ease: "easeInOut" }}
      onAnimationComplete={onDone}
    >
      <SparkleIcon size={size} color={color} />
    </motion.span>
  );
}

let _id = 0;
function uid() { return ++_id; }

export default function Sparkles({ count = 8, minSize = 8, maxSize = 18, color = "rgba(255,255,255,0.85)", interval = 600, className = "" }) {
  const [sparkles, setSparkles] = useState([]);

  useEffect(() => {
    const spawn = () => {
      const sparkle = {
        id: uid(),
        x: Math.random() * 90 + 5,
        y: Math.random() * 80 + 5,
        size: Math.floor(Math.random() * (maxSize - minSize + 1)) + minSize,
        color,
      };
      setSparkles((s) => [...s.slice(-(count - 1)), sparkle]);
    };

    spawn();
    const id = setInterval(spawn, interval);
    return () => clearInterval(id);
  }, [count, minSize, maxSize, color, interval]);

  return (
    <span
      className={className}
      style={{ position: "absolute", inset: 0, pointerEvents: "none", overflow: "hidden" }}
      aria-hidden="true"
    >
      <AnimatePresence>
        {sparkles.map((s) => (
          <Sparkle
            key={s.id}
            x={s.x}
            y={s.y}
            size={s.size}
            color={s.color}
            onDone={() => setSparkles((prev) => prev.filter((p) => p.id !== s.id))}
          />
        ))}
      </AnimatePresence>
    </span>
  );
}
