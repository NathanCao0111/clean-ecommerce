import styles from './Footer.module.scss';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className={styles.wrapper}>
      <div className={styles.links}>
        <Link to="#">About</Link>
        <Link to="#">Store locator</Link>
        <Link to="#">FAQs</Link>
        <Link to="#">News</Link>
        <Link to="#">Careers</Link>
        <Link to="#">Contact Us</Link>
      </div>
      <p className={styles.copyright}>
        Design by &nbsp;
        <a href="https://github.com/Abderraouf-Rahmani">Abderraouf</a>
      </p>
    </footer>
  );
}

export default Footer;
