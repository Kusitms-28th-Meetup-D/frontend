import { atom } from 'recoil';
export type HeaderColorType = 'transparent' | 'white'; //추가 가능
export const currHeaderAtom = atom<HeaderColorType>({
  key: 'currHeader',
  default: 'white',
});

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
