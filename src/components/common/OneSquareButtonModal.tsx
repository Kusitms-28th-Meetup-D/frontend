import styled from 'styled-components';
import { ReactNode } from 'react';

import closeSrc from '/assets/images/common/closeButton.svg';

interface OneSquareButtonModalProps {
  children: ReactNode; // 자식 컴포넌트
  button: {
    text: string; // 버튼 텍스트
    onClickFunc: () => void; // 버튼 onClick 콜백 함수
  };
  onCloseClickFunc: () => void; // x버튼 onClick 콜백 함수
  $isModalVisible: boolean; // 모달창이 보여지는지 여부
}
const OneSquareButtonModal: React.FC<OneSquareButtonModalProps> = ({
  children,
  button,
  onCloseClickFunc,
  $isModalVisible,
}) => {
  return (
    <BlurLayout $isModalVisible={$isModalVisible}>
      <ModalContainer>
        <CloseImg src={closeSrc} onClick={onCloseClickFunc} />
        {children}

        <Button onClick={button.onClickFunc}>{button.text}</Button>
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

  //모달창을 벗어나지 않음
  overflow: hidden;

  /* padding: 3rem; */
`;

const CloseImg = styled.img`
  position: absolute;
  right: 1.5rem;
  top: 1.5rem;
  width: 1.5rem;
  height: 1.5rem;
  cursor: pointer;
`;
const Button = styled.div`
  width: 100%;
  height: 7.5rem;

  ${({ theme }) => theme.fonts.heading5};

  display: flex;
  flex-grow: 0;

  background-color: ${({ theme }) => theme.colors.primary60};
  color: ${({ theme }) => theme.colors.white};

  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export default OneSquareButtonModal;
