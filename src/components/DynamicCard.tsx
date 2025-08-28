"use client";
import React from "react";

type DynamicCardProps = {
  index: number;
  setIndex: (index: number) => void;
};

const DynamicCard = ({ index, setIndex }:DynamicCardProps) => {
  return (
    <div className="flex space-x-12 md:flex-row flex-col md:w-[1200px]">
      <div
        className={`border-t-2 p-5 ${
          index === 0 ? "border-orange-500" : "border-gray-300"
        } space-y-4 cursor-pointer transition-colors duration-200`}
        onMouseEnter={() => setIndex(0)}
      >
        <h4 className="text-xl font-bold">Truck Moving</h4>
        <p className="text-gray-600">
          Whether you are relocating a home or business, our professional truck
          moving service ensures secure, on-time delivery every time.
        </p>
        <a href="/book-a-truck">
          <button className="border-b-2 border-orange-500 hover:bg-orange-50 transition-colors">
            Book Now
          </button>
        </a>
      </div>

      <div
        className={`border-t-2 p-5 ${
          index === 1 ? "border-orange-500" : "border-gray-300"
        } space-y-4 cursor-pointer transition-colors duration-200`}
        onMouseEnter={() => setIndex(1)}
      >
        <h4 className="text-xl font-bold">Furniture on Demand</h4>
        <p className="text-gray-600">
          Our on-demand furniture service delivers stylish, high-quality pieces
          tailored to your space and schedule.
        </p>
        <a href="">
          <button className="border-b-2 border-orange-500 hover:bg-orange-50 transition-colors">
            Request furniture solution
          </button>
        </a>
      </div>

      <div
        className={`border-t-2 p-5 ${
          index === 2 ? "border-orange-500" : "border-gray-300"
        } space-y-4 cursor-pointer transition-colors duration-200`}
        onMouseEnter={() => setIndex(2)}
      >
        <h4 className="text-xl font-bold">Interior Decoration</h4>
        <p className="text-gray-600">
          Connect with our design experts today and discover how our bespoke
          interior decor solutions can elevate your environment.
        </p>
        <a href="">
          <button className="border-b-2 border-orange-500 hover:bg-orange-50 transition-colors">
            Contact Us
          </button>
        </a>
      </div>
    </div>
  );
};

export default DynamicCard;
