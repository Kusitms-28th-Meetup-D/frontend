import { useEffect } from 'react';
import fetchKakaoAccessToken from '../../apis/login/postKakaoAccessToken';
import { kakao } from '../../components/login/KakaoLogin';
import fetchKakaoUserInfo from '../../apis/login/getKakaoUserInfo';
import { useSetRecoilState } from 'recoil';
import { kakaoAccessTokenState, kakaoInfoState } from '../../recoil/atom';
import { useNavigate } from 'react-router-dom';
import postLoginWithKakaoToken from '../../apis/login/postLoginWithKakaoToken';
import { ResponseLogin } from '../../interface/Join';
import { AxiosResponse } from 'axios';

const Oauth = () => {
  const setKakaoAccessTokenState = useSetRecoilState(kakaoAccessTokenState);
  const setKakaoInfoState = useSetRecoilState(kakaoInfoState);
  // const setloginState = useSetRecoilState(loginState);
  const navigate = useNavigate();
  /** 카카오 인가 코드를 통해 카카오 어세스 토큰을 받아오는 함수
   *
   * @param kakaoAccessCode 로그인 후 받아온 카카오 인가  코드
   */
  const getKakaoAccessToken = async (kakaoAccessCode: string) => {
    try {
      const responseKakaoAccessCode = await fetchKakaoAccessToken(
        kakaoAccessCode,
      );
      console.log('getKakaoAccessTokencomplete', responseKakaoAccessCode);
      setKakaoAccessTokenState(responseKakaoAccessCode.data.access_token);
      // setloginState(true);
      localStorage.setItem(
        'kakaoAccessToken',
        responseKakaoAccessCode.data.access_token,
      );

      //받아온 토큰을 setAcessToken하기
      kakao.Auth.setAccessToken(responseKakaoAccessCode.data.access_token);

      //카카오 access토큰으로 사용자 정보 가져오기
      getKakaoUserInfo(responseKakaoAccessCode.data.access_token);

      //카카오토큰으로 로그인하기
      loginWithKakaoToken(responseKakaoAccessCode.data.access_token);

      return responseKakaoAccessCode.data.access_token;
    } catch (error) {
      console.log('kakaoAccessToken', error);
    }
  };

  /** 카카오 어세스 토큰으로 유저 정보를 가져오는 함수
   *
   * @param kakaoAccessToken 카카오 어세스 토큰
   */
  const getKakaoUserInfo = async (kakaoAccessToken: string) => {
    try {
      const responseUserInfo = await fetchKakaoUserInfo(kakaoAccessToken);
      console.log('responseUserInfo Complete', responseUserInfo);
      setKakaoInfoState({
        name: responseUserInfo.data.properties.nickname,
        image: responseUserInfo.data.properties.profile_image,
      });
    } catch (error) {
      console.log('카카오 정보 가져오기 에러', error);
    }
  };

  /** 카카오 어세스 토큰를 통해 로그인 하는 함수
   *
   * @param kakaoAccessToken 카카오 어세스 토큰
   */
  const loginWithKakaoToken = async (kakaoAccessToken: string) => {
    try {
      const responseLogin: AxiosResponse<ResponseLogin> =
        await postLoginWithKakaoToken(kakaoAccessToken);
      console.log('responseValitadion Complete', responseLogin);
      setKakaoInfoState({
        name: responseLogin.data.data.name,
        image: responseLogin.data.data.profileImage,
      });
    } catch (error: any) {
      //console.log('카카오토큰 validation 에러', error);
      //회원가입 페이지로 연결
      if (error.response.data.status == 404) {
        navigate('/login/join', {
          state: { kakaoAccessToken: kakaoAccessToken },
        });
      }
    }
  };

  // const maintainLoginWithToken = (kakaoAccessToken: string) => {
  //   kakao.Auth.setAccessToken(kakaoAccessToken);
  //   console.log('새로고침해도그대로라구');
  // };
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const kakaoAccessCode = params.get('code');

    // const localStorageKakaoToken = localStorage.getItem('kakaoAccessToken');
    //if (localStorageKakaoToken) maintainLoginWithToken(localStorageKakaoToken);

    const kakaoAccessToken = getKakaoAccessToken(kakaoAccessCode as string);
    kakaoAccessToken;
    //우리팀 서버에 카카오 토큰 유효성 검증하기

    navigate('/');
  }, []);
  return <div>auth</div>;
};
export default Oauth;
