import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const Profile = () => {
  const { userId } = useParams();
  return <ProfileText>민혜린 님의 프로필</ProfileText>;
};
const ProfileText = styled.div`
  ${(props) => props.theme.fonts.heading1};
`;
export default Profile;
