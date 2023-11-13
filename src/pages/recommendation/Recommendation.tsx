import { styled } from 'styled-components';
import RecommendationHeader from '../../components/recommendation/RecommendationHeader';
import { Outlet } from 'react-router-dom';

const Recommendation = () => {
  return (
    <RecommendationLayout>
      <RecommendationHeader />
      <Outlet />
    </RecommendationLayout>
  );
};

export default Recommendation;

const RecommendationLayout = styled.div`
  margin: 0 auto;

  @media ${({ theme }) => theme.devices.mobile} {
  }
  @media ${({ theme }) => theme.devices.tablet} {
  }
  @media ${({ theme }) => theme.devices.desktop} {
    width: 1250px;
  }
`;
