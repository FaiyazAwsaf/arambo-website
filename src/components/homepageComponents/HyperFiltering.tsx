"use client";
import React from "react";
import Link from "next/link";
import { PropertyCard } from "../../components/PropertyCard";
const HyperFiltering = () => {
  const properties = [
    {
      id: 1,
      image: "/commercial/commercial-bg.png",
      price: "$1,200,000",
      type: "Office Space",
      location: "Dhaka, Bangladesh",
      forSale: true,
      isVerified: true,
      beds: 4,
      baths: 2,
      sqft: 2500,
    },
    {
      id: 2,
      image: "/commercial/commercial-house.png",
      price: "$900,000",
      type: "Retail Store",
      location: "Sylhet, Bangladesh",
      forSale: true,
      isVerified: false,
      beds: 2,
      baths: 1,
      sqft: 1200,
    },
    {
      id: 3,
      image: "/residential/residential-bg.png",
      price: "$500,000",
      type: "Apartment",
      location: "Dhaka, Bangladesh",
      forSale: true,
      isVerified: true,
      beds: 3,
      baths: 2,
      sqft: 1500,
    },
  ];
  const categories = [
    { value: "Family", link: "/family" },
    { value: "Women", link: "/women" },
    { value: "Bachelor", link: "/bachelor" },
    { value: "Furnished", link: "/furnished" },
    { value: "Non-Furnished", link: "/non-furnished" },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-[1200px] items-stretch align-middle rounded-3xl px-2 md:px-0">
      <div className="flex flex-col items-start justify-center space-y-5 w-full md:w-[75%]">
        <div className="h2">Hyper Filtered Listings</div>
        <div className="p-base text-Arambo-Text">
          Find your ideal apartment by applying filters for bachelors, women,
          and families, plus options for furnished or non-furnished units.
        </div>
        <div className="flex flex-wrap gap-3 md:gap-6 mt-4">
          {categories.map((category, index) => (
            <Link key={index} href={category.link}>
              <input
                value={category.value}
                type="button"
                className={`py-3 px-6 hover:text-Arambo-White hover:bg-Arambo-Accent text-Arambo-Black bg-Arambo-Background duration-400 rounded-full`}
              />
            </Link>
          ))}
        </div>
      </div>
      <div className="flex flex-1 overflow-x-auto space-x-4">
        {properties.map((property, index) => (
          <div key={index} className="min-w-[300px] h-fit ">
            <PropertyCard property={property} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HyperFiltering;
