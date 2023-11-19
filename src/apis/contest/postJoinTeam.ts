import { AxiosPromise } from 'axios';
import Axios from '../axios';

import { RequestJoinTeam, ResponseJoinTeam } from '../../interface/Contest';

export const postJoinTeam = (
  requestData: RequestJoinTeam,
): AxiosPromise<ResponseJoinTeam> =>
  Axios.post(`/api/teams/apply`, {
    teamId: requestData.teamId,
  });

export default postJoinTeam;
