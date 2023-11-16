import styled from 'styled-components';
import LeaderInfoBox from './LeaderInfoBox';
import MemberInfoBox from './MemberInfoBox';
import ProfileBox, { ProfileBoxProps } from '../common/ProfileBox';
const TEAM: ProfileBoxProps = {
  hasProfileButton: false,
  bgColor: 'white',
  memberInfo: {
    teamMemberId: 2,
    teamMemberName: '박진웆',
    teamMemberImage:
      'https://search.pstatic.net/sunny/?src=https%3A%2F%2Fi.pinimg.com%2F736x%2F81%2Fd3%2F7f%2F81d37f32571d3a43e9cec26691568da0--john-hamm-this-man.jpg&type=a340',
    teamMemberTask: ['천재가될래요'],
    teamMemberMajor: ['컴공가'],
  },
};
const RecruitTeamItem = ({ data }: { data: any }) => {
  return (
    <ItemLayout>
      <LeaderBox>
        <Role>팀장</Role>
        <ProfileBox {...TEAM} />
        <LeaderInfoBox infoData={data.leader} />
      </LeaderBox>
      <MemberBox>
        <Role>팀원</Role>
        <TeamInfoBox>
          <TO>
            모집 현황 : {data.cur}/{data.max}
          </TO>
          <IntroduceTitle>팀장의 한 마디</IntroduceTitle>
          <IntroduceContent>{data.talk}</IntroduceContent>
          <GoTeamButton>팀 자세히 보러가기</GoTeamButton>
        </TeamInfoBox>
        <MemberInfoContainer>
          {data.members.map((member: any, index: any) => (
            <MemberInfoBox infoData={member} key={index} />
          ))}
        </MemberInfoContainer>
      </MemberBox>
    </ItemLayout>
  );
};
const ItemLayout = styled.div`
  display: flex;
  gap: 2.4rem;
`;
const Role = styled.div`
  position: absolute;
  left: -1px;
  top: -1.5rem;

  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.primary40};

  border-radius: 0.8rem;

  width: 4.1rem;
  height: 3rem;
  padding: 0.4rem 0.8rem;
`;
const LeaderBox = styled.div`
  position: relative;

  ${(props) => props.theme.fonts.subtitleS};
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.primary10};

  border: 1px solid ${(props) => props.theme.colors.primary40};
  border-radius: 0.8rem;

  width: 17.1rem;
  /* height: 23rem; */
`;
const MemberBox = styled.div`
  position: relative;
  display: flex;

  ${(props) => props.theme.fonts.subtitleS};
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.primary10};

  border: 1px solid ${(props) => props.theme.colors.primary40};
  border-radius: 0.8rem;

  width: 100%;
  /* height: 23rem; */
`;
const TeamInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  width: 25rem;

  padding: 2rem;
`;
const TO = styled.div`
  ${(props) => props.theme.fonts.subtitleXS};
  font-weight: 700;
  color: ${(props) => props.theme.colors.primary40};

  width: 100%;
`;
const IntroduceTitle = styled.div`
  ${(props) => props.theme.fonts.subtitleS};
  color: ${(props) => props.theme.colors.gray90};
`;
const IntroduceContent = styled.div`
  ${(props) => props.theme.fonts.subtitleM};
  color: ${(props) => props.theme.colors.primary90};
  background-color: ${(props) => props.theme.colors.white};

  border: 1px solid ${(props) => props.theme.colors.primary40};
  border-radius: 0.8rem;

  width: 100%;
  padding: 3.5rem;

  text-align: center;
`;
const GoTeamButton = styled.button`
  ${(props) => props.theme.fonts.subtitleXS};
  color: rgba(255, 255, 255, 0.8);
  background-color: ${(props) => props.theme.colors.primary40};

  border: 1px solid ${(props) => props.theme.colors.primary40};
  border-radius: 0.8rem;

  width: 100%;
  padding: 0.5rem;
`;
const MemberInfoContainer = styled.div`
  display: flex;
  gap: 1.2rem;
  overflow-x: scroll;

  max-width: 72rem;
  /* max-width: 100%; */

  padding: 2.8rem;

  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
    border-radius: 6px;
    background: rgba(255, 255, 255, 0.4);
  }
  &::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.colors.primary60};
    border-radius: 6px;
  }
`;
export default RecruitTeamItem;
