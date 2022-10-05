import Image from "next/image";
import FadeInWhenVisible from "./FadeInWhenVisible";

const Experience = () => {
  return (
    <div className="relative grid items-center h-screen justify-evenly 2xl:place-content-center 2xl:gap-y-10">
      <div className="absolute top-24">
        <h1 className="flex items-center justify-center m-20 text-3xl font-bold underline md:decoration-8 decoration-4 decoration-red-400">
          Experience
        </h1>
        <ul className="grid m-auto mx-1 sm:grid-cols-2 lg:mx-40 sm:gap-x-10 gap-x-6 place-items-center place-content-center">
          {jobData.map((job) => (
            <FadeInWhenVisible
              initialy={job.initialy}
              finaly={job.finaly}
              key={job.company as string}
            >
              <li className="grid justify-center transition duration-300 ease-in-out delay-150 border-4 border-black shadow-2xl 2xl:space-x-8 place-items-center md:p-16 xs:p-4 rounded-2xl md:h-auto md:opacity-60 hover:opacity-100">
                <div className="max-w-lg overflow-hidden rounded-full sm:inline-flex place-items-center ">
                  <Image
                    height={job.size.height / 6}
                    width={job.size.width / 6}
                    src={job.image}
                    alt={job.alt}
                  />
                </div>
                <div className="grid text-sm md:text-base md:place-items-center sm:text-sm ">
                  <span className="font-bold">
                    {job.position}{" "}
                    <span className="font-bold text-red-400">
                      @ {job.company}
                    </span>
                  </span>
                  <ol className="list-disc">
                    <li>{job.desc.p1}</li>
                    <li>{job.desc.p2}</li>
                    <li>{job.desc.p3}</li>
                  </ol>
                </div>
              </li>
            </FadeInWhenVisible>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Experience;

interface jobTypes {
  company: string;
  position: string;
  desc: { p1: string; p2: string; p3: string };
  size: { width: number; height: number };
  image: string;
  alt: string;
  initialy: number;
  finaly: number;
}

const jobData: jobTypes[] = [
  {
    company: "BMS Lab",
    position: "Software Developer Intern",
    desc: {
      p1: "Developed a multi-purpose web application used by 600+ clients, utilizing Vue.js, Node.js, MongoDB, and IBMWatson, allowing users to transcribe audio to text and extract sentiment analysis",
      p2: "Integrated real-time push notifications to a matchmaking application using Socket.io, reducing latency by 87%",
      p3: "Designed various UIs for a management app using Figma, accelerating the development of an MVP by 50%",
    },

    size: { width: 2800, height: 1417 },
    image: "/images/bms-lab-logo.png",
    alt: "Picture of UNOapp ",
    initialy: -100,

    finaly: -50,
  },
  {
    company: "UNOapp",
    position: "Software Engineering Intern",
    desc: {
      p1: "Created and maintained a test suite of 50+ integration tests for an e-Commerce website, with a 92% success rate",
      p2: "Optimized test suites by removing explicit waits and code redundancy, reducing runtime by 27%",
      p3: "Built an augmented reality web application to showcase 3D rendered products using Three.js and WebXR",
    },
    size: { width: 2800, height: 1417 },
    image: "/images/uno-app-logo.png",
    alt: "Picture of BMS Lab",
    initialy: 100,
    finaly: 50,
  },
];
