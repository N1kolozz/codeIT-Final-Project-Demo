import styles from './Footer.module.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        
       
        <div className={styles.section}>
          <h2 className={styles.heading}>Contact Us</h2>
          <p>Email: <a href="mailto:info@example.com" className={styles.link}>info@example.com</a></p>
          <p>Phone: <a href="tel:+995574333253" className={styles.link}>+995 574 333 253</a></p>
        </div>

        
        <div className={`${styles.section} ${styles.social}`}>
          <a href="#" className={styles.link} aria-label="Facebook"><FaFacebookF /></a>
          <a href="#" className={styles.link} aria-label="Twitter"><FaTwitter /></a>
          <a href="#" className={styles.link} aria-label="Instagram"><FaInstagram /></a>
          <a href="#" className={styles.link} aria-label="LinkedIn"><FaLinkedinIn /></a>
        </div>

        
        <div className={`${styles.section} ${styles.copy}`}>
          © {new Date().getFullYear()} All rights reserved.
        </div>
      </div>
    </footer>
  );
}
