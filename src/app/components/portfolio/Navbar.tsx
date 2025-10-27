"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect scroll position
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-6 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-[linear-gradient(rgba(28,28,28,0.8)_-38%,rgba(0,0,0,0.8)_156%)] backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="container">
        <nav className="nav-pill mx-auto flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-4">
            <Link href="/" className="brand flex items-center gap-3">
              <span className="brand-dot" aria-hidden />
              <span className="font-semibold text-lg text-white">FaizAhmadmp4</span>
            </Link>
          </div>

          <div className="nav-links hidden md:flex items-center gap-6">
            <a href="#services" className="nav-link">
              Services
            </a>
            <a href="#work" className="nav-link">
              Work
            </a>
            <a href="#testimonial" className="nav-link">
              Testimonial
            </a>
            <a href="#email" className="nav-link">
              Email
            </a>
          </div>

          <div className="ml-4">
            <a href="#contact" className="cta">
              Contact us
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
