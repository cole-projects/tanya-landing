import { useEffect, useRef } from "react";
import { MotionGlassPanel } from "./GlassPanel.jsx";
import { brandEase, rise } from "../lib/motion.js";

export default function DemoVideo() {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.45 },
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="w-full min-w-0 max-w-2xl"
      aria-label="TanyaTalk demo video"
    >
      <MotionGlassPanel
        as="figure"
        className="mx-auto w-full max-w-[280px] overflow-hidden rounded-[1.35rem] p-3 sm:max-w-[300px]"
        initial={rise.initial}
        whileInView={rise.animate}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.65, ease: brandEase }}
      >
        <figcaption className="mb-3 text-center text-sm font-medium tracking-tight text-sea-900/80">
          See TanyaTalk in action
        </figcaption>
        <div className="overflow-hidden rounded-[1.75rem] bg-black shadow-inner ring-1 ring-sea-900/10">
          <video
            ref={videoRef}
            src="/tanya-demo.mp4"
            autoPlay
            muted
            loop
            playsInline
            disablePictureInPicture
            preload="auto"
            className="demo-video__player block aspect-[9/19.5] w-full object-cover object-top"
            aria-label="TanyaTalk demo"
          />
        </div>
      </MotionGlassPanel>
    </section>
  );
}
