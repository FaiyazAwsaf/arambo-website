"use client";

import React, { useState } from "react";
import { Search } from "lucide-react";
import { Slider } from "@mui/material";
import FormSelect from "./FormSelect";


interface PropertyFilterProps {
  CategoryOptions: string[];
}

export function PropertyFilter({ CategoryOptions }: PropertyFilterProps) {
  const CATEGORY_OPTIONS = CategoryOptions;
  const [form, setForm] = useState({
    location: "",
    minRent: 10000,
    maxRent: 32000,
    categories: [] as string[],
    propertyType: "",
    area: "",
    beds: "",
    bathroom: "",
    aptType: "",
    bathroom2: "",
  });

  const [sliderValue, setSliderValue] = useState<number[]>([form.minRent, form.maxRent]);

  // Generic handleChange for text/select inputs
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
    //console.log(form);

    // ATTENTION!!!
    // Axios request can be made here for filtering
  };

  // Handle slider change
  const handleSliderChange = (event: Event, newValue: number | number[]) => {
    if (Array.isArray(newValue)) {
      setSliderValue(newValue);
      setForm((prev) => ({
        ...prev,
        minRent: newValue[0],
        maxRent: newValue[1],
      }));
    }
  };

  // Category toggle logic
  const handleCategoryToggle = (category: string) => {
    setForm((prev) => {
      const isSelected = prev.categories.includes(category);
      return {
        ...prev,
        categories: isSelected
          ? prev.categories.filter((c) => c !== category)
          : [...prev.categories, category],
      };
    });
  };

  return (
    <div className="bg-white rounded-lg p-6 text-Arambo-Black shadow-sm border border-gray-200">
      <p className="font-semibold text-lg mb-4">Search by Location</p>
      <div className="bg-Arambo-Background rounded-lg flex items-center w-full max-w-md p-4">
        <Search className="text-Arambo-Black" size={20} />
        <input
          type="text"
          name="location"
          value={form.location}
          onChange={handleChange}
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
            name="minRent"
            placeholder="Min"
            value={form.minRent}
            onChange={handleChange}
            className="w-20 py-2 px-4 rounded-lg bg-Arambo-Background text-Arambo-Black placeholder-Arambo-Text"
          />
          <input
            type="text"
            name="maxRent"
            placeholder="Max"
            value={form.maxRent}
            onChange={handleChange}
            className="w-20 py-2 px-4 rounded-lg bg-Arambo-Background text-Arambo-Black placeholder-Arambo-Text"
          />
        </div>

        {/* Slider */}
        <Slider
          getAriaLabel={() => "Price range"}
          value={sliderValue}
          onChange={handleSliderChange}
          valueLabelDisplay="off"
          min={0}
          max={32000}
          step={1}
          className="text-Arambo-Accent"
        />

        <hr className="text-Arambo-Background my-4" />
      </div>
      {/* Select Category by Rent */}
      <div className="flex flex-col space-y-4">
        <p className="font-semibold text-lg mb-4">Category</p>
        <div className="flex flex-wrap gap-2">
          {CATEGORY_OPTIONS.map((cat) => {
            const isSelected = form.categories.includes(cat);
            return (
              <button
                key={cat}
                type="button"
                onClick={() => handleCategoryToggle(cat)}
                className={`py-3 px-6 rounded-full duration-400 ${isSelected
                  ? "bg-Arambo-Accent text-Arambo-White"
                  : "bg-Arambo-Background text-Arambo-Black hover:bg-Arambo-Accent hover:text-Arambo-White"
                  }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

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
              value={form.propertyType}
              onChange={handleChange}
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
              value={form.area}
              onChange={handleChange}
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
              value={form.beds}
              onChange={handleChange}
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
              value={form.bathroom}
              onChange={handleChange}
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
              value={form.aptType}
              onChange={handleChange}
              options={[
                { value: "", label: "Any" },
                { value: "studio", label: "Studio" },
                { value: "dupl  ex", label: "Duplex" },
                { value: "penthouse", label: "Penthouse" },
              ]}
            />

            <FormSelect
              label="Bathroom"
              name="bathroom2"
              value={form.bathroom2}
              onChange={handleChange}
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
