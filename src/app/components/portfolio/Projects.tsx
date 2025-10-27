"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const Projects: React.FC = () => {
  const projects = [
    {
      id: 1,
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      id: 2,
      video: "https://www.youtube.com/embed/3JZ_D3ELwOQ",
    },
    {
      id: 3,
      video: "https://www.youtube.com/embed/l482T0yNkeo",
    },
    {
      id: 4,
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      id: 5,
      video: "https://www.youtube.com/embed/3JZ_D3ELwOQ",
    },
  ];

  return (
    <section className=" text-white py-20">
      <div className="max-w-7xl mx-auto px-4 text-center">
        {/* Top label */}
        <p className="text-white text-sm mb-2">● Work</p>

        {/* Main heading */}
        <h2 className="text-3xl sm:text-5xl font-semibold mb-12">
          Explore our video editing <br /> work and projects
        </h2>

        {/* Swiper Section */}
        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: ".next-slide",
            prevEl: ".prev-slide",
          }}
          spaceBetween={30}
          slidesPerView={1.2}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="relative"
        >
          {projects.map((p) => (
            <SwiperSlide key={p.id}>
              <div className="relative group rounded-3xl overflow-hidden bg-gray-900">
                <iframe
                  className="w-full aspect-[9/16] object-cover rounded-3xl"
                  src={`${p.video}?autoplay=1&mute=1&loop=1&playlist=${p.video.split("/embed/")[1]}&controls=0&modestbranding=1&rel=0`}
                  title={`Project ${p.id}`}
                  allow="autoplay; encrypted-media; picture-in-picture"
                  allowFullScreen
                ></iframe>

                {/* Overlay text (optional) */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition bg-black/40 text-white text-lg font-medium">
                  Project {p.id}
                </div>
              </div>
            </SwiperSlide>
          ))}

          {/* Navigation Buttons */}
          <div className="absolute inset-y-0 left-0 flex items-center z-10">
            <button className="prev-slide bg-orange-500 hover:bg-orange-600 text-white rounded-full p-2 mx-2 transition">
              ←
            </button>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center z-10">
            <button className="next-slide bg-orange-500 hover:bg-orange-600 text-white rounded-full p-2 mx-2 transition">
              →
            </button>
          </div>
        </Swiper>
         <div className="mt-12">
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full text-base font-medium transition">
            Explore More Edits
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
