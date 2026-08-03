import { Link } from 'react-router-dom';

const ToursSection = () => {
  // Тут будуть дані про тури (можна завантажувати з API або з мок-файлу)
  const tours = [{ id: 1, name: 'Тур 1' }, { id: 2, name: 'Тур 2' }, { id: 3, name: 'Тур 3' }];

  return (
    <section style={{ padding: '2rem', border: '1px solid green' }}>
      <h2>Блок з трьома турами</h2>
      {tours.map(tour => <div key={tour.id}><Link to={`/tours/${tour.id}`}>{tour.name}</Link><p>Короткий опис туру...</p></div>)}
    </section>
  );
};

export default ToursSection;