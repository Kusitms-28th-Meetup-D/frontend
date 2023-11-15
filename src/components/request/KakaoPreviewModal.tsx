import { useNavigate } from 'react-router-dom';
import ModalInner from './ModalInner';
import OneButtonModal from '../common/OneButtonModal';

interface KakaoPreviewModalProps {
  $isModalVisible: boolean;
  button: {
    text: string; // 버튼 텍스트
    onClickFunc: () => void; // 버튼 onClick 콜백 함수
  };
  onCloseClickFunc: () => void; // x버튼 onClick 콜백 함수
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
