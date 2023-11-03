import kakaoLoginImageSrc from '../../../public/assets/images/header/kakaoLogin.png';

export const kakao = (window as any).Kakao;

const KakaoLogin = () => {
  const redirectUri = 'http://localhost:5173/login/oauth';
  return (
    <img
      src={kakaoLoginImageSrc}
      onClick={() =>
        kakao.Auth.authorize({
          redirectUri: `${redirectUri}`,
          scope: 'profile_nickname,profile_image,account_email,account_email',
        })
      }
    ></img>
  );
};
export default KakaoLogin;
