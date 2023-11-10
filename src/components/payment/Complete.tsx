import { styled } from 'styled-components';
import PossessionTicket from './PossessionTicket';
import Button from '../common/Button';
import { useNavigate } from 'react-router-dom';

const Complete = () => {
  const navigate = useNavigate();

  return (
    <CompleteContainer>
      <CompleteImage
        src="/assets/images/payment/paymentComplete.svg"
        alt="결제완료"
      />
      <CompleteText>
        <h1>티켓 충전이 완료되었어요!</h1>
        <h2>티켓으로 한 줄 추천사를 열람하고,</h2>
        <h2>Wanteam에서 딱 맞는 팀원을 한번에 찾아보세요.</h2>
      </CompleteText>
      <PossessionTicket />
      <Button onClick={() => navigate(-1)}>닫기</Button>
    </CompleteContainer>
  );
};

export default Complete;

const CompleteContainer = styled.div`
  padding: 5rem;
  border-radius: 2rem;
  border: 1px solid ${({ theme }) => theme.colors.gray20};
  background: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4rem;
  margin: 4rem 0;
`;

const CompleteImage = styled.img`
  width: 20rem;
  height: 12.6rem;
`;

const CompleteText = styled.div`
  text-align: center;
  h1 {
    ${({ theme }) => theme.fonts.heading2_1};
    margin-bottom: 1rem;
  }
  h2 {
    ${({ theme }) => theme.fonts.bodyXL};
  }
`;
