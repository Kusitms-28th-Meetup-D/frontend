import { AxiosPromise } from 'axios';
import Axios from '../axios';

import { RequestProfile, ResponseProfile } from '../../interface/Profile';

/**
 *
 * @param requestData  : RequestProfile 타입, 쿼리 스트링 방식
 *
 * @returns  : ResponseProfile 타입의 response body 데이터
 *   <Axiospromise>로 감싼 이유는, Axios를 통해 비동기적으로 요청되는 promise객체이므로!
 */
export const getProfile = (
  requestData: RequestProfile,
): AxiosPromise<ResponseProfile> =>
  Axios.get(`/api/users/mypage?userId=${requestData.userId}`, {
    headers: {
      Accept: 'application/json',
    },
  });

export default getProfile;
