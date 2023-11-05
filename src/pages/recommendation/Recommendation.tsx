import { styled } from 'styled-components';
import RecommendationHeader from '../../components/recommendation/RecommendationHeader';
import RecommendationProfiles from '../../components/recommendation/RecommendationProfiles';
import RecommendationKeywords from '../../components/recommendation/RecommendationKeywords';
import RecommendationTendency from '../../components/recommendation/RecommendationTendency';

const Recommendation = () => {
  return (
    <RecommendationLayout>
      <RecommendationHeader />
      <RecommendationProfiles />
      <RecommendationKeywords />
      <RecommendationTendency />
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
