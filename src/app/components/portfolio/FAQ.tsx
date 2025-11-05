"use client";

import React, { useState } from "react";

export default function FAQ() {
  const items = [
    {
      q: "What is the edit process?",
      a: "Our design process includes 4 phases: Discovery and Research, Storyboarding, Editing, and Finalisation and Delivery.",
    },
    {
      q: "How will I send you the footage?",
      a: "You can share footage via Google Drive, WeTransfer, or your preferred cloud provider.",
    },
    {
      q: "What if I'm not satisfied?",
      a: "We provide revision rounds — we'll work with you until the result meets the brief.",
    },
    {
      q: "I need this video ASAP! Can you deliver in 24 hours?",
      a: "Rush delivery is available for an additional fee depending on scope.",
    },
    {
      q: "How do I get started?",
      a: "Submit a request through the contact form with your brief and we'll reply within 24 hrs.",
    },
    {
      q: "What payment methods do you accept?",
      a: "We accept bank transfers and major cards via our payment processor.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faqs" className="">
      <div className="container !px-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Left Column */}
         
          <div>
  <div className="flex items-center gap-3 justify-center sm:justify-start mb-1">
            <span className="w-2 h-2 rounded-full bg-[#E12CEC] inline-block" />
            <span className="text-sm text-gray-300">Faqs</span>
          </div>
            <h2 className="text-3xl font-semibold mb-6 text-white text-center sm:text-start">
              Frequently asked questions about us
            </h2>

            <div className="bg-[#E12CEC] rounded-2xl p-6 inline-block">
              <div className="text-white font-medium mb-3">
                Have a question? Let's discuss it now!
              </div>
              <button className="bg-black text-white px-4 py-2 rounded-full">
                Book an appointment
              </button>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            {items.map((it, idx) => (
              <div
                key={idx}
                className="bg-white/5 rounded-lg p-4 transition-all duration-300"
              >
                {/* Question */}
                <button
                  className="flex items-center justify-between w-full text-left"
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                >
                  <span className="font-medium text-white">{it.q}</span>
                  <div>
                    <span
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-white transition-transform duration-300 bg-[#E12CEC] ${openIndex === idx ? "rotate-180" : "rotate-0"
                        }`}
                    >
                      {openIndex === idx ? "×" : "+"}
                    </span>

                  </div>
                </button>

                {/* Animated Answer */}
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === idx
                      ? "max-h-40 opacity-100 mt-3 delay-200"
                      : "max-h-0 opacity-0"
                    }`}
                >
                  <p className="text-sm text-gray-300">{it.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
