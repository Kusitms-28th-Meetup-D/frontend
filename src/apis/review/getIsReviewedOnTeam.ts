import { AxiosPromise } from 'axios';
import Axios from '../axios';

import {
  RequestIsReviewedOnTeam,
  ResponseIsReviewedOnTeam,
} from '../../interface/Review';

export const getIsReviewedOnTeam = (
  requestData: RequestIsReviewedOnTeam,
): AxiosPromise<ResponseIsReviewedOnTeam> =>
  Axios.get(`/api/reviews/check-reviewed/${requestData.teamId}`, {
    headers: {
      Accept: 'application/json',
    },
  });

export default getIsReviewedOnTeam;
