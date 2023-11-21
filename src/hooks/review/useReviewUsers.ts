import { useQuery } from 'react-query';
import { ResponseReviewUsers } from '../../interface/Review';
import { getReviewUsers } from '../../apis/review/getReviewUsers';

interface UseReviewUsers {
  reviewUsers?: ResponseReviewUsers;
}

export function useReviewUsers(teamId: number): UseReviewUsers {
  const { data: reviewUsers } = useQuery('reviewUsers', () =>
    getReviewUsers(teamId),
  );
  return { reviewUsers };
}
