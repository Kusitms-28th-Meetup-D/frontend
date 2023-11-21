import { useNavigate, useParams } from 'react-router-dom';
import useProfile from '../../../hooks/profile/useProfile';
import { styled } from 'styled-components';
import Keyword from '../Keyword';
import { useContext, useEffect, useState } from 'react';
import { keywordListWithIds } from '../../../constants/review';
import { ReviewContext } from '../../../pages/review/ExternalMobileReview';

const ExternalMobileKeyword = () => {
  const { userId } = useParams();
  const { profileData } = useProfile(userId);
  const username = profileData?.data.data.username;
  const navigate = useNavigate();

  const { review, setReview } = useContext(ReviewContext);
  const [selectedKeywords, setSelectedKeywords] = useState<number[]>([]);

  const handleToggleKeyword = (keywordId: number) => {
    if (selectedKeywords.includes(keywordId)) {
      setSelectedKeywords(selectedKeywords.filter((k) => k !== keywordId));
    } else {
      if (selectedKeywords.length < 2) {
        setSelectedKeywords([...selectedKeywords, keywordId]);
      }
    }
  };

  useEffect(() => {
    setReview({
      ...review,
      selectedKeywords: selectedKeywords.map((keywordId) => ({
        selectKeyword: keywordId,
      })),
    });
  }, [selectedKeywords]);

  return (
    <>
      <Progress>
        <div></div>
      </Progress>

      <ExternalMobileKeywordContainer>
        <h1>{username} 님의 장점 2개를 고른다면?</h1>
        <p>함께 활동했던 경험을 토대로, </p>
        <p>{username} 님의 최고 장점 키워드를 2개 골라주세요!</p>

        <KeywordBox>
          {keywordListWithIds.map(
            (keyword: { id: number; keyword: string }) => (
              <Keyword
                key={keyword.id}
                keyword={keyword.keyword}
                selected={selectedKeywords.includes(keyword.id)}
                onClick={() => handleToggleKeyword(keyword.id)}
              />
            ),
          )}
        </KeywordBox>

        <ButtonBox>
          <img
            src={'/assets/images/common/right_button.svg'}
            alt={'right_button'}
            onClick={() =>
              navigate(`/review/external/mobile/${userId}/tendency1`)
            }
          />
        </ButtonBox>
      </ExternalMobileKeywordContainer>
    </>
  );
};

export default ExternalMobileKeyword;

const Progress = styled.div`
  width: 100%;
  height: 0.8rem;
  background: ${({ theme }) => theme.colors.primary20};

  div {
    width: 25%;
    height: 100%;
    background: ${({ theme }) => theme.colors.primary60};
  }
`;

const ExternalMobileKeywordContainer = styled.div`
  background: ${({ theme }) => theme.colors.gray5};
  width: 100%;
  height: 100vh;
  padding: 4rem 1rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    ${({ theme }) => theme.fonts.subtitleM};
    color: ${({ theme }) => theme.colors.gray90};
    margin-bottom: 0.5rem;
  }
  p {
    ${({ theme }) => theme.fonts.bodyXXS};
    color: ${({ theme }) => theme.colors.gray70};
  }
`;

const KeywordBox = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.6rem;
  margin-top: 5rem;
`;

const ButtonBox = styled.div`
  position: absolute;
  bottom: 2rem;
  right: 2rem;
  img {
    width: 5.6rem;
    height: 5.6rem;
  }
`;
