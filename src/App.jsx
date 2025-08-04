// import React, { useLayoutEffect } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import Navbar from "./sections/Navbar";
// import Hero from "./sections/Hero";
// import Services from "./sections/Services";
// import TechShowcase from "./sections/TechShowcase";
// import About from "./sections/About";
// import Projects from "./sections/Projects";
// import Experiences from "./sections/Experiences";
// import Testimonial from "./sections/Testimonial";
// import Philosophy from "./sections/Philosophy";
// import Playground from "./sections/Playground";
// import AssetShowcase from "./sections/AssetShowcase";
// import Credits from "./sections/Credits";
// import Contact from "./sections/Contact";
// import Footer from "./sections/Footer";
// import Scene from "./components/Scene";
// import PhilosophyJourney from "./sections/Philosophy_Journey";
// import ToolkitJourney from "./sections/Toolkit_Journey";
// import GlobalReachJourney from "./sections/GlobalReach_Journey";
// import IntroductionJourney from "./sections/Introduction_Journey";

// gsap.registerPlugin(ScrollTrigger);

// const App = () => {
//   // useLayoutEffect(() => {
//   //   const refreshTriggers = () => {
//   //     ScrollTrigger.refresh();
//   //   };
//   //   refreshTriggers();
//   //   window.addEventListener("load", refreshTriggers);
//   //   return () => {
//   //     window.removeEventListener("load", refreshTriggers);
//   //     ScrollTrigger.getAll().forEach((t) => t.kill());
//   //   };
//   // }, []);
//   useLayoutEffect(() => {
//     const refreshTriggers = () => ScrollTrigger.refresh();
//     window.addEventListener("load", refreshTriggers);

//     const ctx = gsap.context(() => {
//       // Transisi dari terang ke gelap
//       gsap.to("#transition-to-black", {
//         opacity: 1,
//         scrollTrigger: {
//           trigger: "#tech-showcase",
//           start: "bottom 70%",
//           end: "bottom top",
//           scrub: true,
//         },
//       });
//       // Transisi kembali ke terang SETELAH semua journey selesai
//       gsap.to("#transition-to-black", {
//         opacity: 0,
//         scrollTrigger: {
//           trigger: "#global-reach-journey", // Pemicu di akhir journey
//           start: "bottom bottom",
//           end: "bottom 70%",
//           scrub: true,
//         },
//       });
//     });

//     return () => {
//       window.removeEventListener("load", refreshTriggers);
//       ScrollTrigger.getAll().forEach((t) => t.kill());
//       ctx.revert();
//     };
//   }, []);

//   return (
//     <>
//       <Scene />
//       <div id="content" className="relative z-10">
//         <main className="container mx-auto max-w-7xl">
//           <Navbar />
//           <Hero />
//           <Services />
//           <TechShowcase />
//         </main>
//         {/* Journey Sections sekarang lengkap dengan 3 bagian */}
//         <div className="full-bleed-wrapper bg-black">
//           <IntroductionJourney /> {/* <-- TAMBAHKAN DI SINI */}
//           <PhilosophyJourney />
//           <ToolkitJourney />
//           <GlobalReachJourney />
//         </div>
//         <main className="container mx-auto max-w-7xl">
//           {/* <About /> */}
//           <Projects />
//           <Experiences />
//           <Testimonial />
//           <Philosophy />
//           <Playground />
//           <AssetShowcase /> {/* <-- TAMBAHKAN DI SINI */}
//           <Credits />
//           <Contact />
//           <Footer />
//         </main>
//       </div>
//     </>
//   );
// };

// export default App;
import React, { Suspense, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Navbar from "./sections/Navbar";
import Footer from "./sections/Footer";
import Scene from "./components/Scene";

const Hero = React.lazy(() => import("./sections/Hero"));
const Services = React.lazy(() => import("./sections/Services"));
const TechShowcase = React.lazy(() => import("./sections/TechShowcase"));
const IntroductionJourney = React.lazy(() =>
  import("./sections/Introduction_Journey")
);
const PhilosophyJourney = React.lazy(() =>
  import("./sections/Philosophy_Journey")
);
const ToolkitJourney = React.lazy(() => import("./sections/Toolkit_Journey"));
const GlobalReachJourney = React.lazy(() =>
  import("./sections/GlobalReach_Journey")
);
const Projects = React.lazy(() => import("./sections/Projects"));
const Experiences = React.lazy(() => import("./sections/Experiences"));
const Testimonial = React.lazy(() => import("./sections/Testimonial"));
const Philosophy = React.lazy(() => import("./sections/Philosophy")); // <-- DITAMBAHKAN KEMBALI
const Playground = React.lazy(() => import("./sections/Playground"));
const AssetShowcase = React.lazy(() => import("./sections/AssetShowcase"));
const Credits = React.lazy(() => import("./sections/Credits"));
const Contact = React.lazy(() => import("./sections/Contact"));

gsap.registerPlugin(ScrollTrigger);

const SectionLoader = () => (
  <div className="flex items-center justify-center h-screen">
    <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-accent-dark"></div>
  </div>
);

const App = () => {
  useLayoutEffect(() => {
    const refreshTriggers = () => ScrollTrigger.refresh();
    window.addEventListener("load", refreshTriggers);

    const ctx = gsap.context(() => {
      gsap.to("#transition-to-black", {
        opacity: 1,
        scrollTrigger: {
          trigger: "#tech-showcase",
          start: "bottom 70%",
          end: "bottom top",
          scrub: true,
        },
      });
      gsap.to("#transition-to-black", {
        opacity: 0,
        scrollTrigger: {
          trigger: "#global-reach-journey",
          start: "bottom bottom",
          end: "bottom 70%",
          scrub: true,
        },
      });
    });

    return () => {
      window.removeEventListener("load", refreshTriggers);
      ScrollTrigger.getAll().forEach((t) => t.kill());
      ctx.revert();
    };
  }, []);

  return (
    <>
      <div
        id="transition-to-black"
        className="transition-overlay bg-black"
      ></div>
      <Scene />
      <div id="content" className="relative z-10">
        <Navbar />

        <main className="container mx-auto max-w-7xl">
          <Suspense fallback={<SectionLoader />}>
            <Hero />
            <Services />
            <TechShowcase />
          </Suspense>
        </main>

        <div className="full-bleed-wrapper bg-black">
          <Suspense fallback={<SectionLoader />}>
            <IntroductionJourney />
            <PhilosophyJourney />
            <ToolkitJourney />
            <GlobalReachJourney />
          </Suspense>
        </div>

        <main className="container mx-auto max-w-7xl">
          <Suspense fallback={<SectionLoader />}>
            <Projects />
            <Experiences />
            <Testimonial />
            <Philosophy /> {/* <-- DITEMPATKAN DI SINI */}
            <Playground />
            <AssetShowcase />
            <Credits />
            <Contact />
          </Suspense>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default App;
