import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Oauth from './pages/login/Oauth';
import Join from './pages/join/Join';
import Profile from './pages/profile/Profile';
import ProfileCreate from './pages/profile/ProfileCreate';
import Review from './pages/review/Review';
import MultipleChoice from './pages/review/MultipleChoice';
import Subjective from './pages/review/Subjective';
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
import MyTeamManagement from './pages/myTeam/MyTeamManagement';
import MyTeamApply from './pages/myTeam/MyTeamApply';
import Modal from './components/common/Modal';
import ExternalReview from './pages/review/ExternalReview';
import MyTeamCreate from './pages/myteam/MyTeamCreate';

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

        <Route path="/review/external/:userId" element={<ExternalReview />} />
        <Route path="/review" element={<Review />}>
          <Route path="subjective" element={<Subjective />} />
          <Route path="multipleChoice" element={<MultipleChoice />} />
        </Route>

        <Route path="/profile/:userId" element={<Profile />} />
        <Route path="/profile/:userId/create" element={<ProfileCreate />} />

        <Route path="/myteam/:userId" element={<MyTeam />}>
          <Route path="open" element={<MyTeamOpen />} />
          <Route path="apply" element={<MyTeamApply />} />
          <Route path="active" element={<div>활동중인 팀</div>} />
          <Route path="end" element={<div>활동했던 팀</div>} />
        </Route>
        <Route
          path="/myteam/:userId/:contestId/:teamId"
          element={<MyTeamManagement />}
        ></Route>

        <Route path="/myteam/create/:contestId" element={<MyTeamCreate />} />
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
      <Modal />
    </BrowserRouter>
  );
}

export default Router;
