import { styled } from 'styled-components';
import Button from '../../components/common/Button';
import { useNavigate } from 'react-router-dom';

const ExternalReviewComplete = () => {
  const navigate = useNavigate();

  return (
    <CompleteContainer>
      <CompleteImg
        src={'/assets/images/review/external_review_complete.svg'}
        alt={'완료 이미지'}
      />
      <CompleteRight>
        <h1>리뷰 작성을 완료했어요</h1>
        <div>
          <p>소중한 리뷰를 작성해주셔서 감사합니다.</p>
          <p>님이 멋진 팀원들을 구하는 데 큰 도움이 될 거예요!</p>
        </div>
        <div>
          <h2>원하는 팀원 만나고 공모전･대회에서 수상하고 싶다면?</h2>
          <ButtonBox>
            <ButtonStyle onClick={() => navigate('/')}>
              Wanteam 둘러보기
              <img
                src={'/assets/images/common/right_arrow.svg'}
                alt={'화살표'}
              />
            </ButtonStyle>
          </ButtonBox>
        </div>
      </CompleteRight>
    </CompleteContainer>
  );
};

export default ExternalReviewComplete;

const CompleteContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5rem;
  padding: 8rem 0;
`;

const CompleteImg = styled.img`
  width: 39rem;
  height: 34.8rem;
`;

const CompleteRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  gap: 2rem;

  h1 {
    ${({ theme }) => theme.fonts.heading2_1};
    color: ${({ theme }) => theme.colors.gray90};
  }
  p {
    ${({ theme }) => theme.fonts.bodyXL};
    color: ${({ theme }) => theme.colors.gray90};
  }
  h2 {
    ${({ theme }) => theme.fonts.subtitleXL};
    color: ${({ theme }) => theme.colors.primary60};
    margin-bottom: 2rem;
  }
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: left;
`;

const ButtonStyle = styled(Button)`
  display: flex;
  justify-content: center;
  padding: 1.4rem 3rem;
`;
