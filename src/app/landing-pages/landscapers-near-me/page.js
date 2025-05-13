// pages/landscapers-near-me.js
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import styles from './page.module.css';

export default function LandscapersNearMe() {
  return (
    <>
      <Head>
        <title>Professional Landscapers in Geauga County | Rose Pointe Garden Company</title>
        <meta name="description" content="Professional landscaping services in Geauga County, Ohio. Expert landscapers providing free consultations, custom garden designs, and full-service installation." />
        <meta name="keywords" content="landscapers near me, Geauga County landscapers, garden design, landscape installation, Ohio landscaping" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className={styles.pageContainer}>
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1>Expert Landscapers in Geauga County</h1>
            <h2>Imagine • Design • Create</h2>
            <p>Transform your outdoor space with Rose Pointe Garden Company, Geauga County&apos;s trusted landscaping experts. We bring your vision to life with personalized designs and professional installation.</p>
            <div className={styles.heroButtons}>
              <a href="tel:4403138489" className={`${styles.btn} ${styles.btnPrimary}`}>Call Now</a>
              <Link href="#consultation" className={`${styles.btn} ${styles.btnSecondary}`}>Free Consultation</Link>
            </div>
          </div>
        </section>

        <section id="services" className={styles.services}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Our Landscaping Services</h2>
            <div className={styles.servicesGrid}>
              <div className={styles.serviceCard}>
                <div className={styles.serviceImage} style={{backgroundImage: 'url(/landing-pages/landscapers-near-me/design.webp)'}}></div>
                <div className={styles.serviceContent}>
                  <h3>Custom Garden Design</h3>
                  <p>Our expert designers create personalized garden plans tailored to your property&apos;s unique characteristics and your aesthetic preferences.</p>
                  <p>From selecting plants that thrive in Geauga County&apos;s climate to creating harmonious layouts, we craft gardens that bloom with beauty.</p>
                </div>
              </div>
              <div className={styles.serviceCard}>
                <div className={styles.serviceImage} style={{backgroundImage: 'url(/landing-pages/landscapers-near-me/planting.webp)'}}></div>
                <div className={styles.serviceContent}>
                  <h3>Professional Installation</h3>
                  <p>Our skilled team handles every aspect of bringing your garden design to life, from site preparation to final planting.</p>
                  <p>We work with precision and care, ensuring every element is properly installed for lasting beauty and functionality.</p>
                </div>
              </div>
              <div className={styles.serviceCard}>
                <div className={styles.serviceImage} style={{backgroundImage: 'url(/landing-pages/landscapers-near-me/hardscape.jpg)'}}></div>
                <div className={styles.serviceContent}>
                  <h3>Hardscape Features</h3>
                  <p>Enhance your landscape with custom pathways, patios, retaining walls, and other structural elements that add function and style.</p>
                  <p>Our hardscape features are designed to complement your garden while providing practical spaces for outdoor living.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="process" className={styles.process}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Our Landscaping Process</h2>
            <div className={styles.processSteps}>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>1</div>
                <h3>Free Consultation</h3>
                <p>This is your opportunity to meet your designer, discuss your needs, and get to know the process. During the consultation, your designer will explore your garden goals, preferences, and inspirations while assessing your site&apos;s layout, soil conditions, sunlight, and existing features. They will provide tailored recommendations to bring your vision to life.</p>
                <p>You will work with your designer from start to finish to ensure your project is executed seamlessly. Since every project is unique and highly detailed, we are not able to give out estimates during the consultation.</p>
                <p>Take the first step toward creating your dream garden—schedule your consultation today!</p>
              </div>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>2</div>
                <h3>Design Presentation</h3>
                <p>After your consultation, your designer will create a custom garden design tailored to your unique preferences, site conditions, and goals. The design presentation is your chance to see your vision come to life, with detailed plans, plant selections, and creative solutions that maximize the potential of your space.</p>
                <p>During this phase, we&apos;ll review the design together, answer your questions, and ensure every detail aligns with your vision. There will be the opportunity for one revision.</p>
                <p>With your approval, we&apos;ll move forward to the next phase—turning your dream garden into reality.</p>
              </div>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>3</div>
                <h3>Custom Installation Quote</h3>
                <p>Based on your approved design, we&apos;ll provide a detailed quote for the installation of your new landscape. Our pricing reflects the quality of materials, expertise of our team, and the attention to detail that ensures a stunning result.</p>
                <p>Whether you prefer to leave the hard work to us or get hands-on with your garden transformation, we have you covered:</p>
                <ul className={styles.processList}>
                  <li><strong>Full-Service Installation:</strong> Let our expert team handle every aspect of your garden&apos;s installation, ensuring precision and care from start to finish. We&apos;ll manage everything, from prepping the site to placing the final plant, so you can sit back and watch your dream garden bloom.</li>
                  <li><strong>DIY with Plant Delivery:</strong> For the hands-on gardener, we offer a DIY option with delivery of all your selected plants directly to your door. With our detailed design plans and expert recommendations, you&apos;ll have all the tools you need to bring your vision to life.</li>
                </ul>
                <p>Whichever path you choose, we&apos;re here to support you every step of the way. Let&apos;s create a garden that inspires and thrives!</p>
              </div>
            </div>
          </div>
        </section>

        <section id="testimonials" className={styles.testimonials}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>What Our Clients Say</h2>
            <div className={styles.testimonialGrid}>
              <div className={styles.testimonialCard}>
                <p className={styles.testimonialText}>&quot;Rose Pointe completely transformed our backyard from an unusable slope into a beautiful, functional garden with terraces and native plants. Their design process was thorough, and the installation team was professional and detail-oriented. We couldn&apos;t be happier with the results!&quot;</p>
                <p className={styles.testimonialAuthor}>- Sarah M., Chardon</p>
              </div>
              <div className={styles.testimonialCard}>
                <p className={styles.testimonialText}>&quot;Working with Rose Pointe Garden Company was the best decision we made for our new home. Their designer understood exactly what we wanted and created a landscape plan that perfectly suits our property and lifestyle. The plants are thriving in our challenging soil, just as they promised.&quot;</p>
                <p className={styles.testimonialAuthor}>- Michael T., Russell Township</p>
              </div>
              <div className={styles.testimonialCard}>
                <p className={styles.testimonialText}>&quot;After trying to DIY our garden for years with disappointing results, we hired Rose Pointe. Their expertise in selecting plants that flourish in Northeast Ohio has made all the difference. Our garden is now low-maintenance and beautiful year-round.&quot;</p>
                <p className={styles.testimonialAuthor}>- Jennifer B., Bainbridge</p>
              </div>
            </div>
          </div>
        </section>

        <section id="consultation" className={styles.cta}>
          <div className={styles.container}>
            <h2>Ready to Transform Your Outdoor Space?</h2>
            <p>Take the first step toward creating the garden of your dreams. Schedule your free consultation with our expert designers and discover how Rose Pointe can bring your vision to life.</p>
            <a href="tel:4403138489" className={`${styles.btn} ${styles.btnPrimary}`}>Call 440-313-8489</a>
          </div>
        </section>

        <section className={styles.serviceArea}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Proudly Serving Geauga County</h2>
            <div className={styles.areasList}>
              <div className={styles.areaItem}>Chardon</div>
              <div className={styles.areaItem}>Burton</div>
              <div className={styles.areaItem}>Chagrin Falls</div>
              <div className={styles.areaItem}>Chester Township</div>
              <div className={styles.areaItem}>Bainbridge</div>
              <div className={styles.areaItem}>Russell Township</div>
              <div className={styles.areaItem}>Newbury</div>
              <div className={styles.areaItem}>Middlefield</div>
              <div className={styles.areaItem}>Huntsburg</div>
              <div className={styles.areaItem}>Auburn</div>
              <div className={styles.areaItem}>Thompson</div>
              <div className={styles.areaItem}>Montville</div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}