import { useNavigate } from 'react-router-dom';
import ProfileTicketLackInner from './ProfileTicketLackInner';
import TwoButtonModal from '../../common/TwoButtonModal';

interface ProfileTicketLackModalProps {
  isModalVisible: boolean;
  setIsModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  currTicketAmount?: number;
}
const ProfileTicketLackModal: React.FC<ProfileTicketLackModalProps> = ({
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
        text: '티켓 충전하기',
        onClickFunc: handleRightButtonClick,
      }}
      $isModalVisible={isModalVisible}
      onCloseClickFunc={handleCloseButtonClick}
    >
      <ProfileTicketLackInner currTicketAmount={currTicketAmount} />
    </TwoButtonModal>
  );
};
export default ProfileTicketLackModal;
