import { AxiosPromise } from 'axios';
import Axios from '../axios';

import {
  RequestProfileReview,
  ResponseProfileReview,
} from '../../interface/Profile';

export const getProfileReview = (
  requestData: RequestProfileReview,
): AxiosPromise<ResponseProfileReview> =>
  Axios.get(`/api/reviews/info/${requestData.userId}`, {
    headers: {
      Accept: 'application/json',
    },
  });

export default getProfileReview;
