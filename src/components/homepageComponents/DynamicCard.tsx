"use client";
import React from "react";
import Link from "next/link";

type DynamicCardProps = {
  index: number;
  setIndex: (index: number) => void;
};

const DynamicCard: React.FC<DynamicCardProps> = ({ index, setIndex }) => {
  return (
    <div className=" flex space-x-12 md:flex-row flex-col md:w-[1200px]">
      <div
        className={`border-t-2 p-5 ${
          index === 2 ? `border-Arambo-Accent` : `border-Arambo-Background`
        } space-y-4`}
        onMouseEnter={() => setIndex(2)}
      >
        <h4 className="h4 font-bold">Truck Moving</h4>
        <p className="p-base text-[#000000A3]">
          Whether you`re relocating a home or business, our professional truck
          moving service ensures secure, on-time delivery every time.
        </p>
        <Link href="/book-a-truck">
          <button className="border-b-2 border-Arambo-Accent">Book Now</button>
        </Link>
      </div>
      <div
        className={`border-t-2 p-5 ${
          index === 0 ? `border-Arambo-Accent` : `border-Arambo-Background`
        } space-y-4`}
        onMouseEnter={() => setIndex(0)}
      >
        <h4 className="h4 font-bold">Furniture on Demand</h4>
        <p className="p-base text-[#000000A3]">
          Our on-demand furniture service delivers stylish, high-quality pieces
          tailored to your space and schedule.
        </p>
        <Link href="/furniture">
          <button className="border-b-2 border-Arambo-Accent">
            Request furniture solution
          </button>
        </Link>
      </div>
      <div
        className={`border-t-2 p-5 ${
          index === 1 ? `border-Arambo-Accent` : `border-Arambo-Background`
        } space-y-4`}
        onMouseEnter={() => setIndex(1)}
      >
        <h4 className="h4 font-bold">Interior Decoration</h4>
        <p className="p-base text-[#000000A3]">
          Connect with our design experts today and discover how our bespoke
          interior decor solutions can elevate your environment.
        </p>
        <Link href="">
          <button className="border-b-2 border-Arambo-Accent">
            Contact Us
          </button>
        </Link>
      </div>
    </div>
  );
};

export default DynamicCard;
