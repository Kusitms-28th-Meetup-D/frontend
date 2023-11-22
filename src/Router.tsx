import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
import ContestTeam from './pages/contestTeam/ContestTeam';
import MyTeamManagement from './pages/myteam/MyTeamManagement';
import MyTeamApply from './pages/myteam/MyTeamApply';
import Modal from './components/common/Modal';
import MyTeamCreate from './pages/myteam/MyTeamCreate';
import MyTeamActive from './pages/myteam/MyTeamActive';
import MyTeamEnd from './pages/myteam/MyTeamEnd';
import MyTeamOpen from './pages/myteam/MyTeamOpen';
import ProfileModify from './pages/modify/ProfileModify';
import ExternalMobileReview from './pages/review/ExternalMobileReview';
import ExternalMobileKeyword from './components/review/externalMobile/ExternalMobileKeyword';
import ExternalMobileTendency1 from './components/review/externalMobile/ExternalMobileTendency1';
import ExternalMobileTendency2 from './components/review/externalMobile/ExternalMobileTendency2';
import ExternalMobileMain from './components/review/externalMobile/ExternalMobileMain';
import ExternalMobileOneLine from './components/review/externalMobile/ExternalMobileOneLine';
import ExternalMobileComplete from './components/review/externalMobile/ExternalMobileComplete';
import Layout from './components/layout/Layout';
import ExternalReview from './pages/review/ExternalReview';
import ExternalReviewComplete from './pages/review/ExternalReviewComplete';

function Router() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/login/oauth" element={<Oauth />} />
          <Route path="/join" element={<Join />} />
          <Route path="/join/request" element={<Request />} />

          <Route path="/review/:teamId" element={<Review />}>
            <Route path="subjective" element={<Subjective />} />
            <Route path="multipleChoice" element={<MultipleChoice />} />
          </Route>
          <Route
            path="/review/external/mobile/:userId"
            element={<ExternalMobileReview />}
          >
            <Route path="" element={<ExternalMobileMain />} />
            <Route path="keyword" element={<ExternalMobileKeyword />} />
            <Route path="tendency1" element={<ExternalMobileTendency1 />} />
            <Route path="tendency2" element={<ExternalMobileTendency2 />} />
            <Route path="oneLine" element={<ExternalMobileOneLine />} />
            <Route path="complete" element={<ExternalMobileComplete />} />
          </Route>
          <Route path="/review/external/:userId" element={<ExternalReview />} />
          <Route
            path="/review/external/:userId/complete"
            element={<ExternalReviewComplete />}
          />

          <Route path="/profile/:userId" element={<Profile />} />
          <Route path="/profile/:userId/create" element={<ProfileCreate />} />
          <Route path="/profile/modify" element={<ProfileModify />} />

          <Route path="/myteam/create/:contestId" element={<MyTeamCreate />} />
          <Route path="/myteam/:userId" element={<MyTeam />}>
            <Route path="open" element={<MyTeamOpen />} />
            <Route path="apply" element={<MyTeamApply />} />
            <Route path="active" element={<MyTeamActive />} />
            <Route path="end" element={<MyTeamEnd />} />
          </Route>
          <Route
            path="/myteam/:userId/:teamId/:contestId"
            element={<MyTeamManagement />}
          />

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
      </Layout>
      <Modal />
    </BrowserRouter>
  );
}

export default Router;
