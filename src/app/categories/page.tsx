"use client";

import * as Tabs from "@radix-ui/react-tabs";
import { useState } from "react";
import ReactPlayer from "react-player";
import ContainerWrapper from "../components/ContainerWrapper";

interface Video {
  id: number;
  video: string;
  title: string;
}

interface Category {
  id: string;
  label: string;
  videos: Video[];
}

const categories: Category[] = [
  {
    id: "foodVideos",
    label: "Food video",
    videos: [
      { id: 1, video: "/video/food/food1.mp4", title: "Food video" },
      { id: 2, video: "/video/food/food2.mp4", title: "Food video" },
      { id: 3, video: "/video/food/food3.mp4", title: "Food video" },
      { id: 4, video: "/video/food/food4.mp4", title: "Food video" },
      { id: 5, video: "/video/food/food5.mp4", title: "Food video" },
      { id: 6, video: "/video/food/food6.mp4", title: "Food video" },
      { id: 7, video: "/video/food/food7.mp4", title: "Food video" },
      { id: 8, video: "/video/food/food8.mp4", title: "Food video" },
    ],
  },
  {
    id: "graphicDesign",
    label: "Graphic Design",
    videos: [
      { id: 1, video: "https://youtube.com/shorts/qcXZ0sd8GbA?si=wMZZUmlx5U5F0Skn", title: "Graphic Design 1" },
      { id: 2, video: "https://youtube.com/shorts/SubqqO0OSWk?si=F2ebYfx-nLlnqRrr", title: "Graphic Design 2" },
      { id: 3, video: "https://youtube.com/shorts/dKxrbOUA4kk?si=vlRn5R_xHlGdBGMR", title: "Graphic Design 3" },
      { id: 4, video: "https://youtube.com/shorts/hnJTUSUH6fU?si=nlhf-dnJiVwCY3uo", title: "Graphic Design 4" },
    ],
  },
  {
    id: "webDevelopment",
    label: "Web Development",
    videos: [
      { id: 1, video: "https://youtube.com/shorts/qcXZ0sd8GbA?si=wMZZUmlx5U5F0Skn", title: "Web Dev 1" },
      { id: 2, video: "https://youtube.com/shorts/SubqqO0OSWk?si=F2ebYfx-nLlnqRrr", title: "Web Dev 2" },
      { id: 3, video: "https://youtube.com/shorts/dKxrbOUA4kk?si=vlRn5R_xHlGdBGMR", title: "Web Dev 3" },
      { id: 4, video: "https://youtube.com/shorts/hnJTUSUH6fU?si=nlhf-dnJiVwCY3uo", title: "Web Dev 4" },
    ],
  },
  {
    id: "car",
    label: "Car Video",
    videos: [
      { id: 1, video: "/video/car/car1.mp4", title: "car Video" },
      { id: 2, video: "/video/car/car2.mp4", title: "car Video" },
      { id: 3, video: "/video/car/car3.mp4", title: "car Video" },
      { id: 4, video: "/video/car/car4.mp4", title: "car Video" },
      { id: 5, video: "/video/car/car5.mp4", title: "car video" },
      { id: 6, video: "/video/car/car6.mp4", title: "car video" },
      { id: 7, video: "/video/car/car7.mp4", title: "car video" },
      { id: 8, video: "/video/car/car8.mp4", title: "car video" },
    ],
  },
];

// ✅ Helper to clean Shorts/YouTube URLs
const getVideoUrl = (url: string) => {
  const isYouTube = /youtube\.com|youtu\.be/.test(url);
  if (!isYouTube) return url;
  const idMatch = url.match(/(?:shorts\/|watch\?v=)([\w-]+)/);
  const videoId = idMatch ? idMatch[1] : "";
  return `https://www.youtube.com/watch?v=${videoId}`;
};

export default function CategoriesPage() {
  const [activeTab, setActiveTab] = useState("foodVideos");
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);
  const [autoplay, setAutoplay] = useState(true);
  const [muted, setMuted] = useState(false);

  return (
    <ContainerWrapper>
      <div className="min-h-screen py-20 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Project Categories
          </h1>



          {/* ✅ Tabs */}
          <Tabs.Root
            defaultValue="foodVideos"
            className="w-full"
            onValueChange={(value) => setActiveTab(value)}
          >
            <Tabs.List className="flex justify-center flex-wrap gap-4 mb-12">
              {categories.map((category) => (
                <Tabs.Trigger
                  key={category.id}
                  value={category.id}
                  className={`px-6 py-3 rounded-full transition ${activeTab === category.id
                      ? "bg-orange-500 text-white"
                      : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                    }`}
                >
                  {category.label}
                </Tabs.Trigger>
              ))}
            </Tabs.List>

            {/* ✅ Tab content (video grid) */}
            {categories.map((category) => (
              <Tabs.Content key={category.id} value={category.id} className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {category.videos.map((project, index) => (
                    <div
                      key={project.id}
                      className="relative group rounded-3xl overflow-hidden bg-gray-900 aspect-[9/16]"
                    >
                      <ReactPlayer
                        url={getVideoUrl(project.video)}
                        width="100%"
                        height="100%"
                        playing={playingIndex === project.id && autoplay}
                        muted={muted}
                        loop
                        className="rounded-3xl"
                      />

                      {/* Play/Pause button overlay */}
                      <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition">
                        <button
                          onClick={() =>
                            setPlayingIndex(
                              playingIndex === project.id ? null : project.id
                            )
                          }
                          className="bg-orange-500 hover:bg-orange-600 text-white px-3 py-2 rounded-full text-lg font-medium transition"
                        >
                          {playingIndex === project.id ? "⏸" : "▶"}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </Tabs.Content>
            ))}
          </Tabs.Root>
        </div>
      </div>
    </ContainerWrapper>
  );
}
