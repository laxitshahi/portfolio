import React from "react";
import Link from "next/link";
import Image from "next/image";

//Typewriter
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      {/* Hero */}
      <div className="grid space-y-4 text-center place-items-center">

        <h2 className="flex justify-center text-2xl md:text-5xl xl:text-[5.052rem]">
          <span className="font-bold text-blue-900">
            <Typewriter
              words={["Hi, ", "Namaste, ", "Bonjour, "]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            // onLoopDone={handleDone}
            // onType={handleType}
            />
          </span>
          my name is Laxit!
        </h2>

        <p className=":flex sm:text-base justify-center hidden md:text-xl xl:text-3xl items-center">
          I am a Computer Engineering Student with a	&nbsp; <span className="text-white xl:text-4xl">passion</span> 	&nbsp; for Software
          Development.
        </p>

        <h3 className="flex text-sm md:text-lg lg:text-2xl tracking-widest text-gray-500 ">
          <div className="flex space-x-4">
            <Link href="#about">
              <button>About</button>
            </Link>

            <Link href="#experience">
              <button>Experience</button>
            </Link>

            <Link href="#projects">
              <button>Projects</button>
            </Link>

            {/* <Link href="#skills">
              <button>
                Skills
              </button>
            </Link> */}
          </div>
        </h3>
      </div>
    </div>
  );
};

export default Hero;
