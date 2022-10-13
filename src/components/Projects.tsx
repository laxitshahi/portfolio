import React, { ReactNode } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

type Props = {
  imgposition: string;
  icons: ReactNode[];
  description: string;
  image: string;
  name: string;
};

const Projects = ({ imgposition, icons, description, image, name }: Props) => {
  // Render In Center
  function ImgCenter() {
    return (
      <div className="lg:hidden relative">
        {/* Start of Image Component */}
        <div className="absolute z-10 top-0 left-0 bottom-0 right-0 p-4 grid place-content-center text-xs sm:text-base gap-y-4 items-center text-center duration-300 bg-gray-50 opacity-0 hover:opacity-100 bg-opacity-90 rounded-xl ">
          <a href="https://github.com/laxitshahi/patch" target="_blank" rel="noopener noreferrer" className=" text-2xl flex font-bold justify-center space-x-2 items-center">
            <p>{name}</p>
            <span className="text-sm">
              <FaExternalLinkAlt />
            </span>
          </a>

          <p className=" flex rounded-xl">
            {description}

          </p>
          <ul className="justify-center space-x-10 text-2xl hidden sm:flex">
            {icons}
          </ul>
        </div>
        {/* End */}

        <div className="flex flex-wrap content-center ">
          <img src={image} className="mx-auto rounded-2xl w-auto" />
        </div>
      </div >
    )
  }
  {/*Position Image Left*/ }
  if (imgposition == "left") {
    return (
      <div>

        <div className="lg:grid grid-cols-2 hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="w-11/12 justify-self-end grid rounded-3xl mx-6"
            width="300"
            height="300"
            src={image}
            alt=""
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <div className=" flex-col justify-center flex">

            <a href="https://github.com/laxitshahi/patch" target="_blank" rel="noopener noreferrer" className=" text-2xl flex font-bold justify-center space-x-2 items-center">
              <p>{name}</p>
              <FaExternalLinkAlt className="text-sm" /> </a>

            <p className="p-6 rounded-xl">
              {description}
            </p>
            <ul className="flex justify-center space-x-10 text-2xl">
              {icons}
            </ul>
          </div>
        </div>

        {/* Center the Image */}
        <ImgCenter />
      </div>
    )
  }
  else if (imgposition == "right") {
    return (
      <div>
        <div className="lg:grid grid-cols-2 hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <div className="flex-col justify-center flex">

            <a href="https://github.com/laxitshahi/patch" target="_blank" rel="noopener noreferrer" className=" text-2xl flex font-bold justify-center space-x-2 items-center">
              <p>{name}</p>
              <FaExternalLinkAlt className="text-sm" /> </a>

            <p className="p-6">
              {description}
            </p>
            <ul className="flex justify-center space-x-10 text-2xl">
              {icons}
            </ul>
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="w-11/12 justify-self-end grid border-2 border-black rounded-3xl mx-6"
            width="300"
            height="300"
            src={image}
            alt=""
          />
        </div>

        {/* Center the Image */}
        <ImgCenter />
      </div>

    )
  }
}

export default Projects;


