import { FaPlay } from "react-icons/fa";
import HeroImg from "../../assets/hero.png";
import { motion } from "framer-motion";
import { SlideRight } from "../../utility/animation.js";
const Hero = () => {
  return (
    <div className="container grid grid-cols-1 md:grid-cols-2 m-h-[650px] relative">
      {/* Brand info */}
      <div className="flex flex-col justify-center py-14 md:py-0 md:pr-16 xl:pr-40">
        <div className="text-center md:text-start space-y-6 !pt-8">
          <motion.p
            variants={SlideRight(0.4)}
            initial="hidden"
            animate="visible"
            className="text-orange-600 font-semibold uppercase"
          >
            100% Satisfaction Guarantee
          </motion.p>
          <motion.h1
            variants={SlideRight(0.6)}
            initial="hidden"
            animate="visible"
            className="text-4xl lg:text-5xl font-semibold !leading-tight"
          >
            Find Your <br /> Perfect <span className="text-primary">Tutor</span>
          </motion.h1>
          <motion.p
            variants={SlideRight(0.8)}
            initial="hidden"
            animate="visible"
          >
            We help you find perfect tutor for 1-on-1 lessons. It is completely
            free and private.
          </motion.p>
        </div>
        <motion.div
          variants={SlideRight(1.0)}
          initial="hidden"
          animate="visible"
          className="flex justify-center md:justify-start items-center gap-8 !mt-8"
        >
          <button className="primary-btn">Get Started</button>
          <button className="flex justify-end items-center gap-2 font-semibold">
            <span className="bg-secondary/15 w-10 h-10 rounded-full flex justify-center items-center">
              <FaPlay className="text-secondary" />
            </span>
            See how it works
          </button>
        </motion.div>
      </div>

      {/* Hero image */}
      <div className="flex justify-center items-center">
        <motion.img
          initial={{ opacity: 0, x: 200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
          src={HeroImg}
          alt=""
          className="w-[350px] md:w-[550px] xl:w-[700px]"
        />
      </div>
    </div>
  );
};

export default Hero;
