import styled from 'styled-components';

import loginSrc from '/assets/images/common/login-modal.svg';
import OneSquareButtonModal from '../OneSquareButtonModal';
import { useNavigate } from 'react-router-dom';

interface NeedLoginModalProps {
  isModalVisible: boolean;
  setIsModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  currTicketAmount?: number;
}
const NeedLoginModal: React.FC<NeedLoginModalProps> = ({
  isModalVisible,
  setIsModalVisible,
}) => {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    // handleUseTicket.mutate();
    // setIsModalVisible(false);
    // window.location.reload();
    setIsModalVisible(false);
    navigate('./login');
  };
  const handleCloseButtonClick = () => {
    setIsModalVisible(false);
  };

  return (
    <OneSquareButtonModal
      button={{
        text: '로그인 하러 가기',
        onClickFunc: handleButtonClick,
      }}
      $isModalVisible={isModalVisible}
      onCloseClickFunc={handleCloseButtonClick}
    >
      <LoginModalInner>
        <LoginModalimg src={loginSrc} />

        <LoginModalTitle>비회원은 프로필을 볼 수 없어요</LoginModalTitle>
        <LoginModalContent>
          지금 로그인하고 팀원들의 프로필을 자유롭게 둘러보세요!
        </LoginModalContent>
      </LoginModalInner>
    </OneSquareButtonModal>
  );
};
const LoginModalInner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.8rem;

  padding: 5rem;
`;
const LoginModalimg = styled.img`
  width: 12.7rem;
`;
const LoginModalTitle = styled.div`
  ${({ theme }) => theme.fonts.heading4};
  color: ${({ theme }) => theme.colors.primary60};
`;
const LoginModalContent = styled.div`
  ${({ theme }) => theme.fonts.bodyL};
  color: ${({ theme }) => theme.colors.gray90};
`;
export default NeedLoginModal;
