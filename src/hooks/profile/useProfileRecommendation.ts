import { useQuery } from 'react-query';
import getProfileRecommendation from '../../apis/profile/getProfileRecommendation';

export const useProfileRecommendation = (userId: string) => {
  const {
    data: profileRecommendationData,
    isLoading: isLoadingRecommendation,
  } = useQuery('profileRecommendation', () =>
    getProfileRecommendation({
      userId: userId,
    }),
  );

  return { profileRecommendationData, isLoadingRecommendation };
};

export default useProfileRecommendation;
