import { useNavigate, useParams } from 'react-router-dom';
import useProfile from '../../../hooks/profile/useProfile';
import { styled } from 'styled-components';
import MobileTendencyBox from './MobileTendencyBox';
import { question2 } from '../../../constants/review';

const ExternalMobileTendency2 = () => {
  const { userId } = useParams();
  const { profileData } = useProfile(userId);
  const username = profileData?.data.data.username;
  const navigate = useNavigate();

  return (
    <>
      <Progress>
        <div></div>
      </Progress>

      <ExternalMobileTendency2Container>
        <h1>{username} 님은 어떤 성향이었나요?</h1>
        <p>{username} 님이 팀 활동에서 보여주었던 모습을 떠올리며,</p>
        <p>업무 성향 키워드를 문항별로 1개씩 골라주세요!</p>

        <TendencyBoxLayout>
          <MobileTendencyBox question={question2} />
        </TendencyBoxLayout>

        <ButtonBox>
          <img
            src={'/assets/images/common/left_button.svg'}
            alt={'left_button'}
            onClick={() => navigate(-1)}
          />
          <img
            src={'/assets/images/common/right_button.svg'}
            alt={'right_button'}
            onClick={() =>
              navigate(`/review/external/mobile/${userId}/oneLine`)
            }
          />
        </ButtonBox>
      </ExternalMobileTendency2Container>
    </>
  );
};

export default ExternalMobileTendency2;

const Progress = styled.div`
  width: 100%;
  height: 0.8rem;
  background: ${({ theme }) => theme.colors.primary20};

  div {
    width: 75%;
    height: 100%;
    background: ${({ theme }) => theme.colors.primary60};
  }
`;

const ExternalMobileTendency2Container = styled.div`
  background: ${({ theme }) => theme.colors.gray5};
  width: 100%;
  height: 100vh;
  padding: 4rem 5rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    ${({ theme }) => theme.fonts.subtitleM};
    color: ${({ theme }) => theme.colors.gray90};
    margin-bottom: 0.5rem;
  }
  p {
    ${({ theme }) => theme.fonts.bodyXS};
    color: ${({ theme }) => theme.colors.gray70};
  }
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  position: absolute;
  bottom: 2rem;
  padding: 0 2rem;

  img {
    width: 5.6rem;
    height: 5.6rem;
  }
`;

const TendencyBoxLayout = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 4rem;
`;
