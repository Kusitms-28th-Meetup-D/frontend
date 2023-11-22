import { styled } from 'styled-components';
import Keyword from './Keyword';
import { useRecoilState, useRecoilValue } from 'recoil';
import { reviewMemberIndexState, reviewState } from '../../recoil/atom';

interface Question {
  id: number;
  title: string;
  answer1: string;
  answer2: string;
}

interface TendencyBoxProps {
  boxName: string;
  question: Question[];
  arrIndex: number;
}

const TendencyBox = ({ boxName, question, arrIndex }: TendencyBoxProps) => {
  const [reviewRecoilData, setReviewRecoilData] = useRecoilState(reviewState);
  const reviewMemberIndex = useRecoilValue(reviewMemberIndexState);

  const handleToggleKeyword = (value: number, subIndex: number) => {
    setReviewRecoilData((curr) => {
      const newArr = [...curr];
      const newObj = { ...curr[reviewMemberIndex] };

      //깊은복사
      newObj.arr = [
        [newObj.arr[0][0], newObj.arr[0][1], newObj.arr[0][2]],
        [newObj.arr[1][0], newObj.arr[1][1], newObj.arr[1][2]],
      ];

      //이미선택됨
      if (newObj.arr[arrIndex][subIndex] == value) {
        newObj.arr[arrIndex][subIndex] = -1;
      } else {
        newObj.arr[arrIndex][subIndex] = value;
      }

      newArr[reviewMemberIndex] = newObj;
      console.log('키워드 선택', newArr);
      return newArr;
    });
  };

  return (
    <TendencyLayout>
      <TendencyTopBox>{boxName}</TendencyTopBox>
      <TendencyBottomBox>
        {question.map((item, subIndex) => (
          <QuestionBox key={item.id}>
            <TendencyTitleBox>
              <QuestionImg src="/public/assets/images/review/star.svg" />
              <TendencyTitle>{item.title}</TendencyTitle>
            </TendencyTitleBox>
            <KeywordBox>
              <Keyword
                keyword={item.answer1}
                selected={
                  reviewRecoilData[reviewMemberIndex].arr[arrIndex][
                    subIndex
                  ] === 0
                }
                onClick={() => handleToggleKeyword(0, subIndex)}
              />
              <Keyword
                keyword={item.answer2}
                selected={
                  reviewRecoilData[reviewMemberIndex].arr[arrIndex][
                    subIndex
                  ] === 1
                }
                onClick={() => handleToggleKeyword(1, subIndex)}
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
