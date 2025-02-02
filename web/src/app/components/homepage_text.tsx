export default function HomePageText() {
    return (
    <div id="parentBlueContainer" className="bg-[#1F274D] min-h-screen text-left">

      <div id="childContainer" className="w-[80vw] bg-[#1F274D]   ml-14">

        <h3 id="slogan" className="text-white pt-8 leading-tight font-[Poppins] text-[86px] font-bold">
            Inspiring Innovators
          </h3>
          <p id="blurb" className="text-left w-[60vw] mt-9 text-white font-[Poppins] text-[18px]">
            Welcome to the Lehigh Entrepreneurship Club, the premier student-led organization dedicated to fostering entrepreneurial spirit and innovation on campus. We empower students to turn their ideas into reality through resources, events, and a strong network of aspiring founders and industry leaders.
          </p>
        <button id="joinNowButton" className=" bg-[#FBB040] mt-20 w-44  text-black font-[Poppins] text-2xl py-3 px-6 rounded-2xl border-2 border-black shadow-md hover:bg-[#f7a800] focus:outline-none focus:ring-2 focus:ring-[#FBB040] transition duration-300">
            Join Now
        </button>

      </div>

    </div>
    );
  }
  