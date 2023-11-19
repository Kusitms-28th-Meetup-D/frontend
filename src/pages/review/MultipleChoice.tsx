import BeforeNextButton from '../../components/common/BeforeNextButton';
import ReviewHero from '../../components/review/ReviewHero';
import ReviewReason from '../../components/review/ReviewReason';

const MultipleChoice = () => {
  return (
    <>
      <ReviewHero />
      <ReviewReason />
      <BeforeNextButton next="제출하기" route="/" isNextDisabled={false} />
    </>
  );
};

export default MultipleChoice;
