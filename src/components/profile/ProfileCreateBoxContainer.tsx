import { styled } from 'styled-components';
import ProfileCreateBox from '../../components/profile/ProfileCreateBox';
import { profileCreateInfo } from '../../constants/Profile';
import BeforeNextButton from '../common/BeforeNextButton';
import { useEffect, useState } from 'react';
import { useProfileCreate } from '../../hooks/profile/useProfileCreate';

const ProfileCreateBoxContainer = () => {
  const [isNextDisabled, setIsNextDisabled] = useState(true);
  const [profiles, setProfiles] = useState({
    internships: '',
    awards: '',
    tools: '',
    certificates: '',
  });

  const handleProfilesData = (title: string, data: string) => {
    setProfiles((prev: any) => ({ ...prev, [title]: data }));
  };

  useEffect(() => {
    const allFieldsValid = Object.values(profiles).every(
      (value) => value.length >= 5,
    );
    setIsNextDisabled(!allFieldsValid);
  }, [profiles]);

  const profileCreateMutation = useProfileCreate(profiles);
  const handleNextButtonClick = () => {
    profileCreateMutation.mutate();
  };

  return (
    <>
      <ProfileCreateBoxLayout>
        {profileCreateInfo.map((info) => (
          <ProfileCreateBox
            key={info.id}
            id={info.id}
            title={info.title}
            examples={info.examples}
            onUpdate={handleProfilesData}
          />
        ))}
      </ProfileCreateBoxLayout>
      <BeforeNextButton
        next={'다음'}
        route={'/'}
        isNextDisabled={isNextDisabled}
        onClick={handleNextButtonClick}
      />
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
