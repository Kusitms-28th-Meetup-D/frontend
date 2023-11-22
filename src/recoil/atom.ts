import { atom } from 'recoil';
import { Headers } from '../constants/Header';
import { recoilPersist } from 'recoil-persist';
import { LoginInfo } from '../interface/Login';
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
