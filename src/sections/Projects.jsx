import { useState, useRef, useLayoutEffect } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Project from "../components/Project";
import { myProjects } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const [preview, setPreview] = useState(null);
  const sectionRef = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { damping: 20, stiffness: 150 });
  const springY = useSpring(y, { damping: 20, stiffness: 150 });

  const handleMouseMove = (e) => {
    x.set(e.clientX + 20);
    y.set(e.clientY + 20);
  };

  useLayoutEffect(() => {
    const element = sectionRef.current;
    if (!element) return;

    const ctx = gsap.context(() => {
      gsap.from(element.querySelector(".text-heading"), {
        opacity: 0,
        y: 50,
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
        },
      });

      gsap.from(".project-item", {
        opacity: 0,
        y: 50,
        stagger: 0.2,
        scrollTrigger: {
          trigger: element,
          start: "top 70%",
        },
      });
    }, element);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative c-space section-spacing"
      id="work"
    >
      <h2 className="text-heading">My Selected Projects</h2>
      <div className="mt-12 border-t border-black/10" />

      {myProjects.map((project) => (
        <Project key={project.id} {...project} setPreview={setPreview} />
      ))}

      {preview && (
        <motion.img
          className="fixed top-0 left-0 z-50 object-cover h-56 rounded-lg shadow-xl pointer-events-none w-80 border-4 border-white"
          src={preview}
          style={{ x: springX, y: springY }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.2 }}
        />
      )}
    </section>
  );
};

export default Projects;
