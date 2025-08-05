import React from "react";
import { GradientFlipWords } from "./GradientFlipWords";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2, // Memberi jeda sebelum animasi anak dimulai
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

const HeroTextInteractive = () => {
  const words = ["Creative", "Interactive", "Modern"];

  return (
    // Wrapper ini sengaja dibuat untuk "menimpa" posisi teks statis
    <div className="z-10 mt-20 flex flex-col items-center text-center md:mt-40 md:items-start md:text-left">
      {/* Bagian ini sengaja dibuat tidak terlihat untuk menjaga layout */}
      <div className="invisible">
        <h1 className="text-4xl font-medium text-text-primary">
          Hi, I'm Hizkia JB
        </h1>
        <p className="mt-2 block text-5xl font-bold text-text-secondary md:hidden">
          Passionate about building
        </p>
        <p className="mt-2 hidden text-5xl font-medium text-text-secondary md:block">
          Bringing ideas to life <br /> by building
        </p>
      </div>

      {/* Konten animasi yang sebenarnya */}
      <motion.div
        className="flex flex-col items-center md:items-start"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div
          className="flex h-[90px] items-center md:h-[120px]"
          variants={itemVariants}
        >
          <GradientFlipWords
            words={words}
            className="bg-gradient-to-r from-accent-dark to-accent-text bg-clip-text text-7xl font-black text-transparent md:text-8xl"
          />
        </motion.div>
        <motion.p
          className="block text-4xl font-bold text-text-secondary md:hidden"
          variants={itemVariants}
        >
          digital experiences.
        </motion.p>
        <motion.p
          className="hidden text-4xl font-medium text-text-secondary md:block"
          variants={itemVariants}
        >
          web experiences.
        </motion.p>
      </motion.div>
    </div>
  );
};

export default HeroTextInteractive;
