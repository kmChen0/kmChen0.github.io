"use client";

import { motion } from "framer-motion";
import { ExternalLink, FileText, FileDown } from "lucide-react";
import styles from "./Publications.module.css";

const publications = [
  {
    title: "A proximal gradient framework for composite multiobjective optimization on Riemannian manifolds",
    authors: "K. Chen",
    venue: "Submitted",
    year: "2026",
    accessLink: "https://arxiv.org/abs/2605.16731",
    accessLabel: "arXiv:2605.16731",
    type: "Preprint"
  },
  {
    title: "Riemannian conditional gradient methods for composite optimization problems",
    authors: "K. Chen, E. H. Fukuda",
    venue: "Computational and Applied Mathematics, 45:151",
    year: "2026",
    doi: "10.1007/s40314-025-03496-1",
    doiLink: "https://doi.org/10.1007/s40314-025-03496-1",
    accessLink: "https://rdcu.be/eVfi4",
    type: "Peer-reviewed"
  },
  {
    title: "An inertial iteratively regularized extragradient method for bilevel variational inequality problems",
    authors: "M. M. Alves, K. Chen, E. H. Fukuda",
    venue: "Submitted",
    year: "2025",
    accessLink: "https://arxiv.org/abs/2507.16640",
    accessLabel: "arXiv:2507.16640",
    type: "Preprint"
  },
  {
    title: "Nonlinear conjugate gradient method for vector optimization on Riemannian manifolds with retraction and vector transport",
    authors: "K. Chen, E. H. Fukuda, and H. Sato",
    venue: "Applied Mathematics and Computation, vol. 486, p. 129001",
    year: "2025",
    doi: "10.1016/j.amc.2024.129001",
    doiLink: "https://www.sciencedirect.com/science/article/pii/S0096300324004624",
    type: "Peer-reviewed"
  },
  {
    title: "A proximal gradient method with Bregman distance in multi-objective optimization",
    authors: "K. Chen, E. H. Fukuda and N. Yamashita",
    venue: "Pacific Journal of Optimization. 20(4): 809-826",
    year: "2024",
    doi: "10.61208/pjo-2024-012",
    doiLink: "https://doi.org/10.61208/pjo-2024-012",
    accessLink: "http://yokohamapublishers.jp/online2/oppjo/vol20/p809.html",
    type: "Peer-reviewed"
  }
];

export function Publications() {
  return (
    <section id="publications" className="section">
      <div className="container">
        <h2 className="section-title">Publications</h2>
        
        <p className={styles.scholarLink}>
          You can also find my articles on my <a href="https://scholar.google.com/citations?user=czYKM04AAAAJ&hl=EN" target="_blank" rel="noopener noreferrer" className="text-gradient">Google Scholar profile</a>.
        </p>

        <h3 className={styles.categoryTitle}>Journal Publications</h3>
        <div className={styles.pubList}>
          {publications.filter(p => p.type === "Peer-reviewed").map((pub, index) => (
            <motion.div 
              key={index} 
              className={`glass ${styles.pubCard}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className={styles.pubHeader}>
                <span className={styles.pubType}>{pub.type}</span>
                <span className={styles.pubYear}>{pub.year}</span>
              </div>
              
              <h3 className={styles.pubTitle}>{pub.title}</h3>
              <p className={styles.pubAuthors}>{pub.authors}</p>
              <p className={styles.pubVenue}>{pub.venue}</p>
              
              <div className={styles.pubLinks}>
                {pub.doiLink && (
                  <a href={pub.doiLink} target="_blank" rel="noopener noreferrer" className={styles.linkButton}>
                    <FileText size={16} />
                    DOI: {pub.doi}
                  </a>
                )}
                {pub.accessLink && (
                  <a href={pub.accessLink} target="_blank" rel="noopener noreferrer" className={styles.linkButton}>
                    <ExternalLink size={16} />
                    {pub.accessLabel || "Access"}
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <h3 className={styles.categoryTitle} style={{ marginTop: "3rem" }}>Preprints / Working Papers</h3>
        <div className={styles.pubList}>
          {publications.filter(p => p.type === "Preprint").map((pub, index) => (
            <motion.div 
              key={`preprint-${index}`} 
              className={`glass ${styles.pubCard}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className={styles.pubHeader}>
                <span className={styles.pubType}>{pub.type}</span>
                <span className={styles.pubYear}>{pub.year}</span>
              </div>
              
              <h3 className={styles.pubTitle}>{pub.title}</h3>
              <p className={styles.pubAuthors}>{pub.authors}</p>
              <p className={styles.pubVenue}>{pub.venue}</p>
              
              <div className={styles.pubLinks}>
                {pub.doiLink && (
                  <a href={pub.doiLink} target="_blank" rel="noopener noreferrer" className={styles.linkButton}>
                    <FileText size={16} />
                    DOI: {pub.doi}
                  </a>
                )}
                {pub.accessLink && (
                  <a href={pub.accessLink} target="_blank" rel="noopener noreferrer" className={styles.linkButton}>
                    <ExternalLink size={16} />
                    {pub.accessLabel || "Access"}
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
