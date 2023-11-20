import { AxiosPromise } from 'axios';
import Axios from '../axios';

import {
  RequestModifyProfile,
  ResponseModifyProfile,
} from '../../interface/Modify';

export const patchModifyProfile = (
  requestData: RequestModifyProfile,
): AxiosPromise<ResponseModifyProfile> =>
  Axios.patch(`/api/users/account-info`, {
    username: requestData.username,
    location: requestData.location,
    major: requestData.major,
    task: requestData.task,
    selfIntroduce: requestData.selfIntroduce,
  });

export default patchModifyProfile;
