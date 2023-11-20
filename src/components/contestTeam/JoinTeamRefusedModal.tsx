import OneButtonModal from '../common/OneButtonModal';
import JoinTeamRefusedModalInner from './JoinTeamRefusedModalInner';
interface JoinTeamRefusedModalProps {
  isModalVisible: boolean;
  setIsModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  userId?: string;
}
const JoinTeamRefusedModal: React.FC<JoinTeamRefusedModalProps> = ({
  isModalVisible,
  setIsModalVisible,
}) => {
  const handleButtonClick = () => {
    setIsModalVisible(false);
  };
  return (
    <OneButtonModal
      $isModalVisible={isModalVisible}
      button={{
        text: '닫기',
        onClickFunc: handleButtonClick,
      }}
      onCloseClickFunc={handleButtonClick}
    >
      <JoinTeamRefusedModalInner />
    </OneButtonModal>
  );
};

export default JoinTeamRefusedModal;
