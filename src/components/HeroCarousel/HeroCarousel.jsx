import { Swiper, SwiperSlide } from 'swiper/react';

// Імпортуємо модулі, які додають функціонал (навігація, пагінація)
import { Navigation, Pagination } from 'swiper/modules';

// Обов'язково імпортуємо стилі
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const HeroCarousel = () => {
  return (
    <section style={{ padding: '2rem', border: '1px solid blue' }}>
      <h2>Блок з каруселлю картинок та мотиваційними написами</h2>
    </section>
  );
};

export default HeroCarousel;