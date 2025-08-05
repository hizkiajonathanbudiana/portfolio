// // import React, { useLayoutEffect, useRef, Suspense } from "react";
// // import { Canvas } from "@react-three/fiber";
// // import { Image } from "@react-three/drei";
// // import gsap from "gsap";
// // import { ScrollTrigger } from "gsap/ScrollTrigger";

// // gsap.registerPlugin(ScrollTrigger);

// // const techLogos = [
// //   {
// //     name: "React",
// //     path: "/assets/logos/react.svg",
// //     description: "A JavaScript library for building user interfaces.",
// //   },
// //   {
// //     name: "Three.js",
// //     path: "/assets/logos/threejs.svg",
// //     description:
// //       "A 3D graphics library for creating and displaying animated 3D computer graphics in a web browser.",
// //   },
// //   {
// //     name: "GSAP",
// //     path: "/assets/logos/gsap.svg",
// //     description:
// //       "A robust JavaScript toolset for professional-grade animation.",
// //   },
// //   {
// //     name: "Vite",
// //     path: "/assets/logos/vitejs.svg",
// //     description:
// //       "A next-generation frontend tooling for lightning-fast development.",
// //   },
// //   {
// //     name: "TailwindCSS",
// //     path: "/assets/logos/tailwindcss.svg",
// //     description: "A utility-first CSS framework for rapid UI development.",
// //   },
// // ];

// // // Komponen 3D untuk logo
// // const TechLogo = ({ path, position }) => (
// //   <Image url={path} scale={1} position={position} transparent opacity={0.8} />
// // );

// // // Komponen BARU untuk mengelola scene 3D dan animasinya
// // const RotatingLogos = () => {
// //   const logosRef = useRef(null);

// //   useLayoutEffect(() => {
// //     // Context ini sekarang berjalan di dalam R3F, jadi logosRef dijamin ada
// //     const ctx = gsap.context(() => {
// //       if (logosRef.current) {
// //         gsap.to(logosRef.current.rotation, {
// //           y: Math.PI * 2,
// //           scrollTrigger: {
// //             trigger: "#tech-showcase",
// //             start: "top top",
// //             end: "+=3000",
// //             scrub: 1.5,
// //             pin: true, // Pinning dipindahkan ke trigger utama
// //           },
// //           ease: "power1.inOut",
// //         });
// //       }
// //     });
// //     return () => ctx.revert();
// //   }, []);

// //   return (
// //     <group ref={logosRef}>
// //       {techLogos.map((tech, index) => {
// //         const angle = (index / techLogos.length) * Math.PI * 2;
// //         const radius = 2.5;
// //         const x = Math.cos(angle) * radius;
// //         const z = Math.sin(angle) * radius;
// //         return (
// //           <TechLogo key={tech.name} path={tech.path} position={[x, 0, z]} />
// //         );
// //       })}
// //     </group>
// //   );
// // };

// // // Komponen utama yang mengelola layout DOM dan animasi teks
// // const TechShowcase = () => {
// //   const sectionRef = useRef(null);

// //   useLayoutEffect(() => {
// //     // Context ini hanya untuk elemen DOM
// //     const ctx = gsap.context(() => {
// //       const descriptions = gsap.utils.toArray(".tech-description");
// //       const tl = gsap.timeline({
// //         scrollTrigger: {
// //           trigger: sectionRef.current,
// //           start: "top top",
// //           end: "+=3000",
// //           scrub: 1.5,
// //         },
// //       });

// //       descriptions.forEach((desc, index) => {
// //         tl.fromTo(
// //           desc,
// //           { opacity: 0, y: 20 },
// //           { opacity: 1, y: 0, duration: 0.3 },
// //           index * 0.4
// //         );
// //         if (index < descriptions.length - 1) {
// //           tl.to(
// //             desc,
// //             { opacity: 0, y: -20, duration: 0.3 },
// //             (index + 1) * 0.4 - 0.1
// //           );
// //         }
// //       });
// //     }, sectionRef);

// //     return () => ctx.revert();
// //   }, []);

// //   return (
// //     <section
// //       ref={sectionRef}
// //       id="tech-showcase"
// //       className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden c-space section-spacing"
// //     >
// //       <div className="text-center w-full max-w-4xl mx-auto">
// //         <h2 className="text-heading">Technology in Motion</h2>
// //         <p className="subtext mt-4">
// //           This portfolio is built on a foundation of modern, powerful
// //           technologies, orchestrated with GSAP to create a fluid and engaging
// //           experience.
// //         </p>
// //       </div>

// //       <div className="relative w-full h-[50vh] mt-16">
// //         <div className="absolute inset-0 z-0">
// //           <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
// //             <Suspense fallback={null}>
// //               <ambientLight intensity={1.5} />
// //               <pointLight position={[10, 10, 10]} />
// //               <RotatingLogos />
// //             </Suspense>
// //           </Canvas>
// //         </div>
// //         <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
// //           <div className="relative text-center w-full h-full">
// //             {techLogos.map((tech) => (
// //               <div
// //                 key={tech.name}
// //                 className="absolute inset-0 flex flex-col items-center justify-center w-full tech-description"
// //                 style={{ opacity: 0 }}
// //               >
// //                 <h3 className="text-3xl font-bold">{tech.name}</h3>
// //                 <p className="max-w-md mx-auto mt-2 subtext">
// //                   {tech.description}
// //                 </p>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default TechShowcase;
// import React, { useLayoutEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const techLogos = [
//   {
//     name: "React",
//     path: "/assets/logos/react.svg",
//     description: "A JavaScript library for building user interfaces.",
//   },
//   {
//     name: "Three.js",
//     path: "/assets/logos/threejs.svg",
//     description: "A 3D graphics library for animated 3D computer graphics.",
//   },
//   {
//     name: "GSAP",
//     path: "/assets/logos/gsap.svg",
//     description:
//       "A robust JavaScript toolset for professional-grade animation.",
//   },
//   {
//     name: "Vite",
//     path: "/assets/logos/vitejs.svg",
//     description:
//       "A next-generation frontend tooling for lightning-fast development.",
//   },
//   {
//     name: "TailwindCSS",
//     path: "/assets/logos/tailwindcss.svg",
//     description: "A utility-first CSS framework for rapid UI development.",
//   },
// ];

// const TechShowcase = () => {
//   const sectionRef = useRef(null);

//   useLayoutEffect(() => {
//     const ctx = gsap.context(() => {
//       const logos = gsap.utils.toArray(".tech-logo-item");
//       const descriptions = gsap.utils.toArray(".tech-description");
//       const numLogos = techLogos.length;
//       const radius = sectionRef.current.offsetWidth / 4.5;

//       // Objek virtual untuk menyimpan state rotasi
//       const rotationProxy = { value: 0 };

//       // Atur posisi dan visibilitas awal
//       logos.forEach((logo, index) => {
//         const angle = (index / numLogos) * Math.PI * 2;
//         const z = Math.sin(angle) * radius;
//         const scale = (z + radius) / (2 * radius);
//         gsap.set(logo, {
//           x: Math.cos(angle) * radius,
//           scale: scale * 0.8 + 0.4,
//           zIndex: Math.round(scale * 100),
//         });
//       });
//       gsap.set(descriptions, { opacity: 0, y: 20 });

//       ScrollTrigger.create({
//         trigger: sectionRef.current,
//         start: "top top",
//         end: `+=${numLogos * 700}`,
//         pin: true,
//         scrub: 1.8,
//         snap: {
//           snapTo: 1 / (numLogos - 1),
//           duration: 0.4,
//           ease: "power2.inOut",
//         },
//         // Di sinilah keajaibannya terjadi
//         onUpdate: (self) => {
//           const progress = self.progress;
//           const currentIndex = Math.round(progress * (numLogos - 1));

//           // Animasikan nilai rotasi di objek virtual
//           gsap.to(rotationProxy, {
//             value: -progress * Math.PI * 2,
//             duration: 0.5,
//             ease: "power3.out",
//             onUpdate: () => {
//               // Gunakan nilai dari objek virtual untuk memposisikan semua logo
//               logos.forEach((logo, i) => {
//                 const angle =
//                   (i / numLogos) * Math.PI * 2 + rotationProxy.value;
//                 const z = Math.sin(angle) * radius;
//                 const scale = (z + radius) / (2 * radius);
//                 gsap.set(logo, {
//                   x: Math.cos(angle) * radius,
//                   scale: scale * 0.8 + 0.4,
//                   zIndex: Math.round(scale * 100),
//                 });
//               });
//             },
//           });

//           // Tampilkan teks yang sesuai, sembunyikan yang lain
//           descriptions.forEach((desc, index) => {
//             gsap.to(desc, {
//               opacity: index === currentIndex ? 1 : 0,
//               y: index === currentIndex ? 0 : 20,
//               duration: 0.4,
//               ease: "power2.out",
//             });
//           });
//         },
//       });
//     }, sectionRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       id="tech-showcase"
//       className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden c-space section-spacing"
//     >
//       <div className="text-center w-full max-w-4xl mx-auto z-20">
//         <h2 className="text-heading">Technology in Motion</h2>
//         <p className="subtext mt-4">
//           This portfolio is built on a foundation of modern, powerful
//           technologies, orchestrated with GSAP to create a fluid and engaging
//           experience.
//         </p>
//       </div>

//       <div className="absolute w-full h-[50vh] mt-60 z-10 flex items-center justify-center">
//         {techLogos.map((tech) => (
//           <img
//             key={tech.name}
//             src={tech.path}
//             alt={tech.name}
//             className="absolute w-20 h-20 tech-logo-item"
//           />
//         ))}
//       </div>

//       <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none mt-100">
//         <div className="relative text-center w-full h-[20vh]">
//           {techLogos.map((tech) => (
//             <div
//               key={tech.name}
//               className="absolute inset-0 flex flex-col items-center justify-center w-full tech-description"
//             >
//               <h3 className="text-3xl font-bold">{tech.name}</h3>
//               <p className="max-w-md mx-auto mt-2 subtext">
//                 {tech.description}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TechShowcase;

import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const techLogos = [
  {
    name: "React",
    path: "/assets/logos/react.svg",
    description: "A JavaScript library for building user interfaces.",
  },
  {
    name: "Three.js",
    path: "/assets/logos/threejs.svg",
    description: "A 3D graphics library for animated 3D computer graphics.",
  },
  {
    name: "GSAP",
    path: "/assets/logos/gsap.svg",
    description:
      "A robust JavaScript toolset for professional-grade animation.",
  },
  {
    name: "Vite",
    path: "/assets/logos/vitejs.svg",
    description:
      "A next-generation frontend tooling for lightning-fast development.",
  },
  {
    name: "TailwindCSS",
    path: "/assets/logos/tailwindcss.svg",
    description: "A utility-first CSS framework for rapid UI development.",
  },
];

const TechShowcaseComponent = () => {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const logos = gsap.utils.toArray(".tech-logo-item");
      const descriptions = gsap.utils.toArray(".tech-description");
      const numLogos = techLogos.length;
      const radius = sectionRef.current.offsetWidth / 4.5;

      const rotationProxy = { value: 0 };

      logos.forEach((logo, index) => {
        const angle = (index / numLogos) * Math.PI * 2;
        const z = Math.sin(angle) * radius;
        const scale = (z + radius) / (2 * radius);
        gsap.set(logo, {
          x: Math.cos(angle) * radius,
          scale: scale * 0.8 + 0.4,
          zIndex: Math.round(scale * 100),
        });
      });
      gsap.set(descriptions, { opacity: 0, y: 20 });

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: `+=${numLogos * 700}`,
        pin: true,
        scrub: 1.8,
        invalidateOnRefresh: true,
        snap: {
          snapTo: 1 / (numLogos - 1),
          duration: 0.4,
          ease: "power2.inOut",
        },
        onUpdate: (self) => {
          const progress = self.progress;
          const currentIndex = Math.round(progress * (numLogos - 1));

          gsap.to(rotationProxy, {
            value: -progress * Math.PI * 2,
            duration: 0.5,
            ease: "power3.out",
            invalidateOnRefresh: true,
            onUpdate: () => {
              logos.forEach((logo, i) => {
                const angle =
                  (i / numLogos) * Math.PI * 2 + rotationProxy.value;
                const z = Math.sin(angle) * radius;
                const scale = (z + radius) / (2 * radius);
                gsap.set(logo, {
                  x: Math.cos(angle) * radius,
                  scale: scale * 0.8 + 0.4,
                  zIndex: Math.round(scale * 100),
                });
              });
            },
          });

          descriptions.forEach((desc, index) => {
            gsap.to(desc, {
              opacity: index === currentIndex ? 1 : 0,
              y: index === currentIndex ? 0 : 20,
              duration: 0.4,
              ease: "power2.out",
            });
          });
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="tech-showcase"
      className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden c-space section-spacing"
    >
      <div className="text-center w-full max-w-4xl mx-auto z-20">
        <h2 className="text-heading">Technology in Motion</h2>
        <p className="subtext mt-4">
          This portfolio is built on a foundation of modern, powerful
          technologies, orchestrated with GSAP to create a fluid and engaging
          experience.
        </p>
      </div>

      <div className="absolute w-full h-[50vh] mt-60 z-10 flex items-center justify-center">
        {techLogos.map((tech) => (
          <img
            key={tech.name}
            src={tech.path}
            alt={tech.name}
            className="absolute w-20 h-20 tech-logo-item gpu-layer"
          />
        ))}
      </div>

      <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none mt-100">
        <div className="relative text-center w-full h-[20vh]">
          {techLogos.map((tech) => (
            <div
              key={tech.name}
              className="absolute inset-0 flex flex-col items-center justify-center w-full tech-description gpu-layer"
            >
              <h3 className="text-3xl font-bold">{tech.name}</h3>
              <p className="max-w-md mx-auto mt-2 subtext">
                {tech.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TechShowcase = React.memo(TechShowcaseComponent);
export default TechShowcase;
