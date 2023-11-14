import { useSetRecoilState } from 'recoil';
import { loginWithKakaoToken } from '../components/login/KakaoLogin';
import { LoginResult } from '../interface/Login';
import { loginInfoState } from '../recoil/atom';
import { useNavigate } from 'react-router-dom';

/** 카카오 어세스 토큰를 통해 로그인 하는 훅
 *
 */
const useLoginWithKakaoToken = () => {
  // const loginResponse: LoginResult = loginWithKakaoToken(kakaoAccessToken);
  const navigate = useNavigate();
  const setLoginInfo = useSetRecoilState(loginInfoState);
  const handleLogin = async (kakaoAccessToken: string) => {
    try {
      const responseLogin: LoginResult = await loginWithKakaoToken(
        kakaoAccessToken,
      );
      if (responseLogin.isSuccess && responseLogin.responseData !== undefined) {
        console.log('로그인성공', responseLogin);

        setLoginInfo({
          isLogin: true,
          data: {
            userId: responseLogin.responseData?.data?.userId,
            refreshToken: responseLogin.responseData?.data.refreshToken,
            accessToken: responseLogin.responseData?.data.accessToken,
            profileImage: responseLogin.responseData?.data.profileImage,
            name: responseLogin.responseData?.data.name,
          },
        });
        navigate('/join/request');
      } else {
        if (responseLogin.statusCode == 404) {
          console.log('로그인실패 회원이 아님', responseLogin);
          navigate('/join');
        } else {
          console.log('로그인실패, 이거 출력되면 안되는데', responseLogin);
        }
      }
    } catch (error: any) {
      console.error('UN EXPECTED ERROR Login failed:', error);
    }
  };
  return { handleLogin };
};
export default useLoginWithKakaoToken;
