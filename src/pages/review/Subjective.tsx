import ReviewProfiles from '../../components/review/ReviewProfiles';
import ReviewTendency from '../../components/review/ReviewTendency';
import BeforeNextButton from '../../components/common/BeforeNextButton';
import ReviewKeywords from '../../components/review/ReviewKeywords';
import { useParams } from 'react-router-dom';

const Subjective = () => {
  const { teamId } = useParams();

  return (
    <>
      <ReviewProfiles />
      <ReviewKeywords />
      <ReviewTendency />
      <BeforeNextButton
        next="다음"
        route={`/review/${teamId}/multipleChoice`}
        isNextDisabled={false}
      />
    </>
  );
};

export default Subjective;
