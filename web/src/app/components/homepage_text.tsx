export default function HomePageText() {
  return (
    <div id="parentBlueContainer" className="w-full text-left">
      <div id="childContainer" className="ml-14 w-[50vw]"> {/* Set width to 50% of the screen */}
        <h3
          id="slogan"
          className="text-white pt-8 leading-tight font-[Poppins] text-[60px] md:text-[75px] font-bold"
        >
          Inspiring Innovators
        </h3>
        <p
          id="blurb"
          className="text-left  w-full mt-9 text-white font-[Poppins] text-[15px] md:text-[20px]"
        >
          Welcome to the Lehigh Entrepreneurship Club, the premier student-led organization dedicated to fostering entrepreneurial spirit and innovation on campus. We empower students to turn their ideas into reality through resources, events, and a strong network of aspiring founders and industry leaders.
        </p>
        <button
          id="joinNowButton"
          className="bg-[#FA9B3B] mt-20 w-44 text-black font-[Poppins] text-2xl py-3 px-6 rounded-2xl border-2 border-black shadow-md hover:bg-[#f7a800] focus:outline-none focus:ring-2 focus:ring-[#FBB040] transition duration-300"
        >
          Join Now
        </button>
      </div>
    </div>
  );
}
