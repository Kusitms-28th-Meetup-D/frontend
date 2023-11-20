import { useNavigate, useParams } from 'react-router-dom';
import useProfile from '../../../hooks/profile/useProfile';
import { styled } from 'styled-components';
import Keyword from '../Keyword';
import { useState } from 'react';
import { keywordList } from '../../../constants/review';

const ExternalMobileKeyword = () => {
  const { userId } = useParams();
  const { profileData } = useProfile(userId);
  const username = profileData?.data.data.username;
  const navigate = useNavigate();

  const [selectedKeywords, setSelectedKeywords] = useState<string[]>([]);

  const handleToggleKeyword = (keyword: string) => {
    if (selectedKeywords.includes(keyword)) {
      setSelectedKeywords(selectedKeywords.filter((k) => k !== keyword));
    } else {
      if (selectedKeywords.length < 2) {
        setSelectedKeywords([...selectedKeywords, keyword]);
      }
    }
  };

  return (
    <>
      <Progress>
        <div></div>
      </Progress>

      <ExternalMobileKeywordContainer>
        <h2>
          <span>1번</span> / 4번
        </h2>
        <h1>{username} 님에 대한 키워드 리뷰</h1>
        <p>
          함께 활동했을 당시, {username} 님의 최고 장점을 2개 골라 추천해주세요!
        </p>

        <KeywordBox>
          {keywordList.map((keyword: string) => (
            <Keyword
              key={keyword}
              keyword={keyword}
              selected={selectedKeywords.includes(keyword)}
              onClick={() => handleToggleKeyword(keyword)}
            />
          ))}
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
  padding: 3rem 1rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    ${({ theme }) => theme.fonts.bodyXS};
    margin-bottom: 1.5rem;
    span {
      ${({ theme }) => theme.fonts.subtitleM};
    }
  }
  h1 {
    ${({ theme }) => theme.fonts.subtitleM};
    color: ${({ theme }) => theme.colors.gray90};
    margin-bottom: 0.5rem;
  }
  p {
    ${({ theme }) => theme.fonts.bodyXXS};
    color: ${({ theme }) => theme.colors.gray70};
    margin-bottom: 5rem;
  }
`;

const KeywordBox = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.6rem;
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
