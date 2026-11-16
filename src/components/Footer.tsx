import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.content}>
          <p>
            © {new Date().getFullYear()} Kangming Chen. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
