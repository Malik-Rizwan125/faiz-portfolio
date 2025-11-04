"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Link from "next/link";

// ✅ Dynamically import ReactPlayer only on client
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

const Projects: React.FC = () => {
  const projects = [
    { id: 1, video: "https://youtube.com/shorts/qcXZ0sd8GbA?si=wMZZUmlx5U5F0Skn" },
    { id: 2, video: "https://youtube.com/shorts/SubqqO0OSWk?si=F2ebYfx-nLlnqRrr" },
    { id: 3, video: "https://youtube.com/shorts/dKxrbOUA4kk?si=vlRn5R_xHlGdBGMR" },
    { id: 4, video: "https://youtube.com/shorts/hnJTUSUH6fU?si=nlhf-dnJiVwCY3uo" },
    { id: 5, video: "https://youtube.com/shorts/qmiYaeN7vBE?si=Pmygu8dmihsvxSgS" },
    { id: 6, video: "https://youtube.com/shorts/IQC1a8kzp0g?si=S19muVK0K6ki7hls" },
    { id: 7, video: "https://youtube.com/shorts/AeSD4w37Tzc?si=B16jskqDne7Xs8xE" },
  ];

  // Convert Shorts or watch links to clean YouTube URLs
  const getVideoUrl = (url: string) => {
    const isYouTube = /youtube\.com|youtu\.be/.test(url);
    if (!isYouTube) return url;
    const idMatch = url.match(/(?:shorts\/|watch\?v=)([\w-]+)/);
    const videoId = idMatch ? idMatch[1] : "";
    return `https://www.youtube.com/watch?v=${videoId}`;
  };

  const [autoplay, setAutoplay] = useState(true);
  const [muted, setMuted] = useState(false);
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);

  return (
    <section id="project" className="text-white py-5">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-white text-sm mb-2">● Work</p>
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
          {projects.map((p, index) => (
            <SwiperSlide key={p.id}>
              <div className="relative group rounded-3xl overflow-hidden bg-gray-900 aspect-[9/16]">
                {/* ✅ ReactPlayer only renders on client */}
                <ReactPlayer
                  url={getVideoUrl(p.video)}
                  width="100%"
                  height="100%"
                  playing={playingIndex === index && autoplay}
                  muted={muted}
                  loop
                  className="rounded-3xl"
                />

                {/* Play button overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition">
                  <button
                    onClick={() =>
                      setPlayingIndex(playingIndex === index ? null : index)
                    }
                    className="bg-[#E12CEC] text-white px-2 py-1 rounded-full text-base font-medium transition"
                  >
                    {playingIndex === index ? "⏸" : "▶"}
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}

          {/* Navigation Buttons */}
          <div className="absolute inset-y-0 left-0 flex items-center z-10">
            <button className="prev-slide bg-[#E12CEC] text-white rounded-full p-2 mx-2 transition w-10 h-10">
              ←
            </button>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center z-10">
            <button className="next-slide bg-[#E12CEC] text-white rounded-full p-2 mx-2 transition w-10 h-10">
              →
            </button>
          </div>
        </Swiper>

        {/* Explore more button */}
        <div className="mt-12">
          <Link href="/categories" className="inline-block">
            <button className="bg-[#E12CEC] text-white px-8 py-3 rounded-full text-base font-medium transition">
              Explore More Edits
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
