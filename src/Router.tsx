import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Oauth from './pages/login/Oauth';

function Router() {
  // const a = 1;

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<div>main</div>} />
        <Route path="/login" element={<div>login</div>} />
        <Route path="/login/oauth" element={<Oauth />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default Router;
