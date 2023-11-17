import styled from 'styled-components';
import ProfileInfo from '../../components/profile/ProfileInfo';
import ProfileSubInfo from '../../components/profile/ProfileSubInfo';
import ProfileKeyword from '../../components/profile/ProfileKeyword';
import ProfileRecommendation from '../../components/profile/ProfileRecommendation';
import ProfilePersonality from '../../components/profile/ProfilePersonality';
import { useSetRecoilState } from 'recoil';
import { headerSelectedState } from '../../recoil/atom';
import { useEffect, useState } from 'react';
import { Headers } from '../../constants/Header';
import useProfile from '../../hooks/profile/useProfile';
import Loading from '../../components/common/Loading';
import useProfileRecommendation from '../../hooks/profile/useProfileRecommendation';
import { useParams } from 'react-router-dom';
import ProfileTicketLackModal from '../../components/profile/ProfileTicketLack/ProfileTicketLackModal';
import useIsTicketUsed from '../../hooks/profile/useIsTicketUsed';
import useTicketNumber from '../../hooks/profile/useTicketNumber';
import ProfileTicketUseModal from '../../components/profile/profileTicketUse/ProfileTicketUseModal';

const Profile = () => {
  const setHeaderSelected = useSetRecoilState(headerSelectedState);
  const { userId } = useParams();
  const { profileData, isLoading } = useProfile(userId as string);
  const { profileRecommendationData, isLoadingRecommendation } =
    useProfileRecommendation(userId as string);

  const { IsTicketUsedData } = useIsTicketUsed(userId as string);
  const { TicketNumberData } = useTicketNumber();
  useEffect(() => setHeaderSelected(Headers.myProfile));

  const [isLackModalVisible, setIsLackModalVisible] = useState(true);
  const [isUseModalVisible, setIsUseModalVisible] = useState(true);
  return isLoading || isLoadingRecommendation ? (
    <Loading />
  ) : (
    <ProfileLayout>
      <ProfileTicketLackModal
        isModalVisible={isLackModalVisible}
        setIsModalVisible={setIsLackModalVisible}
        currTicketAmount={TicketNumberData?.data.data.ticketCount}
      />
      <ProfileTicketUseModal
        isModalVisible={isUseModalVisible}
        setIsModalVisible={setIsUseModalVisible}
        currTicketAmount={TicketNumberData?.data.data.ticketCount}
      />
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
        keywords={profileRecommendationData?.data.data.keywords}
        name={profileData?.data.data.username}
      />
      <ProfilePersonality
        teamCurturesData={profileRecommendationData?.data.data.teamCultures}
        workMethodsData={profileRecommendationData?.data.data.workMethods}
        name={profileData?.data.data.username}
      />
      <ProfileRecommendation
        recommendationData={profileRecommendationData?.data.data.comments}
        name={profileData?.data.data.username}
        isLocked={!IsTicketUsedData?.data.data.isUsed}
      />
    </ProfileLayout>
  );
};
const ProfileLayout = styled.div`
  max-width: 122.4rem;
  margin: auto;
`;

export default Profile;
