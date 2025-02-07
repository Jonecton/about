"use client";
import { Swiper, SwiperSlide } from "swiper/react";
// For Swiper v9+, import modules from "swiper/modules"
import { EffectCoverflow, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

export default function SkillsSection() {
  return (
    <section id="skills" className="h-screen w-full flex flex-col justify-center items-center px-4">
      <h2 className="text-4xl font-bold text-white mb-16 hidden sm:block">Skills</h2>

      {/* Mobile View: Swiper Carousel */}
      <div className="block sm:hidden w-full">
        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView="auto"
          coverflowEffect={{
            rotate: 0,
            stretch: -20,
            depth: 150,
            modifier: 1,
            slideShadows: false,
          }}
          pagination={{ clickable: true }}
          modules={[EffectCoverflow, Pagination]}
          className="w-full h-[75vh]"
        >
          {/* Card 1 – Core Skills */}
          <SwiperSlide className="w-64">
            <div className="bg-white rounded-lg shadow-lg p-4 h-[70vh] flex flex-col justify-center">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Core</h3>
              <p className="text-gray-700 mb-2">
                I have expertise in core software development and engineering principles.
              </p>
              <ul className="text-gray-600 list-disc pl-5">
                <li>Agile methodology</li>
                <li>Code integration</li>
                <li>Continuous deployment</li>
                <li>Testing and QA</li>
                <li>Version control</li>
                <li>Planning and design</li>
                <li>Object-Oriented Programming</li>
                <li>Data Structures and Algorithms</li>
              </ul>
            </div>
          </SwiperSlide>

          {/* Card 2 – Software Development */}
          <SwiperSlide className="w-64">
            <div className="bg-white rounded-lg shadow-lg p-4 h-[70vh] flex flex-col justify-center">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Software Development</h3>
              <p className="text-gray-700 mb-2">
                I enjoy coding, building and maintaining projects, working with teams, and learning new languages.
              </p>
              <ul className="text-gray-600 list-disc pl-5 mb-2">
                <li>C++</li>
                <li>Java</li>
                <li>Python</li>
                <li>Ruby</li>
                <li>Dart</li>
                <li>C</li>
                <li>Rust</li>
                <li>Haskell</li>
              </ul>
            </div>
          </SwiperSlide>

          {/* Card 3 – Web Development */}
          <SwiperSlide className="w-64">
            <div className="bg-white rounded-lg shadow-lg p-4 h-[70vh] flex flex-col justify-center">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Web Development</h3>
              <p className="text-gray-700 mb-2">
                I have experience in multiple front-end web development frameworks and languages.
              </p>
              <ul className="text-gray-600 list-disc pl-5">
                <li>Flutter</li>
                <li>Flask</li>
                <li>Ruby on Rails</li>
                <li>Bootstrap</li>
                <li>HTML</li>
                <li>CSS</li>
              </ul>
            </div>
          </SwiperSlide>

          {/* Card 4 – Developer Tools */}
          <SwiperSlide className="w-64">
            <div className="bg-white rounded-lg shadow-lg p-4 h-[70vh] flex flex-col justify-center">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Developer Tools</h3>
              <p className="text-gray-700 mb-2">
                I'm proficient with various technical tools and platforms.
              </p>
              <ul className="text-gray-600 list-disc pl-5">
                <li>Linux Command Line</li>
                <li>MacOS Terminal</li>
                <li>Android Studio</li>
                <li>Visual Studio</li>
                <li>PyCharm</li>
                <li>Github</li>
                <li>OpenCV</li>
                <li>pyTesseract</li>
                <li>SQL</li>
                <li>EasyOCR</li>
                <li>YoloV8</li>
              </ul>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      {/* Desktop View: Grid Layout */}
      <div className="hidden sm:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-6xl">
        {/* Card 1 – Core Skills */}
        <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col justify-center">
          <h3 className="text-xl font-bold text-gray-800 mb-2">Core</h3>
          <p className="text-gray-700 mb-2">
            I have expertise in core software development and engineering principles.
          </p>
          <ul className="text-gray-600 list-disc pl-5">
            <li>Agile methodology</li>
            <li>Code integration</li>
            <li>Continuous deployment</li>
            <li>Testing and QA</li>
            <li>Version control</li>
            <li>Planning and design</li>
            <li>Object-Oriented Programming</li>
            <li>Data Structures and Algorithms</li>
          </ul>
        </div>

        {/* Card 2 – Software Development */}
        <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col justify-center">
          <h3 className="text-xl font-bold text-gray-800 mb-2">Software Development</h3>
          <p className="text-gray-700 mb-2">
            I enjoy coding, building and maintaining projects, working with teams, and learning new languages.
          </p>
          <p className="text-gray-800 font-semibold">Primary:</p>
          <ul className="text-gray-600 list-disc pl-5 mb-2">
            <li>C++</li>
            <li>Java</li>
            <li>Python</li>
            <li>Ruby</li>
            <li>Dart</li>
          </ul>
          <p className="text-gray-800 font-semibold">Secondary:</p>
          <ul className="text-gray-600 list-disc pl-5">
            <li>C</li>
            <li>Rust</li>
            <li>Haskell</li>
          </ul>
        </div>

        {/* Card 3 – Web Development */}
        <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col justify-center">
          <h3 className="text-xl font-bold text-gray-800 mb-2">Web Development</h3>
          <p className="text-gray-700 mb-2">
            I have experience in multiple front-end web development frameworks and languages.
          </p>
          <ul className="text-gray-600 list-disc pl-5">
            <li>Flutter</li>
            <li>Flask</li>
            <li>Ruby on Rails</li>
            <li>Bootstrap</li>
            <li>HTML</li>
            <li>CSS</li>
          </ul>
        </div>

        {/* Card 4 – Developer Tools */}
        <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col justify-center">
          <h3 className="text-xl font-bold text-gray-800 mb-2">Developer Tools</h3>
          <p className="text-gray-700 mb-2">
            I'm proficient with various technical tools and platforms.
          </p>
          <ul className="text-gray-600 list-disc pl-5">
            <li>Linux Command Line</li>
            <li>MacOS Terminal</li>
            <li>Android Studio</li>
            <li>Visual Studio</li>
            <li>PyCharm</li>
            <li>Github</li>
            <li>OpenCV</li>
            <li>pyTesseract</li>
            <li>SQL</li>
            <li>EasyOCR</li>
            <li>YoloV8</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
