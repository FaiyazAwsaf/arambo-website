"use client";

import { useEffect, useRef, useState } from "react";

const AutoScrollCarousel = () => {
    return (
        <div className="overflow-hidden w-full scroll-wrapper">
            <div className="flex items-center self-stretch justify-between w-max scroll-content h-[50px]">
                {["Image.png", "Image-1.png", "Image-2.png", "Image-3.png", "Image-4.png", "Image-5.png", "Image-6.png", "Image.png", "Image-1.png", "Image-2.png", "Image-3.png", "Image-4.png", "Image-5.png", "Image-6.png"].map((img, i) => (
                    <img key={i} className="mr-20 flex-shrink-0 h-full object-cover" src={`/homepageAssets/${img}`} alt="" />
                ))}
            </div>
        </div>
    );
};

export default AutoScrollCarousel;
