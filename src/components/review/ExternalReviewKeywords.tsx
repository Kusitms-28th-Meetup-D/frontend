import { styled } from 'styled-components';
import Keyword from './Keyword';
import { useContext, useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { selectedNameAtom } from '../../recoil/review';
import { keywordListWithIds } from '../../constants/review';
import { ExternalReviewContext } from '../../pages/review/ExternalReview';

interface ReviewKeywordsProps {
  userName?: string;
}

const ExternalReviewKeywords = ({ userName }: ReviewKeywordsProps) => {
  const [selectedKeywords, setSelectedKeywords] = useState<number[]>([]);
  const selectedName = useRecoilValue(selectedNameAtom);

  const handleToggleKeyword = (keyword: number) => {
    if (selectedKeywords.includes(keyword)) {
      setSelectedKeywords(selectedKeywords.filter((k) => k !== keyword));
    } else {
      if (selectedKeywords.length < 2) {
        setSelectedKeywords([...selectedKeywords, keyword]);
      }
    }
  };

  const { review, setReview } = useContext(ExternalReviewContext);
  useEffect(() => {
    setReview({
      ...review,
      selectedKeywords: selectedKeywords.map((keywordId) => ({
        selectKeyword: keywordId,
      })),
    });
  }, [selectedKeywords]);

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
        {keywordListWithIds.map((keyword) => (
          <Keyword
            key={keyword.id}
            keyword={keyword.keyword}
            selected={selectedKeywords.includes(keyword.id)}
            onClick={() => handleToggleKeyword(keyword.id)}
          />
        ))}
      </KeywordBox>
    </KeywordLayout>
  );
};

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

export default ExternalReviewKeywords;
