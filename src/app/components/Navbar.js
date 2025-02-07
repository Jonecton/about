"use client";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import { EffectFade } from "swiper/modules";
import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";

export default function Navbar() {
  const [activePage, setActivePage] = useState("home");

  // Image map for each page
  const images = {
    home: "/MeandHarry.svg",
    about: "/forklift-4-2.jpg",
    education: "/gradphoto.jpg",
    skills: "/fronterahacks.png",
    projects: "/securelenslogin.png",
    experience: "/run-2.jpg",
  };

  // Detect which section is currently in view
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActivePage(entry.target.id); // Update active page when section is in view
          }
        });
      },
      { threshold: 0.5 } // Adjusts how much of the section needs to be visible
    );

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  return (
<div className="h-screen w-[30vw] max-w-[300px] bg-transparent border-r border-gray-300/50 flex flex-col justify-center items-center transition-all duration-300">
      <div className="flex flex-col items-center w-full flex-grow justify-center">
        
        {/* Carousel */}
        <div className="w-[80%] rounded-lg overflow-hidden">
          <Swiper modules={[EffectFade]} effect="fade" slidesPerView={1} className="w-full h-full">
            <SwiperSlide>
              <img src={images[activePage]} alt={activePage} className="w-full h-full object-cover" />
            </SwiperSlide>
          </Swiper>
        </div>

        {/* Navbar Links */}
        <section className="flex flex-col w-[50%] mt-8">
          {Object.keys(images).map((page) => (
            <a
              key={page}
              href={`#${page}`} // Scrolls to the correct section
              className={`py-4 text-left text-[clamp(0.8rem,4vw,1.2rem)] transition-all duration-300 ${
                activePage === page ? "text-blue-300 font-bold border-l-4 border-blue-400 pl-2" : "text-white"
              }`}
              onClick={() => setActivePage(page)}
            >
              {page.charAt(0).toUpperCase() + page.slice(1)}
            </a>
          ))}
        </section>
        {/* Social Links */}
        <section className="flex flex-col w-[50%] mt-8">
          <div className="flex space-x-4 mb-4">
            {/* GitHub Icon */}
            <a href="https://github.com/Jonecton" target="_blank" rel="noopener noreferrer">
              <AiOutlineGithub className="w-8 h-8 text-white hover:text-gray-400 transition-colors" />
            </a>
            {/* LinkedIn Icon */}
            <a href="https://www.linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
              <AiOutlineLinkedin className="w-8 h-8 text-white hover:text-blue-500 transition-colors" />
            </a>
          </div>
            {/* Resume Link */}
            <a href="/Jonecton.pdf" target="_blank" rel="noopener noreferrer" className="ml-2 text-white hover:text-gray-400 transition-colors underline">
            Resume
            </a>
        </section>
      </div>
    </div>
  );
}
