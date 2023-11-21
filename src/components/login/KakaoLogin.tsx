// import kakaoLoginImageSrc from '/assets/images/header/kakaoLogin.png';

import { AxiosResponse } from 'axios';
import postLoginWithKakaoToken from '../../apis/login/postLoginWithKakaoToken';
import { LoginResult, ResponseLogin } from '../../interface/Login';

export const kakao = (window as any).Kakao;

export const kakaoAuthorize = () => {
  // const redirectUri = 'http://localhost:5173/login/oauth'; //개발
  const redirectUri = 'https://wanteam.vercel.app/login/oauth'; //배포
  kakao.Auth.authorize({
    redirectUri: `${redirectUri}`,
    scope: 'profile_nickname,profile_image,account_email,account_email',
  });
};

export const loginWithKakaoToken = async (kakaoAccessToken: string) => {
  try {
    const responseLogin: AxiosResponse<ResponseLogin> =
      await postLoginWithKakaoToken(kakaoAccessToken);
    console.log('loginWithKakaoToken Complete', responseLogin);

    //성공시
    const loginResult: LoginResult = {
      isSuccess: true,
      statusCode: responseLogin.status,
      responseData: responseLogin.data, //???타입에러 왜 안나지 data.data
    };
    return loginResult;

    //실패시
  } catch (error: any) {
    console.log('loginWithKakaoToken Error', error);
    const loginResult: LoginResult = {
      isSuccess: false,
      statusCode: error.response?.data.status,
      error: error,
    };
    return loginResult;
  }
};

// const KakaoLogin = () => {
//   const redirectUri = 'http://localhost:5173/login/oauth';
//   return (
//     <div
//       // src={kakaoLoginImageSrc}
//       onClick={() =>
//         kakao.Auth.authorize({
//           redirectUri: `${redirectUri}`,
//           scope: 'profile_nickname,profile_image,account_email,account_email',
//         })
//       }
//     >마이페이지</div>
//   );
// };
// export default KakaoLogin;
