"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Link from "next/link";

const Projects: React.FC = () => {
  const projects = [
    {
      id: 1,
      video: "https://youtube.com/shorts/qcXZ0sd8GbA?si=wMZZUmlx5U5F0Skn",
    },
    {
      id: 2,
      video: "https://youtube.com/shorts/A3iXH95xNAw?si=EEHnjUa9sdbVnaOv",
    },
    {
      id: 3,
      video: "https://youtube.com/shorts/G9ZHPfVW4IA?si=3ILltToLWN7lq0-L",
    },
    {
      id: 4,
      video: "https://youtube.com/shorts/hnJTUSUH6fU?si=nlhf-dnJiVwCY3uo",
    },
    {
      id: 5,
      video: "https://youtube.com/shorts/s1KjXurdgqM?si=JN4J901k7LGNKyPM",
    },
    {
      id: 6,
      video: "https://youtube.com/shorts/IQC1a8kzp0g?si=S19muVK0K6ki7hls",
    },
  ];

  // ✅ Function to convert YouTube Shorts or Watch URLs into proper embed URLs
  const getEmbedUrl = (url: string) => {
    const idMatch = url.match(/(?:shorts\/|watch\?v=)([\w-]+)/);
    const videoId = idMatch ? idMatch[1] : "";
    return `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&controls=0&modestbranding=1&rel=0&playlist=${videoId}`;
  };

  return (
    <section id="project" className="text-white py-5">
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
                  src={getEmbedUrl(p.video)}
                  title={`Project ${p.id}`}
                  allow="autoplay; encrypted-media; picture-in-picture"
                  allowFullScreen
                ></iframe>

                {/* Overlay text */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition bg-black/40 text-white text-lg font-medium">
                  Project {p.id}
                </div>
              </div>
            </SwiperSlide>
          ))}

          {/* Navigation Buttons */}
          <div className="absolute inset-y-0 left-0 flex items-center z-10">
            <button className="prev-slide bg-orange-500 hover:bg-orange-600 text-white rounded-full p-2 mx-2 transition w-10 h-10">
              ←
            </button>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center z-10">
            <button className="next-slide bg-orange-500 hover:bg-orange-600 text-white rounded-full p-2 mx-2 transition w-10 h-10">
              →
            </button>
          </div>
        </Swiper>

        {/* Explore more button */}
        <div className="mt-12">
          <Link href="/categories" className="inline-block">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full text-base font-medium transition">
              Explore More Edits
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
