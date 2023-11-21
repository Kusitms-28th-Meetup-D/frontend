import { ResponseReviewUsers } from '../../interface/Review';
import Axios from '../axios';

export async function getReviewUsers(
  teamId: number,
): Promise<ResponseReviewUsers> {
  const { data } = await Axios.get(`/api/teams/review/${teamId}`);
  return data;
}
