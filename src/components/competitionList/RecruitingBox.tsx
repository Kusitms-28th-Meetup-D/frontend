import { styled } from 'styled-components';
import { RecruitingTeamData } from '../../interface/MyTeam';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { loginInfoState } from '../../recoil/atom';

interface RecruitingBoxProps {
  recruitingTeam: RecruitingTeamData;
}

const RecruitingBox = ({ recruitingTeam }: RecruitingBoxProps) => {
  const loginInfo = useRecoilValue(loginInfoState);
  const navigate = useNavigate();
  const handleClick = () => {
    if (loginInfo.data?.userId == recruitingTeam.teamLeaderId)
      navigate(
        `/myteam/${loginInfo.data?.userId}/${recruitingTeam.teamId}/${recruitingTeam.contestId}`,
      );
    else navigate(`/list/${recruitingTeam.contestId}/${recruitingTeam.teamId}`);
  };
  return (
    <RecruitingLayout onClick={handleClick}>
      <RecruitingTitle>{recruitingTeam.contesttitle}</RecruitingTitle>
      <RecruitingHr />
      <RecruitingProfile src={recruitingTeam.teamLeaderImage} />
      <RecruitingName>{recruitingTeam.teamLeaderName}</RecruitingName>
      <RecruitingDescription>
        "{recruitingTeam.teamLeaderMessage}"
      </RecruitingDescription>
    </RecruitingLayout>
  );
};

export default RecruitingBox;

const RecruitingLayout = styled.div`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 10px;
  padding: 2rem;
  justify-content: center;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.gray20};
  cursor: pointer;
  width: 20%;

  /* max-height: 20rem; */
`;

const RecruitingHr = styled.hr`
  width: 70%;
  border: 0.5px solid ${({ theme }) => theme.colors.gray10};
  margin: 1rem 0;
`;

const RecruitingProfile = styled.img`
  width: 6.1rem;
  height: 6.1rem;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.colors.primary40};
  margin-bottom: 1rem;

  object-fit: cover;
`;

const RecruitingTitle = styled.div`
  ${({ theme }) => theme.fonts.subtitleXS};
  color: ${({ theme }) => theme.colors.gray100};
  text-align: center;
`;

const RecruitingName = styled.div`
  ${({ theme }) => theme.fonts.subtitleXXS};
  color: ${({ theme }) => theme.colors.gray100};
  margin-bottom: 0.2rem;
`;

const RecruitingDescription = styled.div`
  ${({ theme }) => theme.fonts.bodyXXS};
  color: ${({ theme }) => theme.colors.gray80};

  max-height: 6rem;
  overflow: hidden;
  text-overflow: ellipsis;
  /* white-space: nowrap; */
`;
