import { createContext, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { styled } from 'styled-components';

export const ReviewContext = createContext<any>(null);

const ExternalMobileReview = () => {
  const { userId } = useParams();
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
    <ExternalMobileReviewLayout>
      <ExternalHeader>
        <img src={'/assets/images/review/mobile_logo.svg'} alt="logo" />
      </ExternalHeader>
      <ReviewContext.Provider value={{ review, setReview }}>
        <Outlet />
      </ReviewContext.Provider>
    </ExternalMobileReviewLayout>
  );
};

export default ExternalMobileReview;

const ExternalMobileReviewLayout = styled.div`
  width: 100%;
  margin: 0 auto;
`;

const ExternalHeader = styled.div`
  display: flex;
  padding: 2rem 0;
  justify-content: center;
  border-bottom: 2px solid ${({ theme }) => theme.colors.gray10};
`;
