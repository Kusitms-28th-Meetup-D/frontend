import { styled } from 'styled-components';
import Button from '../../common/Button';
import { useContext } from 'react';
import { ExternalReviewContext } from '../../../pages/review/ExternalReview';
import { useNonUserReviewCreate } from '../../../hooks/review/useNonUserReviewCreate';
import { useNavigate, useParams } from 'react-router-dom';

const ExternalButtonBox = () => {
  const { review } = useContext(ExternalReviewContext);
  const nonUserReviewCreateMutation = useNonUserReviewCreate(review);
  const navigate = useNavigate();
  const { userId } = useParams();

  const handleButtonClick = () => {
    nonUserReviewCreateMutation.mutate();
    navigate(`/review/external/${userId}/complete`);
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
