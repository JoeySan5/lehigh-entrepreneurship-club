import HomePageText from "./components/homepage_text";
import Passion from "./components/passion"; 
import MeetTheTeam from "./components/meettheteam";

export default function Home() {
  return (
    <div className="w-full  text-center">
      <HomePageText />
      <MeetTheTeam />
      <div className="h-36 bg-[#1F274D] w-full"></div>
      <Passion /> 
    </div>
  );
}
