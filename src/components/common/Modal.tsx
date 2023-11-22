import NeedLoginModal from './modals/NeedLoginModal';
import { useRecoilState, useRecoilValue } from 'recoil';
import {
  joinTeamCompleteModalState,
  joinTeamRefusedModalState,
  loginModalState,
  needKakaoReviewModalState,
} from '../../recoil/atom';
import NeedKakaoReviewModal from './modals/NeedKakaoReviewModal';
import JoinTeamCompleteModal from '../contestTeam/JoinTeamCompleteModal';
import JoinTeamRefusedModal from '../contestTeam/JoinTeamRefusedModal';
import { useParams } from 'react-router-dom';

const Modal = () => {
  const { userId } = useParams();
  const [isLoginModalVisible, setIsLoginModalVisible] =
    useRecoilState(loginModalState);
  const isKakaoReviewModalVisible = useRecoilValue(needKakaoReviewModalState);
  const [isCompleteModalVisible, setIsCompleteModalVisible] = useRecoilState(
    joinTeamCompleteModalState,
  );
  const [isRefusedModalVisible, setIsRefusedModalVisible] = useRecoilState(
    joinTeamRefusedModalState,
  );
  return (
    <>
      {isLoginModalVisible && (
        <NeedLoginModal
          isModalVisible={isLoginModalVisible}
          setIsModalVisible={setIsLoginModalVisible}
        />
      )}
      {isKakaoReviewModalVisible && <NeedKakaoReviewModal />}
      {isCompleteModalVisible && (
        <JoinTeamCompleteModal
          isModalVisible={isCompleteModalVisible}
          setIsModalVisible={setIsCompleteModalVisible}
          userId={userId as string}
        />
      )}
      {isRefusedModalVisible && (
        <JoinTeamRefusedModal
          isModalVisible={isRefusedModalVisible}
          setIsModalVisible={setIsRefusedModalVisible}
          userId={userId as string}
        />
      )}
    </>
  );
};
export default Modal;
NeedKakaoReviewModal;
