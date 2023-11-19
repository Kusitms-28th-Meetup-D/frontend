import TwoButtonModal from '../common/TwoButtonModal';
import { useNavigate } from 'react-router-dom';
import ModalInner from './ModalInner';

interface JoinCompleteModalProps {
  $isModalVisible: boolean;
}
const JoinCompleteModal: React.FC<JoinCompleteModalProps> = ({
  $isModalVisible,
}) => {
  const navigate = useNavigate();
  const handleLeftButtonClick = () => {
    console.log('left clicked');
    navigate('/');
  };
  const handleRightButtonClick = () => {
    console.log('right clicked');
    navigate('./create'); //수정 필요
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
