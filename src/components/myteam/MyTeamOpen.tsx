import { styled } from 'styled-components';
import Button from '../common/Button';
import Title from '../common/Title';
import ProfileBoxMember from '../common/ProfileBoxMember';

const teamMember = {
  teamMemberId: 1,
  teamMemberName: '김민수',
  teamMemberImage: '/assets/images/recommendation/profile.svg',
  teamMemberTask: ['기획', '디자인'],
  teamMemberMajor: ['경영학과', '컴퓨터공학과'],
};

const MyTeamOpen = () => {
  return (
    <MyTeamOpenContainer>
      <CompetitionBox>
        <CompetitionTitle>
          2024 국제 대학생 창업교류전 한국대표 모집
        </CompetitionTitle>
        <CompetitionImg src={'/assets/images/competition/competition.svg'} />
        <Button>팀 관리하러 가기</Button>
      </CompetitionBox>
      <TeamMemberBox>
        <>
          <Title>합류한 팀원들</Title>
          <TeamMembers>
            <ProfileBoxMember
              hasProfileButton={false}
              isBgColorWhite={false}
              hasBorder={true}
              memberInfo={teamMember}
              width={13.2}
              height={16.3}
            />
          </TeamMembers>
        </>
        <>
          <Title>지원자</Title>
          <TeamMembers>
            <ProfileBoxMember
              hasProfileButton={false}
              isBgColorWhite={false}
              hasBorder={true}
              memberInfo={teamMember}
              width={13.2}
              height={16.3}
            />
          </TeamMembers>
        </>
      </TeamMemberBox>
    </MyTeamOpenContainer>
  );
};

export default MyTeamOpen;

const MyTeamOpenContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.primary10};
  padding: 6rem 10rem;
  gap: 4rem;
`;

const CompetitionBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 25rem;
  gap: 1.5rem;
`;

const TeamMemberBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const TeamMembers = styled.div`
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.white};
  padding: 2rem;

  display: flex;
  gap: 1.5rem;
  overflow-x: scroll;
`;

const CompetitionTitle = styled.div`
  ${({ theme }) => theme.fonts.subtitleXL};
  color: ${({ theme }) => theme.colors.gray90};
`;

const CompetitionImg = styled.img`
  width: 100%;
  height: 31.7rem;
  object-fit: cover;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.gray40};
`;
