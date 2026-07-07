import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.content}>
          <p>
            © {new Date().getFullYear()} Kangming Chen. All rights reserved.
          </p>
          <div className={styles.links}>
            <a href="mailto:ckmmath@outlook.com">Contact</a>
            <a href="https://scholar.google.com/citations?user=czYKM04AAAAJ&hl=EN" target="_blank" rel="noopener noreferrer">Google Scholar</a>
            <a href="https://tuchong.com/28077167/" target="_blank" rel="noopener noreferrer" title="My Photography Portfolio">Photography</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
