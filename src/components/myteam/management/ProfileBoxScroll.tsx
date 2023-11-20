import styled from 'styled-components';
import { ProfileBoxProps, ProfileProps } from '../../../interface/Contest';
import ProfileBoxMember from '../../common/ProfileBoxMember';
interface ProfileBoxScrollProps {
  teamMembersInfo: ProfileProps[];
  width?: number;
}
const ProfileBoxScroll: React.FC<ProfileBoxScrollProps> = (props) => {
  return (
    <Layout>
      {props.teamMembersInfo.map((memberData, index) => {
        const profileProps: ProfileBoxProps = {
          hasBorder: true,
          hasProfileButton: true,
          isBgColorWhite: true,
          memberInfo: memberData,
        };
        return <ProfileBoxMember key={index} {...profileProps} />;
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

export default ProfileBoxScroll;
