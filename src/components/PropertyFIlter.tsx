"use client";

import type React from "react";
import { useState } from "react";
import { Search } from "lucide-react";
import { Slider } from "@mui/material";
import FormSelect from "./FormSelect";

export function PropertyFilter() {
  const [priceRange, setPriceRange] = useState([12000, 32000]);
  const [value, setValue] = useState<number[]>([10000, 32000]);
  const [minValue, setMinValue] = useState<number>(value[0]);
  const [maxValue, setMaxValue] = useState<number>(value[1]);

  // const handleSliderChange = (
  //   e: React.ChangeEvent<HTMLInputElement>,
  //   index: number
  // ) => {
  //   const newRange = [...priceRange];
  //   newRange[index] = Number.parseInt(e.target.value);
  //   if (Array.isArray(newRange)) {
  //        setPriceRange(newRange);
  // };

//   const handleInputChange = (value: string, index: number) => {
//     const numValue = Number.parseInt(value.replace(/,/g, "")) || 0;
//     const newRange = [...priceRange];
//     newRange[index] = numValue;
//     setPriceRange(newRange);
//   };

  const handleSliderChange = (event: Event, newValue: number | number[]) => {
    if (Array.isArray(newValue)) {
      setValue(newValue);
    }
  };
  return (
    <div className="bg-white rounded-lg p-6 text-Arambo-Black shadow-sm border border-gray-200">
      <p className="font-semibold text-lg mb-4">Search by Location</p>
      <div className="bg-Arambo-Background rounded-lg flex items-center w-full max-w-md p-4">
        <Search className="text-Arambo-Black" size={20} />
        <input
          type="text"
          placeholder="Search by location..."
          className="flex-1 pl-2 bg-transparent text-Arambo-Black placeholder-Arambo-Text outline-none"
        />
      </div>

      <hr className="text-Arambo-Border my-4" />

      {/* Filter by Rent */}
      <div className="flex flex-col space-y-4">
        <p className="font-semibold text-lg mb-4">Filter by rent</p>
        <div className="flex justify-between">
          <input
            type="text"
            placeholder="Min"
            value={minValue}
            onChange={(e) => setMinValue(Number(e.target.value))}
            className="w-20 py-2 px-4 rounded-lg bg-Arambo-Background text-Arambo-Black placeholder-Arambo-Text"
          />
          <input
            type="text"
            placeholder="Max"
            value={maxValue}
            onChange={(e) => setMaxValue(Number(e.target.value))}
            className="w-20 py-2 px-4 rounded-lg bg-Arambo-Background text-Arambo-Black placeholder-Arambo-Text"
          />
        </div>

        {/* Slider */}
        <Slider
          getAriaLabel={() => "Price range"}
          value={value}
          onChange={handleSliderChange}
          valueLabelDisplay="off"
          min={0}
          max={32000}
          step={1}
          className="text-Arambo-Accent"
        />

        <hr className="text-Arambo-Background my-4" />
      </div>
      <div>
        <p className="font-semibold text-lg mb-4">Filter by rent</p>
        <div className="space-y-5">
          {/* Property Type & Area */}
          <div className="grid grid-cols-2 gap-4">
            <FormSelect
              label="Property Type"
              name="propertyType"
              options={[
                { value: "", label: "Any" },
                { value: "apartment", label: "Apartment" },
                { value: "house", label: "House" },
                { value: "villa", label: "Villa" },
              ]}
            />

            <FormSelect
              label="Area"
              name="area"
              options={[
                { value: "", label: "Any" },
                { value: "gulshan", label: "Gulshan" },
                { value: "banani", label: "Banani" },
                { value: "dhanmondi", label: "Dhanmondi" },
              ]}
            />
          </div>

          {/* Beds & Bathroom */}
          <div className="grid grid-cols-2 gap-4">
            <FormSelect
              label="Beds"
              name="beds"
              options={[
                { value: "", label: "Any" },
                { value: "1", label: "1 Bed" },
                { value: "2", label: "2 Beds" },
                { value: "3", label: "3 Beds" },
                { value: "4", label: "4+ Beds" },
              ]}
            />

            <FormSelect
              label="Bathroom"
              name="bathroom"
              options={[
                { value: "", label: "Any" },
                { value: "1", label: "1 Bath" },
                { value: "2", label: "2 Baths" },
                { value: "3", label: "3+ Baths" },
              ]}
            />
          </div>

          {/* Apt. Type & Bathroom */}
          <div className="grid grid-cols-2 gap-4">
            <FormSelect
              label="Apt. Type"
              name="aptType"
              options={[
                { value: "", label: "Any" },
                { value: "studio", label: "Studio" },
                { value: "duplex", label: "Duplex" },
                { value: "penthouse", label: "Penthouse" },
              ]}
            />

            <FormSelect
              label="Bathroom"
              name="bathroom2"
              options={[
                { value: "", label: "Any" },
                { value: "1", label: "1 Bath" },
                { value: "2", label: "2 Baths" },
                { value: "3", label: "3+ Baths" },
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
