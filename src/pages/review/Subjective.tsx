import ReviewProfiles from '../../components/review/ReviewProfiles';
import ReviewTendency from '../../components/review/ReviewTendency';
import BeforeNextButton from '../../components/common/BeforeNextButton';
import ReviewKeywords from '../../components/review/ReviewKeywords';
import { useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { reviewState } from '../../recoil/atom';
import { useReviewUsers } from '../../hooks/review/useReviewUsers';

const Subjective = () => {
  const { teamId } = useParams();
  const { reviewUsers } = useReviewUsers(Number(teamId));
  const recoilReview = useRecoilValue(reviewState);
  const isNextDisabled = recoilReview
    .slice(0, reviewUsers?.data.userReviewResponseDtoList.length)
    .some((data) => data.selectedKeywords.length < 2);

  // console.log('isdisable', isNextDisabled);
  return (
    <>
      <ReviewProfiles />
      <ReviewKeywords />
      <ReviewTendency />
      <BeforeNextButton
        next="다음"
        route={`/review/${teamId}/multipleChoice`}
        isNextDisabled={isNextDisabled}
      />
    </>
  );
};

export default Subjective;
