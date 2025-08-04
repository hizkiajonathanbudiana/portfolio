import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CreditLine = ({ children }) => (
  <div className="relative overflow-hidden py-1 md:py-2">
    <h2 className="text-4xl md:text-7xl font-semibold text-text-primary">
      {children}
    </h2>
    <div className="text-mask absolute top-0 left-0 w-full h-full bg-background"></div>
  </div>
);

const Credits = () => {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    // Menggunakan gsap.context() untuk scoping dan cleanup yang aman
    const ctx = gsap.context(() => {
      const masks = gsap.utils.toArray(".text-mask");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          end: "bottom 85%",
          scrub: 1.5,
        },
      });

      tl.to(masks, {
        yPercent: -100, // Menggunakan yPercent untuk presisi
        stagger: 0.3,
        duration: 1,
        ease: "power3.out",
      });
    }, sectionRef); // <-- Scope context ke sectionRef

    // Cleanup otomatis saat komponen di-unmount
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="credits-section"
      className="relative flex items-center justify-center min-h-screen c-space section-spacing"
    >
      <div className="text-left w-full max-w-5xl">
        <CreditLine>This portfolio was crafted</CreditLine>
        <CreditLine>from 1 vision and 5 references.</CreditLine>
        <CreditLine>A collaboration between</CreditLine>
        <CreditLine>
          <span className="text-transparent bg-gradient-to-r from-accent-dark to-accent-text bg-clip-text">
            Me
          </span>{" "}
          as the Architect,
        </CreditLine>
        <CreditLine>
          &{" "}
          <span className="text-transparent bg-gradient-to-r from-accent-dark to-accent-text bg-clip-text">
            Gemini
          </span>{" "}
          as the Assistant.
        </CreditLine>
        <CreditLine>With approximately 5 hours of work.</CreditLine>
      </div>
    </section>
  );
};

export default Credits;
