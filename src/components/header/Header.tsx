import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import {
  headerSelectedState,
  loginInfoState,
  loginModalState,
} from '../../recoil/atom';
import { useEffect } from 'react';

import logoSrc from '/assets/images/header/wanteam-logo.svg';
import starSrc from '/assets/images/common/star.svg';
import { Headers } from '../../constants/Header';
import LoginProfile from './LoginProfile';

const Header = () => {
  const loginInfo = useRecoilValue(loginInfoState);
  const headerSelectedIndex = useRecoilValue(headerSelectedState);
  const setLoginModal = useSetRecoilState(loginModalState);
  const navigate = useNavigate();
  useEffect(() => {}, [loginInfo]);

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
            <HeaderItem
              onClick={() =>
                loginInfo.isLogin
                  ? navigate(`/myteam/${loginInfo.data?.userId}/open`)
                  : setLoginModal(true)
              }
              $isSelected={headerSelectedIndex === Headers.myTeam}
            >
              <HeaderStar src={starSrc} />내 팀
            </HeaderItem>
            <HeaderItem
              onClick={() => {
                // window.location.reload();

                if (loginInfo.isLogin) {
                  navigate(`/profile/${loginInfo.data?.userId}`);
                  window.location.reload();
                } else {
                  setLoginModal(true);
                }
              }}
              $isSelected={headerSelectedIndex === Headers.myProfile}
            >
              <HeaderStar src={starSrc} />내 프로필
            </HeaderItem>
          </HeaderContainer>
          {loginInfo.isLogin ? (
            <LoginProfile userId={loginInfo.data?.userId} />
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
  margin: auto;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 3rem;
`;
const Logo = styled.img`
  width: 20.3rem;
  height: 4.2rem;
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

  white-space: nowrap;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  text-align: center;

  &:hover {
    transition: 0.2s;
    ${(props) => props.theme.fonts.subtitleM};
    color: ${(props) => props.theme.colors.primary60};

    img {
      display: block;
    }
  }

  padding: 1.2rem 0.8rem;
  > img {
    display: ${(props) => props.$isSelected && 'block'};
    opacity: 1;
    transition: opacity 0.2s ease;
  }
`;

const HeaderStar = styled.img`
  width: 2rem;
  height: 2rem;

  position: absolute;
  left: -1.8rem;
  display: none;
`;
