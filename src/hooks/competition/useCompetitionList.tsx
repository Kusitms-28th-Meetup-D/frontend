import { useQuery } from 'react-query';
import { ResponseCompetitionList } from '../../interface/Competition';
import { competitionKeys } from '../../keys/competitionKeys';
import { getCompetitionList } from '../../apis/competition/getCompetitionList';

interface UseCompetitionList {
  competitionList?: ResponseCompetitionList;
}

export function useCompetitionList(): UseCompetitionList {
  const { data: competitionList } = useQuery(competitionKeys.all, () =>
    getCompetitionList(),
  );
  return { competitionList };
}
