import HeroCarousel from './HeroCarousel';
import ToursSection from './ToursSection';
import GuidesSection from './GuidesSection';
import GallerySection from './GallerySection';

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