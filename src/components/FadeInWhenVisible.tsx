import { motion } from "framer-motion";
import { ReactNode } from "react";
interface Props {
  children: ReactNode;
  initialx?: number;
  initialy?: number;
  finaly?: number;
}

const FadeInWhenVisible = ({ children, initialx, initialy, finaly }: Props) => {
  if (!initialx) initialx = 0;
  if (!initialy) initialy = 0;
  if (!finaly) finaly = 0;

  return (
    <motion.div
      initial={{ y: initialy, x: initialx, opacity: 0 }}
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 1.5 }}
      variants={{
        visible: { opacity: 1, scale: 1, x: 0, y: finaly },
        hidden: { opacity: 0, scale: 0, x: initialx, y: initialy },
      }}
    >
      {children}
    </motion.div>
  );
};

export default FadeInWhenVisible;
