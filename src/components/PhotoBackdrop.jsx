/** Full-bleed aerial beach photo over the aurora. Opacity: `--photo-backdrop-opacity` in `index.css` (0–1). */
export default function PhotoBackdrop() {
  return (
    <div className="photo-backdrop" aria-hidden>
      <img
        src="/hero-beach-aerial.png"
        alt=""
        className="photo-backdrop__img"
        width={1200}
        height={1600}
        decoding="async"
        fetchPriority="low"
      />
    </div>
  );
}
