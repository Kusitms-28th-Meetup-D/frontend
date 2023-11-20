import { useNavigate, useParams } from 'react-router-dom';
import { styled } from 'styled-components';
import useProfile from '../../../hooks/profile/useProfile';
import Button from '../../common/Button';

const ExternalMobileComplete = () => {
  const { userId } = useParams();
  const { profileData } = useProfile(userId);
  const username = profileData?.data.data.username;
  const navigate = useNavigate();

  return (
    <ExternalMobileCompleteContainer>
      <h2>{username}님의 리뷰가 작성되었어요!</h2>

      <p>{username}님의 프로필에 리뷰가 등록되었어요.</p>
      <p>Wanteam에 접속해 나의 프로필도 만들어 볼까요?</p>

      <img
        src={'/assets/images/review/external_mobile_complete.svg'}
        alt={'external_mobile_complete'}
      />
      <ButtonStyle onClick={() => navigate(`/`)}>
        나의 프로필 만들러 가기
      </ButtonStyle>
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
    ${({ theme }) => theme.fonts.bodyXXS};
    color: ${({ theme }) => theme.colors.gray70};
  }
  img {
    width: 21.4rem;
    height: 19.1rem;
    margin: 5rem 0;
  }
`;

const ButtonStyle = styled(Button)`
  padding: 1.5rem 3rem;

  ${({ theme }) => theme.fonts.subtitleL};
`;
