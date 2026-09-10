"use client";

import { motion } from "framer-motion";
import { Mic, MapPin, Calendar, ExternalLink } from "lucide-react";
import styles from "./Talks.module.css";

const talks = [
  {
    title: "A Bregman inertial iteratively regularized extragradient method for bilevel variational inequality problems",
    event: "The 2026 autumn national conference of Operations Research Society of Japan (ORSJ)",
    location: "Kyoto, Japan",
    date: "2026/09/11",
    link: "https://orsj.org/2026f/"
  },
  {
    title: "An inertial iteratively regularized extragradient method for bilevel variational inequality problems",
    event: "The 2025 autumn national conference of Operations Research Society of Japan (ORSJ)",
    location: "Hiroshima, Japan",
    date: "2025/09/12",
    link: "https://orsj.org/2025f/"
  },
  {
    title: "Proximal Gradient Method for Multi-Objective Optimization with Bregman Distance",
    event: "Workshop: ''Optimization: Modeling and Algorithms''",
    location: "Tokyo, Japan",
    date: "2025/03/17",
    link: "http://grips-tsuchiya.blue.coocan.jp/sympo2025.html"
  },
  {
    title: "Riemannian generalized conditional gradient methods",
    event: "2024 Annual Meeting of the Japan Society for Industrial and Applied Mathematics (JSIAM)",
    location: "Kyoto, Japan",
    date: "2024/09/15",
    link: "https://conference.wdc-jp.com/jsiam/2024/program/program_flash.html"
  },
  {
    title: "Generalized Conditional Gradient Method with Three Step Size Strategies on Riemannian Manifolds",
    event: "The 2024 autumn national conference of Operations Research Society of Japan (ORSJ)",
    location: "Nagoya, Japan",
    date: "2024/09/10",
    link: "https://orsj.org/nc2024f/"
  },
  {
    title: "Riemannian conditional gradient methods for composite optimization problems",
    event: "The 17th SIAM East Asian Section Conference",
    location: "University of Macau, Macao SAR, China",
    date: "2024/06/30",
    link: "https://www.easiam2024.org/"
  },
  {
    title: "Multiobjective Proximal gradient methods on Riemannian manifolds",
    event: "The 20th Joint Meeting of the Japan Society for Industrial and Applied Mathematics (JSIAM) Activity Groups",
    location: "Nagaoka, Japan",
    date: "2024/03/04",
    link: "https://jsiam.org/union2024"
  },
  {
    title: "Nonlinear conjugate gradient method for vector optimization on Riemannian manifolds",
    event: "The 2023 autumn national conference of Operations Research Society of Japan (ORSJ)",
    location: "Nishinomiya, Japan",
    date: "2023/09/15",
    link: "https://orsj.org/nc2023f/"
  },
  {
    title: "Nonlinear conjugate gradient method for vector optimization on Riemannian manifolds",
    event: "RIMS workshop on Mathematical Optimization 2023",
    location: "Kyoto, Japan",
    date: "2023/08/29",
    link: "http://infoshako.sk.tsukuba.ac.jp/~maiko/RIMS2023/"
  },
  {
    title: "Nonlinear conjugate gradient method for vector optimization on Riemannian manifolds",
    event: "The 10th International Congress on Industrial and Applied Mathematics (ICIAM)",
    location: "Tokyo, Japan",
    date: "2023/08/23",
    link: "https://iciam2023.org/registered_data?id=01064"
  },
  {
    title: "A proximal gradient method with Bregman distance in multi-objective optimization",
    event: "International Workshop on Continuous Optimization",
    location: "Tokyo (online), Japan",
    date: "2022/12/04",
    link: "http://www.opt.c.titech.ac.jp/DecemberWorkshop/schedule.html"
  }
];

export function Talks() {
  return (
    <section id="talks" className={`section ${styles.talksSection}`}>
      <div className="container">
        <h2 className="section-title">Talks & Presentations</h2>
        
        <div className={styles.timeline}>
          {talks.map((talk, index) => (
            <motion.div 
              key={index}
              className={styles.timelineItem}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className={styles.timelineMarker}>
                <div className={styles.markerDot}></div>
                {index !== talks.length - 1 && <div className={styles.markerLine}></div>}
              </div>
              
              <div className={`glass ${styles.timelineContent}`}>
                <div className={styles.dateBadge}>
                  <Calendar size={14} />
                  <span>{talk.date}</span>
                </div>
                
                <h3 className={styles.talkTitle}>{talk.title}</h3>
                
                <div className={styles.talkDetails}>
                  <div className={styles.detailItem}>
                    <Mic size={16} className={styles.icon} />
                    <span>{talk.event}</span>
                  </div>
                  <div className={styles.detailItem}>
                    <MapPin size={16} className={styles.icon} />
                    <span>{talk.location}</span>
                  </div>
                </div>
                
                {talk.link && (
                  <a href={talk.link} target="_blank" rel="noopener noreferrer" className={styles.talkLink}>
                    View Event Details <ExternalLink size={14} />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
