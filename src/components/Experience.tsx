import FadeInWhenVisible from "./FadeInWhenVisible";

const Experience = () => {
  return (
    <div>
      <h1 className="flex items-center justify-center h-screen text-3xl font-bold underline snap-start md:decoration-8 decoration-4 decoration-red-400">
        Experience
      </h1>
      <ul className="m-10">
        {jobData.map((job) => (
          <li
            key={job.company}
            className="grid items-center justify-center h-screen grid-flow-col-dense snap-start place-items-center rounded-2xl md:p-20 lg:p-36"
          >
            <FadeInWhenVisible initialy={job.initialy}>
              <div className="overflow-hidden">
                <img
                  className="hidden pr-12 pt-11 sm:block"
                  height={job.size.height / 6}
                  width={job.size.width / 6}
                  src={job.image}
                  alt={job.alt}
                />
              </div>
            </FadeInWhenVisible>

            <FadeInWhenVisible initialy={-1 * job.initialy}>
              <div className="grid place-items-center ">
                <span className="font-bold">
                  {job.position}{" "}
                  <span className="font-bold text-red-900">
                    @ {job.company}
                  </span>
                </span>
                <span className="text-gray-500">{job.date}</span>
                <ol className="list-[square] text-sm md:text-base sm:text-sm">
                  <li>{job.desc.p1}</li>
                  <li>{job.desc.p2}</li>
                  <li>{job.desc.p3}</li>
                </ol>
              </div>
            </FadeInWhenVisible>
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
  date: String;
  size: { width: number; height: number };
  image: string;
  alt: string;
  initialy: number;
  finaly: number;
}

const jobData: jobTypes[] = [
  {
    company: "Intact",
    position: "AI Developer Intern",
    desc: {
      p1: "Migrated and refactored a codebase of 6 microservices with dependencies such as Java Spring Boot, Kafka, and MongoDB, resolving 17 vulnerabilities and improving security and performance",
      p2: "Developed a cross-team web application that aggregates service and vulnerability data using Flask, TypeScript, React.js, and JWT, resulting in a 50% reduction in service and vulnerability assessment time",
      p3: "Implemented a dual caching system to achieve real-time client data updates while minimizing expensive backend API calls and server processing time from 15 minutes to 2 seconds",
    },
    date: "May 2023 - Aug 2023",
    size: { width: 2800, height: 2000 },
    image: "/images/intact-logo.png",
    alt: "Picture of Intact Logo",
    initialy: 100,
    finaly: 50,
  },
  {
    company: "goeasy",
    position: "Fullstack Developer Intern",
    desc: {
      p1: "Developed a banking application using Next.js, GraphQL, MUI, and Contentful CMS, providing 3000+ active users with seamless access to financial information and services through a mobile and web app",
      p2: "Implemented an efficient product mapping model by centralizing a cluster of arbitrary product names using Contentful and Apollo GraphQL, reducing redundant API calls by 30% and improving query times by 10%",
      p3: "Reduced UI loading times by 226% utilizing React context, minimizing redundant top-level API calls",
    },
    date: "Jan 2023 - Apr 2023",
    size: { width: 2800, height: 2000 },
    image: "/images/goeasy-logo.png",
    alt: "Picture of goeasy logo",
    initialy: 100,
    finaly: 50,
  },
  {
    company: "UNOapp",
    position: "Software Engineering Intern",
    desc: {
      p1: "Created and maintained a test suite of 50+ integration tests for an e-Commerce website, with a 92% success rate",
      p2: "Optimized test suites by removing explicit waits and code redundancy, reducing runtime by 27%",
      p3: "Built an augmented reality web application to showcase 3D rendered products using Three.js and WebXR",
    },
    date: "Sep 2021 - Apr 2022",
    size: { width: 2800, height: 1417 },
    image: "/images/uno-app-logo.png",
    alt: "Picture of BMS Lab",
    initialy: 100,
    finaly: 50,
  },
  {
    company: "BMS Lab",
    position: "Software Developer Intern",
    desc: {
      p1: "Developed a multi-purpose web application used by 600+ clients, utilizing Vue.js, Node.js, MongoDB, and IBMWatson, allowing users to transcribe audio to text and extract sentiment analysis",
      p2: "Integrated real-time push notifications to a matchmaking application using Socket.io, reducing latency by 87%",
      p3: "Designed various UIs for a management app using Figma, accelerating the development of an MVP by 50%",
    },
    date: "May 2022 - Sep 2022",
    size: { width: 2800, height: 1417 },
    image: "/images/bms-lab-logo.png",
    alt: "Picture of UNOapp ",
    initialy: -100,
    finaly: -50,
  },
];
