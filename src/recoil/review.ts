import { atom } from 'recoil';

export const selectedNameAtom = atom({
  key: 'selectedNameAtom',
  default: '',
});

export const selectedTendencyAtom = atom({
  key: 'selectedTendencyAtom',
  default: {},
});
