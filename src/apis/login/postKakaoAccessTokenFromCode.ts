import axios from 'axios';

const GRANT_TYPE = 'authorization_code';
const client_id = import.meta.env.VITE_KAKAO_CLIENT_ID;
const redirect_uri = 'http://localhost:5173/login/oauth';
const postUrl = 'https://kauth.kakao.com/oauth/token';

const postKakaoAccessTokenFromCode = (accessCode: string) =>
  axios.post(
    postUrl,
    {
      grant_type: GRANT_TYPE,
      client_id: client_id,
      redirect_uri: redirect_uri,
      code: accessCode,
    },
    {
      headers: {
        'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
      },
    },
  );

export default postKakaoAccessTokenFromCode;
