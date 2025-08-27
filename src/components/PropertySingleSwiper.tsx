"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = [
  {
    link: "/property-single",
    image: "/property-single/property.jpg",
    hasTag: true,
  },
  {
    link: "/property-single",
    image: "/property-single/property.jpg",
    hasTag: false,
  },
  {
    link: "/property-single",
    image: "/property-single/property1.png",
    hasTag: true,
  },
  {
    link: "/property-single",
    image: "/property-single/property.jpg",
    hasTag: false,
  },
  {
    link: "/property-single",
    image: "/property-single/property2.jpg",
    hasTag: false,
  },
  {
    link: "/property-single",
    image: "/property-single/property.jpg",
    hasTag: false,
  },
  {
    link: "/property-single",
    image: "/property-single/property.jpg",
    hasTag: false,
  },
  {
    link: "/property-single",
    image: "/property-single/property.jpg",
    hasTag: false,
  },
];

const PropertySingleSwiper = () => {
  return (
    <div className="relative w-full ">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={2}
        centeredSlides={true}
        loop={true}
        navigation={{
          prevEl: ".swiper-button-prev-custom",
          nextEl: ".swiper-button-next-custom",
        }}
        pagination={{
          clickable: true,
          bulletClass: "swiper-pagination-bullet !bg-gray-400",
          bulletActiveClass: "swiper-pagination-bullet-active !bg-blue-600",
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 2,
          },
        }}
        className="property-carousel"
      >
        {slides.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="relative overflow-hidden rounded-2xl shadow-lg transition-transform duration-300">
              {image.hasTag && (
                <div className="absolute top-8 left-5 z-10">
                  <span className=" text-Arambo-Black font-medium px-3.5 bg-Arambo-Border rounded-full py-2.5 text-base">
                    For Sale
                  </span>
                </div>
              )}
              <img
                src={image.image || "/placeholder.svg"}
                className="w-full max-h-[416px] object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <button className="swiper-button-prev-custom absolute left-8 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-white rounded-full p-4 shadow-lg transition-all duration-200 hover:scale-110">
        <img src="/property-single/arrow-left.svg" alt="" />
      </button>

      <button className="swiper-button-next-custom absolute right-8 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-white rounded-full p-4 shadow-lg transition-all duration-200 hover:scale-110">
        <img src="/property-single/arrow-right.svg" alt="" />
      </button>
    </div>
  );
};

export default PropertySingleSwiper;
