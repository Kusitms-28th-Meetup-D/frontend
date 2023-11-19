import { styled } from 'styled-components';
import Title from '../common/Title';

const ReviewHeader = () => {
  return (
    <HeaderLayout>
      <HeaderContent>
        <HeaderLeft>
          <HeaderTitle>
            <Title>다음 팀 활동을 위해</Title>
            <h1>팀원들에게 추천사를 남겨주세요!</h1>
          </HeaderTitle>
          <HeaderSubTitle>
            <p>남겨주신 추천사는 팀원들의 프로필에 반영됩니다.</p>
            <p>차후 팀을 구할 때 활용되는 만큼, 신중하게 작성해 주세요.</p>
            <p>모든 추천사는 익명으로 반영됩니다.</p>
          </HeaderSubTitle>
        </HeaderLeft>
        <HeaderRight>
          <img src="/assets/images/review/header.svg" alt="review" />
        </HeaderRight>
      </HeaderContent>
    </HeaderLayout>
  );
};

export default ReviewHeader;

const HeaderLayout = styled.div`
  display: flex;
  justify-content: center;
  background: ${({ theme }) => theme.colors.primary10};
  padding: 3rem 0 8rem 0;
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
`;

const HeaderContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  max-width: 1250px;
`;

const HeaderLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const HeaderRight = styled.div``;

const HeaderTitle = styled.div`
  position: relative;
  ${({ theme }) => theme.fonts.heading4};
  color: ${({ theme }) => theme.colors.gray90};

  img {
    position: absolute;
    top: -1rem;
    left: -2rem;
  }
  h1 {
    ${({ theme }) => theme.fonts.heading3};
    color: ${({ theme }) => theme.colors.primary60};
  }
`;

const HeaderSubTitle = styled.div`
  p {
    ${({ theme }) => theme.fonts.bodyL};
    color: ${({ theme }) => theme.colors.gray90};
  }
`;
