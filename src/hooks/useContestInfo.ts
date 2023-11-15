import { useQuery } from 'react-query';
import getContestInfo from '../apis/contest/getContestInfo';

export const useContestInfo = (contestId: string) => {
  const { data: contestInfoData } = useQuery('contestInfo', () =>
    getContestInfo({
      contestId: contestId as string,
      // contestId: '6540d2d1c4c5fca30ca61e23',
    }),
  );

  return { contestInfoData };
};

export default useContestInfo;
