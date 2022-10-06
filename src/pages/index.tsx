import type { NextPage } from "next";
import Image from "next/image";
import { Header, Hero, Bio, Experience } from "../components/";
import { useScroll, motion } from "framer-motion";

//Project components
import { ImgLeft, ImgRight, ImgCenter } from "../components";

// Projects Import
import {
  FaBootstrap,
  FaPython,
  FaReact,
  FaCss3Alt,
  FaGithub,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTailwindcss,
  SiMongodb,
  SiRedux,
} from "react-icons/si";
const Home: NextPage = () => {
  const { scrollYProgress } = useScroll();
  return (
    // <div className="grid h-screen overflow-scroll snap-y snap-mandatory scroll-smooth">
    <div className="grid">
      <motion.div
        className="sticky top-0 left-0 right-0 flex h-2 bg-red-400 origin-[0%] opacity-100 z-100"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Header */}
      <Header />
      {/* Hero */}
      <section className="snap-start">
        <Hero />
      </section>

      {/* Bio */}
      <section className="snap-start">
        <Bio />
      </section>

      {/* Experience */}
      <section className="">
        <Experience />
      </section>

      {/* Projects */}
      <section>
        <div className="relative grid m-10 mt-48 text-center place-items-center gap-y-20">
          {/* Split */}

          <h1 className="mx-auto text-3xl font-bold underline md:decoration-8 decoration-4 decoration-red-400">
            Projects
          </h1>

          {/* Project 1 */}
          <ImgLeft />
          {/* Project 2 */}
          <ImgRight />
        </div>
      </section>
      <div className="absolute w-screen top-[15%] bg-red-300 left-0 right-0 h-[500px] -z-20 -skew-y-12 backdrop-blur-xl"></div>
    </div>
  );
};

export default Home;
