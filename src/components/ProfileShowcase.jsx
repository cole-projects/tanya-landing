import { PROFILE_PHOTO_ALT } from "../content/brand.js";

export default function ProfileShowcase({
  src,
  alt = PROFILE_PHOTO_ALT,
  variant = "default",
}) {
  const compact = variant === "compact";

  return (
    <div
      className={[
        "mt-7 overflow-hidden rounded-2xl ring-1 ring-sea-200/85 shadow-sm shadow-sea-400/25",
        compact ? "mx-auto mt-6 max-w-md" : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <img
        src={src}
        alt={alt}
        className={[
          "block w-full object-cover",
          compact ? "max-h-64 object-[center_25%] sm:max-h-72" : "h-auto",
        ].join(" ")}
        width={800}
        height={1000}
      />
    </div>
  );
}
