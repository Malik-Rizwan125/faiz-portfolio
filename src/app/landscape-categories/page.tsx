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
    id: "addVideos",
    label: "Add video",
    videos: [
      { id: 1, video: "https://youtu.be/f0KJFMHhpC0?si=U9ijpMEMhYxwJUsI", title: "Add video" },
      { id: 2, video: "https://youtu.be/CG2zu6MnZvU?si=MAqeI5NAATs9n47S", title: "Add video" },
      { id: 3, video: "https://youtu.be/o-QeNZo-r_0?si=a-Ybh7AtRy32bbD5", title: "Add video" },
    ],
  },
  {
    id: "motionGraphic",
    label: "Motion Graphic",
    videos: [
      { id: 1, video: "https://youtu.be/I3au6xBggCQ?si=znjtQ1f7nWJgdmax", title: "Motion Graphic" },
      { id: 2, video: "https://youtu.be/EwGn6mMMUUU?si=wN6DrQgdrHJ6kifv", title: "Motion Graphic" },
    ],
  },
  {
    id: "informative",
    label: "Informative",
    videos: [
      { id: 1, video: "https://youtu.be/75E9QAuTUyg?si=YVKlW9V6BHb0GiUU", title: "Informative Video" },
      { id: 2, video: "https://youtu.be/EwGn6mMMUUU?si=wN6DrQgdrHJ6kifv", title: "Informative Video" },
      { id: 3, video: "https://youtu.be/f39l5o-_bnk?si=kDPr0Kfv6yGeZLr1", title: "Informative Video" },
      { id: 4, video: "https://youtu.be/5gi_Zxj-anY?si=ZWRAoDe241MQzMch", title: "Informative Video" },
      { id: 5, video: "https://youtu.be/_4m3IdNYkZE?si=LyeFsdS2lXJnKpgZ", title: "Informative Video" },
      { id: 6, video: "https://youtu.be/aV9esFfcBsU?si=sF2EREoGgX4Gd_0e", title: "Informative Video" },
      { id: 7, video: "https://youtu.be/d7tBvHJT_2Y?si=G72yRsKRPREyY_PU", title: "Informative Video" },
      { id: 8, video: "https://youtu.be/qYceYH4eCu0?si=lPYA-blL1mmQDPHe", title: "Informative Video" },
      { id: 9, video: "https://youtu.be/SktiqsidDQk?si=vqf170mq2H-x8PR8", title: "Informative Video" },
    ],
  },
  {
    id: "podcast",
    label: "PodCast",
    videos: [
      { id: 1, video: "https://youtube.com/shorts/k5Z_1lYvcnY?si=lpn2ly2DHxeKCw90", title: "PodCast" },
      { id: 2, video: "https://youtube.com/shorts/oqXki67OK6k?si=O9lB89dos568Zdm1", title: "PodCast" },
      { id: 3, video: "https://youtube.com/shorts/SubqqO0OSWk?si=lSpxiRrJ3D-cJl2x", title: "PodCast" },
      { id: 4, video: "https://youtube.com/shorts/QPqBh2F-ltw?si=pfE_A9tj9VEqgTMH", title: "PodCast" },
      { id: 5, video: "https://youtube.com/shorts/g2mc9a-D8ss?si=xlZ8ptfjHP_r7JX6", title: "PodCast" },
      { id: 6, video: "https://youtube.com/shorts/gXIN_6H8mlo?si=3OP5vI5l6KfUP8jo", title: "PodCast" },
    ],
  },
];

// ✅ Helper to clean Shorts/YouTube URLs
const getVideoUrl = (url: string) => {
  if (!url) return "";

  // Match all YouTube formats
  const match = url.match(
    /(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|shorts\/))([\w-]+)/
  );

  const videoId = match ? match[1] : "";
  return videoId ? `https://www.youtube.com/watch?v=${videoId}` : url;
};

export default function CategoriesPage() {
  const [activeTab, setActiveTab] = useState("addVideos");
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
            defaultValue="addVideos"
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
