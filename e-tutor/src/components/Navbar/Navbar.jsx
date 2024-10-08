import { MdComputer, MdMenu } from "react-icons/md";
import { NavbarMenu } from "../../mockData/data.js";
import React from "react";
import ResponsiveMenu from "./ResponsiveMenu.jsx";
import {motion} from "framer-motion";
const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return ( 
    <>
      <motion.div
       initial= {{opacity: 0}}
       animate= {{opacity: 1}}
       transition= {{duration: 0.5, delay: 0.5}}
      >
        <div className="container flex justify-between items-center py-6">
          {/* Logo section */}
          <div className="flex items-center gap-2 font-bold">
            <MdComputer className="text-3xl text-secondary" />
            <p>E-Tutor</p>
          </div>

          {/* Menu section */}
          <div className="hidden lg:block">
            <ul className="flex items-center gap-6">
              {NavbarMenu.map((item) => (
                <li key={item?.id}>
                  <a
                    className="text-gray-600 inline-block text-sm xl:text-base py-1 px-2 xl:px-3 hover:text-secondary font-semibold transition-all duration-300"
                    href={item?.link}
                  >
                    {item?.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA Button section */}
          <div className="hidden xl:block space-x-6">
            <button className="font-semibold text-gray-600 hover:text-secondary">Sign In</button>
            <button className="bg-secondary text-white px-6 py-2 rounded-full fond-semibold">
              Register
            </button>
          </div>

          {/* Mobile Hamburger Menu */}
          <div className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
            <MdMenu className="text-3xl cursor-pointer" />
          </div>
        </div>
      </motion.div>

      {/* Mobile sidebar section */}
      <ResponsiveMenu isOpen={isOpen}/>
    </>
  );
};

export default Navbar;
