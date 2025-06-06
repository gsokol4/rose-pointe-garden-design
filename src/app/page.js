// app/page.jsx
import HeroSection from '../../components/HeroSection/HeroSection';
import GardenServices from '../../components/GardenServices/GardenServices';

export const metadata = {
  title: "Rose Pointe Garden Company | Get A Garden Today",
  description:
    "Transform your outdoor space with Rose Pointe Garden Company. We offer premium landscape design and garden services tailored to your style and space.",
};

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