import { ResponseReviewCheck } from '../../interface/Review';
import Axios from '../axios';

export async function getReviewCheck(
  teamId: number,
): Promise<ResponseReviewCheck> {
  const { data } = await Axios.get(`/api/teams/check-reviewed/${teamId}`);
  return data;
}
