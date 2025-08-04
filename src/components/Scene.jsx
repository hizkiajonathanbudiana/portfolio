// // // import { Canvas, useThree } from "@react-three/fiber";
// // // import { Suspense, useRef, useLayoutEffect, useEffect } from "react";
// // // import { useMediaQuery } from "react-responsive";
// // // import gsap from "gsap";
// // // import { ScrollTrigger } from "gsap/ScrollTrigger";
// // // import { Astronaut } from "../components/Astronaut";
// // // import Loader from "../components/Loader";

// // // gsap.registerPlugin(ScrollTrigger);

// // // const SceneContent = () => {
// // //   const isMobile = useMediaQuery({ maxWidth: 853 });
// // //   const astronautRef = useRef();
// // //   const camera = useThree((state) => state.camera);
// // //   const scene = useThree((state) => state.scene);

// // //   useEffect(() => {
// // //     if (astronautRef.current) {
// // //       astronautRef.current.traverse((child) => {
// // //         if (child.isSkinnedMesh && child.material) {
// // //           child.material.transparent = true;
// // //           child.material.opacity = 1;
// // //         }
// // //       });
// // //     }
// // //   }, []);

// // //   useLayoutEffect(() => {
// // //     const ctx = gsap.context(() => {
// // //       if (astronautRef.current) {
// // //         // --- STAGE 1: Hero Animation ---
// // //         const heroTl = gsap.timeline({
// // //           scrollTrigger: {
// // //             trigger: "#hero-section",
// // //             start: "top top",
// // //             end: "bottom top",
// // //             scrub: 1.5,
// // //           },
// // //         });

// // //         const finalScale = isMobile ? 0.2 : 0.15;
// // //         const finalPosition = isMobile ? [0, -2, 0] : [2.5, -2, -1];
// // //         const finalRotation = isMobile
// // //           ? [0, 0, 0]
// // //           : [0, Math.PI / 4, -Math.PI / 8];

// // //         heroTl.to(
// // //           astronautRef.current.scale,
// // //           { x: finalScale, y: finalScale, z: finalScale },
// // //           0
// // //         );
// // //         heroTl.to(
// // //           astronautRef.current.position,
// // //           { x: finalPosition[0], y: finalPosition[1], z: finalPosition[2] },
// // //           0
// // //         );
// // //         heroTl.to(
// // //           astronautRef.current.rotation,
// // //           { x: finalRotation[0], y: finalRotation[1], z: finalRotation[2] },
// // //           0
// // //         );
// // //         heroTl.to(
// // //           camera.position,
// // //           { x: isMobile ? 0 : 1, y: isMobile ? 1 : 0, z: 7 },
// // //           0
// // //         );

// // //         // --- STAGE 2 & 3: Fly-in and Fade-out ---
// // //         const aboutTrigger = document.getElementById("tech-showcase");
// // //         const flyInTl = gsap.timeline({
// // //           scrollTrigger: {
// // //             trigger: aboutTrigger,
// // //             start: "top 10%",
// // //             end: "top top",
// // //             scrub: 1.5,
// // //           },
// // //         });

// // //         flyInTl.to(camera.position, {
// // //           x: isMobile ? 0 : 2.4,
// // //           y: isMobile ? -1.8 : -1.9,
// // //           z: isMobile ? 1.5 : -0.8,
// // //         });
// // //         flyInTl.to(camera.rotation, { x: 0, y: 0, z: 0 }, 0);

// // //         astronautRef.current.traverse((child) => {
// // //           if (child.isSkinnedMesh) {
// // //             flyInTl.to(child.material, { opacity: 0 }, "<50%");
// // //           }
// // //         });

// // //         flyInTl.to(".scene-container", { opacity: 0 }, "<75%");
// // //       }
// // //     }, scene); // Scoping context ke scene

// // //     return () => ctx.revert();
// // //   }, [isMobile, camera, scene]);

// // //   return (
// // //     <group ref={astronautRef}>
// // //       {/* <Astronaut
// // //         scale={isMobile ? 0.23 : 0.3}
// // //         position={isMobile ? [0, -1.5, 0] : [1.3, -1, 0]}
// // //       /> */}
// // //       <Astronaut
// // //         // --- PERUBAHAN UTAMA ADA DI SINI ---
// // //         scale={isMobile ? 1.0 : 1.5} // Ukuran diperbesar 10x dari basis 0.3 & 0.45
// // //         position={isMobile ? [0.5, -2, 0] : [2, -0.5, 0]} // Posisi vertikal tetap
// // //         rotation={isMobile ? [-Math.PI / 2, 4, 4] : [-Math.PI / 2, 7.25, 2]} // Diputar 180° secara horizontal (sumbu Y)
// // //       />
// // //     </group>
// // //   );
// // // };

// // // const Scene = () => {
// // //   return (
// // //     <div className="fixed top-0 left-0 w-full h-screen -z-10 scene-container pointer-events-none">
// // //       <Canvas camera={{ position: [0, 1, 5], fov: 60 }}>
// // //         <Suspense fallback={<Loader />}>
// // //           <ambientLight intensity={1.5} />
// // //           <spotLight
// // //             position={[10, 10, 10]}
// // //             angle={0.15}
// // //             penumbra={1}
// // //             intensity={2}
// // //           />
// // //           <pointLight position={[-10, -10, -10]} intensity={1.5} />
// // //           <SceneContent />
// // //         </Suspense>
// // //       </Canvas>
// // //     </div>
// // //   );
// // // };

// // // export default Scene;
// // import { Canvas, useThree } from "@react-three/fiber";
// // import { Suspense, useLayoutEffect } from "react";
// // import { useMediaQuery } from "react-responsive";
// // import gsap from "gsap";
// // import { ScrollTrigger } from "gsap/ScrollTrigger";
// // import { Astronaut } from "../components/Astronaut";
// // import Loader from "../components/Loader";

// // gsap.registerPlugin(ScrollTrigger);

// // const SceneContent = () => {
// //   const isMobile = useMediaQuery({ maxWidth: 853 });
// //   const camera = useThree((state) => state.camera);

// //   useLayoutEffect(() => {
// //     const ctx = gsap.context(() => {
// //       // Animasi Kamera
// //       gsap.to(camera.position, {
// //         x: isMobile ? 0 : 1,
// //         y: isMobile ? 1 : 0,
// //         z: 7,
// //         scrollTrigger: {
// //           trigger: "#hero-section",
// //           start: "top top",
// //           end: "bottom top",
// //           scrub: 1.5,
// //         },
// //       });

// //       // Animasi Fade Out Seluruh Scene
// //       gsap.to(".scene-container", {
// //         opacity: 0,
// //         scrollTrigger: {
// //           trigger: "#tech-showcase",
// //           start: "top 80%",
// //           end: "top 30%",
// //           scrub: 1.5,
// //           // --- PERBAIKAN UTAMA ADA DI SINI ---
// //           onComplete: () => gsap.set(".scene-container", { display: "none" }),
// //         },
// //       });
// //     });
// //     return () => ctx.revert();
// //   }, [isMobile, camera]);

// //   return <Astronaut />;
// // };

// // const Scene = () => {
// //   return (
// //     <div className="fixed top-0 left-0 w-full h-screen -z-10 scene-container pointer-events-none">
// //       <Canvas camera={{ position: [0, 1, 5], fov: 60 }}>
// //         <Suspense fallback={<Loader />}>
// //           <ambientLight intensity={1.5} />
// //           <spotLight
// //             position={[10, 10, 10]}
// //             angle={0.15}
// //             penumbra={1}
// //             intensity={2}
// //           />
// //           <pointLight position={[-10, -10, -10]} intensity={1.5} />
// //           <SceneContent />
// //         </Suspense>
// //       </Canvas>
// //     </div>
// //   );
// // };

// // export default Scene;

// import { Canvas } from "@react-three/fiber";
// import { Suspense } from "react";
// import { Astronaut } from "../components/Astronaut";
// import Loader from "../components/Loader";

// const Scene = () => {
//   return (
//     <div className="fixed top-0 left-0 w-full h-screen -z-10 scene-container pointer-events-none">
//       <Canvas camera={{ position: [0, 1, 5], fov: 60 }}>
//         <Suspense fallback={<Loader />}>
//           <ambientLight intensity={1.5} />
//           <spotLight
//             position={[10, 10, 10]}
//             angle={0.15}
//             penumbra={1}
//             intensity={2}
//           />
//           <pointLight position={[-10, -10, -10]} intensity={1.5} />
//           <Astronaut />
//         </Suspense>
//       </Canvas>
//     </div>
//   );
// };

// export default Scene;

import { Canvas, useThree } from "@react-three/fiber";
import { Suspense, useRef, useLayoutEffect, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Astronaut } from "../components/Astronaut";
import Loader from "../components/Loader";

gsap.registerPlugin(ScrollTrigger);

const SceneContent = () => {
  const isMobile = useMediaQuery({ maxWidth: 853 });
  const astronautRef = useRef();
  const camera = useThree((state) => state.camera);
  const scene = useThree((state) => state.scene);

  useEffect(() => {
    if (astronautRef.current) {
      astronautRef.current.traverse((child) => {
        if (child.isMesh) {
          // Diubah ke isMesh agar lebih aman
          child.material.transparent = true;
          child.material.opacity = 1;
        }
      });
    }
  }, []);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      if (astronautRef.current) {
        // --- STAGE 1: Hero Animation ---
        const heroTl = gsap.timeline({
          scrollTrigger: {
            trigger: "#hero-section",
            start: "top top",
            end: "bottom top",
            scrub: 1.5,
          },
        });

        const finalScale = isMobile ? 0.2 : 0.15;
        const finalPosition = isMobile ? [0, -2, 0] : [2.5, -2, -1];
        const finalRotation = isMobile
          ? [0, 0, 0]
          : [0, Math.PI / 4, -Math.PI / 8];

        heroTl.to(
          astronautRef.current.scale,
          { x: finalScale, y: finalScale, z: finalScale },
          0
        );
        heroTl.to(
          astronautRef.current.position,
          { x: finalPosition[0], y: finalPosition[1], z: finalPosition[2] },
          0
        );
        heroTl.to(
          astronautRef.current.rotation,
          { x: finalRotation[0], y: finalRotation[1], z: finalRotation[2] },
          0
        );
        heroTl.to(
          camera.position,
          { x: isMobile ? 0 : 1, y: isMobile ? 1 : 0, z: 7 },
          0
        );

        // --- STAGE 2: Fly-in and Fade-out (Akan dikontrol oleh Astronaut.jsx) ---
        // Logika fade out dari sini dipindahkan ke Astronaut.jsx
      }
    });

    return () => ctx.revert();
  }, [isMobile, camera, scene]);

  return (
    <group ref={astronautRef}>
      <Astronaut
        scale={isMobile ? 1.0 : 1.5}
        position={isMobile ? [0.5, -2, 0] : [2, -0.5, 0]}
        rotation={isMobile ? [-Math.PI / 2, 4, 4] : [-Math.PI / 2, 7.25, 2]}
      />
    </group>
  );
};

const Scene = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-screen -z-10 scene-container pointer-events-none">
      <Canvas camera={{ position: [0, 1, 5], fov: 60 }}>
        <Suspense fallback={<Loader />}>
          <ambientLight intensity={1.5} />
          <spotLight
            position={[10, 10, 10]}
            angle={0.15}
            penumbra={1}
            intensity={2}
          />
          <pointLight position={[-10, -10, -10]} intensity={1.5} />
          <SceneContent />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Scene;
