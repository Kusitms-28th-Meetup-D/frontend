export const kakao = (window as any).Kakao;

const KakaoLogout = () => {
  const redirectUri = 'http://localhost:5173/login/oauth';
  return (
    <img
      src="assets/images/header/kakaoLogout.png"
      onClick={() =>
        kakao.Auth.authorize({
          redirectUri: `${redirectUri}`,
          scope: 'profile_nickname,profile_image,account_email',
          // prompt: "select_account",
        })
      }
    ></img>
  );
};
export default KakaoLogout;
