import styled from 'styled-components';
import { Link } from 'react-router-dom';
import KakaoLogin from '../login/KakaoLogin';
import { useRecoilValue } from 'recoil';
import { kakaoNameState, loginState } from '../../recoil/atom';
import KakaoLogout from '../logout/KakaoLogout';
const Header = () => {
  const kakaoName = useRecoilValue(kakaoNameState);
  const isLogin = useRecoilValue(loginState);

  return (
    <HeaderLayout>
      <HeaderItem>로고</HeaderItem>
      <HeaderItem>공모전 리스트</HeaderItem>
      <HeaderItem>내팀</HeaderItem>
      <HeaderItem>{kakaoName}님 어서오세요</HeaderItem>
      {isLogin ? <KakaoLogout /> : <KakaoLogin />}
      <LoginLink to={'/login'}>로그인</LoginLink>
    </HeaderLayout>
  );
};
export default Header;

const HeaderLayout = styled.header`
  //width: 153.6rem;
  min-width: 128rem;
  height: 10rem;
  background-color: ${(props) => props.theme.colors.blue1};

  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 3rem;
`;
const HeaderItem = styled.div`
  font-size: 2rem;
`;
const LoginLink = styled(Link)`
  font-size: 2rem;
  cursor: pointer;
`;
