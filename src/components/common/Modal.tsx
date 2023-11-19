import NeedLoginModal from './modals/NeedLoginModal';
import { useRecoilState, useRecoilValue } from 'recoil';
import { loginModalState, needKakaoReviewModalState } from '../../recoil/atom';
import NeedKakaoReviewModal from './modals/NeedKakaoReviewModal';

const Modal = () => {
  const [isLoginModalVisible, setIsLoginModalVisible] =
    useRecoilState(loginModalState);
  const isKakaoReviewModalVisible = useRecoilValue(needKakaoReviewModalState);
  return (
    <>
      {isLoginModalVisible && (
        <NeedLoginModal
          isModalVisible={isLoginModalVisible}
          setIsModalVisible={setIsLoginModalVisible}
        />
      )}
      {isKakaoReviewModalVisible && <NeedKakaoReviewModal />}
    </>
  );
};
export default Modal;
NeedKakaoReviewModal;
