import { styled } from 'styled-components';
import Keyword from '../Keyword';
import { useEffect, useState } from 'react';

interface Question {
  id: number;
  title: string;
  answer1: string;
  answer2: string;
}

interface MobileTendencyBoxProps {
  question: Question[];
}

const MobileTendencyBox = ({ question }: MobileTendencyBoxProps) => {
  const [selectedAnswers, setSelectedAnswers] = useState<{
    [key: number]: string;
  }>({});

  useState<{ [key: number]: string }>(
    question.reduce((acc: { [key: number]: string }, currentQuestion) => {
      acc[currentQuestion.id] = currentQuestion.answer1;
      return acc;
    }, {} as { [key: number]: string }),
  );

  useEffect(() => {
    setSelectedAnswers(
      question.reduce((acc: { [key: number]: string }, currentQuestion) => {
        acc[currentQuestion.id] = currentQuestion.answer1;
        return acc;
      }, {} as { [key: number]: string }),
    );
  }, [question]);

  const handleToggleKeyword = (questionId: number, selectedKeyword: string) => {
    setSelectedAnswers((prevSelected) => ({
      ...prevSelected,
      [questionId]:
        prevSelected[questionId] === selectedKeyword ? '' : selectedKeyword,
    }));
  };

  return (
    <TendencyBottomBox>
      {question.map((item) => (
        <QuestionBox key={item.id}>
          <TendencyTitleBox>
            <QuestionImg src="/public/assets/images/review/star.svg" />
            <TendencyTitle>{item.title}</TendencyTitle>
          </TendencyTitleBox>
          <KeywordBox>
            <Keyword
              keyword={item.answer1}
              selected={selectedAnswers[item.id] === item.answer1}
              onClick={() => handleToggleKeyword(item.id, item.answer1)}
            />
            <Keyword
              keyword={item.answer2}
              selected={selectedAnswers[item.id] === item.answer2}
              onClick={() => handleToggleKeyword(item.id, item.answer2)}
            />
          </KeywordBox>
        </QuestionBox>
      ))}
    </TendencyBottomBox>
  );
};

export default MobileTendencyBox;

const TendencyBottomBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.6rem;
  width: 100%;
  padding: 2rem;
  border-radius: 0 0 12px 12px;
`;

const TendencyTitleBox = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin-bottom: 0.7rem;
  width: 100%;
`;

const TendencyTitle = styled.div`
  ${({ theme }) => theme.fonts.subtitleS};
  color: ${({ theme }) => theme.colors.primary90};
`;

const QuestionImg = styled.img`
  width: 1.5rem;
  height: 1.5rem;
`;

const QuestionBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
`;

const KeywordBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.7rem;
  margin-left: 2.2rem;

  div {
    ${({ theme }) => theme.fonts.bodyS};
  }
`;
