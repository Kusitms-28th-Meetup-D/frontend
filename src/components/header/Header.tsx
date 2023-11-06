import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import KakaoLogin from '../login/KakaoLogin';
import { useRecoilValue } from 'recoil';
import { kakaoNameState, loginState } from '../../recoil/atom';

import logoSrc from '/assets/images/header/wanteam-logo.svg';

const Header = () => {
  const kakaoName = useRecoilValue(kakaoNameState);
  const isLogin = useRecoilValue(loginState);
  const navigate = useNavigate();
  return (
    <HeaderLayout>
      <Logo src={logoSrc} onClick={() => navigate('/')} />
      <HeaderContainer>
        <HeaderItem>공모전 리스트</HeaderItem>
        <HeaderItem>내팀</HeaderItem>
        {isLogin ? (
          <>
            <HeaderItem>{kakaoName}님 </HeaderItem>
          </>
        ) : (
          <KakaoLogin />
        )}
      </HeaderContainer>
      {/* {isLogin ? <KakaoLogout /> : <KakaoLogin />} */}
    </HeaderLayout>
  );
};
export default Header;

const HeaderLayout = styled.header`
  //width: 153.6rem;
  max-width: 122.4rem;
  height: 10rem;
  margin: auto;
  background-color: ${(props) => props.theme.colors.gray10};

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 3rem;
`;
const Logo = styled.img`
  width: 20.3rem;
  height: 4.2rem;
  /* background-color: red; */
  cursor: pointer;
`;
const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 3rem;
`;
const HeaderItem = styled.div`
  font-size: 2rem;
`;
