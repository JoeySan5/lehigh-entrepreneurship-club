"use client"
import { useRouter } from "next/navigation";
import Image from "next/image";
export default function HomePageText() {
  const router = useRouter()
  return (
    <div id="parentBlueContainer" className=" text-left h-lvh">
      <div id="childContainer" className="ml-14 w-[55vw]"> {/* Set width to 50% of the screen */}
        <div className="flex flex-row items-center space-x-6 mb-8 ">
          {/* Logo */}
          <div className="flex-shrink-0 -ml-8">
            <Image
              src="/logo.png"
              width={200}
              height={200}
              alt="Lehigh Entrepreneurship Club Logo"
              className="object-contain"
            />
          </div>
          {/* Inspiring Innovators text */}
          <h3
            id="slogan"
            className="text-white font-[Poppins] text-[60px] md:text-[75px] lg:text-[90px] font-bold leading-tight"
          >
            Inspiring Innovators
          </h3>
        </div>
        <p
          id="blurb"
          className="text-left  w-full mt-9 text-white font-[Poppins] text-[15px] md:text-[20px] lg:text-[25px] xl:[28px]"
        >
          Welcome to the Lehigh Entrepreneurship Club, the premier student-led organization dedicated to fostering entrepreneurial spirit and innovation on campus. We empower students to turn their ideas into reality through resources, events, and a strong network of aspiring founders and industry leaders.
        </p>
        <button
          onClick={() => router.push('/join_now')}
          id="joinNowButton"
          className="bg-[#FA9B3B] mt-20 w-44 md:w-48 lg:w-52 xl:w-56 text-black font-[Poppins] text-xl md:text-2xl lg:text-3xl xl:text-4xl py-3 px-6 rounded-2xl border-2 border-black shadow-md hover:bg-[#ffc13a] focus:outline-none focus:ring-2 focus:ring-[#FBB040] transition duration-150"

        >
          Join Now
        </button>
      </div>
    </div>
  );
}
