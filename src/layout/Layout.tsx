import { Outlet } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Layout = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
