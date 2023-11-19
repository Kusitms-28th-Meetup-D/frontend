import { useQuery } from 'react-query';
import { getOpendTeam } from '../../apis/myTeam/getOpendTeam';
import { ResponseOpendTeam } from '../../interface/MyTeam';

interface UseOpendTeam {
  openedTeam?: ResponseOpendTeam;
}

export function useOpendTeam(): UseOpendTeam {
  const { data: openedTeam } = useQuery('openedTeam', () => getOpendTeam());
  return { openedTeam };
}
