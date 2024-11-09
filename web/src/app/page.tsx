import Image from "next/image";
import Test from "./components/test";

export default function Home() {
  return (
    <div className="w-full bg-slate-500 text-center">Hey Guys hope you can see my text!
    <p>We will start coding from here, everyone will be in charge of 1 componenet</p>

    <p>Our test compoenent is below</p>
    <Test></Test>
    </div>
  );
}
