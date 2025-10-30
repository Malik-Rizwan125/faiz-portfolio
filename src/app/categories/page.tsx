"use client";

import * as Tabs from "@radix-ui/react-tabs";
import { useState } from "react";
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
    id: "lightContent",
    label: "Light Content",
    videos: [
      { id: 1, video: "https://youtube.com/shorts/qcXZ0sd8GbA?si=wMZZUmlx5U5F0Skn", title: "Light Content 1" },
      { id: 2, video: "https://youtube.com/shorts/SubqqO0OSWk?si=F2ebYfx-nLlnqRrr", title: "Light Content 2" },
      { id: 3, video: "https://youtube.com/shorts/dKxrbOUA4kk?si=vlRn5R_xHlGdBGMR", title: "Light Content 3" },
      { id: 4, video: "https://youtube.com/shorts/hnJTUSUH6fU?si=nlhf-dnJiVwCY3uo", title: "Light Content 4" },
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
    id: "mobileApp",
    label: "Mobile Apps",
      videos: [
      { id: 1, video: "https://youtube.com/shorts/qcXZ0sd8GbA?si=wMZZUmlx5U5F0Skn", title: "Mobile App 1" },
      { id: 2, video: "https://youtube.com/shorts/SubqqO0OSWk?si=F2ebYfx-nLlnqRrr", title: "Mobile App 2" },
      { id: 3, video: "https://youtube.com/shorts/dKxrbOUA4kk?si=vlRn5R_xHlGdBGMR", title: "Mobile App 3" },
      { id: 4, video: "https://youtube.com/shorts/hnJTUSUH6fU?si=nlhf-dnJiVwCY3uo", title: "Mobile App 4" },
    ],
   
  },
];
  const getEmbedUrl = (url: string) => {
    const idMatch = url.match(/(?:shorts\/|watch\?v=)([\w-]+)/);
    const videoId = idMatch ? idMatch[1] : "";
    return `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&modestbranding=1&rel=0&fs=0&disablekb=1&showinfo=0`;
  };

export default function CategoriesPage() {
  const [activeTab, setActiveTab] = useState("lightContent");

  return (
    <ContainerWrapper>
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">
          Project Categories
        </h1>

        <Tabs.Root
          defaultValue="lightContent"
          className="w-full"
          onValueChange={(value) => setActiveTab(value)}
        >
          <Tabs.List className="flex justify-center flex-wrap gap-4 mb-12">
            {categories.map((category) => (
              <Tabs.Trigger
                key={category.id}
                value={category.id}
                className={`px-6 py-3 rounded-full transition ${
                  activeTab === category.id
                    ? "bg-orange-500 text-white"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
              >
                {category.label}
              </Tabs.Trigger>
            ))}
          </Tabs.List>

          {categories.map((category) => (
            <Tabs.Content key={category.id} value={category.id} className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {category.videos.map((project) => (
                  <div
                    key={project.id}
                    className="relative group rounded-3xl overflow-hidden bg-gray-900 aspect-[9/16]"
                  >
                    <iframe
                      className="w-full h-full object-cover"
                      src={getEmbedUrl(project.video)}
                      title={project.title}
                      allow="autoplay; encrypted-media; picture-in-picture"
                      allowFullScreen
                    ></iframe>

                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition bg-black/40">
                      <h3 className="text-white text-lg font-medium">{project.title}</h3>
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
