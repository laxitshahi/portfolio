import React from "react";
import { FaBootstrap, FaCss3Alt, FaPython } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";

type Props = {};

const ImgLeft = (props: Props) => {
  return (
    <div>
      <div className="relative grid grid-cols-2 ">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <div className="absolute grid flex-col w-[55%]  row-span-3 mt-10 mx-12 opacity-70 hover:opacity-100 justify-self-end place-content-center gap-y-6 col-span-2">
          <h2 className="text-2xl font-bold">Patch</h2>
          <p className="p-8 bg-gray-100 rounded-xl">
            There is a lack of services that provide a quick and easy method of
            price matching, allowing individuals to find the best price on a
            particular product among multiple retailors. The goal was to create
            an application that would allow users to do just that.
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
    </div>
  );
};

export default ImgLeft;
