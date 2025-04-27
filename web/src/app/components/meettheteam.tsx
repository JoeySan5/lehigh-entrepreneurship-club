"use client";

import React from 'react';
import Image from 'next/image';

export default function MeetTheTeam() {
  const teamMembers = [
    {
      name: "Joseph Sanchez",
      position: "President",
      image: "/images/joseph.jpeg",
      linkedin: "https://www.linkedin.com/in/josephsanchez5225?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
    },
    {
      name: "Simran Kaila",
      position: "Vice President",
      image: "/images/simran.png",
      linkedin: "https://www.linkedin.com/in/simran-kaila-175248212?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
    },
    {
      name: "Kieran O'Connor",
      position: "Treasurer",
      image: "/images/keiran.jpg",
      linkedin: "https://www.linkedin.com/in/kieran-o-connor-lu?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
    },
    {
      name: "Atang Bakwena",
      position: "VP of External Communications",
      image: "/images/atang.jpg",
      linkedin: "https://www.linkedin.com/in/atangbakwena?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
    },
    {
      name: "Eric Schneps",
      position: "Marketing Associate",
      image: "/images/eric.jpg",
      linkedin: "https://www.linkedin.com/in/eric-schneps?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
    },
    {
      name: "Aaron Lee",
      position: "VP of Marketing ",
      image: "/images/aaron.jpg",
      linkedin: "https://www.linkedin.com/in/aaron-lee-4688b9300?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
    },
    {
      name: "Ethan Honsel",
      position: "Associate of External Communications",
      image: "/images/ethan.jpg",
      linkedin: "https://www.linkedin.com/in/ehonsel225?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
    }
  ];

  return (
    <div className="relative bg-white">
      {/* Blue Header Section */}
      <div className="bg-[#1F274D] text-white pb-32">
        <div className="text-center pt-6 pb-8">
          <h1 className="text-4xl font-[Poppins] font-bold">Meet our 24–25 Leadership</h1>
          <p className="text-xl mt-8 font-[Poppins]">
            Feel free to reach out to us on LinkedIn or via email for any questions or opportunities.
          </p>
        </div>
      </div>

      {/* Grid of Images */}
      <div className="relative -mt-24 px-12 mx-auto max-w-screen-lg pb-16">
        <div className="grid grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="relative w-full h-48 group">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover rounded-md transition-all duration-300 group-hover:blur-sm"
                />
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <svg className="w-12 h-12 text-white hover:text-[#FA9B3B]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{member.name}</h3>
              <p className="text-gray-600">{member.position}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
  