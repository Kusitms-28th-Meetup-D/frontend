import styled from 'styled-components';

import lockSrc from '/assets/images/profile/profile-lock.png';
import ticketSrc from '/assets/images/profile/profile-ticket.svg';
import useTicketNumber from '../../hooks/profile/useTicketNumber';
const ProfileLocked = ({
  name,
  setIsLackModalVisible,
  setIsUseModalVisible,
}: {
  name?: string;
  setIsLackModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  setIsUseModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { TicketNumberData } = useTicketNumber();
  const handleClick = () => {
    //보유 티켓 존재
    if (TicketNumberData && TicketNumberData.data.data.ticketCount > 0) {
      setIsUseModalVisible(true);
    } else {
      setIsLackModalVisible(true);
    }
  };
  return (
    <LockedLayout>
      <Lock src={lockSrc} />
      <TextContainer>
        <Title>지금은 한 줄 추천사가 잠겨 있어요!</Title>
        <Content>
          <span>티켓 1장</span>
          {`을 사용하시면 ${name} 님의 한 줄 추천사를\n언제든지 열람하실 수 있습니다.`}
        </Content>
        <CurrentTicket>
          현재 보유 티켓 : <TicketImg src={ticketSrc} />
          <span>
            {TicketNumberData?.data.data.ticketCount
              ? TicketNumberData?.data.data.ticketCount
              : '?'}
            장
          </span>
        </CurrentTicket>
        <TicketButton onClick={handleClick}>
          티켓 사용하고 열람하기
        </TicketButton>
      </TextContainer>
    </LockedLayout>
  );
};
const LockedLayout = styled.div`
  /* display: none; */
  position: absolute;

  width: 100%;
  height: 40rem;
  flex-shrink: 0; ///안줄어들게

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6.4rem;

  background: linear-gradient(
    0deg,
    #f9f9fa 77.48%,
    rgba(249, 249, 250, 0) 100%
  );

  border-radius: 1.1rem;
`;
const Lock = styled.img`
  width: 20rem;
  height: 20rem;
  border: 1px solid red;
`;
const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;
const Title = styled.div`
  ${(props) => props.theme.fonts.heading3};
  color: ${(props) => props.theme.colors.gray90};
`;
const Content = styled.div`
  ${(props) => props.theme.fonts.subtitleL};
  span {
    color: ${(props) => props.theme.colors.primary60};
  }

  white-space: break-spaces;
`;
const CurrentTicket = styled.div`
  ${(props) => props.theme.fonts.bodyM};
  span {
    ${(props) => props.theme.fonts.subtitleL};
    color: ${(props) => props.theme.colors.primary60};
  }

  display: flex;
  align-items: center;
  gap: 0.8rem;
`;
const TicketImg = styled.img`
  width: 2.6rem;
  /* height: 1.3rem; */
`;
const TicketButton = styled.button`
  width: 22rem;
  height: 6.4rem;

  display: flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  gap: 1rem;

  background: ${({ theme }) => theme.colors.primary60};
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.buttonL};
  border-radius: 3.2rem;
`;

export default ProfileLocked;
