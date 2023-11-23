import { styled } from 'styled-components';
import ReviewProfile from './ReviewProfile';
import { useEffect, useState } from 'react';
import { useReviewUsers } from '../../hooks/review/useReviewUsers';
import { useParams } from 'react-router';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { selectedNameAtom } from '../../recoil/review';
import { userReviewResponse } from '../../interface/Review';
import { reviewMemberIndexState } from '../../recoil/atom';

const ReviewProfiles = () => {
  const { teamId } = useParams();
  const { reviewUsers } = useReviewUsers(Number(teamId));
  const [activeProfileId, setActiveProfileId] = useState(0);
  const setSelectedName = useSetRecoilState(selectedNameAtom);

  const [reviewMemberIndex, setReviewMemberIndex] = useRecoilState(
    reviewMemberIndexState,
  );
  reviewMemberIndex;
  // console.log('현재 리뷰중인 index :', reviewMemberIndex);

  useEffect(() => {
    if (reviewUsers && reviewUsers.data.userReviewResponseDtoList.length > 0) {
      const initialProfile = reviewUsers.data.userReviewResponseDtoList[0];
      setActiveProfileId(initialProfile.teamMemberId);
      setSelectedName(initialProfile.teamMemberName);
    }
  }, [reviewUsers]);

  const handleProfileClick = (user: userReviewResponse, index: number) => {
    setActiveProfileId(user.teamMemberId);
    setSelectedName(user.teamMemberName);
    setReviewMemberIndex(index);
  };

  return (
    <ProfileLayout>
      {reviewUsers?.data.userReviewResponseDtoList.map((user, index) => (
        <ReviewProfile
          key={user.teamMemberId}
          user={user}
          isSelected={user.teamMemberId === activeProfileId}
          onClick={() => handleProfileClick(user, index)}
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
