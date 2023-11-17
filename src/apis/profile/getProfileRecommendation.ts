import { AxiosPromise } from 'axios';
import Axios from '../axios';

import {
  RequestProfileRecommendation,
  ResponseProfileRecommendation,
} from '../../interface/Profile';

export const getProfileRecommendation = (
  requestData: RequestProfileRecommendation,
): AxiosPromise<ResponseProfileRecommendation> =>
  Axios.get(`/api/reviews/info/${requestData.userId}`, {
    headers: {
      Accept: 'application/json',
    },
  });

export default getProfileRecommendation;
