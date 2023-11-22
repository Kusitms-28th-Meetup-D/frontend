import { styled } from 'styled-components';

interface PopularTeamBoxProps {
  title: string;
  name: string;
  content: string;
  index: number;
}

const PopularTeamBox = ({
  title,
  name,
  content,
  index,
}: PopularTeamBoxProps) => {
  return (
    <PopularTeamBoxContainer $index={index}>
      <h1>{title}</h1>
      <hr />
      <img src={'/assets/images/review/profile.svg'} />
      <h2>{name} 님의 팀</h2>
      <p>"{content}"</p>
    </PopularTeamBoxContainer>
  );
};

export default PopularTeamBox;

const PopularTeamBoxContainer = styled.div<{ $index: number }>`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 23.9rem;
  padding: 2.5rem 1.5rem;
  border-radius: 10px;
  backdrop-filter: blur(11px);
  border: 1px solid ${({ theme }) => theme.colors.gray20};
  background: rgba(255, 255, 255, 0.7);

  margin: ${(props) =>
    props.$index % 2 == 1 ? '0 0 10rem 0;' : '10rem 0 0 0;'};

  h1 {
    ${({ theme }) => theme.fonts.subtitleM};
    color: ${({ theme }) => theme.colors.gray90};
    text-align: center;
  }
  hr {
    width: 80%;
    border: 1px solid ${({ theme }) => theme.colors.gray20};
    margin: 2rem 0;
  }
  img {
    border-radius: 50%;
    border: 1px solid ${({ theme }) => theme.colors.primary40};
    width: 10rem;
  }
  h2 {
    ${({ theme }) => theme.fonts.subtitleS};
    color: ${({ theme }) => theme.colors.gray100};
    margin: 1rem 0;
  }
  p {
    ${({ theme }) => theme.fonts.bodyS};
    color: ${({ theme }) => theme.colors.gray80};
  }
`;
