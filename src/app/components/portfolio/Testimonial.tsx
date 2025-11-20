"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Heading } from "../Heading";

export default function Testimonial() {
const testimonials = [
  // ==== Pakistani Clients ====
  {
    id: 1,
    name: "Ayesha Khan",
    role: "Marketing Manager",
    image: "https://i.ibb.co/3z1G9BP/pak-woman-01.jpg",
    content: "Amazing quality and fast delivery. The team really understands branding.",
    rating: 5,
  },
    {
    id: 2,
    name: "Hiroshi Tanaka",
    role: "Project Manager (Japan)",
    image: "https://i.ibb.co/6R74W4x/man-japan-01.jpg",
    content: "Very professional experience — excellent work!",
    rating: 5,
  },
  {
    id: 3,
    name: "Muhammad Ali",
    role: "Business Owner",
    image: "https://i.ibb.co/7ryd6Js/pak-man-01.jpg",
    content: "Highly professional! They exceeded my expectations in every aspect.",
    rating: 5,
  },
  {
    id: 4,
    name: "Carlos Martinez",
    role: "Business Consultant (Spain)",
    image: "https://i.ibb.co/9Nt1t8Q/man-spain-01.jpg",
    content: "Impressed with the attention to detail and quick delivery.",
    rating: 5,
  },
  {
    id: 5,
    name: "Sofia Rossi",
    role: "Brand Specialist (Italy)",
    image: "https://i.ibb.co/N6JrRYx/woman-italy-01.jpg",
    content: "Beautiful design work! Exactly what our brand needed.",
    rating: 5,
  },
  {
    id: 6,
    name: "Fatima Zahra",
    role: "Social Media Strategist",
    image: "https://i.ibb.co/6WmQWnV/pak-woman-02.jpg",
    content: "Creative and reliable — perfect combination for great design work.",
    rating: 5,
  },
    {
    id: 7,
    name: "Liam Walker",
    role: "Tech Founder (UK)",
    image: "https://i.ibb.co/LJ8SWkw/man-uk-01.jpg",
    content: "Great communication and top-quality results.",
    rating: 5,
  },

  {
    id: 9,
    name: "Hassan Raza",
    role: "Entrepreneur",
    image: "https://i.ibb.co/SJbn0y8/pak-man-02.jpg",
    content: "The communication and quality were outstanding. Highly recommended!",
    rating: 5,
  },
  {
    id: 10,
    name: "Sara Ahmed",
    role: "Brand Manager",
    image: "https://i.ibb.co/5W14891/pak-woman-03.jpg",
    content: "Delivered exactly what we were looking for — very satisfied.",
    rating: 5,
  },
  {
    id: 11,
    name: "Usman Tariq",
    role: "Product Designer",
    image: "https://i.ibb.co/k26fCYs/pak-man-03.jpg",
    content: "Professional, fast, and creative. Will work again for sure.",
    rating: 5,
  },
  {
    id: 12,
    name: "Zainab Gul",
    role: "E-commerce Owner",
    image: "https://i.ibb.co/hVWgmx8/pak-woman-04.jpg",
    content: "Super smooth process. The final designs were fantastic.",
    rating: 5,
  },
  {
    id: 13,
    name: "Bilal Haider",
    role: "Startup Founder",
    image: "https://i.ibb.co/Q6qh1yV/pak-man-04.jpg",
    content: "Great service and perfect execution of our project requirements.",
    rating: 5,
  },

  // ==== International Clients ====
  {
    id: 14,
    name: "Emily Johnson",
    role: "Creative Director (USA)",
    image: "https://i.ibb.co/5G9HFCZ/woman-usa-01.jpg",
    content: "Top-notch design and a very professional approach.",
    rating: 5,
  },
  {
    id: 15,
    name: "Carlos Martinez",
    role: "Business Consultant (Spain)",
    image: "https://i.ibb.co/9Nt1t8Q/man-spain-01.jpg",
    content: "Impressed with the attention to detail and quick delivery.",
    rating: 5,
  },
 
  {
    id: 17,
    name: "Liam Walker",
    role: "Tech Founder (UK)",
    image: "https://i.ibb.co/LJ8SWkw/man-uk-01.jpg",
    content: "Great communication and top-quality results.",
    rating: 5,
  },

  {
    id: 19,
    name: "Maria Silva",
    role: "Marketing Lead (Brazil)",
    image: "https://i.ibb.co/PMFMQVx/woman-brazil-01.jpg",
    content: "Exceeded expectations! Definitely coming back again.",
    rating: 5,
  },
  {
    id: 20,
    name: "Jacob Brown",
    role: "Product Manager (Canada)",
    image: "https://i.ibb.co/d4Jq7QQ/man-canada-01.jpg",
    content: "Super creative ideas and flawless execution.",
    rating: 5,
  },
  {
    id: 21,
    name: "Nora Schmidt",
    role: "UX Designer (Germany)",
    image: "https://i.ibb.co/0Msqkkh/woman-germany-01.jpg",
    content: "Amazing collaboration — the designs were perfect.",
    rating: 5,
  },
  {
    id: 22,
    name: "Alex Thompson",
    role: "Software Engineer (Australia)",
    image: "https://i.ibb.co/VYTDkYf/man-australia-01.jpg",
    content: "Very satisfied with the work quality and professionalism.",
    rating: 5,
  },
  {
    id: 23,
    name: "Isabella Lopez",
    role: "Entrepreneur (Mexico)",
    image: "https://i.ibb.co/8KVbn3z/woman-mexico-01.jpg",
    content: "They delivered exactly what I envisioned. Great job!",
    rating: 5,
  },
  {
    id: 24,
    name: "Ethan Carter",
    role: "Digital Strategist (USA)",
    image: "https://i.ibb.co/WFrdfML/man-usa-02.jpg",
    content: "Fantastic experience — highly recommended!",
    rating: 5,
  },
  {
    id: 25,
    name: "Chloe Martin",
    role: "Art Director (France)",
    image: "https://i.ibb.co/kKhcz8p/woman-france-01.jpg",
    content: "The designs were elegant, clean, and perfectly on-brand.",
    rating: 5,
  },
];


  const [visibleCount, setVisibleCount] = useState(6);

  const handleViewMore = () => {
    setVisibleCount((prev) => {
      if (prev + 3 >= testimonials.length) return testimonials.length;
      return prev + 3;
    });
  };

  const visibleTestimonials = testimonials.slice(0, visibleCount);

  return (
    <section id="testimonials">
      <div className="container mx-auto !px-0">
        <div className="flex justify-center mb-10">
          <Heading heading={(<>What Our Clients Say</>)} />
        </div>
        {/* Grid layout */}
        <div
          className="
            grid 
            grid-cols-1 
            sm:grid-cols-2 
            lg:grid-cols-3
            gap-5
          "
        >
          {visibleTestimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white shadow-lg rounded-xl p-5 hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>

              {/* Rating stars */}
              <div className="flex text-yellow-400 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>

              <p className="text-gray-700 text-sm">{testimonial.content}</p>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        {visibleCount < testimonials.length && (
          <div className="text-center mt-10">
            <button
              onClick={handleViewMore}
              className="text-white bg-[#E12CEC] px-6 py-3 rounded-full text-sm font-medium "
            >
              View More
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
