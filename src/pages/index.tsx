import type { NextPage } from "next";
import React, { ReactNode, useState } from "react";
import Link from "next/link"
import {
  Header,
  Hero,
  Bio,
  Experience,
  Projects,
} from "../components/";

// Projects Import
import {
  FaBootstrap,
  FaPython,
  FaReact,
  FaCss3Alt,
  FaNodeJs,
  FaArrowCircleUp,
} from "react-icons/fa";

import {
  SiJavascript,
  SiTailwindcss,
  SiMongodb,
  SiRedux,
} from "react-icons/si";

import { motion } from "framer-motion";


const LoadingScreen = () => {
  return (<div className="z-[100] absolute w-[100%] h-[100%] bg-white grid place-items-center content-center">
    <motion.div className="text-black shadow-black shadow-lg drop-shadow-xl text-2xl rounded-3xl w-56 h-56 bg-red-500 grid place-content-center"
      whileHover={{ scale: 0.8 }}
      whileTap={{ scale: 0.7 }}
      animate={{
        scale: [1, 1.5, 1.5, 1, 0.5],
        rotate: [0, 0, 270, 270, 0], borderRadius: ["0%", "20%", "50%", "50%", "100%"],
      }}
      transition={{
        duration: 1.5,
        type: "spring",
        stiffness: 300,
        damping: 20
      }}> START </motion.div>
  </div>)
}
const Home: NextPage = () => {
  // const { scrollYProgress } = useScroll();
  const [loading, setLoading] = useState(true)

  return (
    <div className="grid h-screen overflow-scroll snap-y snap-mandatory scroll-smooth">
      {loading ?
        <button onClick={() => setLoading(false)}>
          <LoadingScreen />
        </button > : <motion.div className="bg-white w-[100%] h-[100%] z-[99]"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0, position: "absolute", transitionEnd: { display: "none" } }}
          transition={{ duration: 1 }}
        ></motion.div>
      }
      {/* Header */}
      <Header />
      {/* Hero */}

      <section id="hero" className="snap-start">
        <Hero />
      </section>
      {/* Bio */}

      <section id="about" className="snap-center">
        <Bio />
      </section>

      {/* Experience */}
      <section id="experience">
        <Experience />
      </section>


      {/*Projects*/}
      <section id="projects">
        <div className="relative grid m-10 mt-48 text-center place-items-center gap-y-20">
          <h1 className="grid h-screen mx-auto text-3xl font-bold underline place-content-center snap-start md:decoration-8 decoration-4 decoration-red-400 ">
            Projects
          </h1>
          {projects.map((p) => {
            return (
              <li
                key={p.name}
                className="grid h-screen place-content-center snap-start"
              >
                <Projects
                  link={p.link}
                  imgposition={p.imgposition}
                  name={p.name}
                  icons={p.icons}
                  description={p.description}
                  image={p.image}
                />
              </li>
            );
          })}
        </div>
      </section>

      {/* Thank You Page */}
      <section id="thank-you">
        <div className="h-screen snap-start grid grid-flow-row-dense place-content-center ">

          <h2 className="text-[4.052rem] font-bold">
            Thank You for Stopping By!
          </h2>

          <p className="text-3xl">
            Feel free to reach out to me on <a href="https://www.linkedin.com/in/laxitshahi/" className="underline decoration-4 decoration-red-600 cursor-pointer">Linkedin</a> or <a onClick={() => window.open('mailto:shahilax@my.yorku.ca')} className="underline decoration-4 decoration-red-600 cursor-pointer">eMail</a>, I would love to have a chat.
          </p>
        </div>
      </section>


      {/*Background*/}
      <Link href="#hero">
        <div className="absolute right-0 bottom-0 text-3xl md:text-4xl xl:text-5xl m-3 hover:motion-reduce:animate-bounce transition delay-200"> <FaArrowCircleUp /></div>
      </Link>
      <div className="absolute w-screen top-[40%] bg-red-300 left-0 right-0 h-[200px] -z-20 skew-y-12 backdrop-blur-xl"></div>{" "}
    </div >
  );
};

export default Home;
type Props = {
  imgposition: string;
  icons: ReactNode[];
  description: string;
  image: string;
  name: string;
  link: string;
  initialy: number;
  finaly: number;
};


const projects: Props[] = [
  {
    name: "Soci-al",
    icons: [
      <FaReact key="react" />,
      <FaNodeJs key="nodejs" />,
      <SiMongodb key="mongodb" />,
      <SiRedux key="redux" />,
      <SiTailwindcss key="tailwindcss" />,
    ],
    description:
      "There is an unessecary amount of time spent on searching for goals, rather than carrying them out. The idea behind Soci-al (Social + Goal) is to speed up the process of finding goals, so that you can focus on completing them.",
    image: "/images/social-goals.gif",
    imgposition: "right",
    link: "https://soci-al.herokuapp.com/login",
    initialy: 100,
    finaly: 0,
  },
  {
    name: "Patch",
    icons: [<FaBootstrap key="bootstrap" />, <FaPython key="python" />, <FaCss3Alt key="css" />, <SiJavascript key="javascript" />],
    description:
      "There is a lack of services that provide a quick and easy method of price matching, allowing individuals to find the best price on aparticular product among multiple retailors. The goal was to create an application that would allow users to do just that.",
    image: "/images/patch.gif",
    link: "https://github.com/laxitshahi/patch",
    imgposition: "left",
    initialy: 100,
    finaly: 0,
  },

];


