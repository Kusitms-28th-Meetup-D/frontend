import { useQuery } from 'react-query';
import getIsExistNotReviewTeam from '../../apis/profile/getIsExistNotReviewTeam';

export const useIsExistNotReviewTeam = () => {
  const { data: isExistNotReviewTeamData } = useQuery(
    'isExistNotReviewTeam',
    () => getIsExistNotReviewTeam(),
  );

  return { isExistNotReviewTeamData };
};

export default useIsExistNotReviewTeam;
