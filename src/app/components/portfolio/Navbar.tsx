"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-6 left-0 w-full z-50 flex justify-center transition-all duration-500 ${
        isScrolled
          ? "bg-[linear-gradient(rgba(28,28,28,0.8)_-38%,rgba(0,0,0,0.8)_156%)] backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="container flex justify-center">
        <nav
          className={`relative flex items-center justify-between w-full max-w-5xl px-6 py-3 rounded-full border border-orange-500 bg-[linear-gradient(90deg,#181818_0%,#000_100%)] shadow-[0_0_15px_rgba(255,140,0,0.2)] transition-all duration-500 ${
            isScrolled ? "scale-[0.98]" : "scale-100"
          }`}
        >
          {/* Brand */}
          <Link href="/" className="flex items-center gap-3">
            <span className="w-3 h-3 bg-orange-500 rounded-full" />
            <span className="font-semibold text-lg text-white">
              FaizAhmadmp4
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 text-gray-300">
            <button
              onClick={() => scrollToSection("#services")}
              className="hover:text-orange-500 transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("#work")}
              className="hover:text-orange-500 transition-colors"
            >
              Work
            </button>
            <button
              onClick={() => scrollToSection("#testimonial")}
              className="hover:text-orange-500 transition-colors"
            >
              Testimonial
            </button>
            <button
              onClick={() => scrollToSection("#email")}
              className="hover:text-orange-500 transition-colors"
            >
              Email
            </button>
          </div>

          {/* Contact Button */}
          <div className="hidden md:block">
            <button
              onClick={() => scrollToSection("#contact")}
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full font-medium transition-all transform hover:scale-105 shadow-[0_0_10px_rgba(255,140,0,0.4)]"
            >
              Contact us
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white p-2 focus:outline-none focus:ring-2 focus:ring-orange-500 rounded-lg"
          >
            <div className="w-6 h-6 flex items-center justify-center relative">
              <span
                className={`absolute w-5 h-0.5 bg-white transform transition-all duration-300 ${
                  isMobileMenuOpen ? "rotate-45" : "-translate-y-1.5"
                }`}
              />
              <span
                className={`absolute w-5 h-0.5 bg-white transition-all duration-300 ${
                  isMobileMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute w-5 h-0.5 bg-white transform transition-all duration-300 ${
                  isMobileMenuOpen ? "-rotate-45" : "translate-y-1.5"
                }`}
              />
            </div>
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 z-40 bg-black/95 backdrop-blur-sm transition-all duration-500 ease-in-out ${
          isMobileMenuOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full"
        }`}
      >
        <div className="flex flex-col items-center justify-center min-h-screen gap-8 transition-all duration-500">
          <button
            onClick={() => scrollToSection("#services")}
            className="text-2xl text-white hover:text-orange-500 transition-colors"
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection("#work")}
            className="text-2xl text-white hover:text-orange-500 transition-colors"
          >
            Work
          </button>
          <button
            onClick={() => scrollToSection("#testimonial")}
            className="text-2xl text-white hover:text-orange-500 transition-colors"
          >
            Testimonial
          </button>
          <button
            onClick={() => scrollToSection("#email")}
            className="text-2xl text-white hover:text-orange-500 transition-colors"
          >
            Email
          </button>
          <button
            onClick={() => scrollToSection("#contact")}
            className="text-2xl bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full transition-all transform hover:scale-105"
          >
            Contact us
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
