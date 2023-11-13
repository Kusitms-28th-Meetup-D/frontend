import Axios from '../axios';

const postLoginWithKakaoToken = (kakaoAccessToken: string) =>
  Axios.post(
    '/api/auth/login',
    {
      kakaoAccessToken: kakaoAccessToken,
      redirectUrl: 'test',
    },
    {
      headers: {
        Accept: 'application/json',
      },
    },
  );

export default postLoginWithKakaoToken;
