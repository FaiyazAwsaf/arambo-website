import { PropertyCard } from "@/components/PropertyCard";
import { PropertyFilter } from "@/components/PropertyFIlter";
import { ArrowRight, Home, Search } from "lucide-react";

const property = {
  id: 4,
  image: "/commercial/commercial-house.png",
  price: "৳48,000,000",
  type: "Apartment",
  location: "Gulshan 2, Dhaka",
  beds: 4,
  baths: 3,
  sqft: 2370,
  isVerified: true,
  forSale: true,
};
const properties = Array.from({ length: 4 }, (_, i) => ({
  ...property,
  id: property.id + i,
}));

// Replicate  https://www.arambo.co/comercial
const CommercialPage = () => {
  return (
    <>
      <section
        className="relative w-full py-32 rounded-2xl bg-cover bg-center"
        style={{ backgroundImage: "url('/commercial/commercial-bg.png')" }}
      >
        <div className="absolute inset-0 bg-black/30"></div>

        <div className="relative z-10 font-sans flex flex-col items-center gap-2 justify-center h-full text-center px-6">
          <h1 className="text-[56px]  font-semibold text-white">Commercial</h1>
          <p className=" text-[17px] text-lg text-white/80">
            Sort by location to find the best lists
          </p>

          {/* Search bar */}
          <div className="mt-6 w-full max-w-md py-4 flex border-white/[0.09] items-center border-2 gap-2 bg-white/10 backdrop-blur-[20px] pl-4 pr-6 rounded-[35px] ">
            <Search className="text-white/80" size={20} />
            <input
              type="text"
              placeholder="Search by location..."
              className="flex-1 bg-transparent text-white placeholder-white/70 outline-none"
            />
          </div>
        </div>

        <div className="absolute left-1/2 bottom-0 translate-y-1/2 -translate-x-1/2 flex shadow-lg rounded-xl overflow-hidden">
          {/* RENT button */}
          <button className="flex items-center gap-2 px-6 py-3 bg-blue-700 text-white font-medium">
            <Home size={18} /> RENT <ArrowRight size={18} />
          </button>

          {/* BUY button */}
          <button className="flex items-center gap-2 px-6 py-3 bg-white text-gray-900 font-medium">
            <Home size={18} /> BUY
          </button>
        </div>
      </section>
      <section className="h-screen">
        <div className="min-h-screen bg-gray-50 p-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex gap-6">
              {/* Left Sidebar - Filters */}
              <div className="w-80 flex-shrink-0">
                <PropertyFilter />
              </div>

              {/* Right Content - Property Cards */}
              <div className="flex-1">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {properties.map((property) => (
                    <PropertyCard key={property.id} property={property} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CommercialPage;
