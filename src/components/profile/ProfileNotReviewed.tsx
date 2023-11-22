import styled from 'styled-components';

import questionmarkSrc from '/assets/images/common/questionmark.svg';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { loginInfoState, needKakaoReviewModalState } from '../../recoil/atom';
import { useParams } from 'react-router-dom';

const ProfileNotReviewed = () => {
  const { userId } = useParams();
  const loginInfo = useRecoilValue(loginInfoState);

  const active = userId == (loginInfo && loginInfo.data?.userId);

  const setKakaoReviewModalVisible = useSetRecoilState(
    needKakaoReviewModalState,
  );
  return (
    <>
      {active ? (
        <Layout>
          <QuestionmarkImg src={questionmarkSrc} />
          <Subtitle>
            {'아직 받은 리뷰가 없어요!\n리뷰를 요청해 프로필을 채워보세요.'}
          </Subtitle>
          <Button onClick={() => setKakaoReviewModalVisible(true)}>
            지인에게 리뷰 요청하기 →
          </Button>
        </Layout>
      ) : (
        <Layout>
          <QuestionmarkImg src={questionmarkSrc} />
          <Subtitle>{'아직 받은 리뷰가 없어요!'}</Subtitle>
        </Layout>
      )}
    </>
  );
};
const Layout = styled.div`
  width: 100%;
  height: 31rem;

  border-radius: 1rem;
  border: 1px solid ${(props) => props.theme.colors.gray20};
  background-color: ${(props) => props.theme.colors.gray5};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;
const QuestionmarkImg = styled.img`
  width: 9rem;
`;
const Subtitle = styled.div`
  ${({ theme }) => theme.fonts.subtitleL};
  white-space: break-spaces;

  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
const Button = styled.button`
  width: 31.2rem;
  height: 6.4rem;

  ${({ theme }) => theme.fonts.buttonL};
  border: 1px solid ${(props) => props.theme.colors.primary20};
  border-radius: 3.2rem;
  background-color: ${(props) => props.theme.colors.primary60};
  color: ${(props) => props.theme.colors.white};
`;
export default ProfileNotReviewed;
