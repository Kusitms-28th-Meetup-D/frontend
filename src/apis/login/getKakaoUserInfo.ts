import axios from 'axios';

const getKakaoUserInfo = (kakaoAccessToken: string) =>
  axios.get('https://kapi.kakao.com/v2/user/me', {
    headers: {
      Authorization: `Bearer ${kakaoAccessToken}`,
      'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
    },
  });

export default getKakaoUserInfo;
