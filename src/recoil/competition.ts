import { atom } from 'recoil';

export const contestTypeAtom = atom({
  key: 'contestTypeAtom',
  default: 0,
});

export const searchTextAtom = atom({
  key: 'searchTextAtom',
  default: '',
});
