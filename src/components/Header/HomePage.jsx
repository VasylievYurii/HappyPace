import HeroCarousel from '../../components/HeroCarousel/HeroCarousel';
import ToursSection from '../../components/ToursSection/ToursSection';
import GuidesSection from '../../components/GuidesSection/GuidesSection';
import GallerySection from '../../components/GallerySection/GallerySection';

const HomePage = () => {
  return (
    <div>
      <h1>Головна сторінка</h1>
      <HeroCarousel />
      <ToursSection />
      <GuidesSection />
      <GallerySection />
    </div>
  );
};

export default HomePage;