import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Loader from "./Loader";

const InteractiveContent = React.lazy(() => import("./InteractiveContent"));

const HeroCanvas = ({ isMobile }) => {
  return (
    <Canvas camera={{ position: [0, 1, 5], fov: 60 }}>
      <Suspense fallback={<Loader />}>
        <InteractiveContent section="3d" isMobile={isMobile} />
      </Suspense>
    </Canvas>
  );
};

export default HeroCanvas;
