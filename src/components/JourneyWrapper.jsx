// import React, { useLayoutEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const JourneyWrapper = ({ children }) => {
//   const wrapperRef = useRef(null);

//   useLayoutEffect(() => {
//     const ctx = gsap.context(() => {
//       gsap.to(wrapperRef.current, {
//         backgroundColor: "#000000",
//         color: "#F8F7F4",
//         scrollTrigger: {
//           trigger: wrapperRef.current,
//           start: "top 70%",
//           end: "top 30%",
//           scrub: 1,
//         },
//       });

//       gsap.to(wrapperRef.current, {
//         backgroundColor: "#F8F7F4",
//         color: "#1a1a1a",
//         scrollTrigger: {
//           trigger: wrapperRef.current,
//           start: "bottom 70%",
//           end: "bottom 30%",
//           scrub: 1,
//         },
//       });
//     }, wrapperRef);
//     return () => ctx.revert();
//   }, []);

//   return (
//     <div ref={wrapperRef} className="full-bleed-wrapper">
//       {children}
//     </div>
//   );
// };

// export default JourneyWrapper;

import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const JourneyWrapper = ({ children }) => {
  const wrapperRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const wrapper = wrapperRef.current;

      gsap.to(wrapper, {
        backgroundColor: "#000000",
        color: "#F8F7F4",
        ease: "none",
        scrollTrigger: {
          trigger: wrapper,
          start: "top 70%",
          end: "top 30%",
          scrub: 1,
        },
      });

      gsap.to(wrapper, {
        backgroundColor: "#F8F7F4",
        color: "#1a1a1a",
        ease: "none",
        scrollTrigger: {
          trigger: wrapper,
          start: "bottom 70%",
          end: "bottom 30%",
          scrub: 1,
        },
      });
    }, wrapperRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={wrapperRef} className="full-bleed-wrapper">
      {children}
    </div>
  );
};

export default JourneyWrapper;
