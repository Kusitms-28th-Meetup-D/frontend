import { styled } from 'styled-components';
import ExternalReviewHeader from '../../components/review/ExternalReviewHeader';
import ReviewKeywords from '../../components/review/ReviewKeywords';
import ReviewTendency from '../../components/review/ReviewTendency';
import { useParams } from 'react-router-dom';
import useProfile from '../../hooks/profile/useProfile';
import ExternalReviewOneLine from '../../components/review/ExternalReviewOneLine';
import ExternalButtonBox from '../../components/review/ExternalButtonBox';

const ExternalReview = () => {
  const { userId } = useParams();
  const { profileData } = useProfile(userId);

  return (
    <>
      <ExternalReviewHeader profileData={profileData?.data.data} />
      <ExternalReviewContainer>
        <ReviewKeywords userName={profileData?.data.data.username} />
        <ReviewTendency userName={profileData?.data.data.username} />
        <ExternalReviewOneLine userName={profileData?.data.data.username} />
        <ExternalButtonBox />
      </ExternalReviewContainer>
    </>
  );
};

export default ExternalReview;

const ExternalReviewContainer = styled.div`
  margin: 0 auto;
  max-width: 122.4rem;
`;
