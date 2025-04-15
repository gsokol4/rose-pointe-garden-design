// app/page.jsx
import Navbar from '../../components/NavBar/NavBar';
import HeroSection from '../../components/HeroSection/HeroSection';

export default function Home() {
  return (
    <main>
      <HeroSection backgroundImage="/hero-home-large.png" />

      {/* Your other page content */}
    </main>
  );
}