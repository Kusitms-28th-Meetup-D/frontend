import styled from 'styled-components';
import { ProfileBoxProps, ProfileProps } from '../../../interface/Contest';
import ProfileBoxMember from '../../common/ProfileBoxMember';
import { Role } from '../../contest/RecruitTeamItem';
interface TeamMemberScrollBoxProps {
  teamLeaderInfo: ProfileProps;
  teamMembersInfo: ProfileProps[];
  width?: number;
}
const TeamMemberScrollBox: React.FC<TeamMemberScrollBoxProps> = (props) => {
  return (
    <Layout>
      <TeamLeaderTmpBox>
        <Role>팀장</Role>
        <ProfileBoxMember
          hasBorder={true}
          hasProfileButton={true}
          isBgColorWhite={true}
          memberInfo={props.teamLeaderInfo}
        />
      </TeamLeaderTmpBox>
      {props.teamMembersInfo.map((memberData) => {
        const profileProps: ProfileBoxProps = {
          hasBorder: true,
          hasProfileButton: true,
          isBgColorWhite: true,
          memberInfo: memberData,
        };
        return <ProfileBoxMember {...profileProps} />;
      })}
    </Layout>
  );
};
const Layout = styled.div`
  display: flex;
  gap: 2.4rem;

  overflow-x: scroll;

  padding: 20px 0;

  &::-webkit-scrollbar {
    width: 7px;
    height: 7px;
    border-radius: 6px;
    /* background: ${(props) => props.theme.colors.gray20}; */
  }
  &::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.colors.primary60};
    border-radius: 6px;
  }
`;
const TeamLeaderTmpBox = styled.div`
  position: relative;
  ${(props) => props.theme.fonts.subtitleS};
`;
export default TeamMemberScrollBox;
