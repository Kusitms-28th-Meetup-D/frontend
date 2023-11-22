import { useParams } from 'react-router-dom';
import { styled } from 'styled-components';
import useProfile from '../../../hooks/profile/useProfile';

const ExternalMobileComplete = () => {
  const { userId } = useParams();
  const { profileData } = useProfile(userId);
  const username = profileData?.data.data.username;

  return (
    <ExternalMobileCompleteContainer>
      <h2>리뷰 작성을 완료했어요!</h2>

      <p>소중한 리뷰를 작성해주셔서 감사합니다.</p>
      <p>{username} 님이 멋진 팀을 구하는 데 큰 도움이 될 거예요!</p>

      <img
        src={'/assets/images/review/external_mobile_complete.svg'}
        alt={'external_mobile_complete'}
      />
    </ExternalMobileCompleteContainer>
  );
};

export default ExternalMobileComplete;

const ExternalMobileCompleteContainer = styled.div`
  background: ${({ theme }) => theme.colors.gray5};
  width: 100%;
  height: 100vh;
  padding: 5rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    ${({ theme }) => theme.fonts.heading6};
    color: ${({ theme }) => theme.colors.gray90};
  }
  h2 {
    ${({ theme }) => theme.fonts.heading5};
    color: ${({ theme }) => theme.colors.primary60};
    margin-bottom: 1.5rem;
  }
  p {
    ${({ theme }) => theme.fonts.bodyXS};
    color: ${({ theme }) => theme.colors.gray70};
  }
  img {
    width: 21.4rem;
    height: 19.1rem;
    margin: 5rem 0;
  }
`;
