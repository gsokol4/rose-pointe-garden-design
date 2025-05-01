
// components/GardenServices.jsx
import FlippableCard from './../FlippableCards/FlippableCard';
import styles from './GardenServices.module.css';

const GardenServices = ({ 
  title = "Our Garden Services", 
  description = "Explore our range of professional garden services designed to transform your outdoor space.",
  services = defaultServices
}) => {
  return (
    <section className={styles.servicesSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>{title}</h2>
        <p className={styles.sectionDescription}>{description}</p>
        
        <div className={styles.cardsGrid}>
          {services.map((service) => (
            <FlippableCard
              key={service.id}
              title={service.title}
              summary={service.summary}
              detailedText={service.detailedText}
              imageUrl={service.imageUrl}
              linkUrl={service.linkUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// Default services data if none is provided
const defaultServices = [
  {
    id: 1,
    title: "Garden Design",
    summary: "Create your dream garden",
    detailedText: "Designing a garden is not just about location, but also plant selection, placement, and maintenance. It's also about creating a space that reflects your personal style and meets your unique needs.",
    imageUrl: "/garden-services/garden-services-garden-design.jpg",
    linkUrl: ""
  },
  {
    id: 2,
    title: "Outdoor Living Spaces",
    summary: "Extend your living area",
    detailedText: "Designing outdoor living spaces isn't just about layout and furniture—it often incorporates elements like stone and woodwork. It's about creating a seamless, functional extension of your home that fits your lifestyle.",
    imageUrl: "/garden-services/garden-services-out-door-living-spaces.jpg",
    linkUrl: ""
  },
  {
    id: 3,
    title: "Water Fountains",
    summary: "Add tranquility to your space",
    detailedText: "Water fountains aren't just decorative—they bring calming sounds, offer a fun play area for kids, and provide an essential water source for birds and other wildlife, enhancing your outdoor space in countless ways.",
    imageUrl: "/garden-services/garden-services-water-fountain.jpg",
    linkUrl: ""
  },
  {
    id: 4,
    title: "Delivery",
    summary: "Plants and materials delivered",
    detailedText: "Our delivery service ensures all your gardening needs are met without the hassle. We carefully transport plants, soil, stones, and all garden materials directly to your location, ensuring they arrive in perfect condition.",
    imageUrl: "/garden-services/garden-services-delivery.jpeg",
    linkUrl: ""
  }
];


export default GardenServices;