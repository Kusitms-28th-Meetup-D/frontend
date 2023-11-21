import { styled } from 'styled-components';
import Keyword from '../Keyword';
import { useContext, useEffect, useState } from 'react';
import { ReviewContext } from '../../../pages/review/ExternalMobileReview';
import { useRecoilState } from 'recoil';
import { selectedTendencyAtom } from '../../../recoil/review';

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
  const [selectedAnswers, setSelectedAnswers] = useRecoilState<{
    [key: number]: number;
  }>(selectedTendencyAtom);

  const handleToggleKeyword = (questionId: number, selected: number) => {
    setSelectedAnswers((prevSelected) => ({
      ...prevSelected,
      [questionId]: selected,
    }));
  };

  const { review, setReview } = useContext(ReviewContext);

  useEffect(() => {
    setReview({
      ...review,
      selectedTeamCultures: {
        feedbackStyle: selectedAnswers[1],
        teamStyle: selectedAnswers[2],
        personalityStyle: selectedAnswers[3],
      },
      selectedWorkMethods: {
        workStyle: selectedAnswers[4],
        resultProcess: selectedAnswers[5],
        workLifeBalance: selectedAnswers[6],
      },
    });
  }, [selectedAnswers]);

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
              selected={selectedAnswers[item.id] === 0}
              onClick={() => handleToggleKeyword(item.id, 0)}
            />
            <Keyword
              keyword={item.answer2}
              selected={selectedAnswers[item.id] === 1}
              onClick={() => handleToggleKeyword(item.id, 1)}
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
