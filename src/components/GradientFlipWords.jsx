import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

export const GradientFlipWords = ({ words, duration = 3000, className }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, duration);

    return () => clearInterval(interval);
  }, [words, duration]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={words[index]}
        initial={{ opacity: 0, y: -50, rotateX: 90 }}
        animate={{ opacity: 1, y: 0, rotateX: 0 }}
        exit={{ opacity: 0, y: 50, rotateX: -90 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className={twMerge("relative inline-block", className)}
      >
        {words[index]}
      </motion.div>
    </AnimatePresence>
  );
};
