import { styled } from 'styled-components';

const MainQuestions = () => {
  return (
    <MainQuestionsContainer>
      <h1>Wanteam이 궁금하다면?</h1>
      <h2>
        내가 원하는 팀원을 만나 공모전•대회에서 우수한 성적을 거두고 싶다면?
      </h2>
    </MainQuestionsContainer>
  );
};

export default MainQuestions;

const MainQuestionsContainer = styled.div`
  background: ${({ theme }) => theme.colors.primary40};
  padding: 6rem 8rem 0 8rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    ${({ theme }) => theme.fonts.heading2_1};
    color: ${({ theme }) => theme.colors.white};
  }
  h2 {
    ${({ theme }) => theme.fonts.bodyL};
    color: ${({ theme }) => theme.colors.white};
    margin: 1rem 0 4rem 0;
  }
`;
