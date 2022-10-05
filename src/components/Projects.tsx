import React from "react";
import {
  FaBootstrap,
  FaPython,
  FaReact,
  FaCss3Alt,
  FaGithub,
} from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
type Props = {};

const Projects = (props: Props) => {
  return (
    <div>
      <section className="">
        <div className="grid h-screen place-content-center gap-y-6 ">
          <h1 className="flex items-center justify-center text-sm font-bold underline md:text-3xl md:decoration-8 decoration-4 decoration-red-400">
            Projects
          </h1>
          <div>
            <ul>
              <li className="flex space-x-4 justify-evenly">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className="relative w-full border-2 border-black mr-96 rounded-3xl "
                  width={300}
                  height={300}
                  src="/images/patch.gif"
                  alt="GIF of Web Application, Patch."
                />
                <div className="grid place-items-center ">
                  <div className="absolute grid p-4 text-left bg-gray-100 rounded-3xl place-items-center">
                    <h1 className="text-xl font">Patch</h1>
                    <ul className="flex text-xl justify-evenly">
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
                    <p className="text-center">
                      There is a lack of services that provide a quick and easy
                      method of price matching, allowing individuals to find the
                      best price on a particular product among multiple
                      retailors. The goal was to create an application that
                      would allow users to do just that.
                    </p>
                  </div>

                  <div className="flex ">
                    <FaGithub />
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
