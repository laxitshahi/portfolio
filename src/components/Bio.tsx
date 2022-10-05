// import Image from "next/image";
import FadeInWhenVisible from "./FadeInWhenVisible";

const Bio = () => {
  return (
    <div className="grid items-center justify-evenly">
      <h1 className="flex items-center justify-center text-3xl font-bold underline md:decoration-8 decoration-4 decoration-red-400">
        About Me
      </h1>
      {/* Content */}
      <div className="grid p-6 m-2 md:p-20 md:m-10 shadow-blue-200 rounded-3xl">
        {/* <div className="flex flex-col items-center justify-center space-y-4 md:m-20 md:space-x-10 md:flex-row"> */}
        <div className="grid grid-cols-1 md:grid-flow-row md:grid-cols-2 place-items-center md:gap-x-4 gap-y-4">
          <FadeInWhenVisible initialx={-30}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="w-full p-1 rounded-full shadow-xl md:rounded-2xl"
              width="300"
              height="300"
              src="/images/profile.jpeg"
              alt="Picture of a young adult male"
            />
          </FadeInWhenVisible>

          <FadeInWhenVisible initialx={30}>
            <div className="grid max-w-lg ">
              <h1 className="flex items-center justify-center text-sm font-bold text-red-700 md:text-3xl">
                Hello!
              </h1>
              <p className="text-sm md:text-base">{data.bio}</p>
            </div>
          </FadeInWhenVisible>
        </div>
      </div>
    </div>
  );
};

export default Bio;

const data = {
  bio: "I am a student at York University studying Computer Engineering. Currently, my focus is on Software Development and understanding the intricacies of creating impactful and scalable software - turning passion into impact. Technology has always been my passion. From booting up my first game on Windows XP to building my first computer and website, it is a passion I intend to pursue with full force. I am a lifelong learner, always seeking opportunities to grow, so feel free to reach out to me. I would be happy to have a chat!",
};
