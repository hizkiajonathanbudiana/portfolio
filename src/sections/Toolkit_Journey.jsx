// // // src/sections/Toolkit_Journey.jsx
// // import React, { Suspense } from "react";
// // import { Canvas } from "@react-three/fiber";
// // import { ToolkitGalaxy } from "../components/ToolkitGalaxy";

// // const ToolkitJourney = () => {
// //   return (
// //     <section
// //       id="toolkit-journey"
// //       className="relative w-full h-[300vh] bg-black"
// //     >
// //       <div className="sticky top-0 flex flex-col items-center justify-center w-full h-screen overflow-hidden">
// //         <div className="absolute top-[20vh] text-center z-10 c-space">
// //           <h2 className="text-4xl font-bold md:text-6xl text-background">
// //             The Toolkit
// //           </h2>
// //           <p className="max-w-xl mx-auto mt-4 text-lg text-gray-300 md:text-xl">
// //             Flying through the galaxy of technologies I use to build robust and
// //             scalable applications.
// //           </p>
// //         </div>
// //         <Canvas camera={{ position: [0, 0, 12], fov: 75 }}>
// //           <Suspense fallback={null}>
// //             <fog attach="fog" args={["#000000", 15, 25]} />
// //             <ambientLight intensity={1.5} />
// //             <pointLight position={[0, 0, 15]} intensity={100} color="#A5B4FC" />
// //             <ToolkitGalaxy />
// //           </Suspense>
// //         </Canvas>
// //       </div>
// //     </section>
// //   );
// // };

// // export default ToolkitJourney;

// // src/sections/Toolkit_Journey.jsx
// import React, { Suspense } from "react";
// import { Canvas } from "@react-three/fiber";
// import { ToolkitGalaxy } from "../components/ToolkitGalaxy";

// const ToolkitJourney = () => {
//   return (
//     <section
//       id="toolkit-journey"
//       className="relative w-full h-[300vh] bg-black"
//     >
//       <div className="sticky top-0 flex flex-col items-center justify-center w-full h-screen overflow-hidden">
//         <div className="absolute top-[20vh] text-center z-10 c-space">
//           <h2 className="text-4xl font-bold md:text-6xl text-background">
//             The Toolkit
//           </h2>
//           <p className="max-w-xl mx-auto mt-4 text-lg text-gray-300 md:text-xl">
//             Flying through the galaxy of technologies I use to build robust and
//             scalable applications.
//           </p>
//         </div>
//         <Canvas camera={{ position: [0, 0, 12], fov: 75 }}>
//           <Suspense fallback={null}>
//             <fog attach="fog" args={["#000000", 15, 25]} />
//             <ambientLight intensity={1.5} />
//             <pointLight position={[0, 0, 15]} intensity={100} color="#A5B4FC" />
//             <ToolkitGalaxy />
//           </Suspense>
//         </Canvas>
//       </div>
//     </section>
//   );
// };

// export default ToolkitJourney;

import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { ToolkitGalaxy } from "../components/ToolkitGalaxy";

const ToolkitJourney = () => {
  return (
    <section
      id="toolkit-journey"
      className="relative w-full h-[300vh] bg-black"
    >
      <div className="sticky top-0 flex flex-col items-center justify-center w-full h-screen overflow-hidden">
        <div className="absolute top-[20vh] text-center z-10 c-space">
          <h2 className="text-4xl font-bold md:text-6xl text-background">
            The Toolkit
          </h2>
          <p className="max-w-xl mx-auto mt-4 text-lg text-gray-300 md:text-xl">
            Flying through the galaxy of technologies I use to build robust and
            scalable applications.
          </p>
        </div>
        <Canvas camera={{ position: [0, 0, 12], fov: 75 }}>
          <Suspense fallback={null}>
            <fog attach="fog" args={["#000000", 15, 25]} />
            <ambientLight intensity={1.5} />
            <pointLight position={[0, 0, 15]} intensity={100} color="#A5B4FC" />
            <ToolkitGalaxy />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

export default ToolkitJourney;
