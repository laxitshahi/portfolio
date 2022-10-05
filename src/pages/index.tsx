import type { NextPage } from "next";
import Image from "next/image";
import { Header, Hero, Bio, Experience } from "../components/";
import { useScroll, motion } from "framer-motion";

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
      <section className="">
        <div className="text-center mt-96">
          <h1 className="relative grid mx-auto mb-20 text-3xl font-bold underline md:decoration-8 decoration-4 decoration-red-400 ">
            Projects
          </h1>

          {/* Project 1 */}
          <div className="grid h-screen grid-cols-2 place-items-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <div className="absolute grid flex-col w-[55%]  row-span-3 m-10 justify-self-end place-content-center gap-y-6">
              <h2 className="text-2xl font-bold">Patch</h2>
              <p className="p-8 bg-gray-100 rounded-xl">
                There is a lack of services that provide a quick and easy method
                of price matching, allowing individuals to find the best price
                on a particular product among multiple retailors. The goal was
                to create an application that would allow users to do just that.
              </p>
              <ul className="flex justify-center space-x-10 text-2xl">
                <li>
                  <FaBootstrap />
                </li>
                <li>
                  <FaPython />
                </li>
                <li>
                  <FaCss3Alt />
                </li>
                <li>
                  <SiJavascript />
                </li>
              </ul>
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="w-11/12 border-2 border-black rounded-3xl"
              width="300"
              height="300"
              src="/images/patch.gif"
              alt=""
            />
          </div>

          {/* Project 2 */}
          <div className="grid h-screen grid-cols-2 place-items-center">
            <div className="absolute grid flex-col w-[55%] row-span-3 m-10 justify-self-start place-content-center gap-y-6">
              <h2 className="text-2xl font-bold">Patch</h2>
              <p className="p-8 bg-gray-100 rounded-xl">
                There is a lack of services that provide a quick and easy method
                of price matching, allowing individuals to find the best price
                on a particular product among multiple retailors. The goal was
                to create an application that would allow users to do just that.
              </p>
              <ul className="flex justify-center space-x-10 text-2xl">
                <li>
                  <FaBootstrap />
                </li>
                <li>
                  <FaPython />
                </li>
                <li>
                  <FaCss3Alt />
                </li>
                <li>
                  <SiJavascript />
                </li>
              </ul>
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="w-11/12 col-start-2 border-2 border-black rounded-3xl"
              width="300"
              height="300"
              src="/images/patch.gif"
              alt=""
            />
          </div>
        </div>
      </section>
      <div className="absolute w-screen top-[15%] bg-red-300 left-0 right-0 h-[500px] -z-20 -skew-y-12 backdrop-blur-xl"></div>
    </div>
  );
};

export default Home;
