import React, { useLayoutEffect, useRef, Suspense } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Astronaut } from "../components/Astronaut";
import HeroTextInteractive from "../components/HeroText.interactive";
import Loader from "../components/Loader";

gsap.registerPlugin(ScrollTrigger);

const Hero3DScene = () => {
  const isMobile = useMediaQuery({ maxWidth: 853 });
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
    <group ref={astronautRef}>
      <Astronaut
        scale={isMobile ? 1.0 : 1.5}
        position={isMobile ? [0.5, -2, 0] : [2, -0.5, 0]}
        rotation={isMobile ? [-Math.PI / 2, 4, 4] : [-Math.PI / 2, 7.25, 2]}
      />
    </group>
  );
};

const HeroInteractive = () => {
  return (
    <>
      <div className="absolute top-0 left-0 w-full h-full -z-10 gpu-layer">
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
            <Hero3DScene />
          </Suspense>
        </Canvas>
      </div>
      <div className="absolute top-0 left-0 flex items-start justify-center w-full h-full md:items-start md:justify-start c-space">
        <div className="relative z-20 w-full h-full">
          <HeroTextInteractive />
        </div>
      </div>
    </>
  );
};

export default HeroInteractive;
