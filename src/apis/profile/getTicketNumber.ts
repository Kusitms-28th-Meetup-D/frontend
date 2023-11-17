import { AxiosPromise } from 'axios';
import Axios from '../axios';

import { ResponseTicketNumber } from '../../interface/Profile';

export const getTicketNumber = (): AxiosPromise<ResponseTicketNumber> =>
  Axios.get(`/api/users/tickets/count`, {});

export default getTicketNumber;
