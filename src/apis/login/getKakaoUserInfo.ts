import axios from "axios";

const getKakaoUserInfo = async (kakaoAccessToken: string) => {
  try {
    const response = await axios.get('https://kapi.kakao.com/v2/user/me', {
      headers: {
        Authorization: `Bearer ${kakaoAccessToken}`,
        'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
      },
    });
    console.log(response);
  } catch (e) {
    console.log('카카오 정보 가져오기 에러', e);
  }
};
export default getKakaoUserInfo;