import { AxiosPromise } from 'axios';
import Axios from '../axios';
import {
  RequestContestTeamList,
  ResponseContestTeamList,
} from '../../interface/Contest';

/**
 *
 * @param requestData  : RequestContestTeamList 타입의 request body 데이터
 *
 * @returns  : ResponseContestTeamList 타입의 response body 데이터
 *   <Axiospromise>로 감싼 이유는, Axios를 통해 비동기적으로 요청되는 promise객체이므로!
 */
export const getContestTeamList = (
  requestData: RequestContestTeamList,
): AxiosPromise<ResponseContestTeamList> =>
  Axios.get(`/api/teams/contest/${requestData.contestId}`, {
    headers: {
      Accept: 'application/json',
    },
  });

export default getContestTeamList;
