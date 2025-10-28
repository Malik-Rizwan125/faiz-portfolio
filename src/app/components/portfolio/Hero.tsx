import React from "react";

const Hero: React.FC = () => {
  return (
  <section id="services" className="min-h-screen flex flex-col items-center mt-[60px] lg:mt-[120px] justify-center  text-white text-center px-4">
      {/* Top badge */}
      <p className="text-sm text-orange-400 mb-4">
        ● 3 Spots Available
      </p>

      {/* Main heading */}
      <div className="lg:w-[70%]">
      <h1 className="text-4xl sm:text-6xl font-bold leading-tight mb-6 ">
        Every Great Story{" "}
        <span className="inline-flex items-center">
          Deserves a Great Editor
         
        </span>
        .
      </h1>
</div>
      {/* Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-6">
        <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full text-sm font-medium transition">
          Editing Work
        </button>
        <button className="text-gray-300 hover:text-white text-sm font-medium">
          How it works
        </button>
      </div>

      {/* Customer Info */}
      <div className="flex items-center gap-2 text-gray-400 text-sm mb-10">
        <img
          src="https://via.placeholder.com/32"
          alt="profile"
          className="w-8 h-8 rounded-full border border-gray-700"
        />
        <p>
          <span className="text-blue-400 font-semibold">VIP</span> 100+ Happy customers
        </p>
      </div>

      {/* Video or image section */}
      <div className="w-full max-w-4xl rounded-2xl overflow-hidden shadow-lg aspect-video">
        <iframe
          className="w-full h-full rounded-2xl"
          src="https://www.youtube.com/embed/I1J2Z_Fgado?autoplay=1&mute=1&loop=1&playlist=I1J2Z_Fgado&controls=0&modestbranding=1&rel=0&showinfo=0"
          title="YouTube video player"
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
};

export default Hero;
