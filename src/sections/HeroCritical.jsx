import React from "react";
import HeroTextCritical from "../components/HeroText.critical";

const HeroCritical = () => {
  return (
    <section
      id="hero-section"
      className="relative flex h-screen items-start justify-center md:items-start md:justify-start c-space"
    >
      <div className="relative z-20 w-full h-full">
        <HeroTextCritical />
      </div>
    </section>
  );
};

export default HeroCritical;
