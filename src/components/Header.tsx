import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
interface HeaderItem {
  [key: string]: { link: string };
}

const headerItems: HeaderItem = {
  github: { link: "https://github.com/laxitshahi" },
  linkedin: { link: "https://www.linkedin.com/in/laxitshahi/" },
};

const Header = () => {
  return (
    <div className="sticky top-0 z-50 mx-4">
      <motion.div
        initial={{ scale: 0.5, y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="m-4 flex justify-between items-center "
      >
        <ul className="flex space-x-4 text-2xl w-1/3 justify-left z-80">
          <li>
            <a
              href={headerItems["github"].link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
          </li>
          <li>
            <a
              href={headerItems["linkedin"].link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn />
            </a>
          </li>
        </ul>
        {/* Button */}
        <a onClick={() => window.open('mailto:shahilax@my.yorku.ca')} href="#_" className="px-5 py-2.5 relative rounded-full group overflow-hidden font-medium bg-blue-50 text-blue-900 inline-block z-80">
          <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-blue-900 group-hover:h-full opacity-90"></span>
          <span className="relative group-hover:text-white">Get In Touch</span>
        </a>
      </motion.div>
    </div>
  );
};

export default Header;
