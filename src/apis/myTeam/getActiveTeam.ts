import { AxiosPromise } from 'axios';
import Axios from '../axios';

import { ResponseActiveTeam } from '../../interface/MyTeam';

export const getActiveTeam = (): AxiosPromise<ResponseActiveTeam> =>
  Axios.get(`/api/teams/proceed-team`, {});

export default getActiveTeam;
