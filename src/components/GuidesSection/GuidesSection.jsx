import { Link } from 'react-router-dom';

const GuidesSection = () => {
  // Дані про гідів
  const guides = [{ id: 1, name: 'Гід 1' }, { id: 2, name: 'Гід 2' }];

  return (
    <section style={{ padding: '2rem', border: '1px solid orange' }}>
      <h2>Блок з гідами</h2>
      {guides.map(guide => <div key={guide.id}><Link to={`/guides/${guide.id}`}>{guide.name}</Link><p>Короткий опис гіда...</p></div>)}
    </section>
  );
};

export default GuidesSection;