import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { philosophyData } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const PhilosophyJourney = () => {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      if (trackRef.current) {
        // Animasi untuk horizontal scroll
        gsap.to(trackRef.current, {
          x: () =>
            -(trackRef.current.scrollWidth - sectionRef.current.offsetWidth),
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: () => `+=${trackRef.current.scrollWidth}`,
            scrub: 1.5,
            pin: true,
            invalidateOnRefresh: true,
          },
        });

        // Animasi untuk setiap item agar muncul saat masuk viewport horizontal
        const items = gsap.utils.toArray(".philosophy-item");
        items.forEach((item) => {
          gsap.from(item, {
            opacity: 0,
            y: 50,
            scrollTrigger: {
              trigger: item,
              containerAnimation: gsap.getTweensOf(trackRef.current)[0],
              start: "left 90%",
              scrub: 1,
            },
          });
        });
      }
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="philosophy-journey"
      className="relative h-screen overflow-hidden bg-black text-background"
    >
      <div ref={trackRef} className="h-full flex items-center px-[10vw]">
        <div className="flex-shrink-0 w-[80vw] md:w-[50vw] pr-12 philosophy-item">
          <h2 className="text-5xl md:text-7xl font-bold">Code is Craft.</h2>
          <p className="text-lg text-gray-300 mt-4">
            My development philosophy is rooted in established principles to
            ensure clean, efficient, and future-proof code.
          </p>
        </div>
        {philosophyData.map((p) => (
          <div
            key={p.id}
            className="flex-shrink-0 w-[70vw] md:w-[40vw] p-8 philosophy-item"
          >
            <h3 className="text-4xl md:text-6xl font-semibold text-background">
              {p.title}
            </h3>
            <p className="text-md md:text-lg text-gray-400 mt-4">
              {p.description}
            </p>
          </div>
        ))}
        <div className="flex-shrink-0 w-[20vw]"></div>
      </div>
    </section>
  );
};

export default PhilosophyJourney;
