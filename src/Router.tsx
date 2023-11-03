import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Oauth from './pages/login/Oauth';
import Join from './pages/join/Join';
import Profile from './pages/profile/Profile';

function Router() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<div>main</div>} />
        <Route path="/login" element={<div>login</div>} />
        <Route path="/login/oauth" element={<Oauth />} />
        <Route path="/login/join" element={<Join />} />
        <Route path="/profile/:userid" element={<Profile/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default Router;
