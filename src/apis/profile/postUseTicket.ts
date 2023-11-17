import { AxiosPromise } from 'axios';
import Axios from '../axios';

import { RequestUseTicket, ResponseUseTicket } from '../../interface/Profile';

export const postUseTicket = (
  requestData: RequestUseTicket,
): AxiosPromise<ResponseUseTicket> =>
  Axios.post(`/api/users/tickets/use`, {
    purchaseUserId: requestData.purchaseUserId,
  });

export default postUseTicket;
