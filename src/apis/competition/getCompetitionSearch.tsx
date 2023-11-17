import { ResponseCompetitionList } from '../../interface/Competition';
import Axios from '../axios';

export async function getCompetitionSearch(): Promise<ResponseCompetitionList> {
  const { data } = await Axios.get(`/api/contests/search`);
  return data;
}
