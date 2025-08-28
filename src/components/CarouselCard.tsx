// CarouselCard.tsx
"use client";
import React, { useState, useEffect } from "react";
import ImageCarousel from "./ImageCarousel";
import DynamicCard from "./DynamicCard";

const CarouselCard = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  // Using placeholder images for demo - replace with your actual images
  const srcArray = ["/Office.jpg", "/Indoors.png", "/Trucks.png"];

  useEffect(() => {
    // Only auto-advance if not hovering
    if (!isHovering) {
      const intervalId = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % srcArray.length);
      }, 3000);

      return () => clearInterval(intervalId);
    }
  }, [isHovering, srcArray.length]);

  return (
    <div className="flex flex-col space-y-12 p-6">
      <div>
        <ImageCarousel
          imgSrc={srcArray[currentIndex]}
          currentIndex={currentIndex}
        />
      </div>
      <div
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <DynamicCard
          index={currentIndex}
          setIndex={(index) => setCurrentIndex(index)}
        />
      </div>
    </div>
  );
};

export default CarouselCard;
