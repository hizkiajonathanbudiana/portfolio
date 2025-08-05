import React, { useLayoutEffect, useRef } from "react";
import { useThree } from "@react-three/fiber";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Astronaut } from "./Astronaut";
import HeroTextInteractive from "./HeroText.interactive";

gsap.registerPlugin(ScrollTrigger);

// Komponen ini HANYA berisi objek 3D, tanpa Canvas
const Scene3D = ({ isMobile }) => {
  const astronautRef = useRef();
  const camera = useThree((state) => state.camera);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      if (astronautRef.current) {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: "#hero-section",
            start: "top top",
            end: "bottom top",
            scrub: 1.5,
          },
        });
        const finalScale = isMobile ? 0.25 : 0.2;
        const finalPosition = isMobile ? [0, -2, 0] : [2.5, -2, -1];
        const finalRotation = isMobile ? [0, 0, 0] : [0, Math.PI / 2, 0];
        tl.to(
          astronautRef.current.scale,
          { x: finalScale, y: finalScale, z: finalScale },
          0
        );
        tl.to(
          astronautRef.current.position,
          { x: finalPosition[0], y: finalPosition[1], z: finalPosition[2] },
          0
        );
        tl.to(
          astronautRef.current.rotation,
          { x: finalRotation[0], y: finalRotation[1], z: finalRotation[2] },
          0
        );
        tl.to(
          camera.position,
          { x: isMobile ? 0 : 1, y: isMobile ? 1 : 0, z: 7 },
          0
        );
      }
    });
    return () => ctx.revert();
  }, [isMobile, camera]);

  return (
    <>
      <ambientLight intensity={1.5} />
      <spotLight
        position={[10, 10, 10]}
        angle={0.15}
        penumbra={1}
        intensity={2}
      />
      <pointLight position={[-10, -10, -10]} intensity={1.5} />
      <group ref={astronautRef}>
        <Astronaut
          scale={isMobile ? 1.0 : 1.5}
          position={isMobile ? [0.5, -2, 0] : [2, -0.5, 0]}
          rotation={isMobile ? [-Math.PI / 2, 4, 4] : [-Math.PI / 2, 7.25, 2]}
        />
      </group>
    </>
  );
};

// Komponen "pintar" yang mengembalikan bagian yang diminta
const InteractiveContent = ({ section, isMobile }) => {
  if (section === "3d") {
    return <Scene3D isMobile={isMobile} />;
  }

  if (section === "text") {
    return <HeroTextInteractive />;
  }

  return null;
};

export default InteractiveContent;
