// components/FlippableCard.jsx
"use client"
import { useState } from 'react';
import styles from './FlippableCard.module.css';
import Link from 'next/link';

const FlippableCard = ({ title, summary, detailedText, imageUrl, linkUrl }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={styles.cardContainer}>
      <div 
        className={`${styles.card} ${isFlipped ? styles.flipped : ''}`} 
        onClick={handleFlip}
      >
        <div className={styles.front}>
          <div className={styles.imageContainer}>
            <img src={imageUrl} alt={title} className={styles.cardImage} />
            <div className={styles.overlay}>
              <h2 className={styles.title}>{title}</h2>
              <div className={styles.touchIndicator}>
                <span>Touch for more details</span>
                <div className={styles.pulse}></div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.back}>
          <h2 className={styles.backTitle}>{title}</h2>
          <p className={styles.backText}>{detailedText}</p>
          {linkUrl && (
            <Link href={linkUrl} className={styles.learnMore}>
              Learn More
            </Link>
          )}
          <button className={styles.backButton} onClick={handleFlip}>
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default FlippableCard;