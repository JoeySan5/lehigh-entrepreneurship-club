import HomePageText from "./components/homepage_text";
import Passion from "./components/passion"; 

export default function Home() {
  return (
    <div className="w-full bg-slate-500 text-center">
      <HomePageText />
      <Passion /> 
    </div>
  );
}
