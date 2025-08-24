import ActionButtonContainer from "@/components/ActionButtonContainer";
import { PropertyCard } from "@/components/PropertyCard";
import { PropertyFilter } from "@/components/PropertyFIlter";
import ServiceCards from "@/components/ServiceCards";
import { Home, Search } from "lucide-react";

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

const property2 = {
  id: 3,
  image: "/commercial/commercial-house.png",
  price: "৳42,000,000",
  type: "Apartment",
  location: "Dhanmondi, Dhaka",
  beds: 4,
  baths: 3,
  sqft: 2270,
  isVerified: false,
  forSale: true,
};

const properties = Array.from({ length: 3 }, (_, i) => ({
  ...property,
  id: property.id + i, // make sure each one has a unique id
}));
const properties2 = Array.from({ length: 3 }, (_, i) => ({
  ...property2,
  id: property2.id + i, // make sure each one has a unique id
}));

// Replicate  https://www.arambo.co/comercial
const ResidentialPage = () => {
  return (
    <>
      <section className="w-full px-3">
        <div
          className="relative w-full py-16 sm:py-24 lg:py-32 rounded-2xl bg-cover bg-center"
          style={{ backgroundImage: "url('/commercial/commercial-bg.png')" }}
        >
          {/* Overlay with lower z-index */}
          <div className="absolute inset-0 bg-black/30 rounded-2xl z-0"></div>

          {/* Main content */}
          <div className="relative z-10 font-sans flex flex-col items-center gap-2 sm:gap-4 justify-center h-full text-center px-4 sm:px-6">
            <h1 className="h1 font-semibold text-white">
              Commercial Properties
            </h1>
            <p className="body-md sm:body-lg lg:h6 text-white/80 max-w-md">
              Sort by location to find the best lists
            </p>

            {/* Search bar */}
            <div className="mt-4 sm:mt-6 w-full max-w-xs sm:max-w-md py-3 sm:py-4 flex border-white/[0.09] items-center border-2 gap-2 bg-white/10 backdrop-blur-[20px] pl-3 sm:pl-4 pr-4 sm:pr-6 rounded-[35px]">
              <Search className="text-white/80 flex-shrink-0" size={18} />
              <input
                type="text"
                placeholder="Search by location..."
                className="flex-1 bg-transparent text-white placeholder-white/70 outline-none text-sm sm:text-base min-w-0"
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="relative z-20 sm:absolute left-1/2 sm:-bottom-12 lg:-bottom-16 items-center -translate-x-1/2 flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-4/5 md:w-2/3 justify-center p-3 sm:p-4">
            <ActionButtonContainer defaultSelected="buy" />
          </div>
        </div>
      </section>

      <section className="min-h-screen my-12 sm:my-16 lg:my-20">
        <div className="min-h-screen bg-gray-50 p-3 sm:p-4 lg:p-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-4 lg:gap-6">
              {/* Left Sidebar - Filters */}
              <div className="w-full lg:w-80 lg:flex-shrink-0">
                <PropertyFilter />
              </div>

              {/* Right Content - Property Cards */}
              <div className="flex-1">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-4 sm:gap-6">
                  {properties.map((property) => (
                    <PropertyCard key={property.id} property={property} />
                  ))}

                  {/* properties 2 just to show the not verified design */}
                  {properties2.map((property) => (
                    <PropertyCard key={property.id} property={property} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-20 w-full bg-white">
        <ServiceCards />
      </section>
    </>
  );
};
export default ResidentialPage;
