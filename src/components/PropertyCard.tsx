import { Check, MapPin, Bed, Bath, Square } from "lucide-react";

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
    <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
      <div className="relative">
        <img
          src={
            property.image ||
            "/placeholder.svg?height=302&width=396&query=modern apartment interior"
          }
          alt="Property"
          className="w-full aspect-[396/302] object-cover"
        />

        {/* For Sale Badge */}
        {property.forSale && (
          <div className="absolute top-3 right-3 bg-white text-gray-700 px-3 py-1 rounded-full text-sm font-medium border border-gray-200">
            For Sale
          </div>
        )}

        {property.isVerified && (
          <div className="absolute bottom-0 left-0 right-0">
            <div className="bg-[#1946BB] text-white px-3 py-2 text-sm font-medium flex items-center justify-center gap-1">
              <Check className="w-3 h-3" />
              Verified By Avenbo
            </div>
          </div>
        )}
      </div>

      <div className="p-4">
        {/* Price and Type */}
        <div className="flex justify-between items-start mb-3">
          <div className="text-2xl font-bold text-[#1946BB]">
            {property.price}
          </div>
          <div className="text-sm text-gray-500 bg-gray-50 px-2 py-1 rounded">
            {property.type}
          </div>
        </div>

        {/* Location */}
        <div className="flex items-center gap-2 mb-4">
          <MapPin className="h-4 w-4 text-[#1946BB]" />
          <span className="text-gray-600 text-sm">{property.location}</span>
        </div>

        {/* Property Details */}
        <div className="flex items-center justify-between text-sm text-gray-600">
          <div className="flex items-center gap-1">
            <Bed className="h-4 w-4" />
            <span>{property.beds} Beds</span>
          </div>
          <div className="flex items-center gap-1">
            <Bath className="h-4 w-4" />
            <span>{property.baths} Baths</span>
          </div>
          <div className="flex items-center gap-1">
            <Square className="h-4 w-4" />
            <span>{property.sqft} sqft</span>
          </div>
        </div>
      </div>
    </div>
  );
}
