import { AxiosPromise } from 'axios';
import Axios from '../axios';

import { ResponseMainPageInfo } from '../../interface/Main';

export const getMainData = (): AxiosPromise<ResponseMainPageInfo> =>
  Axios.get(`/api/contests/main-recommendation`, {});

export default getMainData;
