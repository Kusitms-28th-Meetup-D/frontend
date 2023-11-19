import { useQuery } from 'react-query';
import getProfileReview from '../../apis/profile/getProfileReview';

export const useProfileReview = (userId: string) => {
  const { data: profileReviewData, isLoading: isLoadingReview } = useQuery(
    'profileReview',
    () =>
      getProfileReview({
        userId: userId,
      }),
  );

  return { profileReviewData, isLoadingReview };
};

export default useProfileReview;
