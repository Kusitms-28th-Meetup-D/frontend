import { useQuery } from 'react-query';

import getIsUserGetExternalReview from '../../apis/profile/getIsUserGetExternalReview';

export const useIsUserGetExternalReview = (userId: string) => {
  const { data: isUserGetExternalReviewData } = useQuery(
    'isUserGetExternalReview',
    () =>
      getIsUserGetExternalReview({
        userId: userId,
      }),
  );

  return { isUserGetExternalReviewData };
};

export default useIsUserGetExternalReview;
