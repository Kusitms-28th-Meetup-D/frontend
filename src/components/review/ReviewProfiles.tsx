import { styled } from 'styled-components';
import ReviewProfile from './ReviewProfile';
import { useEffect, useState } from 'react';
import { useReviewUsers } from '../../hooks/review/useReviewUsers';
import { useParams } from 'react-router';
import { useSetRecoilState } from 'recoil';
import { selectedNameAtom } from '../../recoil/review';
import { userReviewResponse } from '../../interface/Review';

const ReviewProfiles = () => {
  const { teamId } = useParams();
  const { reviewUsers } = useReviewUsers(Number(teamId));
  const [activeProfileId, setActiveProfileId] = useState(0);
  const setSelectedName = useSetRecoilState(selectedNameAtom);

  useEffect(() => {
    if (reviewUsers && reviewUsers.data.userReviewResponseDtoList.length > 0) {
      const initialProfile = reviewUsers.data.userReviewResponseDtoList[0];
      setActiveProfileId(initialProfile.teamMemberId);
      setSelectedName(initialProfile.teamMemberName);
    }
  }, [reviewUsers]);

  const handleProfileClick = (user: userReviewResponse) => {
    setActiveProfileId(user.teamMemberId);
    setSelectedName(user.teamMemberName);
  };

  return (
    <ProfileLayout>
      {reviewUsers?.data.userReviewResponseDtoList.map((user) => (
        <ReviewProfile
          key={user.teamMemberId}
          user={user}
          isSelected={user.teamMemberId === activeProfileId}
          onClick={() => handleProfileClick(user)}
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
