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
          className="w-full group-hover:scale-105 transition-all aspect-[396/302] object-cover"
        />

        {/* For Sale Badge */}
        {property.forSale && (
          <div className="absolute top-2 sm:top-3 right-2 sm:right-3 bg-Arambo-White text-Arambo-Accent px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-medium border border-gray-200">
            For Sale
          </div>
        )}

        {property.isVerified && (
          <div className="absolute bottom-0 left-0 right-0">
            <div className="bg-[#1946BB] text-white font-medium px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm flex items-center justify-start gap-1 sm:gap-1.5">
              <img
                src={"/commercial/verified.svg"}
                className="w-3 h-3 sm:w-4 sm:h-4"
              />
              <span className="text-xs sm:text-sm">Verified By Arambo</span>
            </div>
          </div>
        )}
      </div>

      <div className="p-3 sm:p-4">
        {/* Price and Type */}
        <div className="mb-3 sm:mb-4">
          <div className="flex justify-between items-start mb-2 sm:mb-3 gap-2">
            <div className="h4 font-bold text-Arambo-Accent min-w-0 flex-1">
              <span className="font-bold">৳ </span>{property.price}
            </div>
            <div className="text-xs sm:text-sm border border-Arambo-Border rounded-full text-Arambo-Text bg-gray-50 px-2 sm:px-3 py-1 whitespace-nowrap">
              {property.type}
            </div>
          </div>

          {/* Location */}
          <div className="flex items-center gap-1 sm:gap-1.5 mb-3 sm:mb-4">
            <img
              src="/commercial/location.svg"
              alt=""
              className="w-4 h-4 flex-shrink-0"
            />
            <span className="text-Arambo-Text body-sm sm:body-md min-w-0">
              {property.location}
            </span>
          </div>
        </div>

        {/* Property Details */}
        <div className="flex items-center font-medium p-2 sm:p-3 bg-Arambo-Background rounded-xl text-Arambo-Black justify-between body-sm sm:body-md gap-2">
          <div className="flex items-center gap-1 min-w-0">
            <img
              src="/commercial/bed.svg"
              alt=""
              className="w-4 h-4 flex-shrink-0"
            />
            <span className="text-xs sm:text-sm whitespace-nowrap">
              {property.beds} Beds
            </span>
          </div>
          <div className="flex items-center gap-1 min-w-0">
            <img
              src="/commercial/bath.svg"
              alt=""
              className="w-4 h-4 flex-shrink-0"
            />
            <span className="text-xs sm:text-sm whitespace-nowrap">
              {property.baths} Baths
            </span>
          </div>
          <div className="flex items-center gap-1 min-w-0">
            <img
              src="/commercial/sqft.svg"
              alt=""
              className="w-4 h-4 flex-shrink-0"
            />
            <span className="text-xs sm:text-sm whitespace-nowrap">
              {property.sqft} sqft
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
