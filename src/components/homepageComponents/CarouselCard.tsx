"use client";
import React, { useState, useEffect } from "react";
import ImageCarousel from "./ImageCarousel";
import DynamicCard from "./DynamicCard";

const CarouselCard = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const srcArray = [
    "/homepageAssets/Trucks.png",
    "/homepageAssets/Office.jpg",
    "/homepageAssets/Indoors.png",
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % srcArray.length);
    }, 3000);

    return () => clearInterval(intervalId);
  });

  return (
    <div className="flex flex-col space-y-12">
      <div>
        <ImageCarousel
          imgSrc={srcArray[currentIndex]}
          currentIndex={currentIndex}
        />
      </div>
      <div>
        <DynamicCard index={currentIndex} setCurrentIndex={setCurrentIndex} />
      </div>
    </div>
  );
};

export default CarouselCard;
