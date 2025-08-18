import { Check, MapPin, Bed, Bath, Square, CircleCheckBig } from "lucide-react";
import Link from "next/link";

interface Property {
  id: number;
  image: string;
  price: string;
  type: string;
  location: string;
  beds: number;
  baths: number;
  sqft: number;
  isVerified: boolean;
  forSale: boolean;
}

interface PropertyCardProps {
  property: Property;
}

export function PropertyCard({ property }: PropertyCardProps) {
  return (
    <Link
      href={"/property-single"}
      className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-200 hover:shadow-md transition-shadow group"
    >
      <div className="relative overflow-hidden transition-transform">
        <img
          src={
            property.image ||
            "/placeholder.svg?height=302&width=396&query=modern apartment interior"
          }
          alt="Property"
          className="w-full  group-hover:scale-105 transition-all aspect-[396/302] object-cover"
        />

        {/* For Sale Badge */}
        {property.forSale && (
          <div className="absolute top-3 right-3 bg-Arambo-White text-Arambo-Accent px-3.5 py-1.5 rounded-full text-sm font-medium border border-gray-200">
            For Sale
          </div>
        )}

        {property.isVerified && (
          <div className="absolute bottom-0 left-0 right-0">
            <div className="bg-[#1946BB] text-white font-medium px-3 py-2 text-sm flex items-center justify-start gap-1.5">
              <img src={"/commercial/verified.svg"} />
              Verified By Arambo
            </div>
          </div>
        )}
      </div>

      <div className="p-3">
        {/* Price and Type */}
        <div className="mb-4">
          <div className="flex justify-between items-start mb-3">
            <div className="text-2xl font-bold text-Arambo-Accent">
              {property.price}
            </div>
            <div className="text-sm border border-Arambo-Border rounded-full text-Arambo-Text bg-gray-50 px-3 py-1">
              {property.type}
            </div>
          </div>

          {/* Location */}
          <div className="flex items-center gap-1.5 mb-4">
            <img src="/commercial/location.svg" alt="" />
            <span className="text-Arambo-Text text-base">
              {property.location}
            </span>
          </div>
        </div>

        {/* Property Details */}
        <div className="flex items-center text-sm font-medium p-3 bg-Arambo-Background rounded-xl text-Arambo-Black justify-between text-sm">
          <div className="flex items-center gap-1">
            <img src="/commercial/bed.svg" alt="" />
            <span >{property.beds} Beds</span>
          </div>
          <div className="flex items-center gap-1">
            <img src="/commercial/bath.svg" alt="" />
            <span>{property.baths} Baths</span>
          </div>
          <div className="flex items-center gap-1">
            <img src="/commercial/sqft.svg" alt="" />
            <span>{property.sqft} sqft</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
