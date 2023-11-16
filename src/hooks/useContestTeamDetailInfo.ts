import { useQuery } from 'react-query';
import getContestTeamDetailInfo from '../apis/contest/getContestTeamDetailInfo';

export const useContestTeamDetailInfo = (teamId: number) => {
  const { data: contestTeamDetailData } = useQuery('contestTeamList', () =>
    getContestTeamDetailInfo({
      teamId: teamId as number,
    }),
  );

  return { contestTeamDetailData };
};

export default useContestTeamDetailInfo;
