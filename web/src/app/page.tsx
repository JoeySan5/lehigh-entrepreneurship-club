import HomePageText from "./components/homepage_text";
import Passion from "./components/passion"; 
import MeetTheTeam from "./components/meettheteam";
import WhatWeDo from "./components/WhatWeDo";
import WhyJoinUs from "./components/WhyJoinUs";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className=" bg-[#1F274D]  text-center">
      <div className="relative">
        <div className="w-full absolute">
        </div>
        <div className=" relative">
          <HomePageText />
        </div>
      </div>
      
      <WhatWeDo />
      <MeetTheTeam />
      <div className="h-36  "></div>
      <Passion />
      <WhyJoinUs />
      <Footer />
    </div>
  );
}
