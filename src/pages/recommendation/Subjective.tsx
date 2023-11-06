import RecommendationProfiles from '../../components/recommendation/RecommendationProfiles';
import RecommendationKeywords from '../../components/recommendation/RecommendationKeywords';
import RecommendationTendency from '../../components/recommendation/RecommendationTendency';
import BeforeNextButton from '../../components/recommendation/BeforeNextButton';

const Subjective = () => {
  return (
    <>
      <RecommendationProfiles />
      <RecommendationKeywords />
      <RecommendationTendency />
      <BeforeNextButton next="다음" route="/recommendation/multipleChoice" />
    </>
  );
};

export default Subjective;
