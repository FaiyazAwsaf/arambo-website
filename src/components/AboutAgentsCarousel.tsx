"use client";
import Link from "next/link";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";

// Mock data for the agents
const AGENT_DATA = [
  {
    id: 1,
    name: "William Davis",
    testimonial: "Video testimonial",
    rating: 4.8,
    image: "/about/william.png",
    avatar: "",
  },
  {
    id: 2,
    name: "William Davis",
    testimonial: "Video testimonial",
    rating: 4.8,
    image: "/about/william.png",
    avatar: "",
  },
  {
    id: 3,
    name: "William Davis",
    testimonial: "Video testimonial",
    rating: 4.8,
    image: "/about/william.png",
    avatar: "M",
  },
  {
    id: 4,
    name: "William Davis",
    testimonial: "Video testimonial",
    rating: 4.8,
    image: "/about/william.png",
    avatar: "",
  },
  {
    id: 5,
    name: "William Davis",
    testimonial: "Video testimonial",
    rating: 4.8,
    image: "/about/william.png",
    avatar: "",
  },
];

const AboutAgentCarousel = () => {
  return (
    <Link href={'/agent-details'} className="px-4 sm:px-6 lg:px-0">
      <div className="flex flex-col lg:flex-row items-start justify-between mb-8 sm:mb-12 max-w-[1280px] mx-auto gap-6 lg:gap-8">
        <h2 className="h2 text-Arambo-Black">
          Local Experts. Real <br /> Guidance
        </h2>
        <div className="max-w-2xs flex flex-col gap-4 w-full lg:w-auto">
          <p className="p-lg text-Arambo-Text">
            Our team of experienced real estate professionals is here to guide
            you
          </p>
          <div className="flex items-center gap-2 justify-center lg:justify-end">
            <button className="swiper-button-prev-custom cursor-pointer">
              <img src="/about/agent-toggle-left.svg" alt="" />
            </button>
            <button className="swiper-button-next-custom cursor-pointer">
              <img src="/about/agent-toggle-right.svg" alt="" />
            </button>
          </div>
        </div>
      </div>

      <div className="overflow-hidden">
        {/* Mobile and Tablet */}
        <div className="block lg:hidden px-4 sm:px-6">
          <Swiper
            slidesPerView={1.2}
            spaceBetween={15}
            breakpoints={{
              480: {
                slidesPerView: 1.5,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 2.2,
                spaceBetween: 25,
              },
              768: {
                slidesPerView: 2.5,
                spaceBetween: 30,
              },
            }}
            loop={true}
            navigation={{
              prevEl: ".swiper-button-prev-custom",
              nextEl: ".swiper-button-next-custom",
            }}
            modules={[Navigation]}
            className="mySwiper"
          >
            {AGENT_DATA.map((agent) => (
              <SwiperSlide key={agent.id}>
                {/* Agent Card */}
                <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-gray-100 transition-shadow duration-300">
                  {/* Agent Image Container */}
                  <div className="w-full h-64 sm:h-80">
                    <img
                      src={agent.image}
                      alt={agent.name}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>

                  {/* Rating Badge */}
                  <div className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-Arambo-White text-Arambo-Black rounded-full px-2 py-1 text-sm font-medium flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-yellow-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
                    </svg>
                    <span>{agent.rating}</span>
                  </div>

                  {/* Agent Name and Testimonial */}
                  <div className="absolute bottom-0 left-0 w-full p-4 sm:p-6 text-Arambo-White bg-gradient-to-t from-gray-900 to-transparent">
                    <h3 className="text-base mb-2 font-medium">{agent.name}</h3>
                    <p className="text-[12px] text-Arambo-Border font-light opacity-60">
                      {agent.testimonial}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Desktop */}
        <div className="hidden lg:block pl-[calc(50vw-640px)]">
          <Swiper
            slidesPerView={4.2}
            spaceBetween={30}
            loop={true}
            navigation={{
              prevEl: ".swiper-button-prev-custom",
              nextEl: ".swiper-button-next-custom",
            }}
            modules={[Navigation]}
            className="mySwiper"
          >
            {AGENT_DATA.map((agent) => (
              <SwiperSlide key={agent.id}>
                {/* Agent Card */}
                <div className="relative rounded-3xl overflow-hidden bg-gray-100 transition-shadow duration-300">
                  {/* Agent Image Container */}
                  <div className="w-full">
                    <img
                      src={agent.image}
                      alt={agent.name}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  {/* Rating Badge */}
                  <div className="absolute top-4 right-4 bg-Arambo-White text-Arambo-Black rounded-full px-2 py-1 text-sm font-medium flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-yellow-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
                    </svg>
                    <span>{agent.rating}</span>
                  </div>
                  {/* Agent Name and Testimonial */}
                  <div className="absolute bottom-0 left-0 w-full p-6 text-Arambo-White bg-gradient-to-t from-gray-900 to-transparent">
                    <h3 className="text-base mb-2 font-medium">{agent.name}</h3>
                    <p className="text-[12px] text-Arambo-Border font-light opacity-60">
                      {agent.testimonial}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </Link>
  );
};

export default AboutAgentCarousel;
