"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";
const LandSwiper = () => {
  const landVideos = [
    {
      id: 1,
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      title: "Landscape Video 1",
      description: "Beautiful mountain scenery with flowing rivers",
    },
    {
      id: 2,
      video: "https://www.youtube.com/embed/3JZ_D3ELwOQ",
      title: "Landscape Video 2",
      description: "Serene beach sunset with waves",
    },
    {
      id: 3,
      video: "https://www.youtube.com/embed/l482T0yNkeo",
      title: "Landscape Video 3",
      description: "Dense forest aerial view",
    },
    {
      id: 4,
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      title: "Landscape Video 4",
      description: "Desert sand dunes at sunset",
    },
  ];

  return (
    <section className=" text-white py-5">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-12">
          <p className="text-[#E12CEC] text-sm font-medium mb-2">● Landscape Videos</p>
          <h2 className="text-3xl sm:text-5xl font-semibold mb-6">
            Stunning Landscape <br /> Videos Collection
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore our collection of breathtaking landscape videos captured in stunning detail
          </p>
        </div>

        {/* Swiper Section */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation={{
            nextEl: ".land-next-slide",
            prevEl: ".land-prev-slide",
          }}
          pagination={{
            clickable: true,
            bulletClass: 'swiper-pagination-bullet !bg-orange-500',
            bulletActiveClass: 'swiper-pagination-bullet-active !bg-orange-500',
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          spaceBetween={30}
          slidesPerView={1}
          className="relative"
        >
          {landVideos.map((video) => (
            <SwiperSlide key={video.id}>
              <div className="relative group">
                {/* Video Container */}
                <div className="relative rounded-2xl overflow-hidden aspect-video bg-gray-900">
                  <iframe
                    className="w-full h-full object-cover"
                    src={`${video.video}?autoplay=1&mute=1&loop=1&playlist=${
                      video.video.split('/embed/')[1]
                    }&controls=0&modestbranding=1&rel=0`}
                    title={video.title}
                    allow="autoplay; encrypted-media; picture-in-picture"
                    allowFullScreen
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Video Info */}
                <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <h3 className="text-2xl font-semibold mb-2">{video.title}</h3>
                  <p className="text-gray-300">{video.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}

          {/* Navigation Buttons */}
          <div className="absolute inset-y-0 left-0 flex items-center z-10">
            <button className="land-prev-slide bg-[#E12CEC] text-white rounded-full p-1 mx-4 transition-all transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center z-10">
            <button className="land-next-slide bg-[#E12CEC] text-white rounded-full p-1 mx-4 transition-all transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </Swiper>
      </div>
        <div className="mt-8 flex justify-center">
          <Link href="/landscape-categories" className="inline-block">
            <button className="bg-[#E12CEC] text-white px-8 py-3 rounded-full text-base font-medium transition">
              Explore More Edits
            </button>
          </Link>
        </div>
    </section>
  );
};

export default LandSwiper;