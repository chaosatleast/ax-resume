"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";

function BackdropWrapper({ children }: { children: React.ReactNode }) {
  const [isMoved, setHovered] = useState(false);
  const ref: any = useRef(null);
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function handleMouseMove(event: any) {
    if (ref.current) {
      const { top, left } = ref.current.getBoundingClientRect();

      let xPosition = event.clientX - left;
      let yPosition = event.clientY - top;

      mouseX.set(xPosition);
      mouseY.set(yPosition);
    }
  }

  return (
    <div
      className="bg-[var(--foreground-rgb)] bg-opa h-screen w-screen  text-white flex justify-center items-center"
      onPointerMove={() => setHovered(true)}
      onPointerLeave={() => setHovered(false)}
      onMouseMove={handleMouseMove}
      ref={ref}
    >
      <motion.div
        className=" absolute top-0 h-52 w-52 rounded-full blur-[100px] bg-opacity-50 bg-skyBlue"
        animate={{
          y: [0, 100, 50, -50, -100, 0],
          x: [-150, 0, 100, 200, -50, -150],
          opacity: isMoved ? 0 : 1,
          transition: {
            x: { repeat: Infinity, duration: 10 },
            y: { repeat: Infinity, duration: 10 },
            opacity: { duration: 2 },
          },
        }}
        // style={{ opacity: isMoved ? 0 : 1 }}
        // transition={{ opacity: { duration: 10 } }}
      ></motion.div>
      <motion.div
        className="absolute left-0 bottom-0 h-64 w-64 rounded-full blur-[100px] bg-opacity-50 bg-darkPurple"
        animate={{
          y: [0, -100, -150, -100, 0],
          x: [-200, -100, 50, 0, -200],
          opacity: isMoved ? 0 : 1,
          transition: {
            x: { repeat: Infinity, duration: 10 },
            y: { repeat: Infinity, duration: 10 },
            opacity: { duration: 2 },
          },
        }}
      ></motion.div>
      <motion.div
        className="right-0 bottom-0 absolute h-48 w-48 rounded-full blur-[100px] bg-opacity-50 bg-lightPurple"
        animate={{
          y: [0, -50, -150, 50, 0],
          x: [-100, 0, 200, -50, -100],
          opacity: isMoved ? 0 : 1,
          transition: {
            x: { repeat: Infinity, duration: 10 },
            y: { repeat: Infinity, duration: 10 },
            opacity: { duration: 2 },
          },
        }}
      ></motion.div>

      <motion.div
        className="absolute inset-0"
        style={{
          background: useMotionTemplate`radial-gradient(200px circle at ${mouseX}px ${mouseY}px,
            var(--summer-green),transparent 80%)`,
        }}
        animate={{
          opacity: !isMoved ? 0 : 1,
          transition: {
            opacity: { duration: 1 },
          },
        }}
      ></motion.div>

      {children}
    </div>
  );
}

export default BackdropWrapper;
