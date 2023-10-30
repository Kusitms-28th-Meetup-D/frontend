import { IJoin } from '../../pages/join/Join';
import Axios from '../axios';

const postJoin = (kakaoAccessToken: string, joinData: IJoin) =>
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
