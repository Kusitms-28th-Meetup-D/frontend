import { styled } from 'styled-components';
import ReviewProfile from './ReviewProfile';
import { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { selectedNameAtom } from '../../recoil/review';
import { profiles } from '../../constants/review';

const ReviewProfiles = () => {
  const [activeProfileId, setActiveProfileId] = useState(1);
  const setSelectedName = useSetRecoilState(selectedNameAtom);

  const handleProfileClick = (profileId: number) => {
    setActiveProfileId(profileId);
    setSelectedName(profiles[profileId - 1].name);
  };

  return (
    <ProfileLayout>
      {profiles.map((profile) => (
        <ReviewProfile
          id={profile.id}
          key={profile.id}
          src={profile.src}
          name={profile.name}
          isSelected={profile.id === activeProfileId}
          onClick={handleProfileClick}
        />
      ))}
    </ProfileLayout>
  );
};

export default ReviewProfiles;

const ProfileLayout = styled.div`
  display: flex;
  gap: 3.2rem;
  transform: translateY(-7.7rem);
  height: 15.4rem;
`;
