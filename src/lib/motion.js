/** Shared easing and timings so motion feels like one brand system */
export const brandEase = [0.22, 1, 0.36, 1];

export const rise = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

export const drop = {
  initial: { opacity: 0, y: -12 },
  animate: { opacity: 1, y: 0 },
};
