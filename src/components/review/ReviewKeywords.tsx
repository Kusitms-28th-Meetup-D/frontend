import { styled } from 'styled-components';
import Keyword from './Keyword';
import { useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { selectedNameAtom } from '../../recoil/review';
import { keywordListWithIds } from '../../constants/review';
import { reviewMemberIndexState, reviewState } from '../../recoil/atom';

interface ReviewKeywordsProps {
  userName?: string;
}

const ReviewKeywords = ({ userName }: ReviewKeywordsProps) => {
  // const [selectedKeywords, setSelectedKeywords] = useState<number[]>([]);
  const selectedName = useRecoilValue(selectedNameAtom);

  const [reviewRecoilData, setReviewRecoilData] = useRecoilState(reviewState);
  const reviewMemberIndex = useRecoilValue(reviewMemberIndexState);

  const handleToggleKeyword = (keyword: number) => {
    setReviewRecoilData((curr) => {
      const newArr = [...curr];
      const newObj = { ...curr[reviewMemberIndex] };

      newObj.selectedKeywords = [...newObj.selectedKeywords];
      if (newObj.selectedKeywords.includes(keyword)) {
        console.log('있네');
        newObj.selectedKeywords = newObj.selectedKeywords.filter(
          (keywordNum) => keywordNum !== keyword,
        );
      } else if (newObj.selectedKeywords.length < 2) {
        newObj.selectedKeywords.push(keyword);
      }

      newArr[reviewMemberIndex] = newObj;
      console.log('키워드 선택', newArr);
      return newArr;
    });
    // if (selectedKeywords.includes(keyword)) {
    //   setSelectedKeywords(selectedKeywords.filter((k) => k !== keyword));
    // } else {
    //   if (selectedKeywords.length < 2) {
    //     setSelectedKeywords([...selectedKeywords, keyword]);
    //   }
    // }
  };

  // useEffect(() => {
  //   setReview({
  //     ...review,
  //     selectedKeywords: selectedKeywords.map((keywordId) => ({
  //       selectKeyword: keywordId,
  //     })),
  //   });
  // }, [selectedKeywords]);

  return (
    <KeywordLayout>
      <KeywordTitle>
        {userName ? userName : selectedName} 님에 대한 키워드 리뷰
      </KeywordTitle>
      <KeywordSubTitle>
        함께 활동했을 당시, {userName ? userName : selectedName} 님의 최고
        장점을 2개 골라 추천해주세요!
      </KeywordSubTitle>
      <KeywordBox>
        {keywordListWithIds.map((keyword, idx) => (
          <Keyword
            key={keyword.id}
            keyword={keyword.keyword}
            selected={reviewRecoilData[
              reviewMemberIndex
            ].selectedKeywords.includes(idx)}
            onClick={() => handleToggleKeyword(keyword.id)}
          />
        ))}
      </KeywordBox>
    </KeywordLayout>
  );
};

export default ReviewKeywords;

const KeywordLayout = styled.div`
  display: flex;
  flex-direction: column;
  margin: 4rem 0 5rem 0;
`;

const KeywordBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.1rem;
  max-width: 60rem;
`;

const KeywordTitle = styled.div`
  ${({ theme }) => theme.fonts.heading3};
  color: ${({ theme }) => theme.colors.gray90};
  margin-bottom: 1.4rem;
`;

const KeywordSubTitle = styled.div`
  ${({ theme }) => theme.fonts.bodyL};
  color: ${({ theme }) => theme.colors.gray80};
  margin-bottom: 1.8rem;
`;
