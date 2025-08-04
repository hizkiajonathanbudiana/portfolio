// import { Canvas, useThree } from "@react-three/fiber";
// import { Suspense, useRef, useLayoutEffect, useEffect } from "react";
// import { useMediaQuery } from "react-responsive";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { Astronaut } from "../components/Astronaut";
// import Loader from "../components/Loader";

// gsap.registerPlugin(ScrollTrigger);

// const SceneContent = () => {
//   const isMobile = useMediaQuery({ maxWidth: 853 });
//   const astronautRef = useRef();
//   const camera = useThree((state) => state.camera);
//   const scene = useThree((state) => state.scene);

//   useEffect(() => {
//     if (astronautRef.current) {
//       astronautRef.current.traverse((child) => {
//         if (child.isSkinnedMesh && child.material) {
//           child.material.transparent = true;
//           child.material.opacity = 1;
//         }
//       });
//     }
//   }, []);

//   useLayoutEffect(() => {
//     const ctx = gsap.context(() => {
//       if (astronautRef.current) {
//         // --- STAGE 1: Hero Animation ---
//         const heroTl = gsap.timeline({
//           scrollTrigger: {
//             trigger: "#hero-section",
//             start: "top top",
//             end: "bottom top",
//             scrub: 1.5,
//           },
//         });

//         const finalScale = isMobile ? 0.2 : 0.15;
//         const finalPosition = isMobile ? [0, -2, 0] : [2.5, -2, -1];
//         const finalRotation = isMobile
//           ? [0, 0, 0]
//           : [0, Math.PI / 4, -Math.PI / 8];

//         heroTl.to(
//           astronautRef.current.scale,
//           { x: finalScale, y: finalScale, z: finalScale },
//           0
//         );
//         heroTl.to(
//           astronautRef.current.position,
//           { x: finalPosition[0], y: finalPosition[1], z: finalPosition[2] },
//           0
//         );
//         heroTl.to(
//           astronautRef.current.rotation,
//           { x: finalRotation[0], y: finalRotation[1], z: finalRotation[2] },
//           0
//         );
//         heroTl.to(
//           camera.position,
//           { x: isMobile ? 0 : 1, y: isMobile ? 1 : 0, z: 7 },
//           0
//         );

//         // --- STAGE 2 & 3: Fly-in and Fade-out ---
//         const aboutTrigger = document.getElementById("about");
//         const flyInTl = gsap.timeline({
//           scrollTrigger: {
//             trigger: aboutTrigger,
//             start: "top 90%",
//             end: "top top",
//             scrub: 1.5,
//           },
//         });

//         flyInTl.to(camera.position, {
//           x: isMobile ? 0 : 2.4,
//           y: isMobile ? -1.8 : -1.9,
//           z: isMobile ? 1.5 : -0.8,
//         });
//         flyInTl.to(camera.rotation, { x: 0, y: 0, z: 0 }, 0);

//         astronautRef.current.traverse((child) => {
//           if (child.isSkinnedMesh) {
//             flyInTl.to(child.material, { opacity: 0 }, "<50%");
//           }
//         });

//         flyInTl.to(".scene-container", { opacity: 0 }, "<75%");
//       }
//     }, scene); // Scoping context ke scene

//     return () => ctx.revert();
//   }, [isMobile, camera, scene]);

//   return (
//     <group ref={astronautRef}>
//       <Astronaut
//         scale={isMobile ? 0.23 : 0.3}
//         position={isMobile ? [0, -1.5, 0] : [1.3, -1, 0]}
//       />
//     </group>
//   );
// };

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
//           <SceneContent />
//         </Suspense>
//       </Canvas>
//     </div>
//   );
// };

// export default Scene;

import { Canvas, useThree } from "@react-three/fiber";
import { Suspense, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { Astronaut } from "../components/Astronaut";
import Loader from "../components/Loader";

// --- KOMPONEN JEMBATAN BARU ---
// Tugasnya hanya mengambil kamera dan meneruskannya ke ref
const CameraSetup = ({ cameraRef }) => {
  const { camera } = useThree();
  useEffect(() => {
    if (cameraRef) {
      cameraRef.current = camera;
    }
  }, [camera, cameraRef]);
  return null; // Komponen ini tidak merender apa-apa
};

const SceneContent = ({ astronautRef }) => {
  const isMobile = useMediaQuery({ maxWidth: 853 });

  useEffect(() => {
    if (astronautRef.current) {
      astronautRef.current.traverse((child) => {
        if (child.isSkinnedMesh && child.material) {
          child.material.transparent = true;
          child.material.opacity = 1;
        }
      });
    }
  }, [astronautRef]);

  return (
    <group ref={astronautRef}>
      <Astronaut
        scale={isMobile ? 0.23 : 0.3}
        position={isMobile ? [0, -1.5, 0] : [1.3, -1, 0]}
      />
    </group>
  );
};

// Scene sekarang menerima dan meneruskan KEDUA ref
const Scene = ({ astronautRef, cameraRef }) => {
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
          <SceneContent astronautRef={astronautRef} />
          {/* Render komponen jembatan di sini */}
          <CameraSetup cameraRef={cameraRef} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Scene;
