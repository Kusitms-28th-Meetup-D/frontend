import Axios from '../axios';

interface RequestContestInfo {
  contestId: string;
}
const getContestInfo = (requestData: RequestContestInfo) =>
  Axios.get(
    `/api/contests/detail?contestId=${requestData.contestId}`,

    {
      headers: {
        Accept: 'application/json',
      },
    },
  );

export default getContestInfo;
