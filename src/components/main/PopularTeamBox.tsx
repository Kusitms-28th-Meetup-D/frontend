import { styled } from 'styled-components';
import { MainPageTeam } from '../../interface/Main';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { loginInfoState, loginModalState } from '../../recoil/atom';
import { useNavigate } from 'react-router-dom';

const PopularTeamBox: React.FC<MainPageTeam & { index: number }> = (props) => {
  const {
    index,
    contesttitle,
    teamLeaderName,
    teamLeaderImage,
    teamLeaderMessage,

    contestId,

    teamId,
    teamLeaderId,
  } = props;
  const handleClick = () => {
    if (!loginInfo.isLogin) {
      setLoginModal(true);
    } else {
      if (loginInfo.data?.userId == teamLeaderId)
        navigate(`/myteam/${loginInfo.data?.userId}/${teamId}/${contestId}`);
      else navigate(`/list/${contestId}/${teamId}`);
    }
  };
  const loginInfo = useRecoilValue(loginInfoState);
  const setLoginModal = useSetRecoilState(loginModalState);
  const navigate = useNavigate();

  return (
    <PopularTeamBoxContainer $index={index} onClick={handleClick}>
      <h1>{contesttitle}</h1>
      <hr />
      <img src={teamLeaderImage} />
      <h2>{teamLeaderName}님의 팀</h2>
      <p>{teamLeaderMessage}</p>
    </PopularTeamBoxContainer>
  );
};

export default PopularTeamBox;

const PopularTeamBoxContainer = styled.div<{ $index: number }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;

  width: 23.9rem;
  padding: 2.5rem 1.5rem;
  border-radius: 10px;
  backdrop-filter: blur(11px);
  border: 1px solid ${({ theme }) => theme.colors.gray20};
  background: rgba(255, 255, 255, 0.7);

  margin: ${(props) =>
    props.$index % 2 == 0 ? '0 0 10rem 0;' : '10rem 0 0 0;'};

  cursor: pointer;
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
    height: auto;
    aspect-ratio: 1 / 1; /* 가로 세로 비율을 1:1로 유지 */
    object-fit: cover;
  }
  h2 {
    ${({ theme }) => theme.fonts.subtitleS};
    color: ${({ theme }) => theme.colors.gray100};
    margin: 1rem 0;
  }
  p {
    ${({ theme }) => theme.fonts.bodyS};
    color: ${({ theme }) => theme.colors.gray80};
    text-align: center;
  }
`;
