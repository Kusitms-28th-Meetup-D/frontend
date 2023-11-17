import styled from 'styled-components';

import lackSrc from '/assets/images/profile/profile-ticket-modal-lack.svg';

const ProfileTicketLackInner = ({
  currTicketAmount,
}: {
  currTicketAmount?: number;
}) => {
  return (
    <Container>
      <Img src={lackSrc} />
      <Title>{' 티켓이 부족해요.\n결제하여 티켓을 충전할까요?'}</Title>
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

  color: ${({ theme }) => theme.colors.error60};
  background-color: ${({ theme }) => theme.colors.gray5};
  border: 1px solid ${({ theme }) => theme.colors.error60};
  border-radius: 0%.4rem;

  padding: 0 0.8rem;
`;
export default ProfileTicketLackInner;
