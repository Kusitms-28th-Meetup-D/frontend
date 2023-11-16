import { useQuery } from 'react-query';
import getContestTeamDetailInfo from '../apis/contest/getContestTeamDetailInfo';

export const useContestTeamDetailInfo = (teamId: string) => {
  const { data: contestTeamDetailData } = useQuery('contestTeamList', () =>
    getContestTeamDetailInfo({
      teamId: teamId as string,
    }),
  );

  return { contestTeamDetailData };
};

export default useContestTeamDetailInfo;
