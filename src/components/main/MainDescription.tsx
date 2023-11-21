import { styled } from 'styled-components';

const MainDescription = () => {
  return (
    <>
      <MainDescriptionContainer>
        <ScrollDown src={'/assets/images/main/scroll_down.svg'} />
        <h1>리뷰 확인하고 원하는 팀원을 찾아보세요!</h1>
        <h2>모두가 원하는 팀원을 만날 수 있도록 원팀이 함께할게요.</h2>
        <Star src={'/assets/images/common/star.svg'} />
      </MainDescriptionContainer>
    </>
  );
};

export default MainDescription;

const MainDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    ${({ theme }) => theme.fonts.heading2};
    color: ${({ theme }) => theme.colors.primary90};
  }
  h2 {
    ${({ theme }) => theme.fonts.bodyXL};
    color: ${({ theme }) => theme.colors.gray60};
  }
`;

const ScrollDown = styled.img`
  width: 7.5rem;
  height: 4rem;
  margin: 5.5rem 0 6.5rem 0;
`;

const Star = styled.img`
  width: 3.4rem;
  height: 3.4rem;
  margin: 1rem 0 6rem 0;
`;
