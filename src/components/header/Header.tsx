import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { headerSelectedState, loginInfoState } from '../../recoil/atom';

import logoSrc from '/assets/images/header/wanteam-logo.svg';
import starSrc from '/assets/images/common/star.svg';
import { Headers } from '../../constants/Header';
import LoginProfile from './LoginProfile';

const Header = () => {
  const loginInfo = useRecoilValue(loginInfoState);
  const headerSelectedIndex = useRecoilValue(headerSelectedState);
  const navigate = useNavigate();
  // useEffect(() => {
  //   if (localStorage.getItem('kakaoAccessToken')) setIsLogin(true);
  // }, [isLogin]);
  return (
    <>
      <Spacer />
      <HeaderLayout>
        <HeaderContentContainer>
          <HeaderContainer>
            <Link to={'/'}>
              <Logo src={logoSrc} />
            </Link>
            <HeaderItem
              $isSelected={headerSelectedIndex === Headers.list}
              onClick={() => navigate('/list')}
            >
              <HeaderStar src={starSrc} />
              공모전 리스트
            </HeaderItem>
            <HeaderItem $isSelected={headerSelectedIndex === Headers.myTeam}>
              <HeaderStar src={starSrc} />내 팀
            </HeaderItem>
            <HeaderItem $isSelected={headerSelectedIndex === Headers.myProfile}>
              <HeaderStar src={starSrc} />내 프로필
            </HeaderItem>
          </HeaderContainer>{' '}
          {loginInfo.isLogin ? (
            <LoginProfile />
          ) : (
            <HeaderItem
              $isSelected={headerSelectedIndex === Headers.login}
              onClick={() => navigate('/login')}
            >
              <HeaderStar src={starSrc} />
              로그인/회원가입
            </HeaderItem>
          )}
        </HeaderContentContainer>
      </HeaderLayout>
    </>
  );
};
export default Header;

const Spacer = styled.div`
  height: 8.2rem;
`;
const HeaderLayout = styled.header`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(255, 255, 255, 0.8);
  border-bottom: 1px solid ${(props) => props.theme.colors.gray10};
  backdrop-filter: blur(8px);

  width: 100%;
  height: 8.2rem;

  display: flex;

  z-index: 999;
`;
const HeaderContentContainer = styled.div`
  width: 122.4rem;
  height: 100%;
  /* height: 8.2rem; */
  margin: auto;

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

  margin-right: 3rem;
`;
const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 5rem;
`;
const HeaderItem = styled.button<{ $isSelected: boolean }>`
  color: ${(props) => props.theme.colors.gray80};

  ${(props) =>
    props.$isSelected ? props.theme.fonts.subtitleM : props.theme.fonts.bodyM};

  color: ${(props) =>
    props.$isSelected
      ? props.theme.colors.primary60
      : props.theme.colors.gray80};

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;

  /* min-width: 13.1rem; */

  text-align: center;

  padding: 1.2rem 0.8rem;
  /* border: 1px solid red; */
  > img {
    display: ${(props) => (props.$isSelected ? 'default' : 'none')};
  }
`;

const HeaderStar = styled.img`
  width: 2rem;
  height: 2rem;

  position: absolute;
  left: -1.8rem;
`;
