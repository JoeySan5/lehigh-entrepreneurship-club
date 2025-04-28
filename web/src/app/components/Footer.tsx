"use client"; // used for newsletter part

import React from 'react';
import Image from 'next/image';

export default function Footer() {
  const socialLinks = {
    linkedin: "https://www.linkedin.com/in/lehigh-entrepreneurship-club-631458352",
    instagram: "https://www.instagram.com/lehighlec?igsh=bnk1dHhsMWtoNHhz",
    groupme: "https://groupme.com/join_group/96241654/MNNdbAj5"
  };

  return (
    <footer className="bg-[#1F274D] text-gray-300 py-12 px-2 sm:px-6 lg:px-8 font-[Poppins] min-h-screen flex flex-col">
      <div className="mx-auto w-full flex-grow flex flex-col items-center justify-between">
        {/* Sponsors Section */}
        <div className="w-full mb-12 overflow-hidden">
          <h3 className="text-2xl font-semibold text-white text-center mb-12">Our Sponsors</h3>
          <div className="relative w-full overflow-hidden">
            <div className="w-[200%] flex animate-scroll-sponsors">
              {/* First set of logos */}
              <div className="flex space-x-11  ">
                <div className="relative h-24 w-48 flex-shrink-0">
                  <Image
                    src="/images/LehighLogo.png"
                    alt="Lehigh University Logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="relative h-24 w-48 flex-shrink-0">
                  <Image
                    src="/images/nasdaq.png"
                    alt="Nasdaq Logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="relative h-24 w-48 flex-shrink-0">
                  <Image
                    src="/images/baker.jpg"
                    alt="Baker Institute Logo"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              {/* Duplicate set for seamless loop */}
              <div className="flex space-x-16 w-1/2">
                <div className="relative h-24 w-48 flex-shrink-0">
                  <Image
                    src="/images/LehighLogo.png"
                    alt="Lehigh University Logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="relative h-24 w-48 flex-shrink-0">
                  <Image
                    src="/images/nasdaq.png"
                    alt="Nasdaq Logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="relative h-24 w-48 flex-shrink-0">
                  <Image
                    src="/images/baker.jpg"
                    alt="Baker Institute Logo"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Top Row - Logo, Connect, Newsletter */}
        <div className="w-full flex justify-between items-start mb-16">
          {/* Connect With Us - Now on the left */}
          <div className="flex-1 flex flex-col items-center space-y-8">
            <h3 className="text-2xl font-semibold text-white">Connect With Us</h3>
            <div className="flex space-x-8">
              {/* LinkedIn */}
              <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#FA9B3B] transition duration-150 ease-in-out">
                <span className="sr-only">LinkedIn</span>
                <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              {/* Instagram */}
              <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#FA9B3B] transition duration-150 ease-in-out">
                <span className="sr-only">Instagram</span>
                <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              {/* GroupMe */}
              <a href={socialLinks.groupme} target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#FA9B3B] transition duration-150 ease-in-out">
                <span className="sr-only">GroupMe</span>
                <div className="relative w-16 h-16">
                  <Image
                    src="/images/groupme.png"
                    alt="GroupMe"
                    fill
                    className="object-contain"
                  />
                </div>
              </a>
            </div>
          </div>

          {/* Logo - Now in the middle */}
          <div className="flex-1 flex justify-center">
            <div className="relative h-56 w-96">
              <Image
                src="/images/LEC.png"
                alt="Lehigh Entrepreneurship Club Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Newsletter Section - Stays on the right */}
          <div className="flex-1 flex flex-col items-center space-y-6">
            <h3 className="text-2xl font-semibold text-white">Stay Updated</h3>
            <div className="w-full max-w-md">
              <p className="text-gray-400 text-center mb-4">Join our newsletter for the latest events and news.</p>
              <form className="flex flex-col space-y-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-3 rounded-lg bg-gray-200 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#FA9B3B]"
                  required
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-[#FA9B3B] text-black rounded-lg hover:bg-[#f7a800] transition duration-300 font-semibold"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        
        <style jsx global>{`
          @keyframes scroll-sponsors {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-25%);
            }
          }
          
          .animate-scroll-sponsors {
            animation: scroll-sponsors 10s linear infinite;
            display: flex;
            width: 150%;
          }
          
          .animate-scroll-sponsors:hover {
            animation-play-state: paused;
          }
        `}</style>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 pt-8 text-center text-gray-500 text-sm w-full">
          © 2025 Lehigh Entrepreneurship Club • Made with ☕️ & 🤎 in Lehigh
        </div>
      </div>
    </footer>
  );
}
