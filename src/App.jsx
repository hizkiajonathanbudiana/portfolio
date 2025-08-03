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
// import Credits from "./sections/Credits";
// import Contact from "./sections/Contact";
// import Footer from "./sections/Footer";
// import Scene from "./components/Scene";
// import Philosophy from "./sections/Philosophy";
// import Playground from "./sections/Playground";

// gsap.registerPlugin(ScrollTrigger);

// const App = () => {
//   useLayoutEffect(() => {
//     // Setup scrollerProxy hanya sekali
//     ScrollTrigger.scrollerProxy(document.body, {
//       scrollTop(value) {
//         if (arguments.length) {
//           window.scrollTo(0, value);
//         }
//         return window.pageYOffset;
//       },
//       getBoundingClientRect() {
//         return {
//           top: 0,
//           left: 0,
//           width: window.innerWidth,
//           height: window.innerHeight,
//         };
//       },
//     });

//     ScrollTrigger.defaults({ scroller: document.body });

//     // --- INI BAGIAN PERBAIKANNYA ---
//     // Buat fungsi refresh untuk dipanggil ulang
//     const refreshTriggers = () => {
//       ScrollTrigger.refresh();
//     };

//     // Panggil refresh pertama kali
//     refreshTriggers();

//     // Tambahkan event listener untuk me-refresh SETELAH semua aset (gambar, dll) selesai dimuat
//     window.addEventListener("load", refreshTriggers);

//     // Cleanup function untuk menghapus event listener
//     return () => {
//       window.removeEventListener("load", refreshTriggers);
//       ScrollTrigger.getAll().forEach((t) => t.kill());
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
//           <About />
//           <Projects />
//           <Experiences />
//           <Testimonial />
//           <Philosophy />
//           <Playground />
//           <Credits />
//           <Contact />
//           <Footer />
//         </main>
//       </div>
//     </>
//   );
// };

// export default App;

import React, { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import Services from "./sections/Services";
import TechShowcase from "./sections/TechShowcase";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Experiences from "./sections/Experiences";
import Testimonial from "./sections/Testimonial";
import Philosophy from "./sections/Philosophy";
import Playground from "./sections/Playground";
import AssetShowcase from "./sections/AssetShowcase"; // <-- IMPORT BARU
import Credits from "./sections/Credits";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import Scene from "./components/Scene";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  useLayoutEffect(() => {
    const refreshTriggers = () => {
      ScrollTrigger.refresh();
    };
    refreshTriggers();
    window.addEventListener("load", refreshTriggers);
    return () => {
      window.removeEventListener("load", refreshTriggers);
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <>
      <Scene />
      <div id="content" className="relative z-10">
        <main className="container mx-auto max-w-7xl">
          <Navbar />
          <Hero />
          <Services />
          <TechShowcase />
          <About />
          <Projects />
          <Experiences />
          <Testimonial />
          <Philosophy />
          <Playground />
          <AssetShowcase /> {/* <-- TAMBAHKAN DI SINI */}
          <Credits />
          <Contact />
          <Footer />
        </main>
      </div>
    </>
  );
};

export default App;
