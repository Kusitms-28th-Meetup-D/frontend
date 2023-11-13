import TwoButtonModal from '../common/TwoButtonModal';
import ModalInner from './ModalInner';

interface JoinCompleteModalProps {
  $isModalVisible: boolean;
}
const JoinCompleteModal: React.FC<JoinCompleteModalProps> = ({
  $isModalVisible,
}) => {
  const handleLeftButtonClick = () => {
    console.log('left clicked');
  };
  const handleRightButtonClick = () => {
    console.log('right clicked');
  };
  return (
    <TwoButtonModal
      $isModalVisible={$isModalVisible}
      leftButton={{
        text: '다음에 할래요',
        onClickFunc: handleLeftButtonClick,
      }}
      rightButton={{
        text: '자기소개 프로필 작성하기',
        onClickFunc: handleRightButtonClick,
      }}
    >
      <ModalInner />
    </TwoButtonModal>
  );
};
export default JoinCompleteModal;
