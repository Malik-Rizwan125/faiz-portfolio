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
    { id: 1, video: "https://youtube.com/shorts/Pmr03_wqe10?si=W60rMuOmcB5FOuxy" },
    { id: 2, video: "https://youtube.com/shorts/NwW31gJpMlI?si=JhiPImeCMG4mZqa-" },
    { id: 3, video: "https://youtube.com/shorts/8WeRNT1-sl0?si=XAYP4ebvaYX1h9mH" },
    { id: 4, video: "https://youtube.com/shorts/bO84pHiC-BA?si=QAzaHwJLTADziW8U" },
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
    <section id="project" className="">
      <div className="max-w-7xl mx-auto text-center px-0 sm:px-6 lg:px-8">
        <p className="text-[#E12CEC] text-sm mb-2">● Work</p>
        <h2 className="text-3xl sm:text-5xl text-white font-semibold mb-12">
          Explore our video editing <br /> work and projects
        </h2>

        {/* Swiper Section */}
        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: ".next-slide",
            prevEl: ".prev-slide",
          }}
          spaceBetween={0}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 30 },
          }}
          className="relative"
        >
          {projects.map((p, index) => (
            <SwiperSlide key={p.id}>
              <div className="relative group rounded-none sm:rounded-3xl overflow-hidden bg-gray-900 aspect-[9/16] w-full">
                {/* ✅ ReactPlayer only renders on client */}
                <ReactPlayer
                  url={getVideoUrl(p.video)}
                  width="100%"
                  height="100%"
                  playing={playingIndex === index && autoplay}
                  muted={muted}
                  loop
                  className="!rounded-lg"
                />

                {/* Play button overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition">
                  <button
                    onClick={() =>
                      setPlayingIndex(playingIndex === index ? null : index)
                    }
                    className="bg-[#E12CEC] text-white px-3 py-1.5 rounded-full text-base font-medium transition"
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
