import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import KakaoLogin, { kakaoAuthorize } from '../login/KakaoLogin';
import { useRecoilValue } from 'recoil';
import { kakaoNameState, loginState } from '../../recoil/atom';

import logoSrc from '/assets/images/header/wanteam-logo.svg';
import starSrc from '/assets/images/header/header-star.svg';

const Header = () => {
  const kakaoName = useRecoilValue(kakaoNameState);
  const isLogin = useRecoilValue(loginState);
  const navigate = useNavigate();
  return (
    <HeaderLayout>
      <Logo src={logoSrc} onClick={() => navigate('/')} />
      <HeaderContainer>
        <HeaderItem>
          <HeaderStar src={starSrc} />
          공모전 리스트
        </HeaderItem>
        <HeaderItem>
          <HeaderStar src={starSrc} />내 팀
        </HeaderItem>
        {isLogin ? (
          <>
            <HeaderItem>
              <HeaderStar src={starSrc} />
              {kakaoName}님{' '}
            </HeaderItem>
          </>
        ) : (
          <HeaderItem onClick={kakaoAuthorize}>로그인/회원가입</HeaderItem>
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
  background-color: rgba(255, 255, 255, 0.8);
  border-bottom: 1px solid ${(props) => props.theme.colors.gray10};

  backdrop-filter: blur(8px);

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
  /* gap: 3rem; */
`;
const HeaderItem = styled.div`
  ${(props) => props.theme.fonts.bodyM};
  color: ${(props) => props.theme.colors.gray80};

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;

  /* min-width: 13.1rem; */

  text-align: center;

  padding: 1.2rem 0.8rem;
  margin: 0 2rem;
  /* border: 1px solid red; */
`;
const HeaderStar = styled.img`
  width: 2rem;
  height: 2rem;

  position: absolute;
  left: -1.8rem;
`;
