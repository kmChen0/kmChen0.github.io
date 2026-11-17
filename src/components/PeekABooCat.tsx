"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

interface PeekABooCatProps {
  isHovered: boolean;
}

export function PeekABooCat({ isHovered }: PeekABooCatProps) {
  const reduceMotion = useReducedMotion();
  return (
    <div aria-hidden="true" style={{
      position: "absolute", 
      bottom: "90%", 
      left: "70%", 
      width: "50px", 
      height: "40px", 
      overflow: "hidden",
      pointerEvents: "none",
      zIndex: 0
    }}>
      <motion.div
        initial={false}
        animate={{ y: !reduceMotion && isHovered ? 45 : 20 }}
        transition={{ type: "tween", duration: reduceMotion ? 0 : 0.45, delay: isHovered ? 0 : 0.25, ease: "easeInOut" }}
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start", // Align to top so head shows first
          position: "relative"
        }}
      >
        <div style={{ width: "50px", height: "50px", position: "relative" }}>
          <Image 
            src="/images/cats/sitting.png"
            alt=""
            fill
            sizes="50px"
            style={{ objectFit: "contain", objectPosition: "top" }}
          />
        </div>
      </motion.div>
    </div>
  );
}
