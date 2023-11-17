import { useParams } from 'react-router-dom';
import ProfileTicketLackInner from './ProfileTicketUseInner';
import TwoButtonModal from '../../common/TwoButtonModal';
import useUseTicket from '../../../hooks/profile/useUseTicket';

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
  const { userId } = useParams();
  const handleUseTicket = useUseTicket(userId as string);
  const handleLeftButtonClick = () => {
    setIsModalVisible(false);
  };
  const handleRightButtonClick = () => {
    handleUseTicket.mutate();
    setIsModalVisible(false);
    window.location.reload();
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
