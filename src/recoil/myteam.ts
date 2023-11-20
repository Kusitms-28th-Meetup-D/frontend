import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const selectedTeamAtom = atom({
  key: 'selectedTeamAtom',
  default: 0,
  effects_UNSTABLE: [persistAtom],
});
