import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Philosophy = () => {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const images = gsap.utils.toArray(".parallax-img");

      gsap.from(sectionRef.current.querySelector("h2"), {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "top 50%",
          scrub: 1,
        },
        y: 50,
        opacity: 0,
      });

      images.forEach((img) => {
        const speed = parseFloat(img.dataset.speed) || 1;
        // LOGIKA DIUBAH: Menggunakan yPercent untuk pergerakan relatif yang lebih aman
        gsap.to(img, {
          yPercent: -20 * speed,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.5,
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="philosophy"
      className="relative min-h-screen overflow-hidden c-space section-spacing"
    >
      <div className="text-center w-full max-w-4xl mx-auto mb-20">
        <h2 className="text-heading">Design & Motion Philosophy</h2>
        <p className="subtext mt-4">
          Combining clean, pastel aesthetics with fluid, meaningful motion to
          create an experience that is both beautiful and intuitive.
        </p>
      </div>

      <div className="relative w-full h-[80vh] grid grid-cols-4 grid-rows-4 gap-4">
        {/* Kontainer gambar dibuat lebih tinggi (h-[140%]) dan gambar itu sendiri juga (h-full)
            Lalu overflow-hidden pada parent akan memotongnya. Ini memberi ruang untuk parallax.
        */}
        <div className="relative col-span-1 row-span-2 overflow-hidden rounded-2xl">
          <img
            src="/assets/philosophy/p1.jpg"
            alt="Philosophy Image 1"
            className="parallax-img absolute top-[-40%] left-0 object-cover w-full h-[140%]"
            data-speed="1.2"
          />
        </div>
        <div className="relative col-span-2 row-span-2 overflow-hidden rounded-2xl">
          <img
            src="/assets/philosophy/p2.jpg"
            alt="Philosophy Image 2"
            className="parallax-img absolute top-[-40%] left-0 object-cover w-full h-[140%]"
            data-speed="0.8"
          />
        </div>
        <div className="relative col-span-1 row-span-4 overflow-hidden rounded-2xl">
          <img
            src="/assets/philosophy/p3.jpg"
            alt="Philosophy Image 3"
            className="parallax-img absolute top-[-40%] left-0 object-cover w-full h-[140%]"
            data-speed="1.5"
          />
        </div>
        <div className="relative col-span-2 row-span-2 overflow-hidden rounded-2xl">
          <img
            src="/assets/philosophy/p4.jpg"
            alt="Philosophy Image 4"
            className="parallax-img absolute top-[-40%] left-0 object-cover w-full h-[140%]"
            data-speed="1.1"
          />
        </div>
        <div className="relative col-span-1 row-span-2 overflow-hidden rounded-2xl">
          <img
            src="/assets/philosophy/p5.jpg"
            alt="Philosophy Image 5"
            className="parallax-img absolute top-[-40%] left-0 object-cover w-full h-[140%]"
            data-speed="0.9"
          />
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
