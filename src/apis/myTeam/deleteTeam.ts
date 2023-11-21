import { AxiosPromise } from 'axios';
import Axios from '../axios';

import {} from '../../interface/Modify';
import { RequestDeleteTeam, ResponseDeleteTeam } from '../../interface/MyTeam';

export const deleteTeam = (
  requestData: RequestDeleteTeam,
): AxiosPromise<ResponseDeleteTeam> =>
  Axios.delete(`/api/teams/${requestData.teamId}`);

export default deleteTeam;
