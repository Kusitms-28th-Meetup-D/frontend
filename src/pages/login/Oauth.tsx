import { useEffect } from 'react';
import { kakao } from '../../components/login/KakaoLogin';
import fetchKakaoUserInfo from '../../apis/login/getKakaoUserInfo';
import { useSetRecoilState } from 'recoil';
import { kakaoAccessTokenState } from '../../recoil/atom';
import { useNavigate } from 'react-router-dom';

import postKakaoAccessTokenFromCode from '../../apis/login/postKakaoAccessTokenFromCode';
import useLoginWithKakaoToken from '../../hooks/login/useLoginWithKakaoToken';

const Oauth = () => {
  const setKakaoAccessTokenState = useSetRecoilState(kakaoAccessTokenState);
  const { handleLogin } = useLoginWithKakaoToken();

  const navigate = useNavigate();

  /** 카카오 인가 코드를 통해 카카오 어세스 토큰을 받아오는 함수
   *
   * @param kakaoAccessCode 로그인 후 받아온 카카오 인가  코드
   */
  const getKakaoAccessTokenWithCode = async (kakaoAccessCode: string) => {
    try {
      const responseKakaoAccessCode = await postKakaoAccessTokenFromCode(
        kakaoAccessCode,
      );
      console.log('인가코드로 accesstoken 받기 성공', responseKakaoAccessCode);
      setKakaoAccessTokenState(responseKakaoAccessCode.data.access_token);

      //받아온 토큰을 setAcessToken하기
      kakao.Auth.setAccessToken(responseKakaoAccessCode.data.access_token);

      //카카오 access토큰으로 사용자 정보 가져오기
      getKakaoUserInfo(responseKakaoAccessCode.data.access_token);

      //카카오토큰으로 로그인하기
      handleLogin(responseKakaoAccessCode.data.access_token);
      //loginWithKakaoToken(responseKakaoAccessCode.data.access_token);

      return responseKakaoAccessCode.data.access_token;
    } catch (error) {
      console.log('getKakaoAccessTokenWithCode', error);
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
    } catch (error) {
      console.log('카카오 정보 가져오기 에러', error);
    }
  };

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const kakaoAccessCode = params.get('code');
    const kakaoAccessToken = getKakaoAccessTokenWithCode(
      kakaoAccessCode as string,
    );
    kakaoAccessToken;
    //우리팀 서버에 카카오 토큰 유효성 검증하기
    console.log('kakaoAccessToken 잘 됐니?', kakaoAccessToken);
    navigate('/');
  }, []);
  return <div>auth</div>;
};
export default Oauth;
