import { Link } from "react-router-dom";

export default function SiteHeader() {
  return (
    <header className="site-header sticky top-0 z-20 border-b border-sea-200/60">
      <div className="mx-auto flex max-w-5xl justify-center px-5 py-4 sm:px-8">
        <Link
          to="/"
          className="inline-block text-lg font-semibold tracking-tight text-neutral-900 transition-opacity hover:opacity-[0.85] sm:text-xl"
        >
          TanyaTalk
        </Link>
      </div>
    </header>
  );
}
