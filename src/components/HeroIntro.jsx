export default function HeroIntro({ title, subtitle }) {
  return (
    <div className="text-center">
      <h2 className="text-[1.65rem] font-semibold leading-snug tracking-tight text-sea-900 sm:text-[1.85rem]">
        {title}
      </h2>
      {subtitle ? (
        <p className="mx-auto mt-4 w-[65%] max-w-[16rem] text-[0.8125rem] font-normal leading-[1.55] tracking-[0.01em] text-sea-800/75 sm:mt-5 sm:max-w-[17rem] sm:text-[0.875rem] md:max-w-[17.5rem]">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
