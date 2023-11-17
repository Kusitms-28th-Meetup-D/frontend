import { ResponseCompetitionList } from '../../interface/Competition';
import Axios from '../axios';

export async function getCompetitionList(
  contestType: number,
): Promise<ResponseCompetitionList> {
  const { data } = await Axios.get(
    `/api/contests/categories?contestType=${contestType}`,
  );
  return data;
}
