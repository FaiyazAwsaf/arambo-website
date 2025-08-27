"use client";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { useRef, useState } from "react";

const NeighbourhoodAmenities = () => {
  const tabsRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Drag scroll states
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const onMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (tabsRef.current?.offsetLeft || 0));
    setScrollLeft(tabsRef.current?.scrollLeft || 0);
  };
  const onMouseLeave = () => setIsDragging(false);
  const onMouseUp = () => setIsDragging(false);
  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !tabsRef.current) return;
    e.preventDefault();
    const x = e.pageX - tabsRef.current.offsetLeft;
    const walk = (x - startX) * 2; // scroll speed
    tabsRef.current.scrollLeft = scrollLeft - walk;
  };

  const tabs = [
    "Neighborhood Trends",
    "Location Quality",
    "Transportation Links",
    "Energy Efficiency",
    "Future Developments",
    "Community & Safety",
  ];
  return (
    <div className="w-full">
      <div className="bg-white rounded-xl border border-gray-200 overflow-auto">
        {/* Header */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-4 border-b border-gray-200">
          <p className="label-16">Neighborhood Amenities</p>
          <button className="p-1 hover:bg-gray-100 rounded transition-colors">
            <ChevronDown className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="p-3">
          <div
            ref={tabsRef}
            className="flex items-center gap-2 py-1 px-2 sm:gap-3 sm:px-4 bg-Arambo-Background rounded-lg w-full overflow-x-hidden scrollbar-hide"
            onMouseDown={onMouseDown}
            onMouseLeave={onMouseLeave}
            onMouseUp={onMouseUp}
            onMouseMove={onMouseMove}
          >
            {tabs.map((tab, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`px-3 py-2 text-sm whitespace-nowrap flex-shrink-0 rounded-lg transition-colors ${
                  activeIndex === i
                    ? "bg-Arambo-Accent text-white"
                    : "text-Arambo-Text bg-transparent"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="p-3">
          {/* Amenities List */}
          <div className="px-3 pt-5 pb-2 sm:px-5 bg-Arambo-Background rounded-xl">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-Arambo-Border py-3 gap-2">
              <div>
                <p className="font-medium text-Arambo-Black text-sm">
                  Walmart Supercentre
                </p>
                <p className="text-[12px] text-Arambo-Text">
                  3757 Keele St, Toronto
                </p>
              </div>
              <button className="flex items-center gap-2 text-Arambo-Black transition-colors">
                <Link
                  href={"/property-details"}
                  className="text-[12px] font-medium underline"
                >
                  View direction
                </Link>
                <img src="/property-single/uparrow.svg" alt="" />
              </button>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-Arambo-Border py-3 gap-2">
              <div>
                <p className="font-medium text-Arambo-Black text-sm">
                  Walmart Supercentre
                </p>
                <p className="text-[12px] text-Arambo-Text">
                  3757 Keele St, Toronto
                </p>
              </div>
              <button className="flex items-center gap-2 text-Arambo-Black transition-colors">
                <Link
                  href={"/property-details"}
                  className="text-[12px] font-medium underline"
                >
                  View direction
                </Link>
                <img src="/property-single/uparrow.svg" alt="" />
              </button>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-Arambo-Border py-3 gap-2">
              <div>
                <p className="font-medium text-Arambo-Black text-sm">
                  Walmart Supercentre
                </p>
                <p className="text-[12px] text-Arambo-Text">
                  3757 Keele St, Toronto
                </p>
              </div>
              <button className="flex items-center gap-2 text-Arambo-Black transition-colors">
                <Link
                  href={"/property-details"}
                  className="text-[12px] font-medium underline"
                >
                  View direction
                </Link>
                <img src="/property-single/uparrow.svg" alt="" />
              </button>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-Arambo-Border py-3 gap-2">
              <div>
                <p className="font-medium text-Arambo-Black text-sm">
                  Walmart Supercentre
                </p>
                <p className="text-[12px] text-Arambo-Text">
                  3757 Keele St, Toronto
                </p>
              </div>
              <button className="flex items-center gap-2 text-Arambo-Black transition-colors">
                <Link
                  href={"/property-details"}
                  className="text-[12px] font-medium underline"
                >
                  View direction
                </Link>
                <img src="/property-single/uparrow.svg" alt="" />
              </button>
            </div>
          </div>

          <div className="mt-4 px-3 pt-5 pb-2 sm:px-5 bg-Arambo-Background rounded-xl">
            <p className="text-sm font-medium text-Arambo-Black">
              Commute Time
            </p>
            <p className="text-[12px] text-Arambo-Text">
              Calculate the time and distance from 107 Torbarrie Road to your
              preferred destination.
            </p>

            <div className="p-3 bg-Arambo-White flex flex-col md:flex-row items-start gap-3 mt-4">
              <div className="flex-1 w-full">
                <div className="flex items-center gap-1">
                  <img src="/property-single/address.svg" alt="" />
                  <input
                    type="text"
                    className="border-none outline-none w-full"
                    placeholder="Enter Your Address... "
                    name=""
                    id=""
                  />
                </div>
                <div className="h-16 border-l border-dashed border-Arambo-Border flex items-center px-8 my-1">
                  <p className="text-base text-Arambo-Accent font-medium">
                    1hr 1min
                  </p>
                </div>
                <div className="flex items-center gap-1.5">
                  <div>
                    <img src="/property-single/location.svg" alt="" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-Arambo-Black">
                      Walmart Supercentre
                    </p>
                    <p className="text-[12px] text-Arambo-Text">
                      3757 Keele St, Toronto
                    </p>
                  </div>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden border border-gray-200 w-full md:w-auto md:flex-shrink-0">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.0875236505557!2d112.6158192147785!3d-7.983908594264203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd6282fd3b3d0a3%3A0x304ac6b4e0db8c2!2sMalang%2C%20East%20Java%2C%20Indonesia!5e0!3m2!1sen!2sid!4v1692268899304!5m2!1sen!2sid"
                  width="100%"
                  height="150"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NeighbourhoodAmenities;
