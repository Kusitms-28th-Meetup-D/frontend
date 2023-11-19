import { styled } from 'styled-components';

const MainQuestions = () => {
  return (
    <MainQuestionsContainer>
      <h1>Wanteam이 궁금하다면?</h1>
      <h2>
        내가 원하는 팀원을 만나 공모전•대회에서 우수한 성적을 거두고 싶다면?
      </h2>
      <QuestionScreen src={'/assets/images/main/question_screen.svg'} />
      <SpeechBubble1 src={'/assets/images/main/speech_bubble1.svg'} />
      <SpeechBubble2 src={'/assets/images/main/speech_bubble2.svg'} />
      <SpeechBubble3 src={'/assets/images/main/speech_bubble3.svg'} />
    </MainQuestionsContainer>
  );
};

export default MainQuestions;

const MainQuestionsContainer = styled.div`
  background: ${({ theme }) => theme.colors.primary40};
  padding: 4.5rem 8rem 0 8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  h1 {
    ${({ theme }) => theme.fonts.heading2_1};
    color: ${({ theme }) => theme.colors.white};
  }
  h2 {
    ${({ theme }) => theme.fonts.bodyL};
    color: ${({ theme }) => theme.colors.white};
    margin: 1rem 0 5rem 0;
  }
`;

const QuestionScreen = styled.img`
  width: 104rem;
`;

const SpeechBubble1 = styled.img`
  position: absolute;
  top: 14rem;
  left: 5rem;
`;

const SpeechBubble2 = styled.img`
  position: absolute;
  bottom: 5rem;
  left: 14rem;
`;

const SpeechBubble3 = styled.img`
  position: absolute;
  bottom: 5rem;
  right: 5.5rem;
`;
