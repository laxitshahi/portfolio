import type { NextPage } from "next";
import React, { ReactNode } from "react";
import Link from "next/link"
import {
  Header,
  Hero,
  Bio,
  Experience,
  Projects,
  FadeInWhenVisible,
} from "../components/";

// Projects Import
import {
  FaBootstrap,
  FaPython,
  FaReact,
  FaCss3Alt,
  FaGithub,
  FaNodeJs,
  FaArrowCircleUp,
} from "react-icons/fa";

import {
  SiJavascript,
  SiTailwindcss,
  SiMongodb,
  SiRedux,
} from "react-icons/si";

const Home: NextPage = () => {
  // const { scrollYProgress } = useScroll();
  return (
    <div className="grid h-screen overflow-scroll snap-y snap-mandatory scroll-smooth">
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
          <h1 className="grid h-screen mx-auto text-3xl font-bold underline place-content-center snap-center md:decoration-8 decoration-4 decoration-red-400 ">
            Projects
          </h1>
          {projects.map((p) => {
            return (
              <li
                key={p.name}
                className="grid h-screen place-content-center snap-center"
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


      {/*Background*/}
      <Link href="#hero">
        <div className="absolute right-0 bottom-0 text-3xl md:text-4xl xl:text-5xl rounded-full m-3 hover:motion-reduce:animate-bounce transition delay-200"> <FaArrowCircleUp /></div>
      </Link>
      <div className="absolute w-screen top-[30%] bg-red-300 left-0 right-0 h-[300px] -z-20 skew-y-12 backdrop-blur-xl"></div>{" "}
    </div>
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


