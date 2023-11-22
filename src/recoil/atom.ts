import { atom } from 'recoil';
import { Headers } from '../constants/Header';
import { recoilPersist } from 'recoil-persist';
import { LoginInfo } from '../interface/Login';
import { RecoilReview } from '../interface/Review';
const { persistAtom } = recoilPersist({
  key: 'recoilPersistTest',
  storage: sessionStorage,
});

export type HeaderSelectedType =
  | 'none'
  | 'list'
  | 'myTeam'
  | 'myProfile'
  | 'login'; //추가 가능
export const headerSelectedState = atom<HeaderSelectedType>({
  key: 'headerSelectedState',
  default: Headers.myProfile,
});

export const kakaoAccessTokenState = atom({
  key: 'kakaoAccessTokenState',
  default: '',
  effects_UNSTABLE: [persistAtom],
});
export const loginInfoState = atom<LoginInfo>({
  key: 'loginState',
  default: {
    isLogin: false,
  },
  effects_UNSTABLE: [persistAtom],
});
//리뷰 state
export const reviewState = atom<RecoilReview[]>({
  key: 'review',
  default: [
    {
      selectedKeywords: [],
      selectedTeamCultures: {
        feedbackStyle: -1,
        teamStyle: -1,
        personalityStyle: -1,
      },
      selectedWorkMethods: {
        workStyle: -1,
        resultProcess: -1,
        workLifeBalance: -1,
      },
    },
    {
      selectedKeywords: [],
      selectedTeamCultures: {
        feedbackStyle: -1,
        teamStyle: -1,
        personalityStyle: -1,
      },
      selectedWorkMethods: {
        workStyle: -1,
        resultProcess: -1,
        workLifeBalance: -1,
      },
    },
    {
      selectedKeywords: [],
      selectedTeamCultures: {
        feedbackStyle: -1,
        teamStyle: -1,
        personalityStyle: -1,
      },
      selectedWorkMethods: {
        workStyle: -1,
        resultProcess: -1,
        workLifeBalance: -1,
      },
    },
    {
      selectedKeywords: [],
      selectedTeamCultures: {
        feedbackStyle: -1,
        teamStyle: -1,
        personalityStyle: -1,
      },
      selectedWorkMethods: {
        workStyle: -1,
        resultProcess: -1,
        workLifeBalance: -1,
      },
    },
    {
      selectedKeywords: [],
      selectedTeamCultures: {
        feedbackStyle: -1,
        teamStyle: -1,
        personalityStyle: -1,
      },
      selectedWorkMethods: {
        workStyle: -1,
        resultProcess: -1,
        workLifeBalance: -1,
      },
    },
    {
      selectedKeywords: [],
      selectedTeamCultures: {
        feedbackStyle: -1,
        teamStyle: -1,
        personalityStyle: -1,
      },
      selectedWorkMethods: {
        workStyle: -1,
        resultProcess: -1,
        workLifeBalance: -1,
      },
    },
    {
      selectedKeywords: [],
      selectedTeamCultures: {
        feedbackStyle: -1,
        teamStyle: -1,
        personalityStyle: -1,
      },
      selectedWorkMethods: {
        workStyle: -1,
        resultProcess: -1,
        workLifeBalance: -1,
      },
    },
    {
      selectedKeywords: [],
      selectedTeamCultures: {
        feedbackStyle: -1,
        teamStyle: -1,
        personalityStyle: -1,
      },
      selectedWorkMethods: {
        workStyle: -1,
        resultProcess: -1,
        workLifeBalance: -1,
      },
    },
    {
      selectedKeywords: [],
      selectedTeamCultures: {
        feedbackStyle: -1,
        teamStyle: -1,
        personalityStyle: -1,
      },
      selectedWorkMethods: {
        workStyle: -1,
        resultProcess: -1,
        workLifeBalance: -1,
      },
    },
    {
      selectedKeywords: [],
      selectedTeamCultures: {
        feedbackStyle: -1,
        teamStyle: -1,
        personalityStyle: -1,
      },
      selectedWorkMethods: {
        workStyle: -1,
        resultProcess: -1,
        workLifeBalance: -1,
      },
    },
  ],
  // effects_UNSTABLE: [persistAtom],
});
export const reviewMemberIndexState = atom<number>({
  key: 'reviewIndex',
  default: 0,
});

//GlobalModal
export const loginModalState = atom({
  key: 'loginModal',
  default: false,
});
export const needKakaoReviewModalState = atom({
  key: 'needKakaoReviewModal',
  default: false,
});
export const joinTeamCompleteModalState = atom({
  key: 'joinTeamCompleteModal',
  default: false,
});
export const joinTeamRefusedModalState = atom({
  key: 'joinTeamRefusedModal',
  default: false,
});
