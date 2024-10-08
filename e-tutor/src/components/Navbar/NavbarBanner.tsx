import { motion } from "framer-motion";
import React from "react";
const NavbarBanner = () => {
  const [isOpen, setIsOpen] = React.useState(true);
  return (
    isOpen && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="bg-primary text-sm text-center font-semibold p-1 hidden lg:block relative"
      >
        <span>
          Ary you a university or school student for an online tutoring
          partnership?
        </span>
        <a className="text-secondary ml-2" href="#">
          Talk to us
        </a>
        <div
          onClick={() => setIsOpen(false)}
          className="absolute top-1/2 right-10 cursor-pointer -translate-y-1/2 hover:text-secondary"
        >
          X
        </div>
      </motion.div>
    )
  );
};

export default NavbarBanner;
