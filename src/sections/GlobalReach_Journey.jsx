// // src/sections/GlobalReach_Journey.jsx
// import React, { useRef, useLayoutEffect } from "react";
// import { Globe } from "../components/globe";
// import CopyEmailButton from "../components/CopyEmailButton";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const GlobalReachJourney = () => {
//   const sectionRef = useRef(null);
//   const globeRef = useRef(null);
//   const textRef = useRef(null);

//   useLayoutEffect(() => {
//     const ctx = gsap.context(() => {
//       const tl = gsap.timeline({
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top center",
//           end: "center center",
//           scrub: 1.5,
//         },
//       });

//       tl.fromTo(
//         globeRef.current,
//         { scale: 1.5, y: "10vh" },
//         { scale: 1, y: 0, ease: "power2.inOut" }
//       );

//       tl.fromTo(
//         textRef.current,
//         { opacity: 0, y: 50 },
//         { opacity: 1, y: 0, ease: "power2.out" },
//         "<"
//       );
//     }, sectionRef);
//     return () => ctx.revert();
//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       id="global-reach-journey"
//       className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden c-space bg-black"
//     >
//       <div ref={globeRef} className="w-full md:w-1/2">
//         <Globe />
//       </div>
//       <div
//         ref={textRef}
//         className="flex flex-col items-center gap-4 text-center text-background"
//       >
//         <h2 className="text-4xl font-bold md:text-6xl">
//           Ready to build together?
//         </h2>
//         <p className="max-w-xl text-lg text-gray-300 md:text-xl">
//           I'm based in South Tangerang, Indonesia, and ready to collaborate on
//           projects worldwide. Let's create something amazing.
//         </p>
//         <div className="mt-4">
//           <CopyEmailButton />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default GlobalReachJourney;

import React from "react";
import { Globe } from "../components/globe";
import CopyEmailButton from "../components/CopyEmailButton";

const GlobalReachJourney = () => {
  return (
    <section
      id="global-reach-journey"
      className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden bg-black c-space"
    >
      <div className="w-full md:w-1/2">
        <Globe />
      </div>
      <div className="flex flex-col items-center gap-4 text-center text-background">
        <h2 className="text-4xl font-bold md:text-6xl">
          Ready to build together?
        </h2>
        <p className="max-w-xl text-lg text-gray-300 md:text-xl">
          I'm based in South Tangerang, Indonesia, and ready to collaborate on
          projects worldwide. Let's create something amazing.
        </p>
        <div className="mt-4">
          <CopyEmailButton />
        </div>
      </div>
    </section>
  );
};

export default GlobalReachJourney;
