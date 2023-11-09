// import kakaoLoginImageSrc from '/assets/images/header/kakaoLogin.png';

export const kakao = (window as any).Kakao;


export const kakaoAuthorize = () => {
  const redirectUri = 'http://localhost:5173/login/oauth';
  kakao.Auth.authorize({
    redirectUri: `${redirectUri}`,
    scope: 'profile_nickname,profile_image,account_email,account_email',
  });
};

const KakaoLogin = () => {
  const redirectUri = 'http://localhost:5173/login/oauth';
  return (
    <div
      // src={kakaoLoginImageSrc}
      onClick={() =>
        kakao.Auth.authorize({
          redirectUri: `${redirectUri}`,
          scope: 'profile_nickname,profile_image,account_email,account_email',
        })
      }
    >마이페이지</div>
  );
};
export default KakaoLogin;
