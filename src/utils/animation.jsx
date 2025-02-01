// src/utils/animations.js
export const fadeInAnimation = {
  hidden: { opacity: 0, y: 20 }, // Estado inicial (invisible)
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }, // Estado final (visible)
};

export const scaleAnimation = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.7 } },
};

export const slideInFromLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
};

export const slideInFromRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
};