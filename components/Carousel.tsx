"use client";
import React, { ReactNode, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const Carousel = ({ children }: { children: ReactNode }) => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 4000 }),
  ]);
  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container w-full">{children}</div>
    </div>
  );
};

export default Carousel;
