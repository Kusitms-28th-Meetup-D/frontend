import { useNavigate, useParams } from 'react-router-dom';
import { styled } from 'styled-components';
import useProfile from '../../../hooks/profile/useProfile';
import Button from '../../common/Button';

const ExternalMobileMain = () => {
  const { userId } = useParams();
  const { profileData } = useProfile(userId);
  const username = profileData?.data.data.username;
  const navigate = useNavigate();

  return (
    <ExternalMobileMainContainer>
      <h1>Wanteam의 회원님들에게</h1>
      <h2>{username}님을 추천해주세요!</h2>

      <p>남겨주신 리뷰는 {username}님의 프로필에 반영됩니다.</p>
      <p>{username} 님이 멋진 팀원을 구할 수 있도록 도와주세요!</p>

      <img
        src={'/assets/images/review/external_mobile.svg'}
        alt={'external_mobile_main'}
      />
      <ButtonStyle
        onClick={() => navigate(`/review/external/mobile/${userId}/keyword`)}
      >
        리뷰 작성 시작하기
      </ButtonStyle>
    </ExternalMobileMainContainer>
  );
};

export default ExternalMobileMain;

const ExternalMobileMainContainer = styled.div`
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
    ${({ theme }) => theme.fonts.bodyXXS};
    color: ${({ theme }) => theme.colors.gray70};
  }
  img {
    width: 19.3rem;
    height: 14rem;
    margin: 5rem 0;
  }
`;

const ButtonStyle = styled(Button)`
  padding: 1.5rem 3rem;

  ${({ theme }) => theme.fonts.subtitleL};
`;
