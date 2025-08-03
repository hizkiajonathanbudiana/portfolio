import React, { useRef, useState, useEffect } from "react";
import { Text, RoundedBox } from "@react-three/drei";
import * as THREE from "three";
import gsap from "gsap";

const CardFace = ({ text, color, position, rotation, isTitle = false }) => (
  <group position={position} rotation={rotation}>
    <RoundedBox args={[3, 4, 0.1]} radius={0.1}>
      <meshStandardMaterial color={color} side={THREE.DoubleSide} />
    </RoundedBox>
    <Text
      position={[0, 0, 0.06]}
      fontSize={isTitle ? 0.4 : 0.25}
      color={isTitle ? "#FFFFFF" : "#1a1a1a"}
      anchorX="center"
      anchorY="middle"
      maxWidth={2.5}
      textAlign="center"
      fontStyle="italic"
    >
      {text}
    </Text>
  </group>
);

const FlippingCard = () => {
  const cardGroupRef = useRef();
  const [isFlipped, setIsFlipped] = useState(false);

  // Efek ini akan berjalan setiap kali state 'isFlipped' berubah
  useEffect(() => {
    gsap.to(cardGroupRef.current.rotation, {
      y: isFlipped ? Math.PI : 0, // Berputar 180 derajat jika isFlipped, kembali ke 0 jika tidak
      duration: 0.7,
      ease: "power3.inOut",
    });
  }, [isFlipped]);

  return (
    <group
      ref={cardGroupRef}
      onClick={(e) => {
        e.stopPropagation(); // Mencegah klik "tembus" ke elemen lain
        setIsFlipped(!isFlipped); // Ubah state saat di-klik
      }}
      onPointerOver={() => (document.body.style.cursor = "pointer")}
      onPointerOut={() => (document.body.style.cursor = "auto")}
    >
      <CardFace
        text="My Secret Weapon?"
        color="#1a1a1a"
        position={[0, 0, 0]}
        isTitle={true}
      />
      <CardFace
        text={"GSAP for fluid motion & Three.js for immersive scenes."}
        color="#F8F7F4"
        rotation={[0, Math.PI, 0]}
      />
    </group>
  );
};

export default FlippingCard;
