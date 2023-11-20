import { Outlet } from 'react-router-dom';
import { styled } from 'styled-components';

const ExternalMobileReview = () => {
  return (
    <ExternalMobileReviewLayout>
      <ExternalHeader>
        <img src={'/assets/images/review/mobile_logo.svg'} alt="logo" />
      </ExternalHeader>
      <Outlet />
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
