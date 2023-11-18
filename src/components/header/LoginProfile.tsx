import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { loginInfoState } from '../../recoil/atom';
import useTicketNumber from '../../hooks/profile/useTicketNumber';

import dropSrc from '/assets/images/header/dropdown-button.svg';
import ticketSrc from '/assets/images/header/header-ticket.svg';
import logoutSrc from '/assets/images/header/header-logout.svg';
import { useNavigate } from 'react-router-dom';

const LoginProfile = ({ userId }: { userId?: number }) => {
  const loginState = useRecoilValue(loginInfoState);

  const { TicketNumberData } = useTicketNumber();
  const navigate = useNavigate();
  const handleLogout = () => {
    sessionStorage.clear();
    navigate('');
    window.location.reload();
  };
  return (
    <ProfileContainer>
      <Droppable>
        <DroppableItem>
          보유 티켓
          <TicketBox>
            <TicketImg src={ticketSrc} />
            <span>{TicketNumberData?.data.data.ticketCount}장</span>
          </TicketBox>
        </DroppableItem>
        <DroppableItem onClick={() => navigate('/payment/charge')}>
          티켓 충전
        </DroppableItem>
        <Hr />
        <DroppableItem onClick={() => navigate(`/profile/${userId}`)}>
          내 프로필
        </DroppableItem>
        <DroppableItem onClick={() => navigate('/payment/charge')}>
          계정 설정
        </DroppableItem>
        <Hr />

        <DroppableItem onClick={handleLogout}>
          <LogoutBox>
            <LogoutImg src={logoutSrc} />
            로그아웃
          </LogoutBox>
        </DroppableItem>
      </Droppable>
      <ProfileImg src={loginState.data?.profileImage} />
      <ProfileName>{loginState.data?.name}</ProfileName>
      <ProfileDropdown src={dropSrc} />
    </ProfileContainer>
  );
};
const ProfileContainer = styled.div`
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  color: ${(props) => props.theme.colors.primary90};
  ${(props) => props.theme.fonts.subtitleM};

  /* cursor: pointer; */

  padding: 2.5rem 0;

  &:hover > div:first-child {
    height: 22.2rem;
    border: 1px solid ${(props) => props.theme.colors.gray10};
    box-shadow: 0px 2px 6px 0px rgba(134, 134, 134, 0.56);
  }
  &:hover > img:nth-child(4) {
    transform: rotate(180deg);
  }
`;
const ProfileImg = styled.img`
  width: 3.6rem;
  height: 3.6rem;
  object-fit: cover;

  border: 3px solid ${(props) => props.theme.colors.primary60};
  border-radius: 1.8rem;
`;
const ProfileName = styled.div`
  color: ${(props) => props.theme.colors.primary90};
  ${(props) => props.theme.fonts.subtitleM};
`;
const ProfileDropdown = styled.img`
  width: 1rem;
  height: 0.5rem;
  object-fit: cover;

  transition: transform 0.5s ease;
`;
const Droppable = styled.div`
  position: absolute;

  left: -5.2rem;
  top: 8.2rem;

  width: 18.3rem;
  height: 0rem;

  overflow: hidden;

  border: none;
  border-radius: 1.2rem;
  background-color: ${(props) => props.theme.colors.white};

  box-shadow: none;

  transition: height 0.3s ease-in-out;

  display: flex;
  flex-direction: column;
`;
const DroppableItem = styled.div`
  ${(props) => props.theme.fonts.bodyM};
  color: ${(props) => props.theme.colors.gray90};
  padding: 0.8rem 1.8rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
  &:hover:not(:first-child) {
    background-color: ${(props) => props.theme.colors.primary60};
    color: ${(props) => props.theme.colors.white};
    cursor: pointer;
  }
  span {
    ${(props) => props.theme.fonts.subtitleM};
  }
`;
const Hr = styled.div`
  width: 100%;
  height: 1px;
  border-top: 1px solid #eeeff1;

  padding: 0.3rem 0;
`;
const TicketBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
`;
const TicketImg = styled.img`
  width: 3rem;
`;
const LogoutBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const LogoutImg = styled.img`
  width: 1.4rem;
  margin-right: 0.6rem;
`;
export default LoginProfile;
