import { styled } from 'styled-components';
import { userReviewResponse } from '../../interface/Review';

interface ReviewProfileProps {
  user: userReviewResponse;
  isSelected: boolean;
  onClick?: (profileId: number) => void;
}

const ReviewProfile = ({ user, isSelected, onClick }: ReviewProfileProps) => {
  return (
    <ProfileLayout
      onClick={() => {
        onClick && onClick(user.teamMemberId);
      }}
    >
      <ProfileBox>
        <Profile src={user.teamMemberImage} $isSelected={isSelected} />
        <ProfileBackground />
      </ProfileBox>
      <ProfileName $isSelected={isSelected}>{user.teamMemberName}</ProfileName>
    </ProfileLayout>
  );
};

export default ReviewProfile;

const ProfileLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;

const ProfileBox = styled.div`
  position: relative;
`;

const Profile = styled.img<{ $isSelected: boolean }>`
  width: 15.4rem;
  height: 15.4rem;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 2rem;
  border: ${(props) =>
    props.$isSelected ? `3px solid ${props.theme.colors.primary60}` : 'none'};
`;

const ProfileBackground = styled.div`
  width: 15.4rem;
  height: 15.4rem;
  border-radius: 50%;
  background: linear-gradient(
    90deg,
    rgba(115, 118, 240, 0.35) 0%,
    rgba(59, 62, 241, 0.35) 100%
  );
  position: absolute;
  top: 0;
  right: -1.1rem;
  z-index: -1;
`;

const ProfileName = styled.div<{ $isSelected: boolean }>`
  ${(props) =>
    props.$isSelected ? props.theme.fonts.heading4 : props.theme.fonts.bodyL};
  color: ${(props) =>
    props.$isSelected
      ? props.theme.colors.primary60
      : props.theme.colors.gray90};
`;
