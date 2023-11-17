import { useQuery } from 'react-query';
import { ResponseCompetitionList } from '../../interface/Competition';
import { competitionKeys } from '../../keys/competitionKeys';
import { getCompetitionSearch } from '../../apis/competition/getCompetitionSearch';

interface UseCompetitionSearch {
  competitionSearch?: ResponseCompetitionList;
}

interface UseCompetitionSearchParams {
  searchText: string;
}

export function useCompetitionSearch({
  searchText,
}: UseCompetitionSearchParams): UseCompetitionSearch {
  const { data: competitionSearch } = useQuery(
    [competitionKeys.all, searchText],
    () => getCompetitionSearch(searchText),
    { enabled: searchText.length > 0 },
  );

  return { competitionSearch };
}
