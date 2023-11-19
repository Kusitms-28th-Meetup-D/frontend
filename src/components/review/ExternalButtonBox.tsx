import { styled } from 'styled-components';
import Button from '../common/Button';

const ExternalButtonBox = () => {
  const handleButtonClick = () => {
    alert('제출하기 버튼이 눌렸습니다.');
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
