import { useQuery } from 'react-query';
import getContestTeamList from '../apis/contest/getContestTeamList';

export const useContestTeamList = (contestId: string) => {
  const { data: contestTeamListData } = useQuery('contestTeamList', () =>
    getContestTeamList({
      contestId: contestId as string,
      // contestId: '6540d2d1c4c5fca30ca61e23',
    }),
  );

  return { contestTeamListData };
};

export default useContestTeamList;
