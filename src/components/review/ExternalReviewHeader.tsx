import { styled } from 'styled-components';
import Title from '../common/Title';
import ReviewProfile from './ReviewProfile';
import useProfile from '../../hooks/profile/useProfile';
import { useParams } from 'react-router-dom';

const ExternalReviewHeader = () => {
  const { userId } = useParams();
  const { profileData } = useProfile(userId);

  return (
    <HeaderLayout>
      <HeaderContent>
        {profileData && (
          <>
            <HeaderLeft>
              <HeaderTitle>
                <Title>Wanteam의 회원님들에게</Title>
                <h1>{profileData.data.data.username}님을 추천해주세요!</h1>
              </HeaderTitle>
              <HeaderSubTitle>
                <p>
                  남겨주신 추천사는 {profileData.data.data.username}님의
                  프로필에 반영됩니다.
                </p>
                <p>
                  {profileData.data.data.username} 님이 멋진 팀원을 구할 수
                  있도록 도와주세요!
                </p>
              </HeaderSubTitle>
            </HeaderLeft>
            <HeaderRight>
              <ReviewProfile
                id={profileData.data.data.userId}
                key={profileData.data.data.userId}
                src={profileData.data.data.profile_image}
                name={profileData.data.data.username}
                isSelected={true}
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
