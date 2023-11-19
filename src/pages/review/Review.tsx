import { styled } from 'styled-components';
import ReviewHeader from '../../components/review/ReviewHeader';
import { Outlet } from 'react-router-dom';

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
  margin: 0 auto;

  @media ${({ theme }) => theme.devices.mobile} {
  }
  @media ${({ theme }) => theme.devices.tablet} {
  }
  @media ${({ theme }) => theme.devices.desktop} {
    max-width: 122.4rem;
  }
`;
