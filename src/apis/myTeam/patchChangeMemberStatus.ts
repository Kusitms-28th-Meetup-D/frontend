import { AxiosPromise } from 'axios';
import Axios from '../axios';

import {} from '../../interface/Modify';
import {
  RequestChangeMemberState,
  ResponseChangeMemberState,
} from '../../interface/MyTeam';

export const patchChangeMemberStatus = (
  requestData: RequestChangeMemberState,
): AxiosPromise<ResponseChangeMemberState> =>
  Axios.patch(`/api/teams/change-role`, {
    teamId: requestData.teamId,
    memberId: requestData.memberId,
    role: requestData.role,
  });

export default patchChangeMemberStatus;
