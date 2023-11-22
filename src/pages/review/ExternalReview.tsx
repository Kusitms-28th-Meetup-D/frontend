import { styled } from 'styled-components';
import ExternalReviewHeader from '../../components/review/externalWeb/ExternalReviewHeader';
import { useParams } from 'react-router-dom';
import useProfile from '../../hooks/profile/useProfile';
import ExternalReviewOneLine from '../../components/review/externalWeb/ExternalReviewOneLine';
import ExternalButtonBox from '../../components/review/externalWeb/ExternalButtonBox';
import { createContext, useState } from 'react';
import ExternalReviewKeywords from '../../components/review/externalWeb/ExternalReviewKeywords';
import ExternalReviewTendency from '../../components/review/externalWeb/ExternalReviewTendency';

export const ExternalReviewContext = createContext<any>(null);

const ExternalReview = () => {
  const { userId } = useParams();
  const { profileData } = useProfile(userId);
  const [review, setReview] = useState({
    userId: Number(userId),
    selectedKeywords: [],
    selectedTeamCultures: {
      feedbackStyle: 0,
      teamStyle: 0,
      personalityStyle: 0,
    },
    selectedWorkMethods: {
      workStyle: 0,
      resultProcess: 0,
      workLifeBalance: 0,
    },
    recommendationComment: '',
  });

  return (
    <>
      <ExternalReviewHeader profileData={profileData?.data.data} />
      <ExternalReviewContext.Provider value={{ review, setReview }}>
        <ExternalReviewContainer>
          <ExternalReviewKeywords userName={profileData?.data.data.username} />
          <ExternalReviewTendency userName={profileData?.data.data.username} />
          <ExternalReviewOneLine userName={profileData?.data.data.username} />
          <ExternalButtonBox />
        </ExternalReviewContainer>
      </ExternalReviewContext.Provider>
    </>
  );
};

export default ExternalReview;

const ExternalReviewContainer = styled.div`
  margin: 0 auto;
  max-width: 122.4rem;
`;
