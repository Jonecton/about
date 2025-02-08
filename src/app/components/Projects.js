"use client";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

// Sample project data with multiple images
const projects = [
  {
    id: 1,
    title: "SecureLens",
    images: [
      "/securelenslogin.png",
      "/securelenslogin.png",
      "/securelenslogin.png",
    ],
    description:
      "SecureLens is an innovative security solution designed specifically for elementary schools. Developed in Python with the Flask framework and powered by OpenCV and EasyOCR, it automates student pick-up by using automatic license plate recognition (ALPR) to compare incoming vehicles against a database of registered students. When a match is found, SecureLens displays the student's name on a classroom screen, streamlining the release process. The system also integrates a unique ID card scanning feature for teacher verification at the pick-up area and includes a blacklist function to flag restricted license plates for enhanced campus safety.",
  },
  {
    id: 2,
    title: "Project Two",
    images: ["/securelenslogin.png", "/securelenslogin.png", "/securelenslogin.png"],
    description:
      "This is a description of Project Two. It is built with modern technologies and has a sleek interface.",
  },
  {
    id: 3,
    title: "Homebrew",
    images: [
      "homebrewsplash.png",
      "homebrewsplash.png",
      "homebrewsplash.png",
    ],
    description:
      "Homebrew is a Flutter-based coffee brewing assistant developed for a Software Engineering 2 assignment. The app lets users select a coffee recipe, input their desired volume, and receive timed, step-by-step instructions tailored to their coffee maker. The project followed software engineering best practices, including pull requests, testing, CI/CD pipelines, and was built using Flutter and Dart.",
  },
];

export default function ProjectsSection() {
    const [expandedProject, setExpandedProject] = useState(null);

  return (
    <section id="projects" className="w-full px-4 py-12">
      <h1 className="text-4xl font-bold text-white mb-8 text-center">Projects</h1>

      {/* Mobile View: Scrollable project images */}
      <div className="block sm:hidden">
        <div className="overflow-x-scroll flex space-x-4 px-4">
          {projects.map((project) => (
            <div key={project.id} className="relative">
              <img
                src={project.images[0]} // Show first image as thumbnail
                alt={project.title}
                className="object-cover rounded-lg shadow-lg cursor-pointer"
                onClick={() => setExpandedProject(project.id)}
              />
            </div>
          ))}
        </div>

        {/* Expanded Project Overlay with Swiper */}
        {expandedProject && (
  <div
    className="fixed inset-0 w-full h-full z-50 p-4 flex justify-center bg-black bg-opacity-50"
    onClick={() => setExpandedProject(null)}
  >
    <div
      className="max-w-xl w-full bg-white rounded-lg shadow-xl p-6 relative flex flex-col overflow-hidden"
      style={{ maxHeight: "90vh" }}
      onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the content
    >
      {/* Scrollable Content */}
      <div className="overflow-y-auto flex-1 pr-2">
        {projects
          .filter((p) => p.id === expandedProject)
          .map((project) => (
            <div key={project.id}>
              {/* Swiper Carousel */}
              <Swiper
                pagination={{ clickable: true }}
                modules={[Pagination]}
                className="w-full h-full rounded-lg mb-4"
              >   
                {project.images.map((img, index) => (
                  <SwiperSlide key={index}>
                    <img
                      src={img}
                      alt={`Slide ${index + 1}`}
                      className="w-full max-h-[300px] object-contain rounded-lg"
                    />
                    </SwiperSlide>
                ))}
                </Swiper>


              <h2 className="text-2xl font-bold mb-2 text-gray-800">{project.title}</h2>
              <p className="text-gray-700">{project.description}</p>
            </div>
          ))}
      </div>

      {/* Fixed Close Button */}
      <button
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 w-full"
        onClick={() => setExpandedProject(null)}
      >
        Close
      </button>
    </div>
  </div>
)}
      </div>

      {/* Desktop View: Grid layout */}
      <div className="hidden sm:grid grid-cols-3 gap-8">
        {projects.map((project) => (
          <div key={project.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src={project.images[0]} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h2>
              <p className="text-gray-700">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
