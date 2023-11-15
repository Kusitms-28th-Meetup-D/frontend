import Axios from '../../apis/axios';
import { useQuery } from 'react-query';
import { ResponseCompetitionList } from '../../interface/Competition';
import { competitionKeys } from '../../keys/competitionKeys';

export async function getCompetitionList(): Promise<ResponseCompetitionList> {
  const { data } = await Axios.get(`/api/contests/categories`);
  return data;
}

interface UseCompetitionList {
  competitionList?: ResponseCompetitionList;
}

export function useCompetitionList(): UseCompetitionList {
  const { data: competitionList } = useQuery(competitionKeys.all, () =>
    getCompetitionList(),
  );
  return { competitionList };
}
