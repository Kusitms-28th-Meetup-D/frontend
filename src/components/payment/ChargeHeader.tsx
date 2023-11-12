import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import Title from '../common/Title';

const ChargeHeader = () => {
  const navigate = useNavigate();

  return (
    <HeaderContainer>
      <HeaderContent>
        <div>
          <BackButton onClick={() => navigate(-1)}>
            <LeftArrow src={'/assets/images/common/leftArrow.svg'} />
            이전으로 돌아가기
          </BackButton>
          <h1>티켓 충전</h1>
          <Title>티켓이란?</Title>
          <DescriptionBox>
            다른 유저의 <span>'한 줄 추천사'</span>를 오픈할 수 있는 WANTEAM
            서비스 내 결제 수단입니다. 1장만 사용하셔도 해당 유저의 '한 줄
            추천사'를
            <span>영구적으로 열람</span>하실 수 있습니다.
          </DescriptionBox>
        </div>
        <Ticket src={'/assets/images/payment/headerTicket.svg'} />
      </HeaderContent>
    </HeaderContainer>
  );
};

export default ChargeHeader;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: space-between;
  background: ${({ theme }) => theme.colors.primary10};
  padding: 3rem 0 4rem 0;
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
`;

const HeaderContent = styled.div`
  width: 100%;
  align-items: center;
  padding: 0 1rem;
  max-width: 122.4rem;
  background: ${({ theme }) => theme.colors.primary10};
  display: flex;
  gap: 20rem;

  h1 {
    ${({ theme }) => theme.fonts.heading2_1};
    color: ${({ theme }) => theme.colors.gray100};
    margin: 2rem 0;
  }
  h2 {
    ${({ theme }) => theme.fonts.heading3};
    color: ${({ theme }) => theme.colors.gray90};
  }
`;

const BackButton = styled.div`
  display: flex;
  align-items: center;
  ${({ theme }) => theme.fonts.bodyM};
  color: ${({ theme }) => theme.colors.gray70};
  cursor: pointer;
`;

const LeftArrow = styled.img`
  width: 0.8rem;
  height: 1.6rem;
  margin-right: 1.6rem;
`;

const DescriptionBox = styled.div`
  width: 100%;
  padding: 2.2rem 2.8rem;
  border-radius: 12px;
  border: 2px solid ${({ theme }) => theme.colors.gray20};
  background: ${({ theme }) => theme.colors.gray5};
  color: ${({ theme }) => theme.colors.gray90};
  ${({ theme }) => theme.fonts.bodyL};
  margin-top: 1rem;

  span {
    color: ${({ theme }) => theme.colors.primary60};
  }
`;

const Ticket = styled.img`
  width: 28.2rem;
  height: 22.7rem;
`;
