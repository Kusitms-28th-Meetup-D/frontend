import { RequestReviews } from '../../interface/Review';
import Axios from '../axios';

export async function postReviews(Reviews: RequestReviews): Promise<void> {
  await Axios.post(`/api/reviews`, Reviews);
}

export default postReviews;
