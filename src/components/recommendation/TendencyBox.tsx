import { styled } from 'styled-components';
import Keyword from './Keyword';
import { useState } from 'react';

interface Question {
  id: number;
  title: string;
  answer1: string;
  answer2: string;
}

interface TendencyBoxProps {
  boxName: string;
  question: Question[];
}

const TendencyBox = ({ boxName, question }: TendencyBoxProps) => {
  const [selectedAnswers, setSelectedAnswers] = useState<{
    [key: number]: string;
  }>({});

  const handleToggleKeyword = (questionId: number, selectedKeyword: string) => {
    setSelectedAnswers((prevSelected) => ({
      ...prevSelected,
      [questionId]:
        prevSelected[questionId] === selectedKeyword ? '' : selectedKeyword,
    }));
  };

  return (
    <TendencyLayout>
      <TendencyTopBox>{boxName}</TendencyTopBox>
      <TendencyBottomBox>
        {question.map((item) => (
          <QuestionBox key={item.id}>
            <TendencyTitleBox>
              <QuestionImg src="/public/assets/images/recommendation/star.svg" />
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
    </TendencyLayout>
  );
};

export default TendencyBox;

const TendencyLayout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 5px;
  background: ${({ theme }) => theme.colors.white};
`;

const TendencyTopBox = styled.div`
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.colors.primary40};
  color: ${({ theme }) => theme.colors.white};
  width: 100%;
  border-radius: 12px;
  padding: 0.5rem 0 0.5rem 1.5rem;
  ${({ theme }) => theme.fonts.heading4};
`;

const TendencyBottomBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.6rem;
  width: 100%;
  background: ${({ theme }) => theme.colors.primary10};
  padding: 2.5rem;
  border-radius: 0 0 12px 12px;
`;

const TendencyTitleBox = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
`;

const TendencyTitle = styled.div`
  ${({ theme }) => theme.fonts.heading6};
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
  gap: 1rem;
  margin-left: 2.2rem;
`;
