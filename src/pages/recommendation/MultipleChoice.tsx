import BeforeNextButton from '../../components/recommendation/BeforeNextButton';
import RecommendationHero from '../../components/recommendation/RecommendationHero';
import RecommendationReason from '../../components/recommendation/RecommendationReason';

const MultipleChoice = () => {
  return (
    <>
      <RecommendationHero />
      <RecommendationReason />
      <BeforeNextButton next="제출하기" route="/" />
    </>
  );
};

export default MultipleChoice;
