import { styled } from 'styled-components';
import Title from '../common/Title';

const ReviewHeader = () => {
  return (
    <HeaderLayout>
      <HeaderContent>
        <HeaderLeft>
          <HeaderTitle>
            <Title>가장 추천하고 싶은 팀원이 있나요?</Title>
            <h1>팀원 중 한 명을 골라 한 줄 추천사를 남겨주세요.</h1>
          </HeaderTitle>
          <HeaderSubTitle>
            <p>걱정하지 마세요. 누가 누구에게 추천사를 남겼는지</p>
            <p>아무도 알 수 없어요. 마음 편히 남겨보세요.</p>
            {/* <p>모든 리뷰는 익명으로 반영됩니다.</p> */}
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
`;

const HeaderContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  max-width: 122.4rem;
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
