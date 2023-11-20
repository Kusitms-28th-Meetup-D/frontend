import { styled } from 'styled-components';

interface StarTitleProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
}

const StarTitle = ({ children, style }: StarTitleProps) => {
  return (
    <TitleContainer style={style}>
      <Star src="/assets/images/review/star.svg" alt="star" />
      {children}
    </TitleContainer>
  );
};
export default StarTitle;

const TitleContainer = styled.div`
  ${({ theme }) => theme.fonts.heading4};
  color: ${({ theme }) => theme.colors.gray90};
  margin-bottom: 0.8rem;

  display: flex;
  align-items: center;
  gap: 0.8rem;

  span {
    ${({ theme }) => theme.fonts.subtitleM};
    color: ${({ theme }) => theme.colors.primary40};
  }
`;

const Star = styled.img`
  width: 2rem;
  height: 2rem;
`;
