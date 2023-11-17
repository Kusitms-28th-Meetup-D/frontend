import { styled } from 'styled-components';
import { useTicketCount } from '../../hooks/payment/useTicketCount';

const PossessionTicket = () => {
  const { ticketCount } = useTicketCount();

  return (
    <PossessionTicketContainer>
      <TicketLeft>충전 후 보유 티켓</TicketLeft>|
      <TicketRight>
        <TicketImage src="/assets/images/payment/ticketCount.svg" />
        {ticketCount?.data.ticketCount}장
      </TicketRight>
    </PossessionTicketContainer>
  );
};

export default PossessionTicket;

const PossessionTicketContainer = styled.div`
  background: ${({ theme }) => theme.colors.primary20};
  border-radius: 13px;
  padding: 1rem 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  ${({ theme }) => theme.fonts.bodyM};
  color: ${({ theme }) => theme.colors.gray40};
  margin-bottom: 4rem;
`;

const TicketLeft = styled.div`
  ${({ theme }) => theme.fonts.heading5};
  color: ${({ theme }) => theme.colors.gray90};
`;

const TicketRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  ${({ theme }) => theme.fonts.subtitleXL};
  color: ${({ theme }) => theme.colors.primary60};
`;

const TicketImage = styled.img`
  width: 3.3rem;
  height: 1.7rem;
`;
