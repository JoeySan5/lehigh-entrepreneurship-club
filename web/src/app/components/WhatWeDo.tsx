export default function WhatWeDo() {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#CED5E0] to-[#FFFFFF] py-16">
        <div className="flex flex-col md:flex-row items-center w-full max-w-screen-xl p-8 rounded-xl">
          {/* Left Box with white background for image */}
          <div className="w-full md:w-1/2  bg-white rounded-xl mb-8 md:mb-0">
            <video controls autoPlay playsInline>
            <source src="/LEC.mp4" type="video/mp4" />
            Your browser does not support the video tag
            </video>
          </div>
  
          {/* Right Text */}
          <div className="w-full md:w-1/2 md:ml-8 text-center md:text-left">
            <h2 className="text-4xl font-bold text-[#FA9B3B] font-[Poppins] mb-10">What We Do</h2>
            <p className="text-lg text-black-700 font-[Poppins]">
              The Lehigh Entrepreneurship Club is a thriving community of passionate students, alumni, and aspiring entrepreneurs. Whether you are an aspiring founder, an innovator, or simply excited about the startup world, we offer the resources, support, and network to help turn your ideas into impactful ventures.
            </p>
          </div>
        </div>
      </div>
    );
  }
  