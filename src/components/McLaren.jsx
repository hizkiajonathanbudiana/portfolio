import React from "react";
import { useGLTF } from "@react-three/drei";

export const AnimeGirl = (props) => {
  // Kita hanya perlu mengambil 'scene' dari file GLB
  const { scene } = useGLTF("/models/McLaren.glb");

  // <primitive> akan merender seluruh scene tanpa perlu tahu nama bagian-bagiannya
  return <primitive object={scene} {...props} />;
};

useGLTF.preload("/models/McLaren.glb");
