"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import NextImage from "../images/next-image";
export default function Testimonial() {

   const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Transform for stacking images as user scrolls
  // We'll create staggered transforms by offsetting the input ranges for each image
  const scale = useTransform(scrollYProgress, [0.6, 1], [1, 0.8]);

  // tightened ranges -> less staggered delay
  // compute evenly spaced transforms so images start spread horizontally and assemble to center
  const baseStart = 0;
  const baseEndOffset = 0.25; // length of each transform window

  // images to render (order controls stacking). Add/remove files as needed.
  const images = [
    { id: 1, src: '/images/image1.png', alt: 'chat1' },
    { id: 2, src: '/images/image2.png', alt: 'chat2' },
    { id: 3, src: '/images/image3.png', alt: 'chat3' },
    { id: 4, src: '/images/image4.png', alt: 'chat4' },
    { id: 5, src: '/images/image5.avif', alt: 'chat5' },
    { id: 6, src: '/images/image5.png', alt: 'chat6' },
    { id: 7, src: '/images/image6.png', alt: 'chat7' },
  ];

  const count = images.length;
  const startMax = 0.6;
  const step = count > 1 ? (startMax - baseStart) / (count - 1) : baseEndOffset;

  // vertical transforms (move from offset% down to 0%)
  const yTransforms = images.map((_, i) => {
    const start = Math.min(baseStart + step * i, 1);
    const end = Math.min(start + baseEndOffset, 1);
    const initialOffset = 60 + i * 40; // percent translate before settling to 0%
    return useTransform(scrollYProgress, [start, end], [`${initialOffset}%`, '0%']);
  });

  // horizontal transforms (spread images out initially, then move to center)
  const centerIndex = (count - 1) / 2;
  const horizontalSpread = 420; // px between adjacent images initially
  const xTransforms = images.map((_, i) => {
    const start = Math.min(baseStart + step * i, 1);
    const end = Math.min(start + baseEndOffset, 1);
    const initialX = Math.round((i - centerIndex) * horizontalSpread);
    return useTransform(scrollYProgress, [start, end], [`${initialX}px`, '0px']);
  });

  // attach transforms to image objects
  const imagesWithTransforms = images.map((img, i) => ({ ...img, y: yTransforms[i], x: xTransforms[i] }));

  // single identical transition for all images -> equal delay behavior
  const sharedTransition = { type: 'spring' as const, stiffness: 220, damping: 28 };
  return (
     <section ref={ref} className="relative h-[200vh]">
      {/* Sticky container */}
      <div className="sticky top-0 flex h-[90vh] items-center justify-center overflow-hidden">
        {/* Chat screenshots */}
             {imagesWithTransforms.map((img, index) => (
            <motion.div
              key={img.id}
              style={{ x: img.x, y: img.y, scale, zIndex: 10 + index }}
              className={`absolute top-[10%] w-[600px] shadow-xl rounded-xl overflow-hidden`}
              // identical transition for all images -> equal behaviour
              transition={sharedTransition}
            >
              <NextImage src={img.src} alt={img.alt} className="w-[600px] h-auto" objectFit="cover" />
            </motion.div>
          ))}
      </div>
    </section>
  )
}

