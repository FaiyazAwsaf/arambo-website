import EstimateHistory from "@/components/EstimateHistory";
import NeighbourhoodAmenities from "@/components/NeighbourhoodAmenities";
import { PropertyCard } from "@/components/PropertyCard";
import PropertyDetailsCard from "@/components/PropertyDetailsContent";
import PropertySingleSwiper from "@/components/PropertySingleSwiper";
import Link from "next/link";

const PropertySinglePage = () => (
  <>
    <section className="w-full py-8">
      <PropertySingleSwiper />
    </section>
    <section className="mt-10 max-w-[1280px] mx-auto">
      <div className="flex items-center justify-between mb-12">
        <div className="flex gap-3 w-full">
          <div className="flex-1 flex flex-col gap-3">
            <div className="flex gap-5">
              <div className="flex items-center gap-2">
                <img src="/commercial/location.svg" alt="" />
                <p className="p-base text-Arambo-Text">Gulshan 2, Dhaka</p>
              </div>
              <div className="py-2.5 px-4 rounded-full bg-Arambo-Accent/10 text-Arambo-Accent caption-14">
                For Sale
              </div>
            </div>
            <h3 className="h3">The Crytal Hatt Place</h3>
            <p className="p-base text-black/64">
              Plot No. 522 (Old) 2 (New), Road No-8 (Old), 9 (New), Dhanmondi,
              Dhaka 1205
            </p>
          </div>
          <div className="flex flex-col gap-2 items-end">
            <div className="flex items-center  gap-3 mb-3">
              <button>
                <img
                  className="rounded-full p-2 bg-Arambo-White"
                  src="/property-single/heart.svg"
                  alt=""
                />
              </button>
              <button className="cursor-pointer flex py-2 px-3 rounded-full bg-Arambo-White gap-2.5">
                <img src="/property-single/share.svg" alt="" />
                <p className="text-sm text-Arambo-Black font-semibold">Share</p>
              </button>
            </div>
            <p className="caption-12 text-Arambo-Text">Best price at</p>
            <h3 className="text-Arambo-Accent h3">৳48,000,000</h3>
          </div>
        </div>
        <div></div>
      </div>
      <div className="flex gap-12 items-start justify-between">
        <div className="flex-1 flex flex-col gap-12">
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
            {/* Area */}
            <div className="flex flex-col gap-3">
              <span className="text-xs text-gray-500 uppercase">Area</span>
              <div className="flex gap-2.5 items-center">
                <img
                  className="p-3 bg-Arambo-White rounded-lg"
                  src="/property-single/area.svg"
                  alt=""
                />
                <select className=" text-Arambo-Accent font-semibold text-xl border border-Arambo-Border rounded-md px-1 py-2 w-fit">
                  <option value="2500">2500 sqft</option>
                  <option value="2000">2000 sqft</option>
                  <option value="1800">1800 sqft</option>
                </select>
              </div>
            </div>

            {/* Bedroom */}
            <PropertyDetailsCard
              label="Bedroom"
              src="/property-single/bed.svg"
              content="02"
            />

            {/* Bathroom */}
            <PropertyDetailsCard
              label="Bathroom"
              src="/property-single/bathroom.svg"
              content="02"
            />

            {/* Parking */}
            <PropertyDetailsCard
              label="Parking"
              src="/property-single/parking.svg"
              content="Available"
            />

            {/* Type */}
            <PropertyDetailsCard
              label="Type"
              src="/property-single/apartment.svg"
              content="Apartment"
            />

            {/* Built-in Year */}
            <PropertyDetailsCard
              label="Built-in year"
              src="/property-single/calendar.svg"
              content="2022"
            />
          </div>
          <div>
            <h4 className="mb-4 h4 text-Arambo-Black">Overview</h4>
            <p className="p-base text-Arambo-Text mb-4">
              A studio apartment in strategic location in Malang. Located nearby
              Univ Muhammadiyah Malang, Univ Negeri Matang and Univ Brawijaya,
              this is perfect for students and academics. This is in the main
              road to Batu the main tourist omactions in East Java. So it is
              well suited for tourists.
            </p>
            <p className="p-base text-Arambo-Text">
              This has a stunning Arjuns Mountain view with misty ambience in
              neming. It has kitchen, and cozy sele and bunk bed & it coters up
              3 guests. It has two pools, gyms, futsal field, minimarket and
              coffee shop.
            </p>
          </div>

          {/* Amenities Section */}
          <div className="">
            <h4 className="mb-4 h4 text-Arambo-Black">Amenities</h4>

            <div className="flex justify-between gap-2.5">
              <div className="flex-1">
                <div className="flex flex-col gap-4">
                  <div>
                    <h3 className="label-16">Community rooms</h3>
                    <ul className="space-y-2 list-disc list-inside label-16">
                      <li>Clubhouse</li>
                      <li>Fitness center</li>
                      <li>Game room</li>
                      <li>Library</li>
                      <li>Lounge</li>
                      <li>Theater</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="label-16">Outdoor common areas</h3>
                    <ul className="space-y-2 list-disc list-inside label-16">
                      <li>Garden</li>
                      <li>Lawn</li>
                      <li>Patio</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <div className="flex flex-col gap-4">
                  <div>
                    <div>
                      <h3 className="label-16">Security</h3>
                      <ul className="space-y-2 list-disc list-inside label-16">
                        <li>Controlled access</li>
                      </ul>
                    </div>
                    <div className="mt-2">
                      <h3 className=" label-16">Services & facilities</h3>
                      <ul className="space-y-2 list-disc list-inside label-16">
                        <li>24 hour maintenance</li>
                        <li>Elevator</li>
                        <li>Online rent payment</li>
                        <li>Onsite management</li>
                      </ul>
                    </div>
                  </div>
                  <div>
                    <h3 className=" label-16">View Description</h3>
                    <ul className="space-y-2 list-disc list-inside label-16">
                      <li>Wooded</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Location Section */}
          <div>
            <div className="flex justify-between items-center text-sm font-medium cursor-pointer">
              <h4 className="mb-4 text-Arambo-Black h4">Location</h4>
              <button className="underline text-Arambo-Accent">
                View on maps
              </button>
            </div>
            <div className="rounded-lg overflow-hidden border border-gray-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.0875236505557!2d112.6158192147785!3d-7.983908594264203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd6282fd3b3d0a3%3A0x304ac6b4e0db8c2!2sMalang%2C%20East%20Java%2C%20Indonesia!5e0!3m2!1sen!2sid!4v1692268899304!5m2!1sen!2sid"
                width="100%"
                height="380"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          <div>
            <h4 className="mb-4 text-Arambo-Black h4">Estimate History</h4>
            <EstimateHistory />
          </div>
          <div>
            <h4 className="mb-4 text-Arambo-Black h4">Valuation Factor</h4>
            <NeighbourhoodAmenities />
          </div>
        </div>
        <div className="w-[384px] flex-shrink-0">
          <div className="bg-Arambo-White rounded-xl shadow border p-6 flex flex-col justify-between">
            {/* Agent Profile */}
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/property-single/agent.png"
                alt="Agent"
                className="w-12 h-12 rounded-full object-cover object-top"
              />
              <div>
                <h4 className="font-semibold h4 text-gray-900">Zama Fox</h4>
                <p className="text-sm text-gray-500">Real Broker, LLC</p>
                <p className="text-yellow-500 text-sm">⭐ 5.0</p>
              </div>
            </div>

            {/* Message */}
            <div className="mb-4">
              <h5 className="font-semibold h5 text-Arambo-Black mb-1">
                Message
              </h5>
              <p className="text-sm text-Arambo-Text leading-relaxed">
                Hello from Arambo! Thanks for viewing this property. If you feel
                like this property is what you need or you have a similar
                interest.
              </p>
            </div>

            {/* Actions */}
            <div className="flex gap-3">
              <button className="bg-Arambo-Accent text-white px-4 py-2 rounded-md font-medium hover:bg-blue-700 transition">
                Book a Free Visit
              </button>
              <button className="bg-gray-100 text-gray-800 px-4 py-2 rounded-md font-medium hover:bg-gray-200 transition">
                View
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="mt-20 py-28  bg-Arambo-White">
      <div className="max-w-[1280px] mx-auto">
        <div className="flex items-center justify-between">
          <h2 className="h2">View Similar Properties</h2>
          <Link
            href={"/residential"}
            className="py-4 px-10 bg-Arambo-Accent text-white rounded-lg"
          >
            Explore Properties
          </Link>
        </div>
        <div className="grid grid-cols-3 mt-12 gap-6">
          {Array.from({ length: 3 }, (_, index) => (
            <PropertyCard
              key={index}
              property={{
                id: index + 1,
                image: `/commercial/commercial-house.png`,
                price: `৳${(index + 1) * 10000000}`,
                type: "Apartment",
                location: `Gulshan ${index + 1}, Dhaka`,
                beds: 4,
                baths: 3,
                sqft: 2370,
                isVerified: true,
                forSale: true,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  </>
);

export default PropertySinglePage;