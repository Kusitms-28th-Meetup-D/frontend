import { useMutation, useQueryClient } from 'react-query';
import postNonUserReview from '../../apis/review/postNonUserReview';
import { RequestNonUserReview } from '../../interface/Review';

interface UseNonUserReviewCreate {
  mutate: () => void;
}

export function useNonUserReviewCreate(
  reviews: RequestNonUserReview,
): UseNonUserReviewCreate {
  const queryClient = useQueryClient();

  const { mutate } = useMutation(
    'nonUserReviewCreate',
    () => postNonUserReview(reviews),
    {
      onSuccess: () => {
        queryClient.invalidateQueries();
      },
    },
  );
  return { mutate };
}
