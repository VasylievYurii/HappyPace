import { useParams } from 'react-router-dom';

const TourDetailsPage = () => {
  const { tourId } = useParams();
  return (
    <div>Детальна сторінка для Туру №{tourId}</div>
  );
};

export default TourDetailsPage;