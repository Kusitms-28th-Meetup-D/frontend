import { styled } from 'styled-components';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

const Button = ({ children, onClick }: ButtonProps) => {
  return <ButtonBox onClick={onClick}>{children}</ButtonBox>;
};

export default Button;

const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  gap: 1rem;

  background: ${({ theme }) => theme.colors.primary60};
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.buttonL};
  border-radius: 36px;
  padding: 1.4rem 7.5rem;
  cursor: pointer;
`;
