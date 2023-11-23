import { useQuery } from 'react-query';
import getIsReviewedOnTeam from '../../apis/review/getIsReviewedOnTeam';
import { RequestIsReviewedOnTeam } from '../../interface/Review';

export const useIsReviewedOnTeam = (requestData: RequestIsReviewedOnTeam) => {
  const { data: isReviewedOnTeamData } = useQuery('reviewedOnTeam', () =>
    getIsReviewedOnTeam({
      teamId: requestData.teamId,
    }),
  );

  return { isReviewedOnTeamData };
};

export default useIsReviewedOnTeam;
