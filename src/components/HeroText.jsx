import { GradientFlipWords } from "./GradientFlipWords";
import { motion } from "motion/react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const HeroText = () => {
  // Kata-kata diubah menjadi lebih berorientasi pada kreativitas dan pengalaman
  const words = ["Creative", "Interactive", "Modern"];

  return (
    <div className="z-10 mt-20 text-center md:mt-40 md:text-left">
      {/* --- Versi Desktop --- */}
      <motion.div
        className="hidden md:flex flex-col c-space items-start"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-4xl font-medium text-text-primary gsap-hero-line"
          variants={itemVariants}
        >
          Hi, I'm Hizkia JB
        </motion.h1>

        <motion.p
          className="text-5xl font-medium text-text-secondary gsap-hero-line"
          variants={itemVariants}
        >
          Bringing ideas to life <br /> by building
        </motion.p>

        <motion.div
          className="gsap-hero-line h-[120px] flex items-center"
          variants={itemVariants}
        >
          <GradientFlipWords
            words={words}
            className="font-black text-transparent bg-gradient-to-r from-accent-dark to-accent-text bg-clip-text text-8xl"
          />
        </motion.div>

        <motion.p
          className="text-4xl font-medium text-text-secondary gsap-hero-line"
          variants={itemVariants}
        >
          web experiences.
        </motion.p>
      </motion.div>

      {/* --- Versi Mobile --- */}
      <motion.div
        className="flex flex-col space-y-2 md:hidden"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.p
          className="text-4xl font-medium gsap-hero-line"
          variants={itemVariants}
        >
          Hi, I'm Hizkia JB
        </motion.p>

        <motion.p
          className="text-5xl font-bold text-text-secondary gsap-hero-line"
          variants={itemVariants}
        >
          Passionate about building
        </motion.p>

        <motion.div
          className="gsap-hero-line h-[90px] flex items-center"
          variants={itemVariants}
        >
          <GradientFlipWords
            words={words}
            className="font-bold text-transparent bg-gradient-to-r from-accent-dark to-accent-text bg-clip-text text-7xl"
          />
        </motion.div>

        <motion.p
          className="text-4xl font-bold text-text-secondary gsap-hero-line"
          variants={itemVariants}
        >
          digital experiences.
        </motion.p>
      </motion.div>
    </div>
  );
};

export default HeroText;
