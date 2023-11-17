import { useNavigate } from 'react-router-dom';
import ProfileTicketLackInner from './ProfileTicketUseInner';
import TwoButtonModal from '../../common/TwoButtonModal';

interface ProfileTicketUseModalProps {
  isModalVisible: boolean;
  setIsModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  currTicketAmount?: number;
}
const ProfileTicketUseModal: React.FC<ProfileTicketUseModalProps> = ({
  isModalVisible,
  setIsModalVisible,
  currTicketAmount,
}) => {
  const navigate = useNavigate();
  const handleLeftButtonClick = () => {
    setIsModalVisible(false);
  };
  const handleRightButtonClick = () => {
    navigate('/payment/charge');
  };
  const handleCloseButtonClick = () => {
    setIsModalVisible(false);
  };

  return (
    <TwoButtonModal
      leftButton={{
        text: '취소',
        onClickFunc: handleLeftButtonClick,
      }}
      rightButton={{
        text: '열람하기',
        onClickFunc: handleRightButtonClick,
      }}
      $isModalVisible={isModalVisible}
      onCloseClickFunc={handleCloseButtonClick}
    >
      <ProfileTicketLackInner currTicketAmount={currTicketAmount} />
    </TwoButtonModal>
  );
};
export default ProfileTicketUseModal;
