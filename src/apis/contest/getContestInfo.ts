import { AxiosPromise } from 'axios';
import Axios from '../axios';
import { RequestContestInfo, ResponseContestInfo } from '../../interface/Contest';


/**
 * 
 * @param requestData  : RequestContestInfo 타입의 request body 데이터
 * 
 * @returns  : ResponseContestInfo 타입의 response body 데이터
 *   <Axiospromise>로 감싼 이유는, Axios를 통해 비동기적으로 요청되는 promise객체이므로!
 */
export const getContestInfo = (
  requestData: RequestContestInfo,
): AxiosPromise<ResponseContestInfo> =>
  Axios.get(
    `/api/contests/detail?contestId=${requestData.contestId}`,
    {
      headers: {
        Accept: 'application/json',
      },
    },
  );

export default getContestInfo;
