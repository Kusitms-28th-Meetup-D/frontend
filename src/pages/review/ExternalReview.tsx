import { styled } from 'styled-components';
import ExternalReviewHeader from '../../components/review/ExternalReviewHeader';

const ExternalReview = () => {
  return (
    <>
      <ExternalReviewHeader />
      <ExternalReviewContainer></ExternalReviewContainer>
    </>
  );
};

export default ExternalReview;

const ExternalReviewContainer = styled.div`
  margin: 0 auto;
  max-width: 122.4rem;
`;
