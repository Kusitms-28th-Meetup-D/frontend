import styled from 'styled-components';
import { ReactNode } from 'react';

import closeSrc from '/assets/images/common/closeButton.svg';

interface TwoButtonModalProps {
  children: ReactNode; // 자식 컴포넌트
  leftButton: {
    text: string; // 왼쪽 버튼 텍스트
    onClickFunc: () => void; // 왼쪽버튼 onClick 콜백 함수
  };
  rightButton: {
    text: string; // 오른쪽 버튼 텍스트
    onClickFunc: () => void; // 오른쪽버튼 onClick 콜백 함수
  };
  onCloseClickFunc: () => void; // x버튼 onClick 콜백 함수
  $isModalVisible: boolean; // 모달창이 보여지는지 여부
}

const TwoButtonModal: React.FC<TwoButtonModalProps> = ({
  children,
  leftButton,
  rightButton,
  onCloseClickFunc,
  $isModalVisible,
}) => {
  return (
    <BlurLayout $isModalVisible={$isModalVisible}>
      <ModalContainer>
        <CloseImg src={closeSrc} onClick={onCloseClickFunc} />
        {children}
        <TwoButtonBox>
          <LeftButton onClick={leftButton.onClickFunc}>
            {leftButton.text}
          </LeftButton>
          <RightButton onClick={rightButton.onClickFunc}>
            {rightButton.text}
          </RightButton>
        </TwoButtonBox>
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
  width: 60rem;
  /* height: 36rem; */

  border-radius: 1.2rem;
  border: 1px solid ${({ theme }) => theme.colors.gray20};
  background-color: ${({ theme }) => theme.colors.white};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  justify-content: space-between;

  //모달창을 벗어나지 않음
  overflow: hidden;
`;

const CloseImg = styled.img`
  position: absolute;
  right: 1.5rem;
  top: 1.5rem;
  width: 1.5rem;
  height: 1.5rem;
  cursor: pointer;
`;
const TwoButtonBox = styled.div`
  width: 100%;
  height: 7.5rem;

  ${({ theme }) => theme.fonts.heading5};

  display: flex;
  flex-grow: 0;

  > div {
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;
  }
`;
const LeftButton = styled.div`
  width: 42%;
  background-color: ${({ theme }) => theme.colors.gray20};
  color: ${({ theme }) => theme.colors.gray80};
`;
const RightButton = styled.div`
  width: 58%;
  background-color: ${({ theme }) => theme.colors.primary60};
  color: ${({ theme }) => theme.colors.white};
`;
export default TwoButtonModal;
