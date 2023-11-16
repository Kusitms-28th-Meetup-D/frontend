import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Oauth from './pages/login/Oauth';
import Join from './pages/join/Join';
import Profile from './pages/profile/Profile';
import ProfileCreate from './pages/profile/ProfileCreate';
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
import ScrollToTop from './components/common/ScrollToTop';
import ContestTeam from './pages/contestTeam/ContestTeam';

function Router() {
  return (
    <BrowserRouter>
      <ScrollToTop />
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

        <Route path="/list/:contestId" element={<Contest />} />
        <Route path="/list/:contestId/:teamid" element={<ContestTeam />} />
        <Route path="/profile/create" element={<ProfileCreate />} />

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
