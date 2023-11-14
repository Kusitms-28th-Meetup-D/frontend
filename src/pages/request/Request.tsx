import styled from 'styled-components';
import { useState } from 'react';

import bgSrc from '/assets/images/request/request-bg.png';
import starSrc from '/assets/images/common/star.svg';
import kakaotalkSrc from '/assets/images/request/request-kakaotalk.svg';
import KakaoPreviewModal from '../../components/request/KakaoPreviewModal';
const TITLE = '매력적인 프로필 완성을 위해 추천사를 요청해보세요.';
const CONTENT = [
  '나와 딱 맞는 탁월한 팀원을 한번에 찾고 싶다면,\n나보다 나를 더 잘 아는 동료에게 추천사를 요청해 멋진 프로필을 완성하세요.',
  '함께했던 동료가 남겨주는 나의',
  '가\n나를 꼭 함께하고 싶은 팀원으로 만들어줍니다.',
  '같이 동아리, 학회, 공모전 등 팀 프로젝트에 참여했던 지인에게\n아래 링크를 공유해 추천사를 받아주세요!',
];
const Request = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const handleClick = () => {
    setIsModalVisible(true);
  };
  return (
    <RequestLayout>
      <KakaoPreviewModal $isModalVisible={isModalVisible} />
      <RequestBackGround src={bgSrc} />
      <TextContainer>
        <TextTitle>
          <StarImg src={starSrc} />
          {TITLE}
        </TextTitle>
        <TextContentBox>
          <TextContent>{CONTENT[0]}</TextContent>
          <TextContent>
            {CONTENT[1]}
            <span> 역량</span>과<span> 성향</span>,<span> 한 줄 추천사</span>
            {CONTENT[2]}
          </TextContent>
          <TextContent>{CONTENT[3]}</TextContent>
        </TextContentBox>
        <KakaoTalkPreview onClick={handleClick}>
          발송 메세지 예시 미리보기
        </KakaoTalkPreview>
        <KakaoTalkImg src={kakaotalkSrc} />
        <Button $isActive={true}>추천사를 보냈어요 →</Button>
      </TextContainer>
    </RequestLayout>
  );
};
const RequestLayout = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
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
  height: 70rem;

  border: 1px solid #3b3ef1;
  border-radius: 2.4rem;
  background-color: rgba(239, 239, 253, 0.2);
  backdrop-filter: blur(12px);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;
const StarImg = styled.img`
  height: 3rem;
  width: 3rem;
`;
const TextTitle = styled.div`
  ${({ theme }) => theme.fonts.heading4};
  color: ${({ theme }) => theme.colors.gray90};

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
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
  ${({ theme }) => theme.fonts.bodyXL};
  color: ${({ theme }) => theme.colors.primary90};

  text-decoration: underline;

  cursor: pointer;
`;
const KakaoTalkImg = styled.img`
  ${({ theme }) => theme.fonts.bodyXL};
  color: ${({ theme }) => theme.colors.primary90};

  width: 39.1rem;
  height: 5.8rem;

  z-index: 19;
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

  z-index: 19;
  cursor: ${(props) => (props.$isActive ? 'pointer' : 'default')};
`;

export default Request;
