// src/app/about/page.jsx
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './page.module.css';

export default function About() {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Set initial value
    handleResize();
    
    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Clean up
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <main className={styles.main}>
      <div className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1 className={styles.pageTitle}>Rose Pointe Garden Design</h1>
          <p className={styles.tagline}>Imagine • Design • Create</p>
        </div>
      </div>
      
      <div className={styles.contentContainer}>
        <div className={styles.aboutSection}>
          <h2 className={styles.sectionTitle}>About Us</h2>
          
          <div className={styles.aboutContent}>
            <div className={styles.textContent}>
              <p className={styles.paragraph}>
                At Rose Pointe Garden Design, we believe that every garden should be as unique as the person who owns it. We specialize in creating customized garden designs that reflect our clients' individual styles, needs, and dreams. Whether you're starting fresh or reimagining your existing outdoor space, we work closely with you to craft a garden that feels personal, purposeful, and full of life. Our approach is rooted in listening—understanding what you love, how you live, and what your space can become.
              </p>
            </div>
            
            <div className={styles.imageWrapper}>
              <Image
                src="/summer-garden.webp"
                alt="Beautiful garden flowers"
                className={styles.aboutImage}
                width={500}
                height={400}
                priority
              />
            </div>
          </div>
        </div>
        
        <div className={styles.designerSection}>
          <h2 className={styles.sectionTitle}>Meet the Designer — Carolyn Sokol</h2>
          
          <div className={styles.designerContent}>
            <div className={styles.imageWrapper}>
              <Image
                src="/carolyn.jpeg"
                alt="Carolyn Sokol, Garden Designer"
                className={styles.designerImage}
                width={400}
                height={500}
                priority
              />
            </div>
            
            <div className={styles.textContent}>
              <p className={styles.paragraph}>
                Carolyn Sokol, the founder and lead designer at Rose Pointe, brings over 30 years of hands-on experience in gardening and landscape design. With a formal education in biology and plant life, she pairs scientific expertise with an artist's eye for beauty and detail. A true master of Ohio's native plants and growing conditions, Carolyn is passionate about gardens that thrive naturally while telling a story about their owners. She believes that great gardens don't just meet the needs of the people who enjoy them—they also respect and respond to the needs of the plants themselves.
              </p>
            </div>
          </div>
        </div>
        
        <div className={styles.ctaSection}>
          <h2 className={styles.ctaTitle}>Ready to transform your garden?</h2>
          <a href="/contact-us" className={styles.ctaButton}>
            Get In Touch
          </a>
        </div>
      </div>
    </main>
  );
}