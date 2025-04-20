import HomePageText from "./components/homepage_text";
import Passion from "./components/passion"; 
import MeetTheTeam from "./components/meettheteam";
import WhatWeDo from "./components/WhatWeDo";
import WhyJoinUs from "./components/WhyJoinUs";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className=" bg-[#1F274D]  text-center">
      <HomePageText />
      <WhatWeDo />
      <MeetTheTeam />
      <div className="h-36  "></div>
      <Passion />
      <WhyJoinUs />
      <Footer />
    </div>
  );
}
