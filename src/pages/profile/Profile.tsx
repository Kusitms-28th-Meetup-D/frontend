import styled from 'styled-components';
import ProfileInfo from '../../components/profile/ProfileInfo';
import ProfileSubInfo from '../../components/profile/ProfileSubInfo';
import ProfileKeyword from '../../components/profile/ProfileKeyword';
import ProfileRecommendation from '../../components/profile/ProfileRecommendation';
import ProfilePersonality from '../../components/profile/ProfilePersonality';
import { profileDatas, reviewDatas } from '../../constants/Profile';
import { useSetRecoilState } from 'recoil';
import { headerSelectedState } from '../../recoil/atom';
import { useEffect } from 'react';
import { Headers } from '../../constants/Header';
import useProfile from '../../hooks/profile/useProfile';
import Loading from '../../components/common/Loading';

const Profile = () => {
  const setHeaderSelected = useSetRecoilState(headerSelectedState);
  const { profileData, isLoading } = useProfile();

  useEffect(() => setHeaderSelected(Headers.myProfile));

  return isLoading ? (
    <Loading />
  ) : (
    <ProfileLayout>
      <ProfileInfo
        name={profileData?.data.data.username}
        profile_image={profileData?.data.data.profile_image}
        task={profileData?.data.data.task[0]}
        location={profileData?.data.data.location}
        major={profileData?.data.data.major[0]}
        selfIntroduction={profileData?.data.data.selfIntroduction}
      />
      <ProfileSubInfo
        internships={profileData?.data.data.internships}
        awards={profileData?.data.data.awards}
        tools={profileData?.data.data.tools}
        certificates={profileData?.data.data.certificates}
      />
      <ProfileKeyword
        keywordData={reviewDatas.keywords}
        name={profileDatas.name}
        name={profileData?.data.data.username}
      />
      <ProfilePersonality
        teamCurturesData={reviewDatas.teamCultures}
        workMethodsData={reviewDatas.workMethods}
        name={profileDatas.name}
      />
      <ProfileRecommendation
        recommendationData={reviewDatas.recommendation}
        name={profileDatas.name}
        isLocked={true}
      />
    </ProfileLayout>
  );
};
const ProfileLayout = styled.div`
  max-width: 122.4rem;
  margin: auto;
`;

export default Profile;
