import React from "react";

const HeroTextCritical = () => {
  return (
    <div className="z-10 mt-20 flex flex-col items-center text-center md:mt-40 md:items-start md:text-left c-space">
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
  );
};

export default HeroTextCritical;
