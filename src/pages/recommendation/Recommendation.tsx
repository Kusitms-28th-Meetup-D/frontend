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
  max-width: 122.4rem;
  margin: auto;
`;
