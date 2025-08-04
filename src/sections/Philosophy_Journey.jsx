// // src/sections/Philosophy_Journey.jsx
// import React, { Suspense } from "react";
// import { Canvas } from "@react-three/fiber";
// import { JourneyScene } from "../components/JourneyScene";
// import { philosophyData } from "../constants";

// const PhilosophyJourney = () => {
//   return (
//     <section
//       id="philosophy-journey"
//       className="relative w-full h-[400vh] bg-black"
//     >
//       <div className="sticky top-0 flex w-full h-screen">
//         <div className="absolute z-10 w-full h-full pointer-events-none">
//           {philosophyData.map((item) => (
//             <div
//               key={item.id}
//               id={`journey-text-${item.id}`}
//               className="absolute flex flex-col items-center justify-center w-full h-screen text-center text-white opacity-0"
//             >
//               <h2 className="text-4xl font-bold md:text-6xl text-background">
//                 {item.title}
//               </h2>
//               <p className="max-w-xl mx-auto mt-4 text-lg text-gray-300 md:text-xl">
//                 {item.description}
//               </p>
//             </div>
//           ))}
//         </div>

//         <Canvas>
//           <Suspense fallback={null}>
//             <JourneyScene />
//           </Suspense>
//         </Canvas>
//       </div>
//     </section>
//   );
// };

// export default PhilosophyJourney;

import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { JourneyScene } from "../components/JourneyScene";
import { philosophyData } from "../constants";

const PhilosophyJourney = () => {
  return (
    <section
      id="philosophy-journey"
      className="relative w-full h-[400vh] bg-black"
    >
      {" "}
      <div className="sticky top-0 flex w-full h-screen">
        {" "}
        <div className="absolute z-10 w-full h-full pointer-events-none">
          {" "}
          {philosophyData.map((item) => (
            <div
              key={item.id}
              id={`journey-text-${item.id}`}
              className="absolute flex flex-col items-center justify-center w-full h-screen text-center text-white opacity-0 c-space"
            >
              {" "}
              <h2 className="text-4xl font-bold md:text-6xl text-background">
                {item.title}{" "}
              </h2>{" "}
              <p className="max-w-xl mx-auto mt-4 text-lg text-gray-300 md:text-xl">
                {item.description}{" "}
              </p>{" "}
            </div>
          ))}{" "}
        </div>{" "}
        <Canvas>
          {" "}
          <Suspense fallback={null}>
            <JourneyScene />{" "}
          </Suspense>{" "}
        </Canvas>{" "}
      </div>{" "}
    </section>
  );
};

export default PhilosophyJourney;
