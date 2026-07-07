"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Award, Users, Wrench } from "lucide-react";
import styles from "./CV.module.css";

export function CV() {
  const education = [
    { degree: "Ph.D. in Applied Mathematics and Physics", institution: "Kyoto University", year: "2026" },
    { degree: "M.S. in Applied Mathematics and Physics", institution: "Kyoto University", year: "2022" },
    { degree: "B.S. in Mathematics and Applied Mathematics", institution: "Beijing University of Chemical Technology", year: "2018" },
  ];

  const experience = [
    { role: "Research Assistant", institution: "Southern University of Science and Technology", duration: "2019/03 - 2020/11" },
    { role: "Data Analysis Intern", institution: "Shenzhen Urban Public Safety and Technology Institute", duration: "2019/06 - 2019/09" },
    { role: "Data Analysis Intern", institution: "Huawen Media Industry Innovation Research Institute", duration: "2018/06 - 2018/08" },
  ];

  const grants = [
    { title: "Kyoto University Division of Graduate Studies SPRING Program", org: "JST", duration: "2024/04 – 2025/03" },
    { title: "Kyoto University Science and Technology Innovation Creation Fellowship", org: "JST", duration: "2022/04 – 2024/03" },
  ];

  const services = [
    { role: "President", org: "Kyoto University SIAM Student Chapter", duration: "2025/04 – 2026/03" },
    { role: "Vice-president", org: "Kyoto University SIAM Student Chapter", duration: "2023/04 – 2025/03" },
    { role: "Member", org: "Operations Research Society of Japan (ORSJ)", duration: "2023/07 – present" },
    { role: "Member", org: "Japan Society for Industrial and Applied Mathematics (JSIAM)", duration: "2024 – present" },
  ];

  const skills = [
    { category: "Languages", items: ["Japanese", "English", "Chinese"] },
    { category: "Programming", items: ["Python", "Matlab"] },
  ];

  return (
    <section id="cv" className="section">
      <div className="container">
        <h2 className="section-title">Background</h2>

        <div className={styles.grid}>
          {/* Education */}
          <motion.div 
            className={`glass ${styles.card}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <div className={styles.cardHeader}>
              <GraduationCap className={styles.icon} />
              <h3>Education</h3>
            </div>
            <div className={styles.list}>
              {education.map((item, i) => (
                <div key={i} className={styles.listItem}>
                  <h4>{item.degree}</h4>
                  <p>{item.institution}</p>
                  <span className={styles.yearBadge}>{item.year}</span>
                </div>
              ))}
            </div>
          </motion.div>



          {/* Grants */}
          <motion.div 
            className={`glass ${styles.card}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.2 }}
          >
            <div className={styles.cardHeader}>
              <Award className={styles.icon} />
              <h3>Grants</h3>
            </div>
            <div className={styles.list}>
              {grants.map((item, i) => (
                <div key={i} className={styles.listItem}>
                  <h4>{item.title}</h4>
                  <p>{item.org}</p>
                  <span className={styles.yearBadge}>{item.duration}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Service */}
          <motion.div 
            className={`glass ${styles.card}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.3 }}
          >
            <div className={styles.cardHeader}>
              <Users className={styles.icon} />
              <h3>Service</h3>
            </div>
            <div className={styles.list}>
              {services.map((item, i) => (
                <div key={i} className={styles.listItem}>
                  <h4>{item.role}</h4>
                  <p>{item.org}</p>
                  <span className={styles.yearBadge}>{item.duration}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div 
            className={`glass ${styles.card}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.4 }}
          >
            <div className={styles.cardHeader}>
              <Wrench className={styles.icon} />
              <h3>Skills</h3>
            </div>
            <div className={styles.skillsList}>
              {skills.map((skillGroup, i) => (
                <div key={i} className={styles.skillGroup}>
                  <h4>{skillGroup.category}</h4>
                  <div className={styles.tags}>
                    {skillGroup.items.map((item, j) => (
                      <span key={j} className={styles.tag}>{item}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
