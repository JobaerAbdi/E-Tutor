/* eslint-disable react/prop-types */
import { motion, AnimatePresence } from "framer-motion";
const ResponsiveMenu = ({isOpen}) => {
  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.6 }}
        className="lg:hidden"
        >
          <div className="bg-primary text-sm py-6 m-6 rounded-3xl">
            <ul className="flex flex-col justify-center items-center gap-3">
              <li><a className="hover:text-secondary" href="/">Home</a></li>
              <li><a className="hover:text-secondary" href="/">About</a></li>
              <li><a className="hover:text-secondary" href="/">Service</a></li>
              <li><a className="hover:text-secondary" href="/">Contact</a></li>
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ResponsiveMenu;
