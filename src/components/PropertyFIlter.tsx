"use client";

import type React from "react";
import { useState } from "react";
import { Search } from "lucide-react";

export function PropertyFilter() {
  const [priceRange, setPriceRange] = useState([12000, 32000]);
  const [searchValue, setSearchValue] = useState("");

  const handleSliderChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const newRange = [...priceRange];
    newRange[index] = Number.parseInt(e.target.value);
    setPriceRange(newRange);
  };

  const handleInputChange = (value: string, index: number) => {
    const numValue = Number.parseInt(value.replace(/,/g, "")) || 0;
    const newRange = [...priceRange];
    newRange[index] = numValue;
    setPriceRange(newRange);
  };

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Search by location
        </h3>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <input
            type="text"
            placeholder="Enter Keyword..."
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1946BB] focus:border-[#1946BB] text-sm"
          />
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Filter by rent
        </h3>
        <div className="space-y-4">
          <div className="flex justify-between gap-2 w-full">
            <input
              type="text"
              value={priceRange[0].toLocaleString()}
              onChange={(e) => handleInputChange(e.target.value, 0)}
              className="w-[48%] px-3 py-3 bg-gray-100 border-0 rounded-lg text-center font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#1946BB] text-sm"
            />
            <input
              type="text"
              value={priceRange[1].toLocaleString()}
              onChange={(e) => handleInputChange(e.target.value, 1)}
              className="w-[48%] px-3 py-3 bg-gray-100 border-0 rounded-lg text-center font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#1946BB] text-sm"
            />
          </div>

          <div className="relative mt-6">
            <div className="h-2 bg-gray-200 rounded-full relative">
              <div
                className="h-2 bg-[#1946BB] rounded-full absolute"
                style={{
                  left: `${((priceRange[0] - 5000) / 45000) * 100}%`,
                  width: `${((priceRange[1] - priceRange[0]) / 45000) * 100}%`,
                }}
              />
              {/* Left handle */}
              <div
                className="absolute w-5 h-5 bg-[#1946BB] rounded-full border-2 border-white shadow-md -top-1.5 transform -translate-x-1/2 cursor-pointer"
                style={{ left: `${((priceRange[0] - 5000) / 45000) * 100}%` }}
              />
              {/* Right handle */}
              <div
                className="absolute w-5 h-5 bg-[#1946BB] rounded-full border-2 border-white shadow-md -top-1.5 transform -translate-x-1/2 cursor-pointer"
                style={{ left: `${((priceRange[1] - 5000) / 45000) * 100}%` }}
              />
            </div>
            <input
              type="range"
              min="5000"
              max="50000"
              step="1000"
              value={priceRange[0]}
              onChange={(e) => handleSliderChange(e, 0)}
              className="absolute top-0 w-full h-2 opacity-0 cursor-pointer"
            />
            <input
              type="range"
              min="5000"
              max="50000"
              step="1000"
              value={priceRange[1]}
              onChange={(e) => handleSliderChange(e, 1)}
              className="absolute top-0 w-full h-2 opacity-0 cursor-pointer"
            />
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Filters</h3>
        <div className="space-y-6">
          {/* Property Type & Area */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Property Type
              </label>
              <select className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1946BB] focus:border-[#1946BB] text-sm bg-white">
                <option value="">Any</option>
                <option value="apartment">Apartment</option>
                <option value="house">House</option>
                <option value="villa">Villa</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Area
              </label>
              <select className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1946BB] focus:border-[#1946BB] text-sm bg-white">
                <option value="">Any</option>
                <option value="gulshan">Gulshan</option>
                <option value="banani">Banani</option>
                <option value="dhanmondi">Dhanmondi</option>
              </select>
            </div>
          </div>

          {/* Beds & Bathroom */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Beds
              </label>
              <select className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1946BB] focus:border-[#1946BB] text-sm bg-white">
                <option value="">Any</option>
                <option value="1">1 Bed</option>
                <option value="2">2 Beds</option>
                <option value="3">3 Beds</option>
                <option value="4">4+ Beds</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Bathroom
              </label>
              <select className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1946BB] focus:border-[#1946BB] text-sm bg-white">
                <option value="">Any</option>
                <option value="1">1 Bath</option>
                <option value="2">2 Baths</option>
                <option value="3">3+ Baths</option>
              </select>
            </div>
          </div>

          {/* Apt. Type & Bathroom (second row) */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Apt. Type
              </label>
              <select className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1946BB] focus:border-[#1946BB] text-sm bg-white">
                <option value="">Any</option>
                <option value="studio">Studio</option>
                <option value="duplex">Duplex</option>
                <option value="penthouse">Penthouse</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Bathroom
              </label>
              <select className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1946BB] focus:border-[#1946BB] text-sm bg-white">
                <option value="">Any</option>
                <option value="1">1 Bath</option>
                <option value="2">2 Baths</option>
                <option value="3">3+ Baths</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
