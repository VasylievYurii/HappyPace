import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import HomePage from './components/Header/HomePage';
import ToursPage from './components/Header/ToursPage';
import TourDetailsPage from './components/Header/TourDetailsPage';
import GuidesPage from './pages/GuidesPage';
import GuideDetailsPage from './pages/GuideDetailsPage';
import GalleryPage from './pages/GalleryPage';
import ContactsPage from './pages/ContactsPage';
import NotFoundPage from './pages/NotFoundPage';
import { AppWrapper } from './App.styled';

const test = import.meta.env.VITE_API_TEST;

function App() {
  console.log(test);
  return (
    <AppWrapper>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="tours" element={<ToursPage />} />
          <Route path="tours/:tourId" element={<TourDetailsPage />} />
          {/* <Route path="guides" element={<GuidesPage />} /> */}
          {/* <Route path="guides/:guideId" element={<GuideDetailsPage />} /> */}
          {/* <Route path="gallery" element={<GalleryPage />} /> */}
          {/* <Route path="contacts" element={<ContactsPage />} /> */}
          {/* <Route path="*" element={<NotFoundPage />} /> */}
        </Route>
      </Routes>
    </AppWrapper>
  );
}
export default App;
