import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Oauth from './pages/login/Oauth';
import Join from './pages/join/Join';
import Profile from './pages/profile/Profile';

import Recommendation from './pages/recommendation/Recommendation';
import MultipleChoice from './pages/recommendation/MultipleChoice';
import Subjective from './pages/recommendation/Subjective';
import Contest from './pages/contest/Contest';

function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<div>main</div>} />
        <Route path="/login" element={<div>login</div>} />
        <Route path="/login/oauth" element={<Oauth />} />
        <Route path="/login/join" element={<Join />} />
        <Route path="/recommendation" element={<Recommendation />}>
          <Route path="subjective" element={<Subjective />} />
          <Route path="multipleChoice" element={<MultipleChoice />} />
        </Route>
        <Route path="/profile/:userId" element={<Profile />} />
        <Route path='/list/:postId' element={<Contest/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default Router;
