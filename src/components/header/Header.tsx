import styled from 'styled-components';
import { Link } from 'react-router-dom';
import KakaoLogin from './KakaoLogin';
const Header = () => {
  return (
    <HeaderLayout>
      <HeaderItem>로고</HeaderItem>
      <HeaderItem>공모전 리스트</HeaderItem>
      <HeaderItem>내팀</HeaderItem>
      <HeaderItem>마이페이지</HeaderItem>
      <KakaoLogin></KakaoLogin>
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
