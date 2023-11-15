import { styled } from 'styled-components';
import ProfileCreateHeader from '../../components/profile/ProfileCreateHeader';
import ProfileCreateBoxContainer from '../../components/profile/ProfileCreateBoxContainer';

const ProfileCreate = () => {
  return (
    <ProfileCreateLayout>
      <ProfileCreateHeader />
      <ProfileCreateBoxContainer />
    </ProfileCreateLayout>
  );
};

export default ProfileCreate;

const ProfileCreateLayout = styled.div`
  margin: 0 auto;

  @media ${({ theme }) => theme.devices.mobile} {
  }
  @media ${({ theme }) => theme.devices.tablet} {
  }
  @media ${({ theme }) => theme.devices.desktop} {
    max-width: 122.4rem;
  }
`;
