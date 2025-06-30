import Link from 'next/link';
import Head from 'next/head';
import styles from './page.module.css';

export default function LandscapeDesign() {
  return (
    <>
      <Head>
        <title>Professional Landscape Design Company Near Me | Geauga & Lake County Ohio</title>
        <meta name="description" content="Expert landscape design company serving Geauga County, Lake County, Gates Mills & Chagrin Falls. Custom garden designs, professional installation. Call 440-313-8489 for free consultation." />
        <meta name="keywords" content="landscape design company near me, landscape and design near me, design landscaping near me, landscape designer near me, Geauga County, Lake County, Gates Mills, Chagrin Falls" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://yourwebsite.com/landscape-design" />
      </Head>

      <div className={styles.pageContainer}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1>Rose Pointe Garden Company</h1>
            <h2>Professional Landscape Design in Northeast Ohio</h2>
            <p>Transform your outdoor space with Rose Pointe Garden Company, serving Geauga County, Lake County, Gates Mills, and Chagrin Falls. Our expert landscape designers create personalized garden designs that bring your vision to life.</p>
            <div className={styles.heroButtons}>
              <a href="tel:4403138489" className={`${styles.btn} ${styles.btnPrimary}`}>Call Now</a>
              <Link href="#consultation" className={`${styles.btn} ${styles.btnSecondary}`}>Free Consultation</Link>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className={styles.services}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Expert Landscape Design & Installation Services</h2>
            <div className={styles.servicesGrid}>
              <div className={styles.serviceCard}>
                <div className={styles.serviceImage} style={{backgroundImage: 'url(/landing-pages/landscapers-near-me/design.webp)'}}></div>
                <div className={styles.serviceContent}>
                  <h3>Custom Landscape Design</h3>
                  <p>Our professional landscape designers create personalized garden plans tailored to your property&apos;s unique characteristics and aesthetic preferences.</p>
                  <p>From selecting plants that thrive in Ohio&apos;s climate to creating harmonious layouts, we design landscapes that bloom with beauty year-round.</p>
                </div>
              </div>
              <div className={styles.serviceCard}>
                <div className={styles.serviceImage} style={{backgroundImage: 'url(/landing-pages/landscapers-near-me/planting.webp)'}}></div>
                <div className={styles.serviceContent}>
                  <h3>Professional Installation</h3>
                  <p>Our skilled team handles every aspect of bringing your landscape design to life, from site preparation to final planting.</p>
                  <p>We work with precision and care, ensuring every element is properly installed for lasting beauty and functionality.</p>
                </div>
              </div>
              <div className={styles.serviceCard}>
                <div className={styles.serviceImage} style={{backgroundImage: 'url(/landing-pages/landscapers-near-me/hardscape.jpg)'}}></div>
                <div className={styles.serviceContent}>
                  <h3>Hardscape Design Features</h3>
                  <p>Enhance your landscape with custom pathways, patios, retaining walls, and other structural elements that add function and style.</p>
                  <p>Our hardscape features are designed to complement your garden while providing practical spaces for outdoor living.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className={styles.serviceAreas}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Landscape Design Company Serving Your Area</h2>
            <div className={styles.areasGrid}>
              <div className={styles.areaCard}>
                <h3>Geauga County</h3>
                <p>Professional landscape design and installation services throughout Geauga County, including Chardon, Russell Township, Bainbridge, and surrounding communities.</p>
              </div>
              <div className={styles.areaCard}>
                <h3>Lake County</h3>
                <p>Expert landscape designers serving Lake County with custom garden designs that thrive in Ohio&apos;s unique climate and soil conditions.</p>
              </div>
              <div className={styles.areaCard}>
                <h3>Gates Mills & Chagrin Falls</h3>
                <p>Specialized landscape design services for Gates Mills and Chagrin Falls, creating beautiful outdoor spaces that complement your home&apos;s architecture.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section id="process" className={styles.process}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Our Landscape Design Process</h2>
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
                <h3>Custom Design Presentation - $350</h3>
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

        {/* Why Choose Us */}
        <section className={styles.whyChoose}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Why Choose Our Landscape Design Company?</h2>
            <div className={styles.benefitsGrid}>
              <div className={styles.benefitCard}>
                <h3>Local Expertise</h3>
                <p>As a landscape design company near you, we understand the unique climate, soil conditions, and native plants that thrive in Geauga County, Lake County, Gates Mills, and Chagrin Falls.</p>
              </div>
              <div className={styles.benefitCard}>
                <h3>Personalized Design</h3>
                <p>Every landscape design is custom-created to match your vision, lifestyle, and property&apos;s unique characteristics. No cookie-cutter solutions.</p>
              </div>
              <div className={styles.benefitCard}>
                <h3>Professional Installation</h3>
                <p>Our experienced team ensures your landscape design is installed with precision and care, creating lasting beauty that stands the test of time.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="consultation" className={styles.cta}>
          <div className={styles.container}>
            <h2>Ready to Transform Your Outdoor Space?</h2>
            <p>Take the first step toward creating the garden of your dreams. Schedule your free consultation with our expert landscape designers and discover how Rose Pointe can bring your vision to life.</p>
            <a href="tel:4403138489" className={`${styles.btn} ${styles.btnPrimary}`}>Call 440-313-8489</a>
          </div>
        </section>
      </div>
    </>
  );
}