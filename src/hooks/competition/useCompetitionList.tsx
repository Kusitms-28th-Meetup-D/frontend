import { useQuery } from 'react-query';
import { ResponseCompetitionList } from '../../interface/Competition';
import { competitionKeys } from '../../keys/competitionKeys';
import { getCompetitionList } from '../../apis/competition/getCompetitionList';

interface UseCompetitionList {
  competitionList?: ResponseCompetitionList;
}

interface UseCompetitionListParams {
  contestType: number;
}

export function useCompetitionList({
  contestType,
}: UseCompetitionListParams): UseCompetitionList {
  const { data: competitionList } = useQuery(
    [competitionKeys.all, contestType],
    () => getCompetitionList(contestType),
  );
  return { competitionList };
}
