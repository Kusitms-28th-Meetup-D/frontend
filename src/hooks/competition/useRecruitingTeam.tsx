import { useQuery } from 'react-query';
import { ResponseRecruitingTeam } from '../../interface/MyTeam';
import { recruitingTeamKeys } from '../../keys/competitionKeys';
import { getRecruitingTeam } from '../../apis/competition/getRecruitingTeam';

interface UseRecruitingTeam {
  recruitingTeam?: ResponseRecruitingTeam;
  refetch: () => void;
}

export function useRecruitingTeam(
  page: number,
  size: number,
): UseRecruitingTeam {
  const { data: recruitingTeam, refetch } = useQuery(
    recruitingTeamKeys.all,
    () => getRecruitingTeam(page, size),
  );
  return { recruitingTeam, refetch };
}
