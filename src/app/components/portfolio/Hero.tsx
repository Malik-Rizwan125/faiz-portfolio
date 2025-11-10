"use client"
import Image from "next/image";
import React from "react";
import { Heading } from "../Heading";

const Hero: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section id="services" className="flex flex-col items-center mt-10 justify-center text-white text-center">
      {/* Top badge */}
      
      <div className="flex justify-center mb-2.5">       
            <Heading variant="h5" heading={"● 3 Spots Available"} />
      </div>
      {/* Main heading */}
      <div className="lg:w-[70%]">
         <Heading variant="h5" heading={(<> Every Great Story <br />
            Deserves a Great Editor.
          </>)} />
      </div>
      {/* Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-6">
        <button className="bg-[#E12CEC]  text-white px-6 py-3 rounded-full text-sm font-medium transition">
          Editing Work
        </button>
        <button onClick={() => scrollToSection("#project")} className="text-gray-300 hover:text-white text-sm font-medium">
          How it works
        </button>
      </div>

      {/* Customer Info */}
      <div className="flex items-center gap-2 text-gray-400 text-sm mb-10">
        <div className="flex items-center">
          <Image src="/images/avatar1.avif" alt="logo" width={30} height={30} className="w-8 h-8 rounded-full border border-[#E12CEC]" />
          <Image src="/images/avatar2.avif" alt="logo" width={30} height={30} className="w-8 h-8 rounded-full border border-[#E12CEC]" />
          <Image src="/images/avatar3.avif" alt="logo" width={30} height={30} className="w-8 h-8 rounded-full border border-[#E12CEC]" />
        </div>
        <p>
          <span className="text-[#E12CEC] font-semibold">VIP</span> 100+ Happy customers
        </p>
      </div>

      {/* Video or image section */}
      <div className="w-full max-w-5xl rounded-2xl overflow-hidden shadow-lg aspect-video">
        <iframe
          className="w-full h-full rounded-2xl"
          src="https://www.youtube.com/embed/f39l5o-_bnk?autoplay=1&mute=1&controls=0&loop=1&playlist=f39l5o-_bnk&modestbranding=1&rel=0&showinfo=0"
          title="YouTube video player"
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
};

export default Hero;
