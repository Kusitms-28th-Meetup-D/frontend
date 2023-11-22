import { styled } from 'styled-components';
import Title from '../../common/Title';
import ExternalReviewProfile from './ExternalReviewProfile';
import { ProfileData } from '../../../interface/Profile';

interface ExternalReviewHeaderProps {
  profileData?: ProfileData;
}

const ExternalReviewHeader = ({ profileData }: ExternalReviewHeaderProps) => {
  return (
    <HeaderLayout>
      <HeaderContent>
        {profileData && (
          <>
            <HeaderLeft>
              <HeaderTitle>
                <Title>Wanteam의 회원님들에게</Title>
                <h1>{profileData.username} 님을 추천해주세요!</h1>
              </HeaderTitle>
              <HeaderSubTitle>
                <p>
                  남겨주신 리뷰는 {profileData.username} 님의 프로필에
                  반영됩니다.
                </p>
                <p>
                  {profileData.username} 님이 멋진 팀원을 구할 수 있도록
                  도와주세요!
                </p>
              </HeaderSubTitle>
            </HeaderLeft>
            <HeaderRight>
              <ExternalReviewProfile
                username={profileData.username}
                profile={profileData.profile_image}
              />
            </HeaderRight>
          </>
        )}
      </HeaderContent>
    </HeaderLayout>
  );
};

export default ExternalReviewHeader;

const HeaderLayout = styled.div`
  display: flex;
  justify-content: center;
  background: ${({ theme }) => theme.colors.primary10};
  padding: 6rem 0;
`;

const HeaderContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 122.4rem;
  z-index: 1;
`;

const HeaderLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const HeaderRight = styled.div`
  margin-right: 12rem;
`;

const HeaderTitle = styled.div`
  position: relative;
  ${({ theme }) => theme.fonts.heading4};
  color: ${({ theme }) => theme.colors.gray90};

  h1 {
    ${({ theme }) => theme.fonts.heading3};
    color: ${({ theme }) => theme.colors.primary60};
    margin-bottom: 1rem;
  }
`;

const HeaderSubTitle = styled.div`
  p {
    ${({ theme }) => theme.fonts.bodyL};
    color: ${({ theme }) => theme.colors.gray90};
  }
`;
