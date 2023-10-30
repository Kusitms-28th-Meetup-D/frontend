import Axios from '../axios';

const postKakaoToken = (kakaoAccessToken: string) =>
  Axios.post(
    '/api/auth/login',
    {
      "kakaoAccessToken": kakaoAccessToken,
      "redirectUrl": 'test',
    },
    {
      headers: {
        "Accept": 'application/json',
      },
    },
  );

export default postKakaoToken;
