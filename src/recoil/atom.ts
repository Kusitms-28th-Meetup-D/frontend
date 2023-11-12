import { atom } from 'recoil';
import { Headers } from '../constants/Header';
import { KakaoInfo } from '../interface/Kakao';
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
export const kakaoInfoState = atom<KakaoInfo>({
  key: 'kakaoInfoState',
  default: {
    name: 'name',
    image:
      'https://search.pstatic.net/sunny/?src=https%3A%2F%2Fi2.ruliweb.com%2Fimg%2F22%2F06%2F06%2F1813491dcbf563e92.jpg&type=ofullfill340_600_png',
    email: 'email',
  },
});
export const kakaoAccessTokenState = atom({
  key: 'kakaoAccessTokenState',
  default: '',
});
export const loginState = atom<boolean>({
  key: 'loginState',
  default: false,
});
