import { Outlet } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Header/Footer';

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;