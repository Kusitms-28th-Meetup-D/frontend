import { useQuery } from 'react-query';
import getMyOpenedTeamMemberInfo from '../../apis/myTeam/getMyOpenedTeamMemberInfo';
import { RequestMyOpenedTeamMemberInfo } from '../../interface/MyTeam';

export const useMyOpenedTeamMemberInfo = (
  requestData: RequestMyOpenedTeamMemberInfo,
) => {
  const { data: myOpenedTeamMemberInfoData } = useQuery('myOpenedTeam', () =>
    getMyOpenedTeamMemberInfo({ teamId: requestData.teamId }),
  );

  return { myOpenedTeamMemberInfoData };
};

export default useMyOpenedTeamMemberInfo;
