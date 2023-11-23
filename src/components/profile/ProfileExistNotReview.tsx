import styled from 'styled-components';
import reviewSrc from '/assets/images/common/review.svg';
import { useNavigate, useParams } from 'react-router-dom';
const ProfileExistNotReview = ({ hasButton }: { hasButton: boolean }) => {
  const navigate = useNavigate();
  const { userId } = useParams();
  return (
    <Layout>
      {hasButton && (
        <Container>
          <Img src={reviewSrc} />
          <TextBox>
            <Title>팀원들의 리뷰를 작성하셨나요?</Title>
            <Content>
              {
                'Wanteam에서 함께 활동한 팀원들의 리뷰를 모두 작성하기 전까지\n새로 받은 추천사는 반영되지 않아요.'
              }
            </Content>
            <MyButton onClick={() => navigate(`/myteam/${userId}/end`)}>
              리뷰 작성하기
            </MyButton>
          </TextBox>
        </Container>
      )}
    </Layout>
  );
};
const Layout = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.7);

  backdrop-filter: blur(8px);
  z-index: 2;

  display: flex;
  justify-content: center;
`;
const Container = styled.div`
  display: flex;
  gap: 6rem;
`;
const Img = styled.img`
  width: 21.8rem;
  height: 21.8rem;
`;
const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
const Title = styled.div`
  ${(props) => props.theme.fonts.heading3};
  color: ${(props) => props.theme.colors.gray90};
`;

const Content = styled.div`
  ${(props) => props.theme.fonts.subtitleL};
  color: ${(props) => props.theme.colors.primary60};
  white-space: break-spaces;
`;
const MyButton = styled.div`
  width: 22rem;
  height: 6.4rem;

  display: flex;
  justify-content: center;
  align-items: center;

  background: ${({ theme }) => theme.colors.primary60};
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.subtitleL};
  border-radius: 3.2rem;

  cursor: pointer;

  margin: 1rem 0;
`;
export default ProfileExistNotReview;
