import { styled } from 'styled-components';
import Button from '../common/Button';
import { useContext } from 'react';
import { ExternalReviewContext } from '../../pages/review/ExternalReview';
import { useNonUserReviewCreate } from '../../hooks/review/useNonUserReviewCreate';

const ExternalButtonBox = () => {
  const { review } = useContext(ExternalReviewContext);
  const nonUserReviewCreateMutation = useNonUserReviewCreate(review);

  const handleButtonClick = () => {
    nonUserReviewCreateMutation.mutate();
  };

  return (
    <ButtonContainer>
      <Button onClick={handleButtonClick}>제출하기</Button>;
    </ButtonContainer>
  );
};

export default ExternalButtonBox;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 10rem 0 6rem 0;
`;
