import { AxiosPromise } from 'axios';
import Axios from '../axios';
import {
  RequestContestTeamDetailInfo,
  ResponseContestTeamDetailInfo,
} from '../../interface/Contest';

/**
 *
 * @param requestData  : RequestContestTeamDetailInfo 타입의 request body 데이터
 *
 * @returns  : ResponseContestTeamDetailInfo 타입의 response body 데이터
 *   <Axiospromise>로 감싼 이유는, Axios를 통해 비동기적으로 요청되는 promise객체이므로!
 */
export const getContestTeamDetailInfo = (
  requestData: RequestContestTeamDetailInfo,
): AxiosPromise<ResponseContestTeamDetailInfo> =>
  Axios.get(`/api/contests/detail/teamId=${requestData.teamId}`, {
    headers: {
      Accept: 'application/json',
    },
  });

export default getContestTeamDetailInfo;
