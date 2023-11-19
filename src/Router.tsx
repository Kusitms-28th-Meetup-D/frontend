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
import PaymentCharge from './pages/payment/PaymentCharge';
import Request from './pages/request/Request';
import Main from './pages/main/Main';
import ScrollToTop from './components/common/ScrollToTop';
import MyTeam from './pages/myteam/MyTeam';
import MyTeamOpen from './components/myteam/MyTeamOpen';
import ContestTeam from './pages/contestTeam/ContestTeam';
import ExternalReview from './pages/recommendation/ExternalReview';

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
        <Route path="/review/external" element={<ExternalReview />} />

        <Route path="/profile/:userId" element={<Profile />} />
        <Route path="/profile/:userId/create" element={<ProfileCreate />} />

        <Route path="/myteam/:userId" element={<MyTeam />}>
          <Route path="open" element={<MyTeamOpen />} />
          <Route path="apply" element={<div>지원한 팀</div>} />
          <Route path="active" element={<div>활동중인 팀</div>} />
          <Route path="end" element={<div>활동했던 팀</div>} />
        </Route>

        <Route path="/list/:contestId" element={<Contest />} />
        <Route path="/list/:contestId" element={<Contest />} />
        <Route path="/list/:contestId/:teamId" element={<ContestTeam />} />

        <Route path="/profile/create" element={<ProfileCreate />} />
        <Route
          path="/list/:postId/:teamId"
          element={<div>팀 생성페이지입니다</div>}
        />
        <Route path="/list" element={<CompetitionList />} />

        <Route path="/payment/charge" element={<PaymentCharge />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default Router;
