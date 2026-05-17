/**
 * Spinner + wordmark stack (same look as the pre-React shell in index.html).
 * Use anywhere inside the app when you need a branded loading state.
 */
export default function BrandedSpiralLoader({ title = "TanyaTalk" }) {
  return (
    <div
      className="flex flex-col items-center gap-[1.125rem]"
      role="status"
      aria-live="polite"
      aria-busy="true"
      aria-label={`Loading ${title}`}
    >
      <img
        src="/loading-spiral.png"
        alt=""
        width={104}
        height={96}
        decoding="async"
        className="initial-splash-spiral"
        aria-hidden
      />
      <p className="m-0 text-[1.65rem] font-semibold tracking-tight text-neutral-900">
        {title}
      </p>
    </div>
  );
}
