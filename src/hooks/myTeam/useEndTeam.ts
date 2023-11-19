import { useQuery } from 'react-query';
import { getEndTeam } from '../../apis/myTeam/getEndTeam';
import { ResponseEndTeam } from '../../interface/MyTeam';

interface UseEndTeam {
  endTeam?: ResponseEndTeam;
}

export function useEndTeam(): UseEndTeam {
  const { data: endTeam } = useQuery('endTeam', () => getEndTeam());
  return { endTeam };
}
