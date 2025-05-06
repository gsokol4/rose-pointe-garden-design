import React from 'react';
import styles from './Footer.module.css'; // Create this file
import { Phone, Mail, MapPin } from 'lucide-react'; //Import icons

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.contactInfo}>
            <div className={styles.contactItem}>
              <Phone className={styles.icon} />
              <a href="tel:440-313-8489">440-313-8489</a>
            </div>
            <div className={styles.contactItem}>
              <Mail className={styles.icon} />
              <a href="mailto:rosepointemeadows@gmail.com">rosepointemeadows@gmail.com</a>
            </div>
            {
                /*
            <div className={styles.contactItem}>
              <MapPin className={styles.icon} />
              <span>[Address]</span> }
            </div>
                */
            }
        </div>
        <div className={styles.copyright}>
          &copy; {new Date().getFullYear()} Rose Pointe Garden Company. All rights reserved.
        </div>
        {/* Add social media icons here if needed.  Example:
        <div className={styles.socialIcons}>
            <a href="#"><Facebook /></a>
            <a href="#"><Instagram /></a>
        </div>
        */}
      </div>
    </footer>
  );
};

export default Footer;