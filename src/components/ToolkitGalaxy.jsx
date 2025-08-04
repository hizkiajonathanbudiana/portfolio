// import React, { useRef, useMemo, useLayoutEffect } from "react";
// import { useThree } from "@react-three/fiber";
// import { Image, Cloud } from "@react-three/drei";
// import * as THREE from "three";
// import { inSphere } from "maath/random";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { toolkitData } from "../constants";
// import { useFrame } from "@react-three/fiber";

// gsap.registerPlugin(ScrollTrigger);

// const TechLogo = ({ position, url }) => {
//   const ref = useRef();

//   useFrame((state, delta) => {
//     // Memberi sedikit rotasi acak dan halus pada setiap logo
//     ref.current.rotation.y += delta * 0.1;
//     ref.current.rotation.x += delta * 0.05;
//   });

//   return (
//     <Image
//       ref={ref}
//       url={`/assets/logos/${url}.svg`}
//       scale={1.5}
//       position={position}
//       transparent
//     />
//   );
// };

// export const ToolkitGalaxy = () => {
//   const camera = useThree((state) => state.camera);
//   const galaxyRef = useRef();

//   const logos = useMemo(() => {
//     const temp = [];
//     // Menggunakan inSphere untuk distribusi 3D yang lebih natural
//     const spherical = inSphere(new Float32Array(5000), { radius: 10 });
//     for (let i = 0; i < toolkitData.length; i++) {
//       const x = spherical[i * 3];
//       const y = spherical[i * 3 + 1];
//       const z = spherical[i * 3 + 2];
//       temp.push({
//         pos: new THREE.Vector3(x, y, z),
//         url: toolkitData[i],
//       });
//     }
//     return temp;
//   }, []);

//   useLayoutEffect(() => {
//     // Hapus 'galaxyRef' dari context. Ini memberitahu GSAP untuk mencari
//     // '#toolkit-journey' di seluruh dokumen HTML, bukan di dalam scene 3D.
//     const ctx = gsap.context(() => {
//       gsap.to(camera.position, {
//         z: -12, // Kamera terbang menembus galaksi
//         scrollTrigger: {
//           trigger: "#toolkit-journey",
//           start: "top top",
//           end: "bottom bottom",
//           scrub: 1.5,
//         },
//       });
//     });
//     return () => ctx.revert();
//   }, [camera]);

//   return (
//     <group ref={galaxyRef}>
//       <Cloud position={[0, 0, -15]} speed={0.2} opacity={0.3} />
//       <Cloud position={[0, 5, -10]} speed={0.2} opacity={0.2} />
//       <Cloud position={[0, -5, -5]} speed={0.2} opacity={0.2} />
//       {logos.map((logo, i) => (
//         <TechLogo key={i} position={logo.pos} url={logo.url} />
//       ))}
//     </group>
//   );
// };
import React, { useRef, useMemo, useLayoutEffect } from "react";
import { useThree, useFrame } from "@react-three/fiber";
import { Image, Cloud, Clouds } from "@react-three/drei";
import * as THREE from "three";
import { inSphere } from "maath/random";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { toolkitData } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const TechLogo = ({ position, url }) => {
  const ref = useRef();

  useFrame((state, delta) => {
    ref.current.rotation.y += delta * 0.1;
    ref.current.rotation.x += delta * 0.05;
  });

  return (
    <Image
      ref={ref}
      url={`/assets/logos/${url}.svg`}
      scale={1.5}
      position={position}
      transparent
    />
  );
};

export const ToolkitGalaxy = () => {
  const camera = useThree((state) => state.camera);
  const galaxyRef = useRef();

  const logos = useMemo(() => {
    const temp = [];
    const spherical = inSphere(new Float32Array(5000), { radius: 10 });
    for (let i = 0; i < toolkitData.length; i++) {
      const x = spherical[i * 3];
      const y = spherical[i * 3 + 1];
      const z = spherical[i * 3 + 2];
      temp.push({
        pos: new THREE.Vector3(x, y, z),
        url: toolkitData[i],
      });
    }
    return temp;
  }, []);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(camera.position, {
        z: -12,
        scrollTrigger: {
          trigger: "#toolkit-journey",
          start: "top top",
          end: "bottom bottom",
          scrub: 1.5,
        },
      });
    });
    return () => ctx.revert();
  }, [camera]);

  return (
    <group ref={galaxyRef}>
      {/* --- INI BAGIAN PERBAIKANNYA --- */}
      {/* Hapus properti 'material' agar komponen menggunakan material default-nya yang benar */}
      <Clouds>
        <Cloud
          segments={100} // Detail awan ditingkatkan
          bounds={[15, 10, 25]} // Volume penyebaran awan
          volume={20} // Kepadatan awan ditingkatkan
          color="white"
          opacity={0.15}
        />
      </Clouds>

      {logos.map((logo, i) => (
        <TechLogo key={i} position={logo.pos} url={logo.url} />
      ))}
    </group>
  );
};
