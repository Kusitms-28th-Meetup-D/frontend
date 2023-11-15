import { useEffect } from 'react';
import { styled } from 'styled-components';
import ProfileCreateBox from '../../components/profile/ProfileCreateBox';
import { profileCreateInfo } from '../../constants/Profile';
import BeforeNextButton from '../common/BeforeNextButton';
import { useState } from 'react';

const ProfileCreateBoxContainer = () => {
  const [isTextValid, setIsTextValid] = useState([false, false, false, false]);
  const [isNextDisabled, setIsNextDisabled] = useState(true);

  const handleTextValidation = (index: number, isValid: boolean) => {
    setIsTextValid((prevState) => {
      const newState = [...prevState];
      newState[index] = isValid;
      return newState;
    });
  };

  useEffect(() => {
    const allValid = isTextValid.every((value) => value === true);
    setIsNextDisabled(!allValid);
  }, [isTextValid]);

  return (
    <>
      <ProfileCreateBoxLayout>
        {profileCreateInfo.map((info) => (
          <ProfileCreateBox
            key={info.id}
            id={info.id}
            title={info.title}
            example1={info.example1}
            example2={info.example2}
            example3={info.example3}
            onValidate={handleTextValidation}
          />
        ))}
      </ProfileCreateBoxLayout>
      <BeforeNextButton
        next={'다음'}
        route={'/'}
        isNextDisabled={isNextDisabled}
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
