"use client";

import { motion, useScroll, AnimatePresence, useReducedMotion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./ScrollCat.module.css";

type CatState = "sleeping" | "sitting" | "stretching";

export function ScrollCat() {
  const { scrollYProgress } = useScroll();
  const reduceMotion = useReducedMotion();
  const [scrollState, setScrollState] = useState<CatState>("sleeping");
  const [temporaryState, setTemporaryState] = useState<CatState | null>(null);
  const [meows, setMeows] = useState<number[]>([]);
  const nextMeowId = useRef(0);
  const timers = useRef(new Set<ReturnType<typeof setTimeout>>());
  const wakeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const pending = timers.current;
    return () => { pending.forEach(clearTimeout); pending.clear(); };
  }, []);

  useEffect(() => {
    let settleTimer: ReturnType<typeof setTimeout>;
    const update = (progress: number) => {
      clearTimeout(settleTimer);
      // Debounce scrolling, with hysteresis to avoid flickering at boundaries.
      settleTimer = setTimeout(() => {
        setScrollState(previous => {
          if (previous === "sleeping") return progress >= 0.72 ? "stretching" : progress >= 0.32 ? "sitting" : "sleeping";
          if (previous === "stretching") return progress < 0.28 ? "sleeping" : progress < 0.68 ? "sitting" : "stretching";
          return progress < 0.28 ? "sleeping" : progress >= 0.72 ? "stretching" : "sitting";
        });
      }, 150);
    };
    update(scrollYProgress.get());
    const unsubscribe = scrollYProgress.on("change", update);
    return () => { unsubscribe(); clearTimeout(settleTimer); };
  }, [scrollYProgress]);

  const schedule = (callback: () => void, delay: number) => {
    const timer = setTimeout(() => {
      timers.current.delete(timer);
      callback();
    }, delay);
    timers.current.add(timer);
    return timer;
  };

  const handleCatClick = () => {
    const id = nextMeowId.current++;
    setMeows(previous => [...previous, id]);
    schedule(() => setMeows(previous => previous.filter(meow => meow !== id)), 1000);
    if (scrollState === "sleeping" && wakeTimer.current === null) {
      setTemporaryState(Math.random() < 0.5 ? "sitting" : "stretching");
      wakeTimer.current = schedule(() => {
        setTemporaryState(null);
        wakeTimer.current = null;
      }, 2000);
    }
  };

  const displayState = temporaryState || scrollState;

  return (
    <div className={styles.container}>
      <motion.button
        type="button"
        aria-label="Pet the cat"
        className={styles.catButton}
        onClick={handleCatClick}
        whileHover={reduceMotion ? undefined : { y: -2 }}
        whileTap={reduceMotion ? undefined : { scale: 0.96 }}
        transition={{ type: "tween", duration: reduceMotion ? 0 : 0.2 }}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={displayState}
            className={styles.catImage}
            initial={{ opacity: reduceMotion ? 1 : 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: reduceMotion ? 1 : 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.25 }}
          >
            <span className={`${styles.catArt} ${displayState === "sleeping" ? styles.breathing : ""}`}>
              <Image src={`/images/cats/handdrawn/${displayState}.png`} alt="" fill
                className={displayState === "sitting" ? styles.openEyes : undefined}
                style={{ objectFit: "contain" }} sizes="(max-width: 768px) 60px, 80px" />
              {displayState === "sitting" && (
                <Image src="/images/cats/handdrawn/sitting-blink.png" alt="" fill
                  className={styles.closedEyes}
                  style={{ objectFit: "contain" }} sizes="(max-width: 768px) 60px, 80px" />
              )}
            </span>
          </motion.span>
        </AnimatePresence>
        {displayState === "sleeping" && (
          <motion.span
            aria-hidden="true"
            className={styles.sleepLabel}
            initial={false}
            animate={reduceMotion ? { opacity: 0.7, y: 0 } : { opacity: [0, 0.7, 0], y: [0, -12] }}
            transition={reduceMotion ? { duration: 0 } : { duration: 3, repeat: Infinity }}
          >Zzz</motion.span>
        )}
      </motion.button>
      {meows.map(id => (
        <motion.span
          key={id}
          aria-hidden="true"
          className={styles.meow}
          initial={{ opacity: 1, y: 0, scale: reduceMotion ? 1 : 0.8 }}
          animate={reduceMotion ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: -50, scale: 1.1 }}
          transition={{ duration: reduceMotion ? 0 : 1, ease: "easeOut" }}
        >Miao!</motion.span>
      ))}
    </div>
  );
}
