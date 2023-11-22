import { styled } from 'styled-components';
import Button from '../../common/Button';
import ProfileBoxMember from '../../common/ProfileBoxMember';
import StarTitle from '../../common/StarTtile';
import { TeamData } from '../../../interface/MyTeam';
import { useNavigate } from 'react-router-dom';
interface MyTeamOpenBoxProps {
  myTeamOpen: TeamData;
  teamId?: string | number;
  userId?: string | number;
}

const MyTeamOpenBox = ({ myTeamOpen, teamId, userId }: MyTeamOpenBoxProps) => {
  const navigate = useNavigate();
  return (
    <MyTeamOpenContainer>
      {myTeamOpen && (
        <>
          <CompetitionBox>
            <CompetitionTitle>{myTeamOpen.contestTitle}</CompetitionTitle>
            <CompetitionImg src={myTeamOpen.contestImage[0]} />
            <Button onClick={() => navigate(`/myteam/${userId}/${teamId}`)}>
              팀 관리하러 가기
            </Button>
          </CompetitionBox>

          <TeamMemberBox>
            <div>
              <StarTitle>
                합류한 팀원들
                <span> 총 {myTeamOpen.teamMemberSize}명</span>
              </StarTitle>
              <TeamMembersBox>
                {myTeamOpen.teamMemberSize !== 0 &&
                myTeamOpen.teamMemberInfos ? (
                  myTeamOpen.teamMemberInfos.map((teamMember) => (
                    <ProfileBoxMember
                      key={teamMember.teamMemberId}
                      hasProfileButton={false}
                      isBgColorWhite={false}
                      hasBorder={true}
                      memberInfo={teamMember}
                      width={13.2}
                      height={16.3}
                    />
                  ))
                ) : (
                  <NoTeamMember>
                    <img
                      src={'/assets/images/myteam/team_member.svg'}
                      alt={'team_member'}
                    />
                    아직 합류한 팀원이 없어요
                  </NoTeamMember>
                )}
              </TeamMembersBox>
            </div>
            <div>
              <StarTitle>지원자</StarTitle>
              <TeamMembersBox>
                {myTeamOpen.applyMemberSize !== 0 &&
                myTeamOpen?.applyMemberInfos ? (
                  <>
                    <ApplyContent>
                      <ApplyFireImg
                        src={'/assets/images/myteam/apply_fire.svg'}
                        alt={'apply_fire'}
                      />
                      <p>
                        현재 <span>{myTeamOpen.applyMemberSize}명</span>이
                      </p>
                      <p>팀원으로 지원했어요.</p>
                    </ApplyContent>
                    {myTeamOpen.applyMemberSize !== 0 &&
                      myTeamOpen?.applyMemberInfos.map((teamMember) => (
                        <ProfileBoxMember
                          key={teamMember.teamMemberId}
                          hasProfileButton={false}
                          isBgColorWhite={true}
                          hasBorder={true}
                          memberInfo={teamMember}
                          width={13.2}
                          height={16.3}
                        />
                      ))}
                  </>
                ) : (
                  <NoTeamMember>
                    <img
                      src={'/assets/images/myteam/team_member.svg'}
                      alt={'team_member'}
                    />
                    아직 합류한 팀원이 없어요
                  </NoTeamMember>
                )}
              </TeamMembersBox>
            </div>
          </TeamMemberBox>
        </>
      )}
    </MyTeamOpenContainer>
  );
};

export default MyTeamOpenBox;

const MyTeamOpenContainer = styled.div`
  display: flex;
  background: ${({ theme }) => theme.colors.primary10};
  padding: 6rem 10rem;
  gap: 4rem;
  margin-bottom: 3rem;
  border-radius: 10px;
`;

const CompetitionBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  justify-content: space-between;
`;

const CompetitionTitle = styled.div`
  ${({ theme }) => theme.fonts.subtitleXL};
  color: ${({ theme }) => theme.colors.gray90};
`;

const CompetitionImg = styled.img`
  width: 100%;
  object-fit: cover;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.gray40};
  margin: 0.5rem 0 1rem 0;
`;

const TeamMemberBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 70%;
  gap: 2rem;
`;

const TeamMembersBox = styled.div`
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.white};
  padding: 2rem;
  width: 100%;

  display: flex;
  align-items: center;
  gap: 1.5rem;
  overflow-x: scroll;

  &::-webkit-scrollbar {
    width: 1rem;
    height: 0.8rem;
  }
  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.primary60};
    border-radius: 10px;
  }
`;

const NoTeamMember = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem;
  gap: 1rem;

  ${({ theme }) => theme.fonts.subtitleL};
  color: ${({ theme }) => theme.colors.gray90};
`;

const ApplyContent = styled.div`
  width: 13.2rem;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    ${({ theme }) => theme.fonts.subtitleS};
    color: ${({ theme }) => theme.colors.gray90};
    text-align: center;
  }
  span {
    ${({ theme }) => theme.fonts.subtitleS};
    color: ${({ theme }) => theme.colors.primary60};
  }
`;

const ApplyFireImg = styled.img`
  margin-bottom: 1rem;
`;
