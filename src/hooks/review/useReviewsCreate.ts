import { useMutation, useQueryClient } from 'react-query';
import { RequestReviews } from '../../interface/Review';
import postReviews from '../../apis/review/postReviews';

interface UseReviewsCreate {
  mutate: () => void;
}

export function useReviewsCreate(reviews: RequestReviews): UseReviewsCreate {
  const queryClient = useQueryClient();
  console.log('api oaram', reviews);

  const { mutate } = useMutation('reviewCreate', () => postReviews(reviews), {
    onSuccess: () => {
      queryClient.invalidateQueries();
    },
  });
  return { mutate };
}
