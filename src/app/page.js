// app/page.jsx
import HeroSection from '../../components/HeroSection/HeroSection';
import GardenServices from '../../components/GardenServices/GardenServices';

export default function Home() {
  return (
    <main>
      <HeroSection backgroundImage="/homepage-hero.webp" />
      <GardenServices 
          title="Our Premium Services" 
          description="Discover how we can transform your outdoor space with our expert services."
        />
      {/* Your other page content */}
    </main>
  );
}