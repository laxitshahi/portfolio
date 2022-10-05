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
    <div className="fixed mx-4 min-w-screen-lg">
      <motion.div
        initial={{ scale: 0.5, y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="m-4"
      >
        <ul className="flex justify-end space-x-4 text-2xl align-middle">
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
      </motion.div>
    </div>
  );
};

export default Header;
