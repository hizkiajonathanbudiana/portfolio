// // import React, { useLayoutEffect } from "react";
// // import gsap from "gsap";
// // import { ScrollTrigger } from "gsap/ScrollTrigger";
// // import Navbar from "./sections/Navbar";
// // import Hero from "./sections/Hero";
// // import Services from "./sections/Services";
// // import TechShowcase from "./sections/TechShowcase";
// // import About from "./sections/About";
// // import Projects from "./sections/Projects";
// // import Experiences from "./sections/Experiences";
// // import Testimonial from "./sections/Testimonial";
// // import Philosophy from "./sections/Philosophy";
// // import Playground from "./sections/Playground";
// // import AssetShowcase from "./sections/AssetShowcase"; // <-- IMPORT BARU
// // import Credits from "./sections/Credits";
// // import Contact from "./sections/Contact";
// // import Footer from "./sections/Footer";
// // import Scene from "./components/Scene";

// // gsap.registerPlugin(ScrollTrigger);

// // const App = () => {
// //   useLayoutEffect(() => {
// //     const refreshTriggers = () => {
// //       ScrollTrigger.refresh();
// //     };
// //     refreshTriggers();
// //     window.addEventListener("load", refreshTriggers);
// //     return () => {
// //       window.removeEventListener("load", refreshTriggers);
// //       ScrollTrigger.getAll().forEach((t) => t.kill());
// //     };
// //   }, []);

// //   return (
// //     <>
// //       <Scene />
// //       <div id="content" className="relative z-10">
// //         <main className="container mx-auto max-w-7xl">
// //           <Navbar />
// //           <Hero />
// //           <Services />
// //           <TechShowcase />
// //           <About />
// //           <Projects />
// //           <Experiences />
// //           <Testimonial />
// //           <Philosophy />
// //           <Playground />
// //           <AssetShowcase /> {/* <-- TAMBAHKAN DI SINI */}
// //           <Credits />
// //           <Contact />
// //           <Footer />
// //         </main>
// //       </div>
// //     </>
// //   );
// // };

// // export default App;

// // src/App.jsx

// import React, { useLayoutEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import Navbar from "./sections/Navbar";
// import Hero from "./sections/Hero";
// import Services from "./sections/Services";
// import TechShowcase from "./sections/TechShowcase";
// import Projects from "./sections/Projects";
// import Experiences from "./sections/Experiences";
// import Testimonial from "./sections/Testimonial";
// import AssetShowcase from "./sections/AssetShowcase";
// import Credits from "./sections/Credits";
// import Contact from "./sections/Contact";
// import Footer from "./sections/Footer";
// import Scene from "./components/Scene";
// import PhilosophyJourney from "./sections/Philosophy_Journey";
// import ToolkitJourney from "./sections/Toolkit_Journey";
// import GlobalReachJourney from "./sections/GlobalReach_Journey";
// import Playground from "./sections/Playground";
// gsap.registerPlugin(ScrollTrigger);

// const App = () => {
//   const astronautRef = useRef();
//   const cameraRef = useRef(); // Ref baru untuk kamera

//   useLayoutEffect(() => {
//     const delayedInit = setTimeout(() => {
//       // Pastikan kedua ref sudah terisi sebelum menjalankan animasi
//       if (astronautRef.current && cameraRef.current) {
//         const camera = cameraRef.current; // Gunakan kamera dari ref

//         const ctx = gsap.context(() => {
//           // STAGE 1: Hero Animation
//           const heroTl = gsap.timeline({
//             scrollTrigger: {
//               trigger: "#hero-section",
//               start: "top top",
//               end: "bottom top",
//               scrub: 1.5,
//             },
//           });
//           heroTl.to(
//             astronautRef.current.scale,
//             { x: 0.15, y: 0.15, z: 0.15 },
//             0
//           );
//           heroTl.to(astronautRef.current.position, { x: 2.5, y: -2, z: -1 }, 0);
//           heroTl.to(
//             astronautRef.current.rotation,
//             { x: 0, y: Math.PI / 4, z: -Math.PI / 8 },
//             0
//           );
//           heroTl.to(camera.position, { x: 1, y: 0, z: 7 }, 0);

//           // STAGE 2: The Gateway Transition
//           const gatewayTl = gsap.timeline({
//             scrollTrigger: {
//               trigger: "#tech-showcase",
//               start: "bottom bottom",
//               end: "+=2000",
//               scrub: 1.5,
//               pin: true,
//             },
//           });
//           gatewayTl.to(
//             astronautRef.current.rotation,
//             { x: -Math.PI / 2, y: -0.2, z: 2.2, duration: 1 },
//             "start"
//           );
//           gatewayTl.to(
//             astronautRef.current.position,
//             { x: 0, y: -1.5, z: 0, duration: 1 },
//             "start"
//           );
//           gatewayTl.to(
//             camera.position,
//             { x: 0, y: -0.5, z: 5, duration: 1 },
//             "start"
//           );
//           gatewayTl.to(
//             astronautRef.current.scale,
//             { x: 0.4, y: 0.4, z: 0.4, duration: 1.5 },
//             ">-0.5"
//           );
//           gatewayTl.to(
//             camera.position,
//             { x: 0, y: -1.4, z: 1, duration: 1.5 },
//             "<"
//           );
//           gatewayTl.to(
//             "#flash",
//             {
//               opacity: 1,
//               duration: 0.3,
//               onComplete: () =>
//                 gsap.set(".scene-container", { visibility: "hidden" }),
//             },
//             ">-0.2"
//           );
//           gatewayTl.to("#flash", { opacity: 0, duration: 0.3 });
//         });
//         return () => ctx.revert();
//       }
//     }, 100);

//     const refreshTriggers = () => ScrollTrigger.refresh();
//     window.addEventListener("load", refreshTriggers);

//     return () => {
//       clearTimeout(delayedInit);
//       window.removeEventListener("load", refreshTriggers);
//       ScrollTrigger.getAll().forEach((t) => t.kill());
//     };
//   }, []);

//   return (
//     <>
//       <div
//         id="flash"
//         className="fixed top-0 left-0 w-full h-screen bg-background z-[100] pointer-events-none opacity-0"
//       ></div>
//       {/* Teruskan kedua ref ke Scene */}
//       <Scene astronautRef={astronautRef} cameraRef={cameraRef} />
//       <div id="content" className="relative z-10">
//         <main className="container mx-auto max-w-7xl">
//           <Navbar />
//           <Hero />
//           <Services />
//           <TechShowcase />
//           <div id="about-journey-wrapper">
//             <PhilosophyJourney />
//             <ToolkitJourney />
//             <GlobalReachJourney />
//           </div>
//           <Projects />
//           <Experiences />
//           <Testimonial />
//           <AssetShowcase />
//           <Playground />
//           <Credits />
//           <Contact />
//           <Footer />
//         </main>
//       </div>
//     </>
//   );
// };

// export default App;

import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import Services from "./sections/Services";
import TechShowcase from "./sections/TechShowcase";
import Projects from "./sections/Projects";
import Experiences from "./sections/Experiences";
import Testimonial from "./sections/Testimonial";
import AssetShowcase from "./sections/AssetShowcase";
import Credits from "./sections/Credits";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import Scene from "./components/Scene";
import PhilosophyJourney from "./sections/Philosophy_Journey";
import ToolkitJourney from "./sections/Toolkit_Journey";
import GlobalReachJourney from "./sections/GlobalReach_Journey";
import Playground from "./sections/Playground";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const astronautRef = useRef();
  const cameraRef = useRef();
  const journeyWrapperRef = useRef(null);

  useLayoutEffect(() => {
    const delayedInit = setTimeout(() => {
      if (astronautRef.current && cameraRef.current) {
        const camera = cameraRef.current;

        const ctx = gsap.context(() => {
          // STAGE 1: Hero Scroll
          const heroTl = gsap.timeline({
            scrollTrigger: {
              trigger: "#hero-section",
              start: "top top",
              end: "bottom top",
              scrub: 1.5,
            },
          });
          heroTl
            .to(astronautRef.current.scale, { x: 0.15, y: 0.15, z: 0.15 }, 0)
            .to(astronautRef.current.position, { x: 2.5, y: -2, z: -1 }, 0)
            .to(
              astronautRef.current.rotation,
              { x: 0, y: Math.PI / 4, z: -Math.PI / 8 },
              0
            )
            .to(camera.position, { x: 1, y: 0, z: 7 }, 0); // STAGE 2: Astronaut Exit Animation (NEW)

          const exitTl = gsap.timeline({
            scrollTrigger: {
              trigger: "#tech-showcase",
              start: "bottom 90%",
              end: "bottom top",
              scrub: 1.5,
            },
          });
          exitTl
            .to(astronautRef.current.position, {
              x: 4,
              y: -3,
              z: -2,
              ease: "power2.in",
            })
            .to(
              astronautRef.current.rotation,
              {
                x: Math.PI * 0.5,
                y: Math.PI * 2,
                z: Math.PI * 1.5,
                ease: "power2.in",
              },
              "<"
            )
            .to(
              astronautRef.current.scale,
              { x: 0.01, y: 0.01, z: 0.01, ease: "power2.in" },
              "<"
            )
            .to(
              ".scene-container",
              {
                opacity: 0,
                onComplete: () =>
                  gsap.set(".scene-container", { visibility: "hidden" }),
              },
              "<"
            ); // STAGE 3: Journey Sections Transition

          const journeyTl = gsap.timeline({
            scrollTrigger: {
              trigger: journeyWrapperRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.5,
            },
          });

          journeyTl
            .fromTo(
              "#transition-to-black",
              { opacity: 0 },
              {
                opacity: 1,
                scrollTrigger: {
                  trigger: "#tech-showcase",
                  start: "bottom 70%",
                  end: "bottom top",
                  scrub: true,
                },
              }
            )
            .to("#transition-to-black", {
              opacity: 0,
              scrollTrigger: {
                trigger: "#philosophy-journey",
                start: "top 70%",
                end: "top 40%",
                scrub: true,
              },
            })
            .to("#transition-to-white", {
              opacity: 1,
              scrollTrigger: {
                trigger: "#global-reach-journey",
                start: "bottom 90%",
                end: "bottom top",
                scrub: true,
              },
            })
            .to("#transition-to-white", {
              opacity: 0,
              scrollTrigger: {
                trigger: "#projects",
                start: "top 90%",
                end: "top 60%",
                scrub: true,
              },
            });
        });
        return () => ctx.revert();
      }
    }, 100);

    const refreshTriggers = () => ScrollTrigger.refresh();
    window.addEventListener("load", refreshTriggers);

    return () => {
      clearTimeout(delayedInit);
      window.removeEventListener("load", refreshTriggers);
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <>
      {" "}
      <div
        id="transition-to-black"
        className="transition-overlay bg-black"
      ></div>{" "}
      <div
        id="transition-to-white"
        className="transition-overlay bg-background"
      ></div>
      <Scene astronautRef={astronautRef} cameraRef={cameraRef} />{" "}
      <div id="content-wrapper" className="relative z-10">
        {" "}
        <main className="container mx-auto max-w-7xl">
          <Navbar />
          <Hero />
          <Services />
          <TechShowcase />{" "}
        </main>{" "}
        <div ref={journeyWrapperRef} className="full-bleed-wrapper">
          <PhilosophyJourney />
          <ToolkitJourney />
          <GlobalReachJourney />{" "}
        </div>{" "}
        <main className="container mx-auto max-w-7xl">
          <Projects />
          <Experiences />
          <Testimonial />
          <AssetShowcase />
          <Playground />
          <Credits />
          <Contact />
          <Footer />{" "}
        </main>{" "}
      </div>{" "}
    </>
  );
};

export default App;
