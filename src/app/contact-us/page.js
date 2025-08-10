// src/app/contact-us/page.jsx
'use client';

import { useState, useEffect } from 'react';
import styles from './page.module.css';
import Image from 'next/image';
import ContactForm from '../../../components/ContactForm/ContactForm';

export default function ContactUs() {
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
      <div className={styles.contactContainer}>
        <div className={styles.contactHeader}>
          <h1 className={styles.contactTitle}>Contact Us</h1>
        </div>
        <div className={styles.contactForm}>
          <ContactForm />
        </div>
        <div className={styles.contactContent}>
          <div className={styles.contactInfo}>
            <div className={styles.contactSection}>
              <h2 className={styles.sectionTitle}>Call us today</h2>
              <a href="tel:4403138489" className={styles.contactLink}>440-313-8489</a>
            </div>
            
            <div className={styles.contactSection}>
              <h2 className={styles.sectionTitle}>E-mail us</h2>
              <a href="mailto:rosepointemeadows@gmail.com" className={styles.contactLink}>
                rosepointemeadows@gmail.com
              </a>
            </div>
            
            <div className={styles.contactSection}>
              <h2 className={styles.sectionTitle}>Hours</h2>
              <div className={styles.hoursContainer}>
                <div className={styles.hourRow}>
                  <span className={styles.day}>Monday:</span>
                  <span className={styles.hours}>9am-5pm</span>
                </div>
                <div className={styles.hourRow}>
                  <span className={styles.day}>Tuesday:</span>
                  <span className={styles.hours}>9am-5pm</span>
                </div>
                <div className={styles.hourRow}>
                  <span className={styles.day}>Wednesday:</span>
                  <span className={styles.hours}>9am-5pm</span>
                </div>
                <div className={styles.hourRow}>
                  <span className={styles.day}>Thursday:</span>
                  <span className={styles.hours}>9am-5pm</span>
                </div>
                <div className={styles.hourRow}>
                  <span className={styles.day}>Friday:</span>
                  <span className={styles.hours}>9am-5pm</span>
                </div>
                <div className={styles.hourRow}>
                  <span className={styles.day}>Saturday:</span>
                  <span className={styles.hours}>9am-5pm</span>
                </div>
                <div className={styles.hourRow}>
                  <span className={styles.day}>Sunday:</span>
                  <span className={styles.hours}>Closed</span>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.imageContainer}>
            <Image 
              src="/contact-us-image.webp" 
              alt="Rose Pointe Garden Path" 
              className={styles.gardenImage}
              width={600}
              height={800}
              priority
            />
          </div>
        </div>
        {/*
        <div className={styles.formContainer}>
          <h2 className={styles.formTitle}>Send us a message</h2>
          <form className={styles.contactForm}>
            <div className={styles.formGroup}>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                className={styles.formInput}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
                className={styles.formInput}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Your Phone"
                className={styles.formInput}
              />
            </div>
            <div className={styles.formGroup}>
              <textarea
                id="message"
                name="message"
                placeholder="Your Message"
                className={styles.formTextarea}
                required
                rows={5}
              />
            </div>
            <div className={styles.formGroup}>
              <button type="submit" className={styles.submitButton}>
                Send Message
              </button>
            </div>
          </form>
        </div>
        */}
      </div>
    </main>
  );
}