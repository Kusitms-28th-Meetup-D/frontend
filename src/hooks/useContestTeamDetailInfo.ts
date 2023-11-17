import { useQuery } from 'react-query';
import getContestTeamDetailInfo from '../apis/contest/getContestTeamDetailInfo';

export const useContestTeamDetailInfo = (teamId: string) => {
  const { data: contestTeamDetailData, isLoading } = useQuery(
    'contestTeamDetailInfo',
    () =>
      getContestTeamDetailInfo({
        teamId: teamId,
      }),
  );

  return { contestTeamDetailData, isLoading };
};

export default useContestTeamDetailInfo;
