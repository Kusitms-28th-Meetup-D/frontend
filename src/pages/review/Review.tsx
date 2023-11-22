import { styled } from 'styled-components';
import ReviewHeader from '../../components/review/ReviewHeader';
import { Outlet, useParams } from 'react-router-dom';
import { createContext, useState } from 'react';

export const ReviewContext = createContext<any>(null);

const Review = () => {
  const { userId } = useParams();
  const { teamId } = useParams();

  const [review, setReview] = useState({
    userId: Number(userId),
    teamId: Number(teamId),
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
      <ReviewHeader />
      <ReviewLayout>
        <ReviewContext.Provider value={{ review, setReview }}>
          <Outlet />
        </ReviewContext.Provider>
      </ReviewLayout>
    </>
  );
};

export default Review;

const ReviewLayout = styled.div`
  max-width: 122.4rem;
  margin: auto;
`;
