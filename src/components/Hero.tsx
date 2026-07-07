"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, GraduationCap, MapPin } from "lucide-react";
import Image from "next/image";
import styles from "./Hero.module.css";
import { PeekABooCat } from "./PeekABooCat";

export function Hero() {
  const [isNameHovered, setIsNameHovered] = useState(false);

  const interests = [
    "Continuous Optimization",
    "Multiobjective Optimization",
    "Manifold Optimization",
    "Bilevel Optimization",
  ];

  return (
    <section id="home" className={`section ${styles.heroSection}`}>
      <div className="container">
        <div className={styles.heroContent}>
          <motion.div 
            className={styles.textContent}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div 
              style={{ position: "relative", display: "inline-block" }}
              onMouseEnter={() => setIsNameHovered(true)}
              onMouseLeave={() => setIsNameHovered(false)}
            >
              <PeekABooCat isHovered={isNameHovered} />
              <h1 className={styles.title} style={{ position: "relative", zIndex: 1, backgroundColor: "var(--bg-primary)" }}>
                Hi, I'm <span className="text-gradient">Kangming Chen</span>
              </h1>
            </div>
            <h2 className={styles.subtitle}>A lounging cat</h2>
            
            <div className={styles.infoList}>
              <div className={styles.infoItem}>
                <MapPin size={20} className={styles.icon} />
                <span>Tokyo, Japan</span>
              </div>
              <div className={styles.infoItem}>
                <Mail size={20} className={styles.icon} />
                <a href="mailto:ckmmath@outlook.com">Send an email</a>
              </div>
            </div>

            <p className={styles.description}>
              I am Kangming Chen, originally from China, and obtained my doctoral degree from the <a href="http://www-optima.amp.i.kyoto-u.ac.jp/" target="_blank" rel="noopener noreferrer" className="text-gradient">System Optimization Lab</a> at <a href="https://www.kyoto-u.ac.jp/" target="_blank" rel="noopener noreferrer" className="text-gradient">Kyoto University</a>, where I was supervised by Prof. <a href="http://www-optima.amp.i.kyoto-u.ac.jp/staff_website/ellen/" target="_blank" rel="noopener noreferrer" className="text-gradient">Ellen Hidemi Fukuda</a>.
              I am dedicated to advancing research in optimization, computational mathematics, and their applications in fields such as artificial intelligence, machine learning, and operations research.
            </p>

            <div className={styles.tagsContainer}>
              <h3 className={styles.tagsTitle}>
                Research Interests
              </h3>
              <div className={styles.tags}>
                {interests.map((interest, index) => (
                  <motion.span 
                    key={index} 
                    className={styles.tag}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {interest}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div 
            className={styles.imageContent}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className={styles.imageWrapper}>
              <div className={styles.avatarPlaceholder}>
                <Image 
                  src="/images/cat.jpg" 
                  alt="Kangming Chen" 
                  fill 
                  style={{ objectFit: "cover" }} 
                />
              </div>
              <div className={styles.decorativeCircle1}></div>
              <div className={styles.decorativeCircle2}></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
