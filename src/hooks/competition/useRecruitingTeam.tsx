import { useQuery } from 'react-query';
import { ResponseRecruitingTeam } from '../../interface/MyTeam';
import { recruitingTeamKeys } from '../../keys/competitionKeys';
import { getRecruitingTeam } from '../../apis/competition/getRecruitingTeam';

interface UseRecruitingTeam {
  recruitingTeam?: ResponseRecruitingTeam;
}

export function useRecruitingTeam(): UseRecruitingTeam {
  const { data: recruitingTeam } = useQuery(recruitingTeamKeys.all, () =>
    getRecruitingTeam(),
  );
  return { recruitingTeam };
}
