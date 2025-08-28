// ImageCarousel.tsx
"use client";
import React from "react";

type ImageCarouselProps = {
  imgSrc: string;
  currentIndex: number;
};

const ImageCarousel: React.FC<ImageCarouselProps> = ({
  imgSrc,
  currentIndex,
}) => {
  return (
    <div className=" overflow-hidden relative bg-Arambo-White md:w-[1200px] md:h-[600px] h-[200px] w-full rounded-2xl">
      <img
        className="object-cover absolute"
        src={imgSrc}
        alt={`Carousel image ${currentIndex + 1}`}
      />
    </div>
  );
};

export default ImageCarousel;
