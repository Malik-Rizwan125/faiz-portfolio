"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import NextImage from "../images/next-image";
export default function DummyTestimonial() {

   const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Transform for stacking images as user scrolls
  // We'll create staggered transforms by offsetting the input ranges for each image
  const scale = useTransform(scrollYProgress, [0.6, 1], [1, 0.8]);

  // tightened ranges -> less staggered delay
  const yTransforms = [
    useTransform(scrollYProgress, [0, 0.18], ["60%", "0%"]),
    useTransform(scrollYProgress, [0.08, 0.32], ["110%", "0%"]),
    useTransform(scrollYProgress, [0.16, 0.34], ["160%", "0%"]),
    useTransform(scrollYProgress, [0.24, 0.42], ["210%", "0%"]),
    useTransform(scrollYProgress, [0.32, 0.5], ["260%", "0%"]),
    useTransform(scrollYProgress, [0.4, 0.58], ["310%", "0%"]),
    useTransform(scrollYProgress, [0.48, 0.66], ["360%", "0%"]),
  ];

  // Images found in public/images (will render in this order). Replace or reorder as needed.
  const images = [
    { id: 1, src: '/images/image1.png', alt: 'chat1', y: yTransforms[0] },
    { id: 2, src: '/images/image2.png', alt: 'chat2', y: yTransforms[1] },
    { id: 3, src: '/images/image3.png', alt: 'chat3', y: yTransforms[2] },
    { id: 4, src: '/images/image4.png', alt: 'chat4', y: yTransforms[3] },
    { id: 5, src: '/images/image5.avif', alt: 'chat5', y: yTransforms[4] },
    { id: 6, src: '/images/image5.png', alt: 'chat6', y: yTransforms[5] },
    { id: 7, src: '/images/image6.png', alt: 'chat7', y: yTransforms[6] },
  ];
  return (
     <section ref={ref} className="relative h-[180vh] bg-gray-50">
      {/* Sticky container */}
      <div className="sticky top-0 flex h-[80vh] items-center justify-center overflow-hidden">
        {/* Chat screenshots */}
             {images.map((img, index) => (
            <motion.div
              key={img.id}
              style={{ y: img.y, scale }}
              className={`absolute top-[30%] w-[600px] shadow-xl rounded-xl overflow-hidden`}
              // add a subtle spring transition per image to create lag/delay effect
              transition={{
                type: 'spring',
                // stronger springs and slightly higher damping => less lag
                stiffness: 200 - index * 8,
                damping: 26 + index * 2,
              }}
            >
              
              <NextImage src={img.src} alt={img.alt} className="w-[600px] h-auto" objectFit="cover" />
            </motion.div>
          ))}
      </div>
    </section>
  )
}

