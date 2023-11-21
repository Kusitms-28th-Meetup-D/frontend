import TwoButtonModal from '../common/TwoButtonModal';
import { useNavigate } from 'react-router-dom';
import ModalInner from './ModalInner';

interface JoinCompleteModalProps {
  $isModalVisible: boolean;
  userId?: string;
}
const JoinCompleteModal: React.FC<JoinCompleteModalProps> = ({
  $isModalVisible,
  userId,
}) => {
  const navigate = useNavigate();
  const handleLeftButtonClick = () => {
    console.log('left clicked');
    navigate('/');
  };
  const handleRightButtonClick = () => {
    console.log('right clicked');
    navigate(`/profile/${userId}/create`);
  };
  const handleCloseButtonClick = () => {
    console.log('close clicked');
    navigate('/');
  };

  return (
    <TwoButtonModal
      leftButton={{
        text: '다음에 할래요',
        onClickFunc: handleLeftButtonClick,
      }}
      rightButton={{
        text: '자기소개 프로필 작성하기',
        onClickFunc: handleRightButtonClick,
      }}
      $isModalVisible={$isModalVisible}
      onCloseClickFunc={handleCloseButtonClick}
    >
      <ModalInner />
    </TwoButtonModal>
  );
};
export default JoinCompleteModal;
