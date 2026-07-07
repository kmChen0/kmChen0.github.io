"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface PeekABooCatProps {
  isHovered: boolean;
}

export function PeekABooCat({ isHovered }: PeekABooCatProps) {
  return (
    <div style={{ 
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
        initial={{ y: 0 }}
        animate={{ y: isHovered ? 45 : 20 }} // 45 = hidden, 20 = peeking
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
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
            alt="Peeking cat"
            fill
            style={{ objectFit: "contain", objectPosition: "top" }}
          />
        </div>
      </motion.div>
    </div>
  );
}
