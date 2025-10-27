import React from "react";
import Navbar from "./components/portfolio/Navbar";
import Hero from "./components/portfolio/Hero";
import Projects from "./components/portfolio/Projects";
import Footer from "./components/portfolio/Footer";
import ContainerWrapper from "./components/ContainerWrapper";
import Process from "./components/portfolio/Process";
import Testimonial from "./components/portfolio/Testimonial";
import Contact from "./components/portfolio/Contact";
import FAQ from "./components/portfolio/FAQ";

export default function Home() {
  return (
    <div className="font-sans min-h-screen">
      <ContainerWrapper>
        <Navbar />
      </ContainerWrapper>
      <main>
        <ContainerWrapper>
          <Hero />
        </ContainerWrapper>
        <ContainerWrapper>
          <Projects />
        </ContainerWrapper>
        <ContainerWrapper>
          <Process />
        </ContainerWrapper>
        <ContainerWrapper>
          <Testimonial />
        </ContainerWrapper>
        <ContainerWrapper>
          <Contact />
        </ContainerWrapper>
        <ContainerWrapper>
          <FAQ />
        </ContainerWrapper>
      </main>
      <Footer />

    </div>
  );
}
