// // src/components/JourneyScene.jsx
// import React, { useRef, useLayoutEffect, Suspense } from "react";
// import { useThree } from "@react-three/fiber";
// import { Text, Box } from "@react-three/drei";
// import * as THREE from "three";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { philosophyData } from "../constants";

// gsap.registerPlugin(ScrollTrigger);

// const Pillar = ({ position, title }) => (
//   <group position={position}>
//     <Box args={[1, 8, 1]}>
//       <meshStandardMaterial
//         color="#A5B4FC"
//         emissive="#3730A3"
//         emissiveIntensity={0.5}
//       />
//     </Box>
//     <Text
//       position={[0, 4.5, 0]}
//       fontSize={0.8}
//       color="white"
//       anchorX="center"
//       anchorY="middle"
//     >
//       {title}
//     </Text>
//   </group>
// );

// export const JourneyScene = () => {
//   const camera = useThree((state) => state.camera);
//   const scene = useThree((state) => state.scene);
//   const mainTimeline = useRef();

//   useLayoutEffect(() => {
//     const ctx = gsap.context(() => {
//       mainTimeline.current = gsap.timeline({
//         scrollTrigger: {
//           trigger: "#philosophy-journey",
//           start: "top top",
//           end: "bottom bottom",
//           scrub: 1.5,
//         },
//       });

//       // Animasi Teks Awal
//       mainTimeline.current.to("#journey-text-1", { opacity: 1, duration: 0.5 });
//       mainTimeline.current.to(
//         camera.position,
//         {
//           x: philosophyData[0].cameraTarget[0],
//           y: philosophyData[0].cameraTarget[1],
//           z: philosophyData[0].cameraTarget[2],
//           duration: 1,
//         },
//         "<"
//       );

//       // Looping untuk membuat transisi antar pilar
//       for (let i = 0; i < philosophyData.length - 1; i++) {
//         const current = philosophyData[i];
//         const next = philosophyData[i + 1];

//         // Sembunyikan teks saat ini
//         mainTimeline.current.to(`#journey-text-${current.id}`, {
//           opacity: 0,
//           duration: 0.5,
//         });

//         // Gerakkan kamera ke pilar berikutnya
//         mainTimeline.current.to(
//           camera.position,
//           {
//             x: next.cameraTarget[0],
//             y: next.cameraTarget[1],
//             z: next.cameraTarget[2],
//             duration: 1.5,
//             onUpdate: () =>
//               camera.lookAt(
//                 next.position[0],
//                 next.position[1],
//                 next.position[2]
//               ),
//           },
//           ">"
//         );

//         // Tampilkan teks berikutnya
//         mainTimeline.current.to(
//           `#journey-text-${next.id}`,
//           { opacity: 1, duration: 0.5 },
//           "<+0.5" // Mulai 0.5 detik setelah animasi kamera dimulai
//         );
//       }
//     }, scene);

//     return () => ctx.revert();
//   }, [camera, scene]);

//   return (
//     <>
//       <ambientLight intensity={0.5} />
//       <directionalLight position={[10, 10, 5]} intensity={1} />
//       <pointLight position={[0, 0, 10]} intensity={100} color="#A5B4FC" />

//       {philosophyData.map((item) => (
//         <Pillar key={item.id} position={item.position} title={item.title} />
//       ))}
//     </>
//   );
// };

import React, { useRef, useLayoutEffect } from "react";
import { useThree } from "@react-three/fiber";
import { Text, Box } from "@react-three/drei";
import * as THREE from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { philosophyData } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const Pillar = ({ position, title }) => (
  <group position={position}>
    {" "}
    <Box args={[1, 8, 1]}>
      {" "}
      <meshStandardMaterial
        color="#A5B4FC"
        emissive="#3730A3"
        emissiveIntensity={0.5}
      />{" "}
    </Box>{" "}
    <Text
      position={[0, 4.5, 0.6]}
      fontSize={0.5}
      color="white"
      anchorX="center"
      anchorY="middle"
      rotation-x={-Math.PI / 12}
    >
      {title}{" "}
    </Text>{" "}
  </group>
);

export const JourneyScene = () => {
  const camera = useThree((state) => state.camera);
  const scene = useThree((state) => state.scene);
  const mainTimeline = useRef();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      mainTimeline.current = gsap.timeline({
        scrollTrigger: {
          trigger: "#philosophy-journey",
          start: "top top",
          end: "bottom bottom",
          scrub: 1.5,
        },
      }); // Initial camera position and text

      mainTimeline.current
        .to("#journey-text-1", { opacity: 1, duration: 0.5 })
        .to(
          camera.position,
          {
            x: philosophyData[0].cameraTarget[0],
            y: philosophyData[0].cameraTarget[1],
            z: philosophyData[0].cameraTarget[2],
            duration: 1,
            ease: "power1.inOut",
          },
          "<"
        ); // Loop for transitions

      philosophyData.forEach((item, i) => {
        if (i < philosophyData.length - 1) {
          const next = philosophyData[i + 1];

          mainTimeline.current
            .to(`#journey-text-${item.id}`, {
              opacity: 0,
              duration: 0.3,
            })
            .to(
              camera.position,
              {
                x: next.cameraTarget[0],
                y: next.cameraTarget[1],
                z: next.cameraTarget[2],
                duration: 1.5,
                ease: "power2.inOut",
              },
              ">"
            )
            .to(
              camera.rotation,
              {
                y: Math.atan2(
                  next.position[0] - next.cameraTarget[0],
                  next.position[2] - next.cameraTarget[2]
                ),
                duration: 1.5,
                ease: "power2.inOut",
              },
              "<"
            )
            .to(
              `#journey-text-${next.id}`,
              { opacity: 1, duration: 0.5 },
              "<+0.75"
            );
        }
      });
    }, scene);

    return () => ctx.revert();
  }, [camera, scene]);

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <pointLight position={[0, 0, 10]} intensity={200} color="#A5B4FC" />{" "}
      {philosophyData.map((item) => (
        <Pillar key={item.id} position={item.position} title={item.title} />
      ))}{" "}
    </>
  );
};
