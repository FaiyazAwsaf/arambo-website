import AboutAgentCarousel from "@/components/AboutAgentsCarousel";
import AboutListingCard from "@/components/AboutListingCard";
import BlogDetails from "@/components/BlogDetails";
import KnowYourProperty from "@/components/homepageComponents/KnowYourProperty";
import Link from "next/link";

const listItems = [
  {
    src: "/about/one.png",
    text: "Browse through thousands of up-to-date, verified residential and commercial properties. Each listing is carefully vetted to ensure accuracy, giving you confidence as you search. Filter by location, price, size, and amenities to find spaces that fit your exact needs.",
    title: "Explore Verified Listings",
  },
  {
    src: "/about/two.png",
    text: "Save time by using Arambo's smart search tools. Narrow down options with advanced filters like property type, neighborhood insights, price trends, and more. Get personalized recommendations based on your preferences and browsing history",
    title: "Use Smart Search & Filters",
  },
  {
    src: "/about/three.png",
    text: "Benefit from tenant verification for peace of mind, home loan assistance to simplify financing, and truck support to ease your move. Plus, our dedicated team is here to help with any other needs — ensuring your experience is smooth from start to finish.",
    title: "Comprehensive Support Services",
  },
  {
    src: "/about/four.jpg",
    text: "Use all the tools and data at your fingertips to evaluate your options and choose the best property for your needs and budget. Arambo guides you every step of the way for a smooth, stress-free experience.",
    title: "Make Confident Decisions",
  },
];

const blogs = [
  {
    id: 1,
    title: "Explore Verified Listings",
    status: "Recent",
    date: "August 1, 2025",
    timeago: "5 min",
    href: "/blog-details",
    src: "/common/buildings.jpg",
  },
  {
    id: 2,
    title: "Explore Verified Listings",
    status: "Recent",
    date: "August 10, 2025",
    timeago: "2 hours",
    href: "/blog-details",
    src: "/common/workers.jpg",
  },
  {
    id: 3,
    title: "Explore Verified Listings",
    status: "Recent",
    date: "August 22, 2025",
    timeago: "8 min",
    href: "/blog-details",
    src: "/common/structure.jpg",
  },
];

const AboutPage = () => {
  return (
    <>
      <section className="px-2 sm:px-4 w-full bg-Arambo-Background">
        <div className="relative h-fit sm:h-[70vh] lg:h-[80vh] w-full overflow-hidden rounded-lg">
          {/* Background Image */}
          <div
            className="absolute inset-0 rounded-2xl bg-center bg-cover bg-no-repeat"
            style={{
              backgroundImage: `
      linear-gradient(180deg, #000B2638 0%, #00123C38 19.69%, #03247138 70.33%, #0C39A338 86.64%, #0041D938 100%),
      url('/about/about-hero.png')
    `,
            }}
          />

          <div className="relative z-10 flex h-full items-end">
            <div className="container mx-auto px-4 sm:px-6 lg:px-0 mb-8 sm:mb-16 lg:mb-24">
              <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 max-w-[1200px] mx-auto items-start justify-between">
                {/* Left Column - Main Heading */}
                <div className="text-Arambo-White">
                  <h1 className="h1">
                    Arambo – Building
                    <br />
                    More Than Homes,
                    <br />
                    <span className="text-gray-200">Creating Belonging</span>
                  </h1>
                </div>

                {/* Right Column - Description and CTA */}
                <div className="text-white flex flex-col gap-6 lg:gap-10 items-start w-full lg:w-auto">
                  <p className="p-lg text-gray-200 max-w-xl">
                    From cozy neighborhoods to vibrant urban hubs, our
                    developments are designed to bring people together through
                    thoughtful planning, open spaces, and timeless architecture.
                  </p>

                  <Link
                    href={"/list-property"}
                    className="bg-Arambo-White text-Arambo-Black px-6 sm:px-8 lg:px-10 py-3 sm:py-4 rounded-lg font-semibold text-base hover:bg-gray-100 duration-300 shadow-lg hover:shadow-xl transform transition-all w-full sm:w-auto"
                  >
                    List a Property
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Subtle gradient overlay at bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent opacity-30" />
        </div>
      </section>

      <section className="py-12 sm:py-18 lg:py-24 bg-Arambo-White px-4 lg:px-0 ">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="h2 text-Arambo-Black">
            Simplifying <span className="text-Arambo-Accent">Every Step</span>{" "}
            of <br className="hidden sm:block" /> Your Property Journey
          </h2>
          <div className="relative py-8 sm:py-12 lg:py-16">
            {listItems.map((item, idx) => (
              <AboutListingCard
                key={idx}
                num={idx + 1}
                src={item.src}
                text={item.text}
                title={item.title}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 sm:py-16 lg:py-20  px-4 lg:px-0 mx-auto  bg-Arambo-Background ">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
          {/* Left Card */}
          <div className="bg-Arambo-Accent relative flex flex-col justify-between p-6 sm:p-8 rounded-2xl min-h-[300px] sm:min-h-[350px]">
            <p className="label-16 text-[#D7E2FA]">
              Find your space — faster, <br className="hidden sm:block" />{" "}
              smarter, simpler.
            </p>
            <div className="absolute right-0 top-0">
              <img src="/about/design.svg" alt="" />
            </div>
            <div>
              <h1 className="h1 text-Arambo-White mb-3">150+</h1>
              <p className="label-16 text-Arambo-Border">Premium properties</p>
            </div>
            <div className="mt-6 absolute bottom-6 sm:bottom-8 right-6 sm:right-8 self-end">
              <Link href={"/about"}>
                <img src="/about/rightarrow.svg" alt="" />
              </Link>
            </div>
          </div>

          {/* Right Card */}
          <div className="bg-Arambo-White col-span-1 lg:col-span-2 rounded-2xl grid grid-cols-1 md:grid-cols-3 overflow-hidden">
            {/* Text */}
            <div className="p-6 sm:p-8 flex flex-col col-span-1 md:col-span-2 justify-between gap-4 sm:gap-6">
              <div className="space-y-4">
                <h3 className="h3 text-Arambo-Black">Who We Are</h3>
                <p className="p-base text-Arambo-Text">
                  Arambo is a smart, all-in-one real estate platform where
                  people can seamlessly rent or buy both residential and
                  commercial properties.
                </p>
                <p className="p-base text-Arambo-Text">
                  We are here to simplify the property journey — whether you are
                  looking for a cozy apartment, a family home, a retail space,
                  or an office that fits your brand. Arambo connects property
                  seekers with verified listings, real-time insights, and
                  trusted agents to make better decisions, faster.
                </p>
              </div>
              <Link
                href={"/about"}
                className="flex gap-2 items-center text-Arambo-Black"
              >
                <img src="/about/rightarrowblack.svg" alt="" />
                <span>Learn More</span>
              </Link>
            </div>
            {/* Image */}
            <div className="order-first md:order-none h-48 md:h-auto">
              <img
                src="/about/building.png"
                className="w-full h-full object-cover"
                alt="Building"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-18 lg:py-24 w-full px-4 lg:px-0 mx-auto bg-Arambo-Background">
        <div className="cubes grid grid-cols-1 mx-auto max-w-[1200px] sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          <div
            className=" flex flex-col sm:flex-row sm:items-center justify-between rounded-2xl text-Arambo-White p-4 sm:p-5"
            style={{
              backgroundImage: `url(/homepageAssets/elegant_properties.png)`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundColor: `rgba(0,0,0,0.5)`,
              backgroundBlendMode: "overlay",
            }}
          >
            <h2 className="h2">40+</h2>
            <p className="">Elegant Properties</p>
          </div>
          <div className=" flex flex-col gap-2 sm:gap-3 justify-between rounded-2xl text-Arambo-Accent bg-[#DCEDF9] p-4 sm:p-5">
            <h2 className="h2">32+</h2>
            <div className="flex justify-between items-end ">
              <p className="">Residential Properties</p>
              <Link href={"/residential"}>
                <img src="/about/arrow-accent.svg" alt="" />
              </Link>
            </div>
          </div>
          <div className=" flex flex-col gap-2 sm:gap-3 justify-between rounded-2xl text-Arambo-White bg-Arambo-Black p-4 sm:p-5 sm:col-span-2 lg:col-span-1">
            <h2 className="h2">100+</h2>
            <div className="flex justify-between items-end ">
              <p className="text-Arambo-Text">Commercial Properties</p>
              <Link href={"/commercial"}>
                <img src="/about/arrow-white.svg" alt="" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className=" py-12 sm:py-18 lg:py-24 bg-Arambo-White">
        <div className="grid max-w-[1200px] mx-auto px-4 lg:px-0 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-rows-none sm:grid-rows-2 gap-4 sm:gap-5">
          {/* Top Left Card */}
          <div className="bg-[#0A0A0A] relative rounded-2xl p-6 sm:p-8 flex flex-col justify-between text-Arambo-White min-h-[200px]">
            <h3 className="h5">Smart Tools & Insights</h3>
            <p className="caption-14 mt-12 sm:mt-24">
              Make informed decisions <br /> quickly with technology <br /> that
              works for you.
            </p>

            <div className="absolute bottom-0 right-0">
              <img src="/about/group.svg" alt="Decor" className="opacity-50" />
            </div>
          </div>

          {/* Top Middle Card */}
          <div className="rounded-2xl relative p-6 sm:p-8 text-Arambo-White overflow-hidden bg-Arambo-Black min-h-[200px]">
            <div className="absolute inset-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="387"
                height="301"
                viewBox="0 0 387 301"
                fill="none"
              >
                <g filter="url(#filter0_f_2485_3917)">
                  <path
                    d="M103.965 283C68.6153 272.385 24.1939 228.224 129.304 136.505C260.691 21.8561 237.798 130.135 232.167 -43.6574C230.278 -101.954 261.466 -135.527 196.875 -149.577M196.875 -149.577C68.9072 -177.415 -98.3529 -128.625 27.0068 -43.6574C215.641 84.1976 462.465 81.911 378.94 -64.5845C295.415 -211.08 275.915 -361.009 157.667 -250C39.4193 -138.991 -100.623 79.3511 196.875 -149.577Z"
                    stroke="url(#paint0_linear_2485_3917)"
                    strokeWidth="339"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_f_2485_3917"
                    x="-286.833"
                    y="-557.999"
                    width="952.168"
                    height="1103.34"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    />
                    <feGaussianBlur
                      stdDeviation="50"
                      result="effect1_foregroundBlur_2485_3917"
                    />
                  </filter>
                  <linearGradient
                    id="paint0_linear_2485_3917"
                    x1="189.167"
                    y1="-330"
                    x2="189.167"
                    y2="283"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#1946BB" />
                    <stop offset="1" stopColor="#96CCF0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="relative z-10 flex flex-col justify-between h-full">
              <p className="p-md">
                Find only genuine, up-to-date properties — no surprises, no
                scams.
              </p>
              <h3 className="h3 mt-8 sm:mt-20 mix-blend-overlay">
                Expert Support & Services
              </h3>
            </div>
          </div>

          {/* Right Tall Card (spans 2 rows) */}
          <div className="sm:row-span-2 sm:col-span-2 lg:col-span-1 lg:row-span-2 rounded-2xl relative overflow-hidden min-h-[300px] sm:min-h-[400px]">
            <img
              src="/about/services-right.png"
              alt="Verified Listings"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="absolute h-full flex flex-col justify-between p-6 sm:p-8 lg:p-12 top-0 z-10 text-Arambo-White">
              <h3 className="h3 text-center">
                Verified Listings You Can Trust
              </h3>
              <p className="Label-16 text-center">
                Find only genuine, up-to-date properties — no surprises, no
                scams.
              </p>
            </div>
          </div>

          {/* Bottom Wide Card (spans 2 cols) */}
          <div className="sm:col-span-2 py-6 sm:py-8 bg-[#D3DFFF] rounded-2xl flex flex-col items-center justify-center text-center p-6 sm:p-10">
            <h2 className="h2 text-Arambo-Accent">All-in-One Platform</h2>
            <p className="p-md max-w-96 mt-4 text-Arambo-Accent ">
              Rent or buy residential and commercial properties in one place.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-18 lg:py-24 bg-Arambo-Background">
        <AboutAgentCarousel />
      </section>

      <section className="space-y-8 sm:space-y-12 py-12 sm:py-18 lg:py-24 flex justify-center bg-Arambo-White px-4 sm:px-6">
        <KnowYourProperty />
      </section>

      <section className="py-12 sm:py-18 lg:py-24 bg-Arambo-White">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-0">
          <h2 className="h2 text-Arambo-Black mb-8 sm:mb-12">
            <span className="text-Arambo-Accent">Arambo</span> Milestones
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {blogs.map((blog) => (
              <BlogDetails key={blog.id} {...blog} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
