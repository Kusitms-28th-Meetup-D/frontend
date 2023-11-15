import { ResponseCompetitionList } from '../../interface/Competition';
import Axios from '../axios';

export async function getCompetitionList(): Promise<ResponseCompetitionList> {
  const { data } = await Axios.get(`/api/contests/categories`);
  return data;
}
