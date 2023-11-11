import { RequestJoin } from '../../interface/Join';
import Axios from '../axios';

const postJoin = (kakaoAccessToken: string, joinData: RequestJoin) =>
  Axios.post(
    '/api/auth/register',
    {
      kakaoAccessToken: kakaoAccessToken,
      username: joinData.name,
      age: 987654,
    },
    {
      headers: {
        Accept: 'application/json',
      },
    },
  );

export default postJoin;
