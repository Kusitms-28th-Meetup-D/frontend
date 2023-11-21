import styled from 'styled-components';

import { useRecoilState, useRecoilValue } from 'recoil';
import {
  loginInfoState,
  needKakaoReviewModalState,
} from '../../../recoil/atom';

import closeSrc from '/assets/images/common/closeButton.svg';
import kakaoSrc from '/assets/images/common/kakaotalk.svg';
import reviewSrc from '/assets/images/common/kakaoReviewSend.svg';
import { kakao } from '../../login/KakaoLogin';
const NeedKakaoReviewModal = () => {
  const [isModalVisible, setIsModalVisible] = useRecoilState(
    needKakaoReviewModalState,
  );
  const loginUserInfo = useRecoilValue(loginInfoState);
  const handleKakaoMessageSend = () => {
    kakao.Share.sendCustom({
      templateId: 99541,
      templateArgs: {
        name: loginUserInfo.data?.name,
        userId: loginUserInfo.data?.userId,
      },
      // serverCallbackArgs: {
      //   isSendSuccess: 'no', // 사용자 정의 파라미터 설정
      // },
    });
  };
  return (
    <BlurLayout $isModalVisible={isModalVisible}>
      <ModalContainer>
        <CloseImg src={closeSrc} onClick={() => setIsModalVisible(false)} />
        <SendImg src={reviewSrc} />
        <Title>지금 리뷰 요청을 보내보세요!</Title>
        <Subtitle>
          {'함께 활동했던 지인이 리뷰를 작성해주면,\n프로필이 업데이트 됩니다.'}
        </Subtitle>
        <Button onClick={handleKakaoMessageSend}>
          <KakaoImg src={kakaoSrc} />
          카카오톡으로 리뷰 요청하기
        </Button>
      </ModalContainer>
    </BlurLayout>
  );
};

const BlurLayout = styled.div<{ $isModalVisible: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(43, 43, 46, 0.5);
  backdrop-filter: blur(8px);
  color: ${({ theme }) => theme.colors.white};
  z-index: 999;

  display: ${(props) => (props.$isModalVisible ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
`;
const ModalContainer = styled.div`
  position: relative;
  min-width: 60rem;
  /* height: 36rem; */

  border-radius: 1.2rem;
  border: 1px solid ${({ theme }) => theme.colors.gray20};
  background-color: ${({ theme }) => theme.colors.white};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;

  //모달창을 벗어나지 않음
  overflow: hidden;

  padding: 7rem;
`;

const CloseImg = styled.img`
  position: absolute;
  right: 1.5rem;
  top: 1.5rem;
  width: 1.5rem;
  height: 1.5rem;
  cursor: pointer;
`;
const SendImg = styled.img`
  width: 20rem;
`;
const Title = styled.div`
  ${({ theme }) => theme.fonts.heading2_1};
  color: ${({ theme }) => theme.colors.gray90};
`;
const Subtitle = styled.div`
  ${({ theme }) => theme.fonts.bodyXL};
  color: ${({ theme }) => theme.colors.gray90};
  white-space: break-spaces;
  text-align: center;
  margin-bottom: 2rem;
`;
const Button = styled.div`
  position: relative;
  width: 39rem;
  height: 6rem;

  ${({ theme }) => theme.fonts.heading5};

  background-color: #fee500;
  color: ${({ theme }) => theme.colors.gray100};
  border-radius: 0.8rem;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
`;
const KakaoImg = styled.img`
  position: absolute;
  width: 2.3rem;

  left: 3rem;
`;

export default NeedKakaoReviewModal;
