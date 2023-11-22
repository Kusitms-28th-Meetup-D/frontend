import { atom } from 'recoil';
import { question1, question2 } from '../constants/review';

export const selectedNameAtom = atom({
  key: 'selectedNameAtom',
  default: '',
});

export const selectedTendencyAtom = atom({
  key: 'selectedTendencyAtom',
  default: {},
});

interface SelectedAnswers {
  [key: number]: number;
}

const defaultSelectedAnswers1 = question1.reduce(
  (acc: SelectedAnswers, curr) => {
    acc[curr.id] = 0;
    return acc;
  },
  {},
);

const defaultSelectedAnswers2 = question2.reduce(
  (acc: SelectedAnswers, curr) => {
    acc[curr.id] = 0;
    return acc;
  },
  {},
);

const defaultSelectedAnswers = {
  ...defaultSelectedAnswers1,
  ...defaultSelectedAnswers2,
};

export const selectedWebTendencyAtom = atom({
  key: 'selectedWebTendencyAtom',
  default: defaultSelectedAnswers,
});
