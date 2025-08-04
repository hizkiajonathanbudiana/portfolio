import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const IntroductionJourney = () => {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const element = sectionRef.current;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: element,
          start: "top 60%",
          end: "bottom bottom",
          scrub: 1.5,
        },
      });

      tl.from(element.querySelectorAll(".intro-line"), {
        y: 70,
        opacity: 0,
        stagger: 0.2,
      });
    }, element);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="introduction-journey"
      className="relative flex items-center justify-center min-h-screen bg-black text-background c-space"
    >
      <div className="text-center max-w-4xl">
        <p className="subtext text-gray-400 intro-line">ABOUT ME</p>
        <h2 className="text-5xl md:text-7xl font-bold mt-4 intro-line">
          Hizkia Jonathan Budiana
        </h2>
        <p className="text-xl md:text-2xl text-gray-300 mt-8 intro-line">
          I’ve gone all-in on fullstack development—driven by deep focus,
          curiosity, and enthusiasm to build dynamic web and software apps that
          create real impact.
        </p>
      </div>
    </section>
  );
};

export default IntroductionJourney;
