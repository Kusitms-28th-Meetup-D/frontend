import NeedLoginModal from './NeedLoginModal';
import { useRecoilState } from 'recoil';
import { loginModalState } from '../../recoil/atom';

const Modal = () => {
  const [isLoginModalVisible, setIsLoginModalVisible] =
    useRecoilState(loginModalState);
  return (
    <>
      {isLoginModalVisible && (
        <NeedLoginModal
          isModalVisible={isLoginModalVisible}
          setIsModalVisible={setIsLoginModalVisible}
        />
      )}
    </>
  );
};
export default Modal;
