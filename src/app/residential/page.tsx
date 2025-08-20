import ActionButton from "@/components/ActionButton";
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
          className="relative w-full py-32 rounded-2xl bg-cover bg-center"
          style={{ backgroundImage: "url('/residential/residential-bg.png')" }}
        >
          <div className="absolute inset-0 bg-black/30 rounded-2xl"></div>

          <div className="relative z-10 font-sans flex flex-col items-center gap-2 justify-center h-full text-center px-6">
            <h1 className="text-[56px]  font-semibold text-white">
              Residential Properties
            </h1>
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

          <div className="absolute left-1/2 -bottom-15 -translate-x-1/2 rounded-xl overflow-hidden flex w-full md:w-2/3 justify-center space-x-4 p-4">
            {/* RENT button */}
            <ActionButton
              color="bg-Arambo-Accent"
              label="RENT"
              GoToActionIcon
              startIcon={<Home size={24} />}
              isActive
            />

            {/* BUY button */}
            <ActionButton
              color="bg-white"
              label="BUY"
              startIcon={<Home size={24} />}
              isActive={false}
            />
          </div>
        </div>
      </section>
      <section className="min-h-screen my-20">
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
      <section className="py-20 w-full bg-white">
        <ServiceCards />
      </section>
    </>
  );
};
export default ResidentialPage;
