import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';

interface BeforeNextButtonProps {
  next: string;
  route: string;
  isNextDisabled: boolean;
  onClick?: () => void;
}

const BeforeNextButton = ({
  next,
  route,
  isNextDisabled,
  onClick,
}: BeforeNextButtonProps) => {
  const navigate = useNavigate();

  const handleBeforeButtonClick = () => {
    navigate(-1);
  };

  const handleNextButtonClick = () => {
    navigate(`${route}`);
  };

  return (
    <ButtonBox>
      <BeforeButton onClick={handleBeforeButtonClick}>
        <img src="/assets/images/review/beforeArrow.svg" alt="arrow-before" />
        이전
      </BeforeButton>
      <NextButton
        onClick={onClick ? onClick : handleNextButtonClick}
        $isNextDisabled={isNextDisabled}
        disabled={isNextDisabled}
      >
        {next}
        <img src="/assets/images/review/nextArrow.svg" alt="arrow-right" />
      </NextButton>
    </ButtonBox>
  );
};

export default BeforeNextButton;

const ButtonBox = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: center;
  margin: 8rem 0 10rem;
`;

const BeforeButton = styled.button`
  width: 17rem;
  height: 5.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  background: ${({ theme }) => theme.colors.gray10};
  color: ${({ theme }) => theme.colors.gray40};
  ${({ theme }) => theme.fonts.buttonL};
  border: 1px solid ${({ theme }) => theme.colors.gray20};
  border-radius: 3.6rem;
`;

const NextButton = styled.button<{ $isNextDisabled?: boolean }>`
  width: 17rem;
  height: 5.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  background-color: ${(props) =>
    props.$isNextDisabled
      ? props.theme.colors.gray10
      : props.theme.colors.primary60};

  color: ${(props) =>
    props.$isNextDisabled
      ? props.theme.colors.gray40
      : props.theme.colors.white};

  ${({ theme }) => theme.fonts.buttonL};
  border: 1px solid
    ${(props) =>
      props.$isNextDisabled
        ? props.theme.colors.gray50
        : props.theme.colors.primary20};
  border-radius: 3.6rem;

  cursor: ${(props) => (props.$isNextDisabled ? 'default' : 'pointer')};
  /* &:disabled {
    cursor: default;
  } */
`;
