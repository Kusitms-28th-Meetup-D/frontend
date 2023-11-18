import { styled } from 'styled-components';

interface PopularTeamBoxProps {
  title: string;
  name: string;
  content: string;
}

const PopularTeamBox = ({ title, name, content }: PopularTeamBoxProps) => {
  return (
    <PopularTeamBoxContainer>
      <h1>{title}</h1>
      <img src={'/assets/images/profile/profile.svg'} />
      <h2>{name}님의 팀</h2>
      <p>"{content}"</p>
    </PopularTeamBoxContainer>
  );
};

export default PopularTeamBox;

const PopularTeamBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(11.194599151611328px);
  border: 1px solid ${({ theme }) => theme.colors.gray20};
  width: 23.9rem;
  height: 28.3rem;

  h1 {
    ${({ theme }) => theme.fonts.subtitleM};
    color: ${({ theme }) => theme.colors.gray90};
    margin-bottom: 1rem;
  }
  img {
    border-radius: 50%;
    border: 1px solid ${({ theme }) => theme.colors.primary40};
    width: 10rem;
  }
  h2 {
    ${({ theme }) => theme.fonts.subtitleS};
    color: ${({ theme }) => theme.colors.gray100};
  }
  p {
    ${({ theme }) => theme.fonts.bodyS};
    color: ${({ theme }) => theme.colors.gray80};
  }
`;
