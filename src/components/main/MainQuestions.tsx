import { motion } from 'framer-motion';
import { styled } from 'styled-components';
import useObserver from '../../hooks/useObserver';
import { ContainerAnimation } from '../../styles/animation';

const MainQuestions = () => {
  const { ref, animation } = useObserver();

  return (
    <MainQuestionsContainer>
      <h1>Wanteam이 궁금하다면?</h1>
      <h2>내가 원하는 팀원을 만나 공모전•대회에서 좋은 경험을 쌓으세요!</h2>
      <QuestionScreen src={'/assets/images/main/question_screen.svg'} />
      <SpeechBubble1
        src={'/assets/images/main/speech_bubble1.svg'}
        ref={ref}
        animate={animation}
        variants={ContainerAnimation}
      />
      <SpeechBubble2
        src={'/assets/images/main/speech_bubble2.svg'}
        ref={ref}
        animate={animation}
        variants={ContainerAnimation}
      />
      <SpeechBubble3
        src={'/assets/images/main/speech_bubble3.svg'}
        ref={ref}
        animate={animation}
        variants={ContainerAnimation}
      />
    </MainQuestionsContainer>
  );
};

export default MainQuestions;

const MainQuestionsContainer = styled.div`
  background-image: url('/assets/images/main/question_background.svg');
  background-repeat: no-repeat;
  background-size: cover;

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

const SpeechBubble1 = styled(motion.img)`
  position: absolute;
  top: 14rem;
  left: 8rem;

  width: 50rem;
  height: 10rem;
`;

const SpeechBubble2 = styled(motion.img)`
  position: absolute;
  bottom: 2rem;
  left: 18rem;

  width: 20rem;
  height: 30rem;
`;

const SpeechBubble3 = styled(motion.img)`
  position: absolute;
  bottom: 5rem;
  right: 5.5rem;

  width: 72rem;
  height: 19rem;
`;
