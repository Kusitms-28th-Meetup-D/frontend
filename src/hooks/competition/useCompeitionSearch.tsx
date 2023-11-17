import { useQuery } from 'react-query';
import { ResponseCompetitionList } from '../../interface/Competition';
import { competitionKeys } from '../../keys/competitionKeys';
import { getCompetitionSearch } from '../../apis/competition/getCompetitionSearch';

interface UseCompetitionSearch {
  competitionSearch?: ResponseCompetitionList;
}

export function useCompetitionSearch(): UseCompetitionSearch {
  const { data: competitionSearch } = useQuery(competitionKeys.all, () =>
    getCompetitionSearch(),
  );
  return { competitionSearch };
}
