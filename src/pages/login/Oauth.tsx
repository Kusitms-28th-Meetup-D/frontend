import { useEffect } from 'react';
import getKakaoAccessToken from '../../apis/login/getKakaoAccessToken';

const Oauth = () => {
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const accessCode = params.get('code');

    //accessCode가 Null이 아니면
    if (accessCode) getKakaoAccessToken(accessCode);
  }, []);
  return <div>auth</div>;
};
export default Oauth;
