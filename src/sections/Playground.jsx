// import React, { Suspense } from "react";
// import { Canvas } from "@react-three/fiber";
// import { OrbitControls, Stage } from "@react-three/drei";
// import FlippingCard from "../components/FlippingCard";

// const Playground = () => {
//   return (
//     <section
//       id="playground"
//       className="relative h-screen overflow-hidden flex flex-col justify-center"
//     >
//       <div className="text-center c-space mb-8">
//         <h2 className="text-heading">Interactive Playground</h2>
//         <p className="subtext mt-4 max-w-2xl mx-auto">
//           Click the card to flip it and reveal the core technologies behind this
//           portfolio's motion design.
//         </p>
//       </div>
//       <Canvas camera={{ position: [0, 1, 6], fov: 70 }}>
//         <Suspense fallback={null}>
//           {/* Stage menambahkan pencahayaan dan environment dasar yang bagus */}
//           <Stage environment="city" intensity={0.6}>
//             <FlippingCard />
//           </Stage>
//           <OrbitControls
//             enableZoom={false}
//             enablePan={false}
//             minPolarAngle={Math.PI / 2.5}
//             maxPolarAngle={Math.PI / 2.5}
//           />
//         </Suspense>
//       </Canvas>
//     </section>
//   );
// };

// export default Playground;

import React, { useRef, useState, useEffect, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Stage, Text, RoundedBox, OrbitControls } from "@react-three/drei";
import gsap from "gsap";
import * as THREE from "three";

// Komponen Card sekarang memiliki logikanya sendiri
const Card = () => {
  const cardRef = useRef();
  const [isFlipped, setIsFlipped] = useState(false);

  // useEffect akan memicu animasi setiap kali state isFlipped berubah
  useEffect(() => {
    gsap.to(cardRef.current.rotation, {
      y: isFlipped ? Math.PI : 0, // Tujuan rotasi berdasarkan state
      duration: 0.8,
      ease: "power3.inOut",
    });
  }, [isFlipped]);

  return (
    <group
      ref={cardRef}
      onClick={() => setIsFlipped(!isFlipped)} // Toggle state saat di-klik
      onPointerOver={() => (document.body.style.cursor = "pointer")}
      onPointerOut={() => (document.body.style.cursor = "auto")}
    >
      {/* Sisi Depan */}
      <group>
        <RoundedBox args={[3.5, 4.5, 0.1]} radius={0.1}>
          <meshStandardMaterial color="#1a1a1a" side={THREE.DoubleSide} />
        </RoundedBox>
        <Text
          position={[0, 0, 0.06]}
          fontSize={0.4}
          color="#FFFFFF"
          anchorX="center"
          anchorY="middle"
          maxWidth={3}
          textAlign="center"
        >
          My Secret Weapon?
        </Text>
      </group>
      {/* Sisi Belakang */}
      <group rotation-y={Math.PI}>
        <RoundedBox args={[3.5, 4.5, 0.1]} radius={0.1}>
          <meshStandardMaterial color="#F8F7F4" side={THREE.DoubleSide} />
        </RoundedBox>
        <Text
          position={[0, 0, 0.06]}
          fontSize={0.25}
          color="#1a1a1a"
          anchorX="center"
          anchorY="middle"
          maxWidth={3}
          textAlign="center"
        >
          GSAP for fluid motion & Three.js for immersive scenes.
        </Text>
      </group>
    </group>
  );
};

const Playground = () => {
  return (
    <section
      id="playground"
      className="relative h-screen overflow-hidden flex flex-col justify-center"
    >
      <div className="text-center c-space mb-8">
        <h2 className="text-heading">Interactive Playground</h2>
        <p className="subtext mt-4 max-w-2xl mx-auto">
          Click the card to flip it.
        </p>
      </div>
      <Canvas camera={{ position: [0, 0, 7], fov: 60 }}>
        <Suspense fallback={null}>
          <Stage environment="city" intensity={0.5}>
            <Card />
          </Stage>
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            minAzimuthAngle={-Math.PI / 8}
            maxAzimuthAngle={Math.PI / 8}
            minPolarAngle={Math.PI / 2}
            maxPolarAngle={Math.PI / 2}
          />
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Playground;
