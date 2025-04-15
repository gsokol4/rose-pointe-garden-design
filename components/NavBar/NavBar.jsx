// components/Navbar.jsx
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './NavBar.module.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Check initially
    checkIfMobile();
    
    // Set up event listener
    window.addEventListener('resize', checkIfMobile);
    
    // Clean up
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleGetInTouch = (e) => {
    if (isMobile) {
      // For mobile, use tel: protocol
      window.location.href = 'tel:440-313-8489';
    }
    // For desktop, let Next.js Link handle it
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContainer}>
        {/* Phone icon for all screens */}
        <Link href="tel:440-313-8489" className={styles.phoneLink}>
          <div className={styles.phoneWrapper}>
            <svg xmlns="http://www.w3.org/2000/svg" className={styles.phoneIcon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span className={styles.phoneNumber}>440-313-8489</span>
          </div>
        </Link>

        {/* Desktop navigation */}
        <div className={styles.desktopNav}>
          <Link href="/" className={styles.navLink}>
            Home
          </Link>
          <Link href="/about" className={styles.navLink}>
            About
          </Link>
          <Link href="/contact-us" className={styles.navLink}>
            Contact Us
          </Link>
        </div>

        {/* Mobile menu button */}
        <button 
          className={styles.menuButton}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <div className={isMenuOpen ? `${styles.hamburgerIcon} ${styles.open}` : styles.hamburgerIcon}>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      <div className={isMenuOpen ? `${styles.mobileMenu} ${styles.open}` : styles.mobileMenu}>
        <div className={styles.mobileMenuItems}>
          <Link href="/" className={styles.mobileNavLink}>
            Home
          </Link>
          <Link href="/about" className={styles.mobileNavLink}>
            About
          </Link>
          <Link href="/contact-us" className={styles.mobileNavLink}>
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;