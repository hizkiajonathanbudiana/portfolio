import { FlipWords } from "./FlipWords";
import { motion } from "motion/react";

const HeroText = () => {
  const words = ["Secure", "Modern", "Scalable"];
  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };
  return (
    <div className="z-10 mt-20 text-center md:mt-40 md:text-left rounded-3xl bg-clip-text">
      <div className="flex-col hidden md:flex c-space">
        <motion.h1
          className="text-4xl font-medium gsap-hero-line"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
        >
          Hi, I'm Hizkia JB
        </motion.h1>
        <div className="flex flex-col items-start">
          <motion.p
            className="text-5xl font-medium text-text-secondary gsap-hero-line"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
          >
            A Developer <br /> Dedicated to Crafting
          </motion.p>
          <motion.div
            className="gsap-hero-line"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.5 }}
          >
            <FlipWords
              words={words}
              // className="font-black text-transparent bg-gradient-to-r from-accent-dark to-accent-text bg-clip-text text-8xl"
              className="text-4xl font-medium text-text-secondary gsap-hero-line"
            />
          </motion.div>
          <motion.p
            className="text-4xl font-medium text-text-secondary gsap-hero-line"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.8 }}
          >
            Web Solutions
          </motion.p>
        </div>
      </div>
      <div className="flex- flex-col space-y-6 md:hidden">
        <motion.p
          className="text-4xl font-medium gsap-hero-line"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
        >
          Hi,I'm Hizkia Jonathan Budiana
        </motion.p>
        <div>
          <motion.p
            className="text-5xl font-black text-text-secondary gsap-hero-line"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
          >
            Building
          </motion.p>
          <motion.div
            className="gsap-hero-line"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.5 }}
          >
            <FlipWords
              words={words}
              // className="font-bold text-transparent bg-gradient-to-r from-accent-dark to-accent-text bg-clip-text text-7xl"
              className="text-4xl font-black text-text-secondary gsap-hero-line"
            />
          </motion.div>
          <motion.p
            className="text-4xl font-black text-text-secondary gsap-hero-line"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.8 }}
          >
            Web Applications
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default HeroText;
