"use client";
import React, { useEffect, useRef, useState } from "react";

interface CounterItem {
  value: number;
  label: string;
}

const counters: CounterItem[] = [
  { value: 160, label: "Jobs" },
  { value: 10, label: "Years of Experience" },
  { value: 210, label: "Specialists" },
  { value: 430, label: "Staff Members" },
];

export default function CounterSection() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-5 ">
      <div className="container mx-auto !px-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        {counters.map((item, index) => (
          <div key={index} className="relative">
            {/* Vertical divider except last */}
            {index !== counters.length - 1 && (
              <span className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-12 bg-gray-300" />
            )}

            {/* Animated number */}
            <h3 className="text-4xl font-bold text-white mb-2">
              <AnimatedCounter value={item.value} isVisible={isVisible} />+
            </h3>
            <p className="text-white text-sm sm:text-base">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

interface AnimatedCounterProps {
  value: number;
  isVisible: boolean;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ value, isVisible }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const duration = 1500;
    const increment = value / (duration / 16);

    const counter = setInterval(() => {
      start += increment;
      if (start >= value) {
        start = value;
        clearInterval(counter);
      }
      setCount(Math.floor(start));
    }, 16);

    return () => clearInterval(counter);
  }, [isVisible, value]);

  return <span>{count}</span>;
};
