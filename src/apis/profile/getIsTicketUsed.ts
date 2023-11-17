import { AxiosPromise } from 'axios';
import Axios from '../axios';

import {
  RequestIsTicketUsed,
  ResponseIsTicketUsed,
} from '../../interface/Profile';

export const getIsTicketUsed = (
  requestData: RequestIsTicketUsed,
): AxiosPromise<ResponseIsTicketUsed> =>
  Axios.get(
    `/api/users/tickets/check-use?targetUserId=${requestData.targetUserId}`,
    {},
  );

export default getIsTicketUsed;
