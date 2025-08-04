import React, { useLayoutEffect, useRef } from "react";
import { Globe } from "../components/globe";
import CopyEmailButton from "../components/CopyEmailButton";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const GlobalReachJourney = () => {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=2000",
          scrub: 1.5,
          pin: true,
        },
      });

      // Animasi globe bergeser ke kiri dan sedikit mengecil
      tl.to(".globe-container", {
        xPercent: -50,
        scale: 0.8,
        ease: "power2.inOut",
      });

      // Animasi teks CTA muncul dari kanan
      tl.from(
        ".cta-container",
        {
          xPercent: 100,
          opacity: 0,
          ease: "power2.inOut",
        },
        "<"
      ); // '<' berarti mulai bersamaan dengan animasi sebelumnya
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="global-reach-journey"
      className="relative flex items-center w-full h-screen overflow-hidden bg-black"
    >
      <div className="relative flex items-center w-full h-full">
        <div className="w-full h-full globe-container">
          <Globe />
        </div>
        <div className="absolute w-1/2 right-0 text-center text-background cta-container c-space">
          <h2 className="text-4xl font-bold md:text-6xl">
            Ready to build together?
          </h2>
          <p className="max-w-xl mx-auto mt-4 text-lg text-gray-300 md:text-xl">
            I'm based in South Tangerang, Indonesia, and ready to collaborate on
            projects worldwide. Let's create something amazing.
          </p>
          <div className="flex justify-center mt-8">
            <CopyEmailButton variant="light" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalReachJourney;
