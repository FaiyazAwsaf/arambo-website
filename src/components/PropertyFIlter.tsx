"use client";

import type React from "react";
import { useState } from "react";
import { Search } from "lucide-react";
import { Slider } from "@mui/material";
import FormSelect from "./FormSelect";

export function PropertyFilter() {
  const [value, setValue] = useState<number[]>([10000, 32000]);
  const [minValue, setMinValue] = useState<number>(value[0]);
  const [maxValue, setMaxValue] = useState<number>(value[1]);

  const handleSliderChange = (event: Event, newValue: number | number[]) => {
    if (Array.isArray(newValue)) {
      setValue(newValue);
    }
  };

  return (
    <div className="bg-white rounded-lg p-4 sm:p-6 text-Arambo-Black shadow-sm border border-gray-200">
      <p className="font-semibold h6 sm:h5 mb-3 sm:mb-4">Search by Location</p>
      <div className="bg-Arambo-Background rounded-lg flex items-center w-full p-3 sm:p-4">
        <Search className="text-Arambo-Black flex-shrink-0" size={18} />
        <input
          type="text"
          placeholder="Search by location..."
          className="flex-1 pl-2 bg-transparent text-Arambo-Black placeholder-Arambo-Text outline-none text-sm sm:text-base min-w-0"
        />
      </div>

      <hr className="text-Arambo-Border my-3 sm:my-4" />

      {/* Filter by Rent */}
      <div className="flex flex-col space-y-3 sm:space-y-4">
        <p className="font-semibold h6 sm:h5">Filter by rent</p>
        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          <input
            type="text"
            placeholder="Min"
            value={minValue}
            onChange={(e) => setMinValue(Number(e.target.value))}
            className=" py-2 px-3 sm:px-4 rounded-lg bg-Arambo-Background text-Arambo-Black placeholder-Arambo-Text text-sm sm:text-base"
          />
          <input
            type="text"
            placeholder="Max"
            value={maxValue}
            onChange={(e) => setMaxValue(Number(e.target.value))}
            className=" py-2 px-3 sm:px-4 rounded-lg bg-Arambo-Background text-Arambo-Black placeholder-Arambo-Text text-sm sm:text-base"
          />
        </div>

        {/* Slider */}
        <div className="px-2">
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
        </div>

        <hr className="text-Arambo-Background my-3 sm:my-4" />
      </div>

      <div>
        <p className="font-semibold h6 sm:h5 mb-3 sm:mb-4">Filter by rent</p>
        <div className="space-y-4 sm:space-y-5">
          {/* Property Type & Area */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
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
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
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
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
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
