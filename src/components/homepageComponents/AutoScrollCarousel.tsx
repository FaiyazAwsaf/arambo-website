"use client";

import { useEffect, useRef, useState } from "react";

const AutoScrollCarousel = () => {
    return (
        <div className="overflow-hidden w-full scroll-wrapper">
            <div
                className="flex w-max scroll-content"
            >
                <img className="mr-20" src="/homepageAssets/Image.png" alt="" />
                <img className="mr-20" src="/homepageAssets/Image-1.png" alt="" />
                <img className="mr-20" src="/homepageAssets/Image-2.png" alt="" />
                <img className="mr-20" src="/homepageAssets/Image-3.png" alt="" />
                <img className="mr-20" src="/homepageAssets/Image-4.png" alt="" />
                <img className="mr-20" src="/homepageAssets/Image-5.png" alt="" />
                <img className="mr-20" src="/homepageAssets/Image-6.png" alt="" />
                {/* Duplicate */}
                <img className="mr-20" src="/homepageAssets/Image.png" alt="" />
                <img className="mr-20" src="/homepageAssets/Image-1.png" alt="" />
                <img className="mr-20" src="/homepageAssets/Image-2.png" alt="" />
                <img className="mr-20" src="/homepageAssets/Image-3.png" alt="" />
                <img className="mr-20" src="/homepageAssets/Image-4.png" alt="" />
                <img className="mr-20" src="/homepageAssets/Image-5.png" alt="" />
                <img className="mr-20" src="/homepageAssets/Image-6.png" alt="" />
            </div>
        </div>
    );
};

export default AutoScrollCarousel;
