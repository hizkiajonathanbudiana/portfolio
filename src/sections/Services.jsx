// import { useLayoutEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const servicesData = [
//   {
//     icon: "🎨",
//     title: "Web & UI/UX Design",
//     description:
//       "Creating intuitive and beautiful user interfaces that provide a seamless user experience.",
//   },
//   {
//     icon: "💻",
//     title: "Web Development",
//     description:
//       "Building responsive and high-performance websites using modern technologies.",
//   },
//   {
//     icon: "🚀",
//     title: "3D & Interactive Web",
//     description:
//       "Integrating stunning 3D models and interactive animations to bring your ideas to life.",
//   },
// ];

// const Services = () => {
//   const sectionRef = useRef(null);

//   useLayoutEffect(() => {
//     const element = sectionRef.current;
//     if (!element) return;

//     const cards = element.querySelectorAll(".service-card");

//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: element,
//         start: "top 80%",
//         end: "bottom 80%",
//         scrub: 2,
//       },
//     });

//     tl.from(cards, {
//       y: 100,
//       opacity: 0,
//       stagger: 0.2,
//     });

//     return () => {
//       tl.kill();
//     };
//   }, []);

//   return (
//     <section ref={sectionRef} className="c-space section-spacing" id="services">
//       <div className="text-center">
//         <h2 className="text-heading">What I Offer</h2>
//         <p className="max-w-2xl mx-auto mt-4 subtext">
//           From concept to deployment, I provide a complete range of services to
//           build and enhance your digital presence.
//         </p>
//       </div>

//       <div className="grid grid-cols-1 gap-8 mt-16 md:grid-cols-3">
//         {servicesData.map((service, index) => (
//           <div
//             key={index}
//             className="p-8 text-center bg-white border border-black/5 rounded-2xl shadow-sm service-card"
//           >
//             <div className="flex items-center justify-center w-16 h-16 mx-auto text-4xl rounded-full bg-accent-light">
//               {service.icon}
//             </div>
//             <h3 className="mt-6 text-xl font-bold">{service.title}</h3>
//             <p className="mt-2 subtext">{service.description}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Services;

import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const servicesData = [
  {
    icon: "🎨",
    title: "Web & UI/UX Design",
    description:
      "Creating intuitive and beautiful user interfaces that provide a seamless user experience.",
  },
  {
    icon: "💻",
    title: "Web Development",
    description:
      "Building responsive and high-performance websites using modern technologies.",
  },
  {
    icon: "🚀",
    title: "3D & Interactive Web",
    description:
      "Integrating stunning 3D models and interactive animations to bring your ideas to life.",
  },
];

const ServicesComponent = () => {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const element = sectionRef.current;
    if (!element) return;

    const cards = element.querySelectorAll(".service-card");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: element,
        start: "top 80%",
        end: "bottom 80%",
        scrub: 2,
      },
    });

    tl.from(cards, {
      y: 100,
      opacity: 0,
      stagger: 0.2,
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section ref={sectionRef} className="c-space section-spacing" id="services">
      <div className="text-center">
        <h2 className="text-heading">What I Offer</h2>
        <p className="max-w-2xl mx-auto mt-4 subtext">
          From concept to deployment, I provide a complete range of services to
          build and enhance your digital presence.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 mt-16 md:grid-cols-3">
        {servicesData.map((service, index) => (
          <div
            key={index}
            className="p-8 text-center bg-white border border-black/5 rounded-2xl shadow-sm service-card gpu-layer"
          >
            <div className="flex items-center justify-center w-16 h-16 mx-auto text-4xl rounded-full bg-accent-light">
              {service.icon}
            </div>
            <h3 className="mt-6 text-xl font-bold">{service.title}</h3>
            <p className="mt-2 subtext">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const Services = React.memo(ServicesComponent);
export default Services;
