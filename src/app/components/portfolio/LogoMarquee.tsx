"use client";

import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const logos = [
  { src: "/images/logo/logo2.png", contain: false },
  { src: "/images/logo/logo3.png", contain: true },
  { src: "/images/logo/logo4.jpg", contain: false },
  { src: "/images/logo/logo5.jpg", contain: false },
  { src: "/images/logo/logo6.png", contain: true },
  { src: "/images/logo/logo8.png", contain: true },
  { src: "/images/logo/logo9.png", contain: true },
  { src: "/images/logo/logo10.png", contain: true },
  { src: "/images/logo/logo11.png", contain: true },
  { src: "/images/logo/logo14.png", contain: true },
];

export default function LogoMarquee() {
  return (
    <section className="w-full overflow-hidden">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 0, // continuous motion
          disableOnInteraction: false,
        }}
        speed={5000} // smooth continuous motion
        slidesPerView={2}
        breakpoints={{
          640: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 5 },
          1280: { slidesPerView: 6 },
        }}
        className="w-full flex items-center"
      >
        {[...logos, ...logos].map((logo, index) => (
          <SwiperSlide key={index} className="flex justify-center items-center">
            <div className="flex justify-center items-center">
              <Image
                src={logo.src}
                alt={`Logo ${index + 1}`}
                width={150}
                height={150}
                className={`h-[120px] lg:h-[150px] w-[120px] lg:w-[150px] border border-white opacity-80 hover:opacity-100 transition-all duration-300 p-1 rounded-full ${
                  logo.contain ? "object-contain bg-white" : "object-cover"
                }`}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
