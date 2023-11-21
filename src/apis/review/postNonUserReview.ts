import { RequestNonUserReview } from '../../interface/Review';
import Axios from '../axios';

export async function postNonUserReview(
  nonUserReview: RequestNonUserReview,
): Promise<void> {
  await Axios.post(`/api/reviews/non-user`, nonUserReview);
}

export default postNonUserReview;
