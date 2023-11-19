import { useQuery } from 'react-query';
import getAppliedTeam from '../../apis/myTeam/getAppliedTeam';

export const useAppliedTeam = () => {
  const { data: appliedTeamData } = useQuery('appliedTeam', () =>
    getAppliedTeam(),
  );

  return { appliedTeamData };
};

export default useAppliedTeam;
