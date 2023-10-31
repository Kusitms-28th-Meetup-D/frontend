export const kakao = (window as any).Kakao;

const KakaoLogout = () => {
  return (
    <img
      src="assets/images/header/kakaoLogout.png"
      onClick={() => kakao.Auth.logout()}
    ></img>
  );
};
export default KakaoLogout;
