import { AxiosPromise } from 'axios';
import Axios from '../axios';

import {
  RequestIsUserGetExternalReview,
  ResponseIsUserGetExternalReview,
} from '../../interface/Profile';

export const getIsUserGetExternalReview = (
  requestData: RequestIsUserGetExternalReview,
): AxiosPromise<ResponseIsUserGetExternalReview> =>
  Axios.get(`/api/reviews/non-user/check/${requestData.userId}`, {});

export default getIsUserGetExternalReview;
