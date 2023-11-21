import { useQuery } from 'react-query';
import { ResponseRecruitingTeam } from '../../interface/MyTeam';
import { recruitingTeamKeys } from '../../keys/competitionKeys';
import { getRecruitingTeam } from '../../apis/competition/getRecruitingTeam';
import { useMemo } from 'react';

interface UseRecruitingTeam {
  recruitingTeam?: ResponseRecruitingTeam;
}

export function useRecruitingTeam(
  page: number,
  size: number,
): UseRecruitingTeam {
  const queryKey = useMemo(() => [recruitingTeamKeys.all, page], [page]);

  const { data: recruitingTeam } = useQuery(
    queryKey,
    () => getRecruitingTeam(page, size),
    {
      staleTime: 0,
      cacheTime: 0,
      keepPreviousData: false,
    },
  );

  return { recruitingTeam };
}
