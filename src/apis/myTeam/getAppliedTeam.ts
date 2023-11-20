import { AxiosPromise } from 'axios';
import Axios from '../axios';

import { ResponseAppliedTeam } from '../../interface/MyTeam';

export const getAppliedTeam = (): AxiosPromise<ResponseAppliedTeam> =>
  Axios.get(`/api/teams/applied-team`, {});

export default getAppliedTeam;
