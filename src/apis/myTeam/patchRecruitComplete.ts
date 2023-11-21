import { AxiosPromise } from 'axios';
import Axios from '../axios';

import {} from '../../interface/Modify';
import {
  RequestRecruitComplete,
  ResponseRecruitComplete,
} from '../../interface/MyTeam';

export const patchRecruitComplete = (
  requestData: RequestRecruitComplete,
): AxiosPromise<ResponseRecruitComplete> =>
  Axios.patch(`/api/teams/recruitment-complete`, {
    teamId: requestData.teamId,
  });

export default patchRecruitComplete;
