import styled from 'styled-components';
import { useState } from 'react';
import { useRecoilValue } from 'recoil';

import bgSrc from '/assets/images/request/request-bg.png';
import starSrc from '/assets/images/common/star.svg';
import kakaotalkSrc from '/assets/images/request/request-kakaotalk.svg';
import OneButtonModal from '../../components/common/OneButtonModal';

import { kakao } from '../../components/login/KakaoLogin';
import { loginInfoState } from '../../recoil/atom';
import JoinCompleteModal from '../../components/join/JoinCompleteModal';
import ModalInner from '../../components/request/ModalInner';
const TITLE = '매력적인 프로필 완성을 위해 리뷰를 요청해보세요.';
const CONTENT = [
  '나와 딱 맞는 탁월한 팀원을 한번에 찾고 싶다면,\n나보다 나를 더 잘 아는 동료에게 리뷰를 요청해 멋진 프로필을 완성하세요.',
  '함께했던 동료가 남겨주는 나의',
  '가\n나를 꼭 함께하고 싶은 팀원으로 만들어줍니다.',
  '같이 동아리, 학회, 공모전 등 팀 프로젝트에 참여했던 지인에게\n아래 링크를 공유해 리뷰를 받아주세요!',
];
const Request = () => {
  const [isPreviewModalVisible, setIsPreviewModalVisible] = useState(false);
  const [isJoinModalVisible, setIsJoinModalVisible] = useState(false);
  const handleClick = () => {
    setIsPreviewModalVisible(true);
  };
  const handleButtonClick = () => {
    setIsPreviewModalVisible(false);
  };

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
    <RequestLayout>
      <JoinCompleteModal $isModalVisible={isJoinModalVisible} />

      <OneButtonModal
        $isModalVisible={isPreviewModalVisible}
        button={{
          text: '닫기',
          onClickFunc: handleButtonClick,
        }}
        onCloseClickFunc={handleButtonClick}
      >
        <ModalInner />
      </OneButtonModal>
      <TextContainer>
        <RequestBackGround src={bgSrc} />
        <TextTitle>
          <StarImg src={starSrc} />
          {TITLE}
        </TextTitle>
        <TextContentBox>
          <TextContent>{CONTENT[0]}</TextContent>
          <TextContent>
            {CONTENT[1]}
            <span> 장점</span>과<span> 성향</span>,<span> 한 줄 리뷰</span>
            {CONTENT[2]}
          </TextContent>
          <TextContent>{CONTENT[3]}</TextContent>
        </TextContentBox>
        <KakaoTalkPreview onClick={handleClick}>
          {'    발송 메세지 예시 미리보기    '}
        </KakaoTalkPreview>
        <KakaoTalkSendImg src={kakaotalkSrc} onClick={handleKakaoMessageSend} />
        <Button
          $isActive={true}
          onClick={() => {
            setIsJoinModalVisible(true);
          }}
        >
          리뷰를 보냈어요 →
        </Button>
      </TextContainer>
    </RequestLayout>
  );
};
const RequestLayout = styled.div`
  position: relative;
  width: 100%;
  min-height: 100%;

  display: flex;
  justify-content: center;
  /* align-items: center; */

  /* background: url(${bgSrc}) right bottom no-repeat; */
  /* z-index: 20; */

  padding: 5rem 0;
`;
const RequestBackGround = styled.img`
  position: absolute;

  width: 50%;
  right: 0;
  bottom: 0;

  z-index: 10;
`;
const TextContainer = styled.div`
  width: 80.8rem;
  /* height: 70rem; */

  border: 1px solid #3b3ef1;
  border-radius: 2.4rem;
  background-color: rgba(239, 239, 253, 0.2);
  //backdrop-filter: blur(12px); //이자식 position 문제일으킴

  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  gap: 2rem;

  padding: 2rem 0;
  /* margin: 5rem 0; */
`;
const StarImg = styled.img`
  height: 3rem;
  width: 3rem;
`;
const TextTitle = styled.div`
  ${({ theme }) => theme.fonts.heading4};
  color: ${({ theme }) => theme.colors.gray90};
  /* width: 100%; */

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  //가운데 정렬에서 조금 옮기기
  margin: 3rem 10rem 3rem 0;
`;
const TextContentBox = styled.div`
  ${({ theme }) => theme.fonts.bodyXL};

  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
  gap: 3rem;

  margin-bottom: 5rem;
  span {
    ${({ theme }) => theme.fonts.heading5};
  }
`;
const TextContent = styled.div`
  color: ${({ theme }) => theme.colors.gray90};

  white-space: break-spaces;
`;
const KakaoTalkPreview = styled.div`
  position: relative;
  ${({ theme }) => theme.fonts.bodyXL};
  color: ${({ theme }) => theme.colors.primary90};

  /* text-decoration: underline; */
  border-bottom: 1px solid ${({ theme }) => theme.colors.primary90};

  /* white-space: nowrap; */
  cursor: pointer;
  z-index: 30;
`;
const KakaoTalkSendImg = styled.img`
  position: relative;
  ${({ theme }) => theme.fonts.bodyXL};
  color: ${({ theme }) => theme.colors.primary90};

  width: 39.1rem;
  height: 5.8rem;

  z-index: 20;
  cursor: pointer;
`;
const Button = styled.button<{ $isActive: boolean }>`
  position: relative;
  width: 25.5rem;
  height: 6.4rem;

  border-radius: 3.2rem;
  border: 1px solid ${(props) => props.theme.colors.primary20};

  ${(props) => props.theme.fonts.buttonL};
  background-color: ${(props) => props.theme.colors.primary60};
  color: ${(props) => props.theme.colors.white};

  z-index: 40;
  cursor: ${(props) => (props.$isActive ? 'pointer' : 'default')};
`;

export default Request;
