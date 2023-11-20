import { AxiosPromise } from 'axios';
import Axios from '../axios';

import { ResponseMyOpenedTeamMemberInfo } from '../../interface/MyTeam';

export const getMyOpenedTeamMemberInfo =
  (): AxiosPromise<ResponseMyOpenedTeamMemberInfo> =>
    Axios.get(`/api/teams/opened-myself`, {});

export default getMyOpenedTeamMemberInfo;
