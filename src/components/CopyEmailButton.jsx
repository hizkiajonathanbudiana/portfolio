import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { twMerge } from "tailwind-merge";

const CopyEmailButton = ({ variant = "dark" }) => {
  const [copied, setCopied] = useState(false);
  const email = "your.email@example.com"; // Ganti dengan email Anda

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const baseClasses =
    "relative px-1 py-4 text-sm text-center rounded-full font-extralight w-[14rem] cursor-pointer overflow-hidden transition-all duration-300";
  const variantClasses =
    variant === "light"
      ? "bg-card-bg text-text-primary shadow-md hover:shadow-lg"
      : "bg-primary text-white"; // Kelas asli Anda untuk background gelap

  return (
    <motion.button
      onClick={copyToClipboard}
      whileHover={{ y: -5 }}
      whileTap={{ scale: 1.05 }}
      className={twMerge(baseClasses, variantClasses)}
    >
      <AnimatePresence mode="wait">
        {copied ? (
          <motion.p
            className="flex items-center justify-center gap-2"
            key="copied"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          >
            <img
              src="/assets/copy-done.svg"
              className="w-5"
              alt="Copied Icon"
            />
            Email Copied!
          </motion.p>
        ) : (
          <motion.p
            className="flex items-center justify-center gap-2"
            key="copy"
            initial={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            <img
              src={
                variant === "light"
                  ? "/assets/copy-dark.svg"
                  : "/assets/copy.svg"
              }
              className="w-5"
              alt="Copy Icon"
            />
            Copy Email Address
          </motion.p>
        )}
      </AnimatePresence>
    </motion.button>
  );
};

export default CopyEmailButton;
