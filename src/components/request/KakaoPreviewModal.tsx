import { useNavigate } from 'react-router-dom';
import ModalInner from './ModalInner';
import OneButtonModal from '../common/OneButtonModal';

interface KakaoPreviewModalProps {
  $isModalVisible: boolean;
}
const KakaoPreviewModal: React.FC<KakaoPreviewModalProps> = ({
  $isModalVisible,
}) => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    console.log('clicked');
    navigate('/profile/41314'); //수정 필요
  };
  const handleCloseButtonClick = () => {
    console.log('close clicked');
    navigate('/');
  };

  return (
    <OneButtonModal
      button={{
        text: '닫기',
        onClickFunc: handleButtonClick,
      }}
      $isModalVisible={$isModalVisible}
      onCloseClickFunc={handleCloseButtonClick}
    >
      <ModalInner />
    </OneButtonModal>
  );
};
export default KakaoPreviewModal;
