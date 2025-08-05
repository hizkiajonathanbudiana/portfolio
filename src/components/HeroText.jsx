// // import { GradientFlipWords } from "./GradientFlipWords";
// // import { motion } from "motion/react";

// // const containerVariants = {
// //   hidden: { opacity: 0 },
// //   visible: {
// //     opacity: 1,
// //     transition: {
// //       staggerChildren: 0.2,
// //     },
// //   },
// // };

// // const itemVariants = {
// //   hidden: { opacity: 0, y: 20 },
// //   visible: {
// //     opacity: 1,
// //     y: 0,
// //     transition: {
// //       duration: 0.5,
// //       ease: "easeOut",
// //     },
// //   },
// // };

// // const HeroText = () => {
// //   // Kata-kata diubah menjadi lebih berorientasi pada kreativitas dan pengalaman
// //   const words = ["Creative", "Interactive", "Modern"];

// //   return (
// //     <div className="z-10 mt-20 text-center md:mt-40 md:text-left">
// //       {/* --- Versi Desktop --- */}
// //       <motion.div
// //         className="hidden md:flex flex-col c-space items-start"
// //         variants={containerVariants}
// //         initial="hidden"
// //         animate="visible"
// //       >
// //         <motion.h1
// //           className="text-4xl font-medium text-text-primary gsap-hero-line"
// //           variants={itemVariants}
// //         >
// //           Hi, I'm Hizkia JB
// //         </motion.h1>

// //         <motion.p
// //           className="text-5xl font-medium text-text-secondary gsap-hero-line"
// //           variants={itemVariants}
// //         >
// //           Bringing ideas to life <br /> by building
// //         </motion.p>

// //         <motion.div
// //           className="gsap-hero-line h-[120px] flex items-center"
// //           variants={itemVariants}
// //         >
// //           <GradientFlipWords
// //             words={words}
// //             className="font-black text-transparent bg-gradient-to-r from-accent-dark to-accent-text bg-clip-text text-8xl"
// //           />
// //         </motion.div>

// //         <motion.p
// //           className="text-4xl font-medium text-text-secondary gsap-hero-line"
// //           variants={itemVariants}
// //         >
// //           web experiences.
// //         </motion.p>
// //       </motion.div>

// //       {/* --- Versi Mobile --- */}
// //       <motion.div
// //         className="flex flex-col space-y-2 md:hidden"
// //         variants={containerVariants}
// //         initial="hidden"
// //         animate="visible"
// //       >
// //         <motion.p
// //           className="text-4xl font-medium gsap-hero-line"
// //           variants={itemVariants}
// //         >
// //           Hi, I'm Hizkia JB
// //         </motion.p>

// //         <motion.p
// //           className="text-5xl font-bold text-text-secondary gsap-hero-line"
// //           variants={itemVariants}
// //         >
// //           Passionate about building
// //         </motion.p>

// //         <motion.div
// //           className="gsap-hero-line h-[90px] flex items-center"
// //           variants={itemVariants}
// //         >
// //           <GradientFlipWords
// //             words={words}
// //             className="font-bold text-transparent bg-gradient-to-r from-accent-dark to-accent-text bg-clip-text text-7xl"
// //           />
// //         </motion.div>

// //         <motion.p
// //           className="text-4xl font-bold text-text-secondary gsap-hero-line"
// //           variants={itemVariants}
// //         >
// //           digital experiences.
// //         </motion.p>
// //       </motion.div>
// //     </div>
// //   );
// // };

// // export default HeroText;

// import { GradientFlipWords } from "./GradientFlipWords";
// import { motion, useInView } from "framer-motion";
// import { useRef } from "react";

// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.2,
//     },
//   },
// };

// const itemVariants = {
//   hidden: { opacity: 0, y: 20 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.5,
//       ease: "easeOut",
//     },
//   },
// };

// const HeroText = () => {
//   const words = ["Creative", "Interactive", "Modern"];
//   const animationRef = useRef(null);
//   const isInView = useInView(animationRef, { once: true, amount: 0.5 });

//   return (
//     <div className="z-10 mt-20 text-center flex flex-col items-center md:items-start md:mt-40 c-space">
//       {/* --- LCP Elements (Static Render) --- */}
//       {/* These elements render immediately without JS for optimal LCP. */}
//       <h1 className="text-4xl font-medium text-text-primary">
//         Hi, I'm Hizkia JB
//       </h1>
//       <p className="hidden text-5xl font-medium text-text-secondary md:block mt-2">
//         Bringing ideas to life <br /> by building
//       </p>
//       <p className="block text-5xl font-bold text-text-secondary md:hidden mt-2">
//         Passionate about building
//       </p>

//       {/* --- Animated Elements (Non-LCP) --- */}
//       {/* This container animates only the secondary elements. */}
//       <motion.div
//         ref={animationRef}
//         className="flex flex-col items-center md:items-start"
//         initial="hidden"
//         animate={isInView ? "visible" : "hidden"}
//         variants={containerVariants}
//       >
//         <motion.div
//           className="flex items-center h-[90px] md:h-[120px]"
//           variants={itemVariants}
//         >
//           <GradientFlipWords
//             words={words}
//             className="text-7xl md:text-8xl font-black text-transparent bg-gradient-to-r from-accent-dark to-accent-text bg-clip-text"
//           />
//         </motion.div>

//         <motion.p
//           className="hidden text-4xl font-medium text-text-secondary md:block"
//           variants={itemVariants}
//         >
//           web experiences.
//         </motion.p>

//         <motion.p
//           className="block text-4xl font-bold text-text-secondary md:hidden"
//           variants={itemVariants}
//         >
//           digital experiences.
//         </motion.p>
//       </motion.div>
//     </div>
//   );
// };

// export default HeroText;

import { GradientFlipWords } from "./GradientFlipWords";
import { motion } from "framer-motion";

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
  const words = ["Creative", "Interactive", "Modern"];

  return (
    <div className="z-10 mt-20 flex flex-col items-center text-center md:mt-40 md:items-start md:text-left c-space">
      {/* --- STATIC LCP ELEMENTS --- */}
      {/* Dirender secara instan tanpa menunggu JavaScript. */}
      <h1 className="text-4xl font-medium text-text-primary">
        Hi, I'm Hizkia JB
      </h1>
      <p className="mt-2 block text-5xl font-bold text-text-secondary md:hidden">
        Passionate about building
      </p>
      <p className="mt-2 hidden text-5xl font-medium text-text-secondary md:block">
        Bringing ideas to life <br /> by building
      </p>

      {/* --- ANIMATED NON-LCP ELEMENTS --- */}
      {/* Kontainer ini hanya menganimasikan elemen sekunder setelah LCP dicat. */}
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

export default HeroText;
