"use client";

import { motion, useScroll, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./ScrollCat.module.css";

export function ScrollCat() {
  const { scrollYProgress } = useScroll();
  const [scrollState, setScrollState] = useState<"sleeping" | "sitting" | "stretching">("sleeping");
  const [temporaryState, setTemporaryState] = useState<"sitting" | "stretching" | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  const [meows, setMeows] = useState<number[]>([]);

  const handleCatClick = () => {
    const id = Date.now();
    setMeows((prev) => [...prev, id]);
    
    // Wake up if sleeping
    if (scrollState === "sleeping" && !temporaryState) {
      const wakeUpStates: ("sitting" | "stretching")[] = ["sitting", "stretching"];
      const randomState = wakeUpStates[Math.floor(Math.random() * wakeUpStates.length)];
      setTemporaryState(randomState);
      setTimeout(() => {
        setTemporaryState(null);
      }, 2000);
    }
    
    setTimeout(() => {
      setMeows((prev) => prev.filter((m) => m !== id));
    }, 1000);
  };

  useEffect(() => {
    return scrollYProgress.onChange((latest) => {
      if (latest < 0.3) {
        setScrollState("sleeping");
      } else if (latest < 0.7) {
        setScrollState("sitting");
      } else {
        setScrollState("stretching");
      }
    });
  }, [scrollYProgress]);

  const displayState = temporaryState || scrollState;

  return (
    <div className={styles.container}>
      <motion.div
        className={styles.catSvg}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleCatClick}
        whileTap={{ scale: 0.8, rotate: -5 }}
        animate={{
          scale: isHovered ? 1.1 : 1,
          y: isHovered ? -5 : 0
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100px", height: "100px" }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={displayState}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            style={{ width: "100%", height: "100%", position: "relative" }}
          >
            <Image 
              src={`/images/cats/${displayState}.png`}
              alt={`Cute black cat ${displayState}`}
              fill
              style={{ objectFit: "contain" }}
              sizes="100px"
              priority
            />
          </motion.div>
        </AnimatePresence>
        
        {/* Zzz... indicator when sleeping */}
        {displayState === "sleeping" && (
          <motion.div
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: [0, 1, 0], y: [0, -20] }}
            transition={{ duration: 2, repeat: Infinity }}
            style={{
              position: "absolute",
              top: "0px",
              right: "0px",
              fontSize: "14px",
              fontFamily: "monospace",
              pointerEvents: "none",
              color: "var(--text-primary)"
            }}
          >
            Zzz
          </motion.div>
        )}
      </motion.div>
      {meows.map((id) => (
        <motion.div
          key={id}
          initial={{ opacity: 1, y: 0, scale: 0.5 }}
          animate={{ opacity: 0, y: -50, scale: 1.2 }}
          transition={{ duration: 1, ease: "easeOut" }}
          style={{
            position: "absolute",
            top: -20,
            fontSize: "1.2rem",
            fontWeight: "bold",
            color: "var(--accent-primary)",
            pointerEvents: "none",
            whiteSpace: "nowrap"
          }}
        >
          Miao!
        </motion.div>
      ))}
    </div>
  );
}
