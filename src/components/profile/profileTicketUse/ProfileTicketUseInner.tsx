import styled from 'styled-components';

import useSrc from '/assets/images/profile/profile-ticket-modal-use.svg';

const ProfileTicketLackInner = ({
  currTicketAmount,
}: {
  currTicketAmount?: number;
}) => {
  return (
    <Container>
      <Img src={useSrc} />
      <Title>
        <span>티켓 1장</span>
        {'을 사용하여\n한 줄 추천사를 열람하시겠어요?'}
      </Title>
      <Content>
        현재 보유 티켓<TicketAmount>{currTicketAmount}장</TicketAmount>
      </Content>
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  margin: 3rem;
`;
const Img = styled.img`
  width: 12rem;
  height: 10.2rem;
`;
const Title = styled.div`
  ${({ theme }) => theme.fonts.heading4};

  color: ${({ theme }) => theme.colors.gray90};

  text-align: center;
  white-space: break-spaces;
`;
const Content = styled.div`
  ${({ theme }) => theme.fonts.bodyL};

  color: ${({ theme }) => theme.colors.gray70};

  text-align: center;
  white-space: break-spaces;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;
const TicketAmount = styled.div`
  ${({ theme }) => theme.fonts.subtitleM};

  color: ${({ theme }) => theme.colors.primary60};
  background-color: ${({ theme }) => theme.colors.primary20};
  border: 1px solid ${({ theme }) => theme.colors.primary40};
  border-radius: 0%.4rem;

  padding: 0 0.8rem;
`;
export default ProfileTicketLackInner;
