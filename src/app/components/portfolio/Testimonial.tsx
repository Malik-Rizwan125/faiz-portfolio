"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Testimonial() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0.6, 1], [1, 0.8]);

  const baseStart = 0;
  const baseEndOffset = 0.25;

  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      role: "CEO at TechCorp",
      image: "/images/image5.avif",
      content: "Absolutely amazing work! The attention to detail and creativity exceeded my expectations.",
      rating: 5
    },
    {
      id: 2,
      name: "Sarah Smith",
      role: "Marketing Director",
      image: "/images/image5.avif",
      content: "Incredibly professional and responsive. Delivered exactly what we needed on time.",
      rating: 5
    },
    {
      id: 3,
      name: "Michael Brown",
      role: "Startup Founder",
      image: "/images/image5.avif",
      content: "Outstanding service! The final product was even better than I imagined.",
      rating: 5
    },
    {
      id: 4,
      name: "Emily Chen",
      role: "Product Manager",
      image: "/images/image5.avif",
      content: "Great communication throughout the project. Very satisfied with the results.",
      rating: 5
    },
    {
      id: 5,
      name: "David Wilson",
      role: "Art Director",
      image: "/images/image5.avif",
      content: "Exceptional creativity and technical expertise. Would highly recommend!",
      rating: 5
    },
    {
      id: 6,
      name: "Lisa Anderson",
      role: "UX Designer",
      image: "/images/image5.avif",
      content: "Fantastic work ethic and brilliant design solutions. A pleasure to work with.",
      rating: 5
    },
    {
      id: 7,
      name: "James Taylor",
      role: "Tech Lead",
      image: "/images/image5.avif",
      content: "Impressed by the innovative approach and quality of deliverables.",
      rating: 5
    },
    {
      id: 8,
      name: "Anna Martinez",
      role: "Project Manager",
      image: "/images/image5.avif",
      content: "Exceeded expectations in every way. Looking forward to future collaborations.",
      rating: 5
    },
  
  ];

  const count = testimonials.length;
  const startMax = 0.6;
  const step = count > 1 ? (startMax - baseStart) / (count - 1) : baseEndOffset;

  const yTransforms = testimonials.map((_, i) => {
    const start = Math.min(baseStart + step * i, 1);
    const end = Math.min(start + baseEndOffset, 1);
    const initialOffset = 60 + i * 40;
    return useTransform(scrollYProgress, [start, end], [`${initialOffset}%`, '0%']);
  });

  const centerIndex = (count - 1) / 2;
  const horizontalSpread = 420;
  const xTransforms = testimonials.map((_, i) => {
    const start = Math.min(baseStart + step * i, 1);
    const end = Math.min(start + baseEndOffset, 1);
    const initialX = Math.round((i - centerIndex) * horizontalSpread);
    return useTransform(scrollYProgress, [start, end], [`${initialX}px`, '0px']);
  });

  const testimonialsWithTransforms = testimonials.map((testimonial, i) => ({
    ...testimonial,
    y: yTransforms[i],
    x: xTransforms[i],
  }));

  const sharedTransition = { type: 'spring' as const, stiffness: 220, damping: 28 };

  return (
    <section ref={ref} className="relative h-[200vh]">
      <div className="sticky top-0 flex h-[80vh] lg:h-[80vh] items-center justify-center overflow-hidden">
        {testimonialsWithTransforms.map((testimonial, index) => (
          <motion.div
            key={testimonial.id}
            style={{ x: testimonial.x, y: testimonial.y, scale, zIndex: 10 + index }}
            className="absolute top-[6%]w-full sm:w-[400px] bg-white shadow-xl rounded-xl overflow-hidden"
            transition={sharedTransition}
          >
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200">
                  <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <div className="mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-700">{testimonial.content}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

