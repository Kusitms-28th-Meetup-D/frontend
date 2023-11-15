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
import CompetitionList from './pages/competitionList/CompetitionList';
import Login from './pages/login/Login';
import PaymentComplete from './pages/payment/PaymentComplete';
import PaymentCharge from './pages/payment/PaymentCharge';
import Request from './pages/request/Request';
import Main from './pages/main/Main';

function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/login/oauth" element={<Oauth />} />
        <Route path="/join" element={<Join />} />
        <Route path="/join/request" element={<Request />} />
        <Route path="/recommendation" element={<Recommendation />}>
          <Route path="subjective" element={<Subjective />} />
          <Route path="multipleChoice" element={<MultipleChoice />} />
        </Route>
        <Route path="/profile/:userId" element={<Profile />} />
        <Route path="/list/:postId" element={<Contest />} />
        <Route
          path="/list/:postId/:teamId"
          element={<div>팀 생성페이지입니다</div>}
        />
        <Route path="/list" element={<CompetitionList />} />
        <Route path="/payment/charge" element={<PaymentCharge />} />
        <Route path="/payment/complete" element={<PaymentComplete />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default Router;
