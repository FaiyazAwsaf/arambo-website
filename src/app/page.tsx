import { Home, Search } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowRight,
  faChevronRight,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";
import building from "/homepageAssets/building.png";
import AutoScrollCarousel from "@/components/homepageComponents/AutoScrollCarousel";
import Toggle from "@/components/homepageComponents/Toggle";
import CarouselCard from "@/components/homepageComponents/CarouselCard";
import NewsCarousel from "@/components/homepageComponents/NewsCarousel";

import KnowYourProperty from "@/components/homepageComponents/KnowYourProperty";

const page = () => {
  return (
    <div>
      <section className="px-2 w-full">
        <div
          style={{
            background:
              "linear-gradient(180deg, #000B26 0%, #00123C 19.69%, #032471 70.33%, #0C39A3 86.64%, #0041D9 100%)",
          }}
          className="relative min-h-[400px] md:h-[627px] flex flex-col justify-center items-center rounded-2xl text-Arambo-White p-2 md:p-5"
        >
          <div className="w-full max-w-[1200px] grid grid-cols-1 md:grid-cols-[60%_40%] gap-8">
            <div className="space-y-6">
              <h1
                style={{ lineHeight: "108%" }}
                className="h1 text bg-gradient-to-r from-white to-[#AFE4FF] inline-block text-transparent bg-clip-text"
              >
                Find Your Next Space—Modern, Elegant, Effortless.
              </h1>
              <p className="body-xl text-[#AFE4FF]">
                From stylish apartments to premium commercial spaces in
                Dhaka—explore, buy, or list with confidence.
              </p>
              <div className="flex space-x-6">
                <button className="bg-Arambo-White  text-Arambo-Black rounded-lg px-10 py-4">
                  Get offers to Sell
                </button>
                <button className="bg-Arambo-White/12 border-[1.5px] border-[#AFE4FF47]/28 rounded-lg px-10 py-4">
                  Browse Properties
                </button>
              </div>
            </div>
          </div>
          <div className="relative w-full max-w-[1200px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 md:gap-5 px-0 mt-8 md:mt-0 z-10">
            <div className="bg-Arambo-White px-6 py-8 space-y-5 text-Arambo-Black rounded-lg">
              <img src="/homepageAssets/houseIcon.svg" alt="" />
              <h6 className=" text-lg">Elegant modern designs</h6>
            </div>
            <div className="bg-Arambo-White px-6 py-8 space-y-5 text-Arambo-Black rounded-lg">
              <img src="/homepageAssets/verifiedIcon.svg" alt="" />
              <h6 className=" text-lg">Verified listings</h6>
            </div>
            <div className="bg-Arambo-White px-6 py-8 space-y-5 text-Arambo-Black rounded-lg">
              <img src="/homepageAssets/buildingIcon.svg" alt="" />
              <h6 className="text-lg">Commercial & residential</h6>
            </div>
            <div className="bg-Arambo-White px-6 py-8 space-y-5 text-Arambo-Black rounded-lg">
              <img src="/homepageAssets/percentIcon.svg" alt="" />
              <h6 className=" text-lg">Easy listing & selling process</h6>
            </div>
          </div>
          <div>
            {/* <img className='absolute -top-10 -left-10' src="/homepageAssets/building.png" alt="" /> */}
          </div>
        </div>
      </section>

      <section className="pt-16 md:pt-32 flex justify-center">
        <div className="w-full max-w-[1200px] overflow-hidden px-2 md:px-0">
          <AutoScrollCarousel />
        </div>
      </section>
      <section className="py-12 md:py-24">
        <div className="relative grid grid-cols-1 md:grid-cols-[40%_60%] gap-8 px-2 md:px-0">
          <div
            className="md:h-[640px] rounded-2xl flex justify-center items-end py-7  "
            style={{
              backgroundImage: `url(/homepageAssets/building_2.png)`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <button className="w-2/3 flex justify-center items-center rounded-full space-x-4 py-4 px-8 bg-Arambo-White text-Arambo-Black">
              <span>Learn More</span>{" "}
              <FontAwesomeIcon
                icon={faCircleArrowRight}
                className="text-Arambo-Accent"
              />
            </button>
          </div>
          <div className="w-full flex flex-col justify-center items-center space-y-8 mt-8 md:mt-0">
            <div className="space-y-6 w-full md:w-[70%] ">
              <p className="caption-14 px-2 py-1 rounded-full border-[0.5px] inline-block">
                About Arambo
              </p>
              <h3 className="h3 text-Arambo-Black">
                <span>At Arambo we believe that</span>
                <span className="text-Arambo-Text">
                  great spaces deserve great support. That’s why our team of
                  experienced real estate professionals is here to guide
                  you—whether you’re buying, selling, or just exploring your
                  options.
                </span>
              </h3>
            </div>
            <div className="cubes flex flex-col md:flex-row gap-5 w-full md:w-[70%]">
              <div
                className="h-[152px] w-[183px] flex flex-col justify-between rounded-2xl text-Arambo-White p-5"
                style={{
                  backgroundImage: `url(/homepageAssets/elegant_properties.png)`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundColor: `rgba(0,0,0,0.5)`,
                  backgroundBlendMode: "overlay",
                }}
              >
                <h2 className="h2">50+</h2>
                <div className="grid grid-cols-2">
                  <div></div>
                  <p className="">Elegant Properties</p>
                </div>
              </div>
              <div className="h-[152px] w-[183px] flex flex-col justify-between rounded-2xl text-Arambo-Accent bg-[#DCEDF9] p-5">
                <h2 className="h2">200+</h2>
                <div className="flex justify-between items-end ">
                  <p className="">Residential Properties</p>
                  <div>
                    <FontAwesomeIcon icon={faCircleArrowRight} />
                  </div>
                </div>
              </div>
              <div className="h-[152px] w-[183px] flex flex-col justify-between rounded-2xl text-Arambo-White bg-Arambo-Black p-5">
                <h2 className="h2">100+</h2>
                <div className="flex justify-between items-end ">
                  <p className="text-Arambo-Text">Commercial Properties</p>
                  <div>
                    <FontAwesomeIcon icon={faCircleArrowRight} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 md:py-24 flex justify-center bg-Arambo-White">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-[1200px] px-2 md:px-0">
          <div className="flex flex-col space-y-5">
            <h2>Simple steps. Real results. Tailored for everyone.</h2>
            <p className="text-Arambo-Text md:w-[70%] w-full">
              Our team of experienced real estate professionals is here to guide
              you
            </p>
            <div className="mt-7 space-y-4 flex flex-col">
              <button className="bg-Arambo-Accent rounded-full flex justify-between items-center text-Arambo-White w-full py-6 px-5">
                <span className="body-lg">For Buyers</span>
                <FontAwesomeIcon icon={faChevronRight} />
              </button>
              <button className="bg-Arambo-Border rounded-full flex justify-between items-center text-Arambo-Black w-full py-6 px-5">
                <span className="body-lg">For Buyers</span>
              </button>
              <button className="bg-Arambo-Border rounded-full flex justify-between items-center text-Arambo-Black w-full py-6 px-5">
                <span className="body-lg">For Buyers</span>
              </button>
            </div>
          </div>
          <div>
            <div className="w-full space-y-2 mt-8 md:mt-0">
              {/* Rectangle Cards: */}
              <div className="py-8 px-6 space-x-5 flex bg-[#1946BB14] rounded-2xl">
                <div className="text-Arambo-Accent">
                  <img src="/homepageAssets/ListingIcon.png" alt="" />
                </div>
                <div className="space-y-2">
                  <h5 className="h5">Browse Listings</h5>
                  <p className="text-Arambo-Text">
                    Browse curated, verified apartments in your desired
                    location.
                  </p>
                </div>
              </div>
              <div className="py-8 px-6 space-x-5 flex bg-[#1946BB14] rounded-2xl">
                <div className="text-Arambo-Accent">
                  <img src="/homepageAssets/ListingIcon.png" alt="" />
                </div>
                <div className="space-y-2">
                  <h5 className="h5">Get Expert Support</h5>
                  <p className="text-Arambo-Text">
                    Our agents help with everything from price checks to
                    paperwork.
                  </p>
                </div>
              </div>
              <div className="py-8 px-6 space-x-5 flex bg-[#1946BB14] rounded-2xl">
                <div className="text-Arambo-Accent">
                  <img src="/homepageAssets/ListingIcon.png" alt="" />
                </div>
                <div className="space-y-2">
                  <h5 className="h5">Book a Visit</h5>
                  <p className="text-Arambo-Text">
                    Schedule a tour with one click—online or in person.
                  </p>
                </div>
              </div>
              <div className="py-8 px-6 space-x-5 flex bg-[#1946BB14] rounded-2xl">
                <div className="text-Arambo-Accent">
                  <img src="/homepageAssets/ListingIcon.png" alt="" />
                </div>
                <div className="space-y-2">
                  <h5 className="h5">Close with Confidence</h5>
                  <p className="text-Arambo-Text">
                    Transparent process, no hidden fees.
                  </p>
                </div>
              </div>
            </div>
            <div className="space-x-2 pt-8">
              <span className="text-lg font-bold">
                Start Browsing Properties
              </span>
              <FontAwesomeIcon
                className="text-Arambo-Accent"
                icon={faCircleArrowRight}
              />
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 md:py-24 flex justify-center bg-Arambo-White">
        <div className="flex flex-col w-full max-w-[1200px] px-2 md:px-0">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <h2>Explore Latest Properties to Buy</h2>
            <Toggle />
          </div>
          Cards....
        </div>
      </section>
      <section className="py-12 md:py-24 flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-[1200px] items-center px-2 md:px-0">
          <div
            className="h-[539px] p-4 flex items-end rounded-xl"
            style={{
              backgroundImage: `url('/homepageAssets/hands.png')`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <div
              className="h-[157px] rounded-2xl p-6 bg-Arambo-White w-full"
              style={{
                backgroundImage: `url('/homepageAssets/AramboSupports.png')`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            ></div>
          </div>
          <div className="space-y-6">
            <h2 className="h2">Screen Tenants with Confidence</h2>
            <p className="p-base text-Arambo-Text">
              Get peace of mind before handing over the keys. We verify ID,
              background history, and income so you can rent with full
              confidence.
            </p>
            <div>
              <ul className="space-y-3">
                <li className="label-16">
                  <FontAwesomeIcon
                    className="text-Arambo-Accent p-lg"
                    icon={faCircleCheck}
                  />{" "}
                  National ID & background checks
                </li>
                <li className="label-16">
                  <FontAwesomeIcon
                    className="text-Arambo-Accent p-lg"
                    icon={faCircleCheck}
                  />{" "}
                  Rental history reports
                </li>
                <li className="label-16">
                  <FontAwesomeIcon
                    className="text-Arambo-Accent p-lg"
                    icon={faCircleCheck}
                  />{" "}
                  Income verification{" "}
                </li>
                <li className="label-16">
                  <FontAwesomeIcon
                    className="text-Arambo-Accent p-lg"
                    icon={faCircleCheck}
                  />{" "}
                  Fast turnaround (24–48 hours)
                </li>
                <li className="label-16">
                  <FontAwesomeIcon
                    className="text-Arambo-Accent p-lg"
                    icon={faCircleCheck}
                  />{" "}
                  Private & secure handling
                </li>
              </ul>
            </div>
            <button className="mt-5 py-4 px-10 text-Arambo-White bg-Arambo-Accent rounded-lg">
              Verify a Tenant Now
            </button>
          </div>
        </div>
      </section>
      <section className="py-12 md:py-24 flex justify-center bg-Arambo-White">
        <div className="grid grid-cols-1 md:grid-cols-[46%_54%] gap-8 p-4 md:p-11 w-full max-w-[1200px] items-center align-middle bg-Arambo-Background rounded-3xl">
          <div className="flex flex-col items-start justify-center space-y-5 ">
            <div className="h2">Expert Legal Support When You Need It</div>
            <div className="p-base text-Arambo-Text">
              With Arambo’s Advocate on Call, you get access to verified legal
              professionals who can review contracts, handle documentation, and
              guide you through every legal step of your real estate journey.
            </div>
            <button className="mt-7 py-4 px-10 text-Arambo-White bg-Arambo-Accent rounded-lg">
              Talk to an Advocate
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-6 md:mt-0">
            <div
              className="h-[384px]"
              style={{
                backgroundImage: `url("/homepageAssets/Legal_1.png")`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            ></div>
            <div className="grid grid-rows-2 space-y-5">
              <div>
                <img src="/homepageAssets/Legal_2.png" alt="" />
              </div>
              <div>
                <img src="/homepageAssets/Legal_3.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 md:py-24 flex justify-center bg-Arambo-White">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-[1200px] items-stretch align-middle rounded-3xl px-2 md:px-0">
          <div className="flex flex-col items-start justify-center space-y-5 w-full md:w-[75%]">
            <div className="h2">Hyper Filtered Listings</div>
            <div className="p-base text-Arambo-Text">
              Find your ideal apartment by applying filters for bachelors,
              women, and families, plus options for furnished or non-furnished
              units.
            </div>
            <div className="flex flex-wrap gap-3 md:gap-6 mt-4">
              <input
                value={"Family"}
                type="button"
                className={`py-3 px-6 ${`text-Arambo-White bg-Arambo-Accent`} rounded-full`}
              />
              <input
                value={"Women"}
                type="button"
                className={`py-3 px-6 ${`text-Arambo-Black bg-Arambo-Background`} rounded-full`}
              />
              <input
                value={"Bachelor"}
                type="button"
                className={`py-3 px-6 ${`text-Arambo-Black bg-Arambo-Background`} rounded-full`}
              />
              <input
                value={"Furnished"}
                type="button"
                className={`py-3 px-6 ${`text-Arambo-Black bg-Arambo-Background`} rounded-full`}
              />
              <input
                value={"Non-Furnished"}
                type="button"
                className={`py-3 px-6 ${`text-Arambo-White bg-Arambo-Accent`} rounded-full`}
              />
            </div>
          </div>

          <div className="">Cards Carousal</div>
        </div>
      </section>
      <section className="space-y-8 md:space-y-12 py-12 md:py-24 flex justify-center">
        <CarouselCard />
      </section>
      <section className="space-y-8 md:space-y-12 py-12 md:py-24 flex justify-center bg-Arambo-White">
        <KnowYourProperty />
      </section>
      <section className="py-12 md:py-24 flex justify-center bg-Arambo-White">
        <div className="rounded-2xl w-full max-w-[1200px] space-y-8 md:space-y-10 px-2 md:px-0">
          <div className="flex flex-col md:flex-row justify-between gap-6 md:gap-0">
            <h2 className="h2 w-full md:w-[518px]">
              As Seen in The Daily Star, Prothom Alo & More
            </h2>
            <p className="p-base w-full md:w-[487px] text-Arambo-Text">
              Our work has been recognized by Bangladesh’s top news outlets and
              media channels. We’re proud to be shaping the future of property
              with trust, transparency, and national impact.
            </p>
          </div>
          <div>
            <NewsCarousel />
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
