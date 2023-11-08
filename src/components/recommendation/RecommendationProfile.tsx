import { css, styled } from 'styled-components';

interface ProfileProps {
  id: number;
  src: string;
  name: string;
  active: boolean;
  onClick: (id: number) => void;
}

const RecommendationProfile = ({
  id,
  src,
  name,
  active,
  onClick,
}: ProfileProps) => {
  const handleProfileClick = () => {
    onClick(id);
  };
  return (
    <ProfileLayout onClick={handleProfileClick}>
      <ProfileBox>
        <Profile src={src} active={active} />
        <ProfileBackground />
      </ProfileBox>
      <ProfileName active={active}>{name}</ProfileName>
    </ProfileLayout>
  );
};

export default RecommendationProfile;

const ProfileLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;

const ProfileBox = styled.div`
  position: relative;
`;

const Profile = styled('img').withConfig({
  shouldForwardProp: (prop) => !['active'].includes(prop),
})<{ active: boolean }>`
  width: 15.4rem;
  height: 15.4rem;
  border-radius: 50%;
  border: none;
  object-fit: cover;
  margin-bottom: 2rem;

  ${(props) =>
    props.active &&
    css`
      border: 3px solid ${({ theme }) => theme.colors.primary60};
    `}
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

const ProfileName = styled('div').withConfig({
  shouldForwardProp: (prop) => !['active'].includes(prop),
})<{ active: boolean }>`
  ${({ theme }) => theme.fonts.bodyL};
  color: ${({ theme }) => theme.colors.gray90};

  ${(props) =>
    props.active &&
    css`
      ${({ theme }) => theme.fonts.heading4};
      color: ${({ theme }) => theme.colors.primary60};
    `}
`;
