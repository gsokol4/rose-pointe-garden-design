// components/HeroSection.jsx
import Link from 'next/link';
import styles from './HeroSection.module.css';

const HeroSection = ({ backgroundImage = './homepage-hero.webp' }) => {
  return (
    <div 
      className={styles.heroSection}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className={styles.overlay}></div>
      
      <div className={styles.content}>
        <h1 className={styles.title}>
          Rose Pointe Garden Company
        </h1>
        
        <h2 className={styles.subtitle}>
          Imagine <span className={styles.dot}>•</span> Design <span className={styles.dot}>•</span> Create
        </h2>
        
        <div className={styles.phoneContainer}>
          <Link href="tel:440-313-8489" className={styles.phoneLink}>
            440-313-8489
          </Link>
        </div>
        
        <Link href="/contact-us" className={styles.getInTouchBtn}>
          Get In Touch
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;