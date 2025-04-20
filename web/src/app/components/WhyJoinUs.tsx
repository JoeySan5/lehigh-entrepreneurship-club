"use client";

import React from 'react';
import Image from 'next/image';

export default function WhyJoinUs() {
  const projects = [
    {
      id: 1,
      image: "/images/project1.jpg",
      title: "Project 1"
    },
    {
      id: 2,
      image: "/images/project2.jpg",
      title: "Project 2"
    },
    {
      id: 3,
      image: "/images/project3.jpg",
      title: "Project 3"
    },
    {
      id: 4,
      image: "/images/project4.jpg",
      title: "Project 4"
    }
  ];

  return (
    <div className="bg-[#1F274D] py-16">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-white mb-6">
          Why should <span className="text-[#FA9B3B]">YOU</span> join?
        </h1>
        <p className="text-xl text-white">
          Let's turn the spotlight where it should be – student entrepreneurs and their projects.
        </p>
      </div>

      {/* Projects Scroll Section */}
      <div className="relative overflow-hidden">
        <div className="flex space-x-8 animate-scroll py-8">
          {/* First set of projects */}
          {projects.map((project) => (
            <div
              key={project.id}
              className="relative w-[400px] h-[300px] flex-shrink-0 bg-white rounded-xl overflow-hidden"
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {projects.map((project) => (
            <div
              key={`${project.id}-duplicate`}
              className="relative w-[400px] h-[300px] flex-shrink-0 bg-white rounded-xl overflow-hidden"
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
} 