import { useQuery } from 'react-query';
import { ResponseReviewCheck } from '../../interface/Review';
import { getReviewCheck } from '../../apis/review/getReviewCheck';

interface UseReviewCheck {
  reviewCheck?: ResponseReviewCheck;
}

export function useReviewCheck(teamId: number): UseReviewCheck {
  const { data: reviewCheck } = useQuery('reviewCheck', () =>
    getReviewCheck(teamId),
  );
  return { reviewCheck };
}
