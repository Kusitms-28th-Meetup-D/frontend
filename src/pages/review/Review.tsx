import { styled } from 'styled-components';
import ReviewHeader from '../../components/review/ReviewHeader';
import { Outlet } from 'react-router-dom';
import { createContext } from 'react';

export const ReviewContext = createContext<any>(null);

const Review = () => {
  return (
    <>
      <ReviewHeader />
      <ReviewLayout>
        <Outlet />
      </ReviewLayout>
    </>
  );
};

export default Review;

const ReviewLayout = styled.div`
  max-width: 122.4rem;
  margin: auto;
`;
