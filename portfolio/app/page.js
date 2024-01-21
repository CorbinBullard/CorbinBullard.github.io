import Image from "next/image";
import Profile from "./components/Profile";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function page() {
  return (
    <div className="flex flex-col gap-5 justify-center items-center w-[60%] m-auto min-w-[800px]">
      <Profile />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}
