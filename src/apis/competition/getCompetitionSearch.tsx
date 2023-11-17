import { ResponseCompetitionList } from '../../interface/Competition';
import Axios from '../axios';

export async function getCompetitionSearch(
  searchText: string,
): Promise<ResponseCompetitionList> {
  const { data } = await Axios.get(
    `/api/contests/search?searchText=${searchText}`,
  );
  return data;
}
