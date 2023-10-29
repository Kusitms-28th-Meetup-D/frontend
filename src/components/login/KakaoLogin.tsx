export const kakao = (window as any).Kakao;

const KakaoLogin = () => {
  const redirectUri = 'http://localhost:5173/login/oauth';
  return (
    <>
      <img
        src="assets/images/header/kakaoLogin.png"
        onClick={() =>
          kakao.Auth.authorize({
            redirectUri: `${redirectUri}`,
            scope: 'profile_nickname,profile_image,account_email',
            // prompt: "select_account",
          })
        }
      ></img>
      {/* <hr />
      <img
        src="assets/kakaoLogout.png"
        onClick={() =>
          kakao.Auth.authorize({
            redirectUri: `${redirectUri}`,
            scope: 'profile_nickname,profile_image,account_email',
          })
        }
      ></img> */}
    </>
  );
};
export default KakaoLogin;
