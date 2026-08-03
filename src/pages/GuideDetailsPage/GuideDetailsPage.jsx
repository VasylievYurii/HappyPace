import { useParams } from 'react-router-dom';

const GuideDetailsPage = () => {
  const { guideId } = useParams();
  return (
    <div>Детальна сторінка для Гіда №{guideId}</div>
  );
};

export default GuideDetailsPage;