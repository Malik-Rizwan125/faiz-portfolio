"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Testimonial() {
  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      role: "CEO at TechCorp",
      image: "/images/image5.avif",
      content: "Absolutely amazing work! The attention to detail and creativity exceeded my expectations.",
      rating: 5,
    },
    {
      id: 2,
      name: "Sarah Smith",
      role: "Marketing Director",
      image: "/images/image5.avif",
      content: "Incredibly professional and responsive. Delivered exactly what we needed on time.",
      rating: 5,
    },
    {
      id: 3,
      name: "Michael Brown",
      role: "Startup Founder",
      image: "/images/image5.avif",
      content: "Outstanding service! The final product was even better than I imagined.",
      rating: 5,
    },
    {
      id: 4,
      name: "Emily Chen",
      role: "Product Manager",
      image: "/images/image5.avif",
      content: "Great communication throughout the project. Very satisfied with the results.",
      rating: 5,
    },
    {
      id: 5,
      name: "David Wilson",
      role: "Art Director",
      image: "/images/image5.avif",
      content: "Exceptional creativity and technical expertise. Would highly recommend!",
      rating: 5,
    },
    {
      id: 6,
      name: "Lisa Anderson",
      role: "UX Designer",
      image: "/images/image5.avif",
      content: "Fantastic work ethic and brilliant design solutions. A pleasure to work with.",
      rating: 5,
    },
    {
      id: 7,
      name: "James Taylor",
      role: "Tech Lead",
      image: "/images/image5.avif",
      content: "Impressed by the innovative approach and quality of deliverables.",
      rating: 5,
    },
    {
      id: 8,
      name: "Anna Martinez",
      role: "Project Manager",
      image: "/images/image5.avif",
      content: "Exceeded expectations in every way. Looking forward to future collaborations.",
      rating: 5,
    },
    {
      id: 9,
      name: "Robert King",
      role: "Creative Director",
      image: "/images/image5.avif",
      content: "Highly professional team, great experience from start to finish.",
      rating: 5,
    },
    {
      id: 10,
      name: "Sophia Turner",
      role: "Product Designer",
      image: "/images/image5.avif",
      content: "They really understand design thinking. Fantastic collaboration!",
      rating: 5,
    },
    {
      id: 11,
      name: "Daniel Evans",
      role: "Engineer",
      image: "/images/image5.avif",
      content: "Loved working with them! Great attention to both detail and deadlines.",
      rating: 5,
    },
    {
      id: 12,
      name: "Olivia Wright",
      role: "Entrepreneur",
      image: "/images/image5.avif",
      content: "Absolutely stellar work — exceeded all my expectations!",
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
      <div className="container mx-auto px-4">
        <h2 className="text-center text-3xl font-semibold mb-10 text-white">What Our Clients Say</h2>

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
