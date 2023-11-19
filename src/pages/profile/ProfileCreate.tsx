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
  max-width: 122.4rem;
  margin: auto;
`;
