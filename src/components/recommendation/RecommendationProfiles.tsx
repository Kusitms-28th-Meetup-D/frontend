import { styled } from 'styled-components';
import RecommendationProfile from './RecommendationProfile';
import { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { selectedNameAtom } from '../../recoil/recommendation';
import { profiles } from '../../constants/recommendation';

const RecommendationProfiles = () => {
  const [activeProfileId, setActiveProfileId] = useState(1);
  const setSelectedName = useSetRecoilState(selectedNameAtom);

  const handleProfileClick = (profileId: number) => {
    setActiveProfileId(profileId);
    setSelectedName(profiles[profileId - 1].name);
  };

  return (
    <ProfileLayout>
      {profiles.map((profile) => (
        <RecommendationProfile
          id={profile.id}
          key={profile.id}
          src={profile.src}
          name={profile.name}
          active={profile.id === activeProfileId}
          onClick={handleProfileClick}
        />
      ))}
    </ProfileLayout>
  );
};

export default RecommendationProfiles;

const ProfileLayout = styled.div`
  display: flex;
  gap: 3.2rem;
  transform: translateY(-7.7rem);
  height: 15.4rem;
`;
