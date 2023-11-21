import { useMutation, useQueryClient } from 'react-query';
import postNonUserReview from '../../apis/review/postNonUserReview';
import { RequestNonUserReview } from '../../interface/Review';

interface UseNonUserReviewCreate {
  mutate: () => void;
}

export function useNonUserReviewCreate(
  review: RequestNonUserReview,
): UseNonUserReviewCreate {
  const queryClient = useQueryClient();

  const { mutate } = useMutation(
    'nonUserReviewCreate',
    () => postNonUserReview(review),
    {
      onSuccess: () => {
        queryClient.invalidateQueries();
      },
    },
  );
  return { mutate };
}
