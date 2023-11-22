import { styled } from 'styled-components';

interface ExternalReviewProfileProps {
  username: string;
  profile: string;
}

const ExternalReviewProfile = ({
  username,
  profile,
}: ExternalReviewProfileProps) => {
  return (
    <ProfileLayout>
      <ProfileBox>
        <Profile src={profile} />
        <ProfileBackground />
      </ProfileBox>
      <ProfileName>{username}</ProfileName>
    </ProfileLayout>
  );
};

export default ExternalReviewProfile;

const ProfileLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProfileBox = styled.div`
  position: relative;
`;

const Profile = styled.img`
  width: 15.4rem;
  height: 15.4rem;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 2rem;
  border: 3px solid ${({ theme }) => theme.colors.primary60};
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

const ProfileName = styled.div`
  ${({ theme }) => theme.fonts.subtitleXXL};
  color: ${({ theme }) => theme.colors.primary60};
`;
