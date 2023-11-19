import { useQuery } from 'react-query';
import { getOpenedTeam } from '../../apis/myTeam/getOpenedTeam';
import { ResponseOpenedTeam } from '../../interface/MyTeam';

interface UseOpenedTeam {
  openedTeam?: ResponseOpenedTeam;
}

export function useOpenedTeam(): UseOpenedTeam {
  const { data: openedTeam } = useQuery('openedTeam', () => getOpenedTeam());
  return { openedTeam };
}
