import { styled } from 'styled-components';
import ProfileCreateBox from '../../components/profile/ProfileCreateBox';
import { profileCreateInfo } from '../../constants/Profile';
import BeforeNextButton from '../common/BeforeNextButton';

const ProfileCreateBoxContainer = () => {
  return (
    <>
      <ProfileCreateBoxLayout>
        {profileCreateInfo.map((info) => (
          <ProfileCreateBox
            key={info.id}
            title={info.title}
            example1={info.example1}
            example2={info.example2}
            example3={info.example3}
          />
        ))}
      </ProfileCreateBoxLayout>
      <BeforeNextButton next={'다음'} route={'/'} />
    </>
  );
};

export default ProfileCreateBoxContainer;

const ProfileCreateBoxLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2.4rem;
  margin: 3.2rem 0;
`;
