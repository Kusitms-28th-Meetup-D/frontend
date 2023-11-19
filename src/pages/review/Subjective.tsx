import ReviewProfiles from '../../components/review/ReviewProfiles';
import ReviewKeywords from '../../components/review/ReviewKeywords';
import ReviewTendency from '../../components/review/ReviewTendency';
import BeforeNextButton from '../../components/common/BeforeNextButton';

const Subjective = () => {
  return (
    <>
      <ReviewProfiles />
      <ReviewKeywords />
      <ReviewTendency />
      <BeforeNextButton
        next="다음"
        route="/review/multipleChoice"
        isNextDisabled={false}
      />
    </>
  );
};

export default Subjective;
