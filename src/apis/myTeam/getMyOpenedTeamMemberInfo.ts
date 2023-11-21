import { AxiosPromise } from 'axios';
import Axios from '../axios';

import {
  RequestMyOpenedTeamMemberInfo,
  ResponseMyOpenedTeamMemberInfo,
} from '../../interface/MyTeam';

export const getMyOpenedTeamMemberInfo = (
  requestData: RequestMyOpenedTeamMemberInfo,
): AxiosPromise<ResponseMyOpenedTeamMemberInfo> =>
  Axios.get(`/api/teams/manage/${requestData.teamId}`, {});

export default getMyOpenedTeamMemberInfo;
