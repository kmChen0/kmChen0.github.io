"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Camera, Mail, MapPin } from "lucide-react";
import { SiGooglescholar } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa6";
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
    "Optimization for Machine Learning",
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
              <h1 className={styles.title} style={{ position: "relative", zIndex: 1, backgroundColor: "var(--bg-color)" }}>
                Hi, I'm <span className="text-gradient">Kangming Chen</span>
              </h1>
            </div>
            <h2 className={styles.subtitle}>A lounging cat</h2>
            
            <div className={styles.infoList}>
              <div className={styles.infoItem}>
                <MapPin size={20} className={styles.icon} />
                <span>Tokyo, Japan</span>
              </div>
            </div>

            <p className={styles.description}>
              I am Kangming Chen, and currently an Assistant Professor at <a href="https://www.tmu.ac.jp/" target="_blank" rel="noopener noreferrer" className="text-gradient">Tokyo Metropolitan University</a>. I obtained my doctoral degree from <a href="https://www.kyoto-u.ac.jp/" target="_blank" rel="noopener noreferrer" className="text-gradient">Kyoto University</a>, where I worked in the <a href="http://www-optima.amp.i.kyoto-u.ac.jp/" target="_blank" rel="noopener noreferrer" className="text-gradient">System Optimization Lab</a> under the supervision of Prof. <a href="http://www-optima.amp.i.kyoto-u.ac.jp/staff_website/ellen/" target="_blank" rel="noopener noreferrer" className="text-gradient">Ellen Hidemi Fukuda</a>.
              I am dedicated to advancing research in optimization, computational mathematics, and their applications in fields such as artificial intelligence, machine learning, and operations research.
              If you are interested in collaborating, please feel free to contact me via email.
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
            <nav className={styles.profileLinks} aria-label="Contact and profiles">
              <a href="mailto:kangming@tmu.ac.jp" aria-label="Contact" title="Contact">
                <Mail size={20} aria-hidden="true" />
                <span className={styles.profileTooltip} aria-hidden="true">Contact</span>
              </a>
              <a href="https://scholar.google.com/citations?user=czYKM04AAAAJ&hl=EN" target="_blank" rel="noopener noreferrer" aria-label="Google Scholar" title="Google Scholar">
                <SiGooglescholar size={20} aria-hidden="true" />
                <span className={styles.profileTooltip} aria-hidden="true">Google Scholar</span>
              </a>
              <a href="https://www.linkedin.com/in/kangming-chen-125630265" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" title="LinkedIn">
                <FaLinkedin size={20} aria-hidden="true" />
                <span className={styles.profileTooltip} aria-hidden="true">LinkedIn</span>
              </a>
              {/* <a href="https://researchmap.jp/kmchen" target="_blank" rel="noopener noreferrer" aria-label="researchmap" title="researchmap">
                <span className={styles.researchmapLabel}>researchmap</span>
                <span className={styles.profileTooltip} aria-hidden="true">researchmap</span>
              </a> */}
              <a href="https://tuchong.com/28077167/" target="_blank" rel="noopener noreferrer" aria-label="Photography" title="My Photography Portfolio">
                <Camera size={20} aria-hidden="true" />
                <span className={styles.profileTooltip} aria-hidden="true">Photography</span>
              </a>
            </nav>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
