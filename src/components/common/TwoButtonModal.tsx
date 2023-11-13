import styled from 'styled-components';

import closeSrc from '/assets/images/common/closeButton.svg';
const TwoButtonModal = ({ chlidren }) => {
  const handleClick = () => {};
  return (
    <BlurLayout>
      <ModalContainer>
        <CloseImg src={closeSrc} onClick={handleClick} />
        {chlidren}
        <TwoButtonBox>
          <LeftButton></LeftButton>
          <RightButton></RightButton>
        </TwoButtonBox>
      </ModalContainer>
    </BlurLayout>
  );
};
const BlurLayout = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(43, 43, 46, 0.5);
  backdrop-filter: blur(8px);
  color: ${({ theme }) => theme.colors.white};
  z-index: 999;

  display: flex;
  justify-content: center;
  align-items: center;
`;
const ModalContainer = styled.div`
  position: relative;
  width: 60rem;
  height: 36rem;

  border-radius: 1.2rem;
  border: 1px solid ${({ theme }) => theme.colors.gray20};
  background-color: ${({ theme }) => theme.colors.white};

  display: flex;
  flex-direction: column;

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
`;
const LeftButton = styled.div`
  width: 42%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.gray20};
  color: ${({ theme }) => theme.colors.gray80};
`;
const RightButton = styled.div`
  width: 58%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.primary60};
  color: ${({ theme }) => theme.colors.white};
`;
export default TwoButtonModal;
