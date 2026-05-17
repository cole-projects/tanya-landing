import { useEffect } from "react";

/** Old deep links → single-page anchors (e.g. /what-is-tanyatalk → /#what-is-tanyatalk). */
export default function RedirectHash({ hash }) {
  useEffect(() => {
    window.location.replace(`${window.location.origin}/#${hash}`);
  }, [hash]);
  return null;
}
