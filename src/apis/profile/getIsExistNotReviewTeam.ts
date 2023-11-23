import { AxiosPromise } from 'axios';
import Axios from '../axios';

import { ResponseIsExistNotReviewTeam } from '../../interface/Profile';

export const getIsExistNotReviewTeam =
  (): AxiosPromise<ResponseIsExistNotReviewTeam> =>
    Axios.get(`/api/reviews/not-review-team`, {});

export default getIsExistNotReviewTeam;
