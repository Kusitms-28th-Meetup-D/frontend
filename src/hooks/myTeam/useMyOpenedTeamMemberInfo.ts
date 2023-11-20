import { useQuery } from 'react-query';
import getMyOpenedTeamMemberInfo from '../../apis/myTeam/getMyOpenedTeamMemberInfo';

export const useMyOpenedTeamMemberInfo = () => {
  const { data: myOpenedTeamMemberInfoData } = useQuery('myOpenedTeam', () =>
    getMyOpenedTeamMemberInfo(),
  );

  return { myOpenedTeamMemberInfoData };
};

export default useMyOpenedTeamMemberInfo;
