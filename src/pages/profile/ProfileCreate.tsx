import { styled } from 'styled-components';
import ProfileCreateHeader from '../../components/profile/ProfileCreateHeader';
import ProfileCreateBoxContainer from '../../components/profile/ProfileCreateBoxContainer';
import { useSetRecoilState } from 'recoil';
import { headerSelectedState } from '../../recoil/atom';
import { useEffect } from 'react';
import { Headers } from '../../constants/Header';

const ProfileCreate = () => {
  const setHeaderSelected = useSetRecoilState(headerSelectedState);
  useEffect(() => setHeaderSelected(Headers.myProfile));

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
