import { atom } from 'recoil';
import { Headers } from '../constants/Header';
export type HeaderSelectedType =
  | 'none'
  | 'list'
  | 'myTeam'
  | 'login'
  | 'myPage'; //추가 가능

export const kakaoNameState = atom({
  key: 'kakaoNameState',
  default: 'noname',
});
export const kakaoAccessTokenState = atom({
  key: 'kakaoAccessTokenState',
  default: '',
});
export const loginState = atom<boolean>({
  key: 'loginState',
  default: false,
});
export const headerSelectedState = atom<HeaderSelectedType>({
  key: 'headerSelectedState',
  default: Headers.myPage,
});
