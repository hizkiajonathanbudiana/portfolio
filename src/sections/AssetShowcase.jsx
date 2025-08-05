// import React, { useLayoutEffect, useRef, Suspense } from "react";
// import { Canvas } from "@react-three/fiber";
// import { OrbitControls, Stage } from "@react-three/drei";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { AnimeGirl } from "../components/McLaren";

// gsap.registerPlugin(ScrollTrigger);

// const AssetShowcase = () => {
//   const sectionRef = useRef(null);
//   const modelRef = useRef(null);

//   useLayoutEffect(() => {
//     const ctx = gsap.context(() => {
//       if (modelRef.current) {
//         gsap.to(modelRef.current.rotation, {
//           y: Math.PI * 2, // Berputar 360 derajat
//           ease: "none",
//           scrollTrigger: {
//             trigger: sectionRef.current,
//             start: "top top",
//             end: "bottom bottom",
//             scrub: 1,
//           },
//         });
//       }
//     }, sectionRef);
//     return () => ctx.revert();
//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       id="asset-showcase"
//       className="relative h-screen overflow-hidden"
//     >
//       <div className="absolute inset-x-0 top-[15vh] z-10 text-center c-space">
//         <h2 className="text-heading">Custom Asset Showcase</h2>
//         <p className="subtext mt-4 max-w-2xl mx-auto">
//           Integrating custom 3D models allows for dynamic, story-driven web
//           experiences.
//         </p>
//       </div>
//       <Canvas camera={{ position: [0, 1, 4], fov: 70 }}>
//         <Suspense fallback={null}>
//           <Stage environment="city" intensity={0.5}>
//             <group ref={modelRef}>
//               <AnimeGirl scale={2.5} position={[0, -2, 0]} />
//             </group>
//           </Stage>
//           <OrbitControls
//             enableZoom={false}
//             enablePan={false}
//             autoRotate
//             autoRotateSpeed={0.5}
//           />
//         </Suspense>
//       </Canvas>
//     </section>
//   );
// };

// export default AssetShowcase;

import React, { useLayoutEffect, useRef, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AnimeGirl } from "../components/McLaren";

gsap.registerPlugin(ScrollTrigger);

const AssetShowcaseComponent = () => {
  const sectionRef = useRef(null);
  const modelRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      if (modelRef.current) {
        gsap.to(modelRef.current.rotation, {
          y: Math.PI * 2,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom bottom",
            scrub: 1,
          },
        });
      }
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="asset-showcase"
      className="relative h-screen overflow-hidden gpu-layer"
    >
      <div className="absolute inset-x-0 top-[15vh] z-10 text-center c-space">
        <h2 className="text-heading">Custom Asset Showcase</h2>
        <p className="subtext mt-4 max-w-2xl mx-auto">
          Integrating custom 3D models allows for dynamic, story-driven web
          experiences.
        </p>
      </div>
      <Canvas camera={{ position: [0, 1, 4], fov: 70 }}>
        <Suspense fallback={null}>
          <Stage environment="city" intensity={0.5}>
            <group ref={modelRef}>
              <AnimeGirl scale={2.5} position={[0, -2, 0]} />
            </group>
          </Stage>
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.5}
          />
        </Suspense>
      </Canvas>
    </section>
  );
};

const AssetShowcase = React.memo(AssetShowcaseComponent);
export default AssetShowcase;
