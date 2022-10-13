import Image from "next/image";
import FadeInWhenVisible from "./FadeInWhenVisible";

const Experience = () => {
  return (
    <div className="">
      <h1 className="flex  items-center justify-center text-3xl font-bold underline md:decoration-8 decoration-4 decoration-red-400">
        Experience
      </h1>
      <ul className="m-10">
        {jobData.map((job) => (
          <li className="grid justify-center transition duration-300 ease-in-out delay-150 shadow-2xl place-items-center rounded-2xl opacity-60 hover:opacity-100">
            <div className="max-w-lg overflow-hidden rounded-full ">
              <img
                height={job.size.height / 6}
                width={job.size.width / 6}
                src={job.image}
                alt={job.alt}
              />
            </div>
            <div className="grid text-sm md:text-base place-items-center sm:text-sm ">
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
        ))}
      </ul>
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
