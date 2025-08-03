import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HeroText from "../components/HeroText";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef(null);

  useLayoutEffect(() => {
    const heroElement = heroRef.current;
    if (!heroElement) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: heroElement,
        start: "top top",
        end: "bottom top",
        scrub: 1.5,
      },
    });

    tl.to(".gsap-hero-line", {
      y: -100,
      opacity: 0,
      stagger: 0.1,
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section
      id="hero-section"
      ref={heroRef}
      className="flex items-start justify-center min-h-screen overflow-hidden md:items-start md:justify-start c-space"
    >
      <HeroText />
    </section>
  );
};

export default Hero;
