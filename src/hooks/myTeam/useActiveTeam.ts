import { useQuery } from 'react-query';
import getActiveTeam from '../../apis/myTeam/getActiveTeam';

export const useActiveTeam = () => {
  const { data: activeTeamData } = useQuery('activeTeam', () =>
    getActiveTeam(),
  );

  return { activeTeamData };
};

export default useActiveTeam;
