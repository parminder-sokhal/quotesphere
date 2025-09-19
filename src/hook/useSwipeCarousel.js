import { useRef, useEffect } from "react";

export const useSwipeCarousel = ({ onNext, onPrev }) => {
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const onTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const onTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;

    const distance = touchStartX.current - touchEndX.current;

    if (Math.abs(distance) > minSwipeDistance) {
      if (distance > 0) {
        onNext(); // Swiped left
      } else {
        onPrev(); // Swiped right
      }
    }

    // Reset
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return {
    onTouchStart,
    onTouchMove,
    onTouchEnd,
  };
};
