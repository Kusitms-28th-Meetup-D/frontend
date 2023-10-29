import axios from 'axios';
import { kakao } from '../../components/login/KakaoLogin';
import getKakaoUserInfo from './getKakaoUserInfo';

const GRANT_TYPE = 'authorization_code';
const client_id = import.meta.env.VITE_KAKAO_CLIENT_ID;
const redirect_uri = 'http://localhost:5173/login/oauth';
const postUrl = 'https://kauth.kakao.com/oauth/token';

const getKakaoAccessToken = async (accessCode: string) => {
  try {
    const response = await axios.post(
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
    console.log('getKakaoAccessTokencomplete', response);

    //받아온 토큰을 setAcessToken하기
    kakao.Auth.setAccessToken(response.data.access_token);

    //카카오 access토큰으로 사용자 정보 가져오기
    getKakaoUserInfo(response.data.access_token);

  
  } catch (error) {
    console.error('우리팀 서버 없음Error:', error);
  }
};


export default getKakaoAccessToken;
