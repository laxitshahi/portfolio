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
        <div className="border-b-8 border-black rounded-full ">
          <Image
            loading="eager"
            className="w-full rounded-full "
            width={300}
            height={300}
            src="/images/profile.jpeg"
            alt="Picture of a young adult male"
          />
        </div>
        <h2 className="flex justify-center text-2xl sm:text-5xl xl:text-[4.052rem]  ">
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
        {/* <h2 className="flex justify-center text-3xl md:text-5xl">
          I am a Computer Engineering Student with a passion for Software
          Development!
        </h2> */}

        <h3 className="flex text-xl tracking-widest text-gray-500 ">
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
