import styled from 'styled-components';
import ProfileInfo from '../../components/profile/ProfileInfo';
import ProfileSubInfo from '../../components/profile/ProfileSubInfo';
import ProfileKeyword from '../../components/profile/ProfileKeyword';
import ProfileReview from '../../components/profile/ProfileReview';
import ProfilePersonality from '../../components/profile/ProfilePersonality';
import { useSetRecoilState, useRecoilValue } from 'recoil';
import { headerSelectedState, loginInfoState } from '../../recoil/atom';
import { useEffect, useState } from 'react';
import { Headers } from '../../constants/Header';
import useProfile from '../../hooks/profile/useProfile';
import Loading from '../../components/common/Loading';
import useProfileReview from '../../hooks/profile/useProfileReview';
import { useParams } from 'react-router-dom';
import ProfileTicketLackModal from '../../components/profile/ProfileTicketLack/ProfileTicketLackModal';
import useIsTicketUsed from '../../hooks/profile/useIsTicketUsed';
import useTicketNumber from '../../hooks/profile/useTicketNumber';
import ProfileTicketUseModal from '../../components/profile/profileTicketUse/ProfileTicketUseModal';
import useIsUserGetExternalReview from '../../hooks/profile/useIsUserGetExternalReview';

const Profile = () => {
  const setHeaderSelected = useSetRecoilState(headerSelectedState);
  const { userId } = useParams();
  const loginInfo = useRecoilValue(loginInfoState);

  // 인증 미필요
  const { profileData, isLoading } = useProfile(userId as string);
  const { profileReviewData, isLoadingReview } = useProfileReview(
    userId as string,
  );
  const { isUserGetExternalReviewData } = useIsUserGetExternalReview(
    userId as string,
  );

  // 인증 필요
  const { IsTicketUsedData } = useIsTicketUsed(userId as string);
  const { TicketNumberData } = useTicketNumber();
  useEffect(() => setHeaderSelected(Headers.myProfile));

  const [isLackModalVisible, setIsLackModalVisible] = useState(false);
  const [isUseModalVisible, setIsUseModalVisible] = useState(false);
  return isLoading || isLoadingReview ? (
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
        isMyProfile={
          (loginInfo?.data?.userId as unknown as string) ==
          (userId as unknown as string)
        }
      />
      <ProfileSubInfo
        internships={profileData?.data.data.internships}
        awards={profileData?.data.data.awards}
        tools={profileData?.data.data.tools}
        certificates={profileData?.data.data.certificates}
        isMyProfile={
          (loginInfo?.data?.userId as unknown as string) ==
          (userId as unknown as string)
        }
      />
      <ProfileKeyword
        keywords={profileReviewData?.data.data.keywords}
        name={profileData?.data.data.username}
        isUserGetExternalReview={
          isUserGetExternalReviewData?.data.data.alreadyReviewed
        }
      />
      <ProfilePersonality
        teamCurturesData={profileReviewData?.data.data.teamCultures}
        workMethodsData={profileReviewData?.data.data.workMethods}
        name={profileData?.data.data.username}
        isUserGetExternalReview={
          isUserGetExternalReviewData?.data.data.alreadyReviewed
        }
      />
      <ProfileReview
        reviewData={profileReviewData?.data.data.comments}
        name={profileData?.data.data.username}
        isLocked={
          !IsTicketUsedData?.data.data.isUsed &&
          profileData?.data.data.userId != loginInfo.data?.userId
        }
        setIsLackModalVisible={setIsLackModalVisible}
        setIsUseModalVisible={setIsUseModalVisible}
        isUserGetExternalReview={
          isUserGetExternalReviewData?.data.data.alreadyReviewed
        }
        isMyProfile={
          (loginInfo?.data?.userId as unknown as string) ==
          (userId as unknown as string)
        }
      />
    </ProfileLayout>
  );
};
const ProfileLayout = styled.div`
  max-width: 122.4rem;
  margin: 0 auto 5rem auto;
`;

export default Profile;
