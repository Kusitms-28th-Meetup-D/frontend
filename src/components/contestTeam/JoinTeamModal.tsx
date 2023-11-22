import TwoButtonModal from '../common/TwoButtonModal';
import JoinTeamModalInner from './JoinTeamModalInner';
import useJoinTeam from '../../hooks/contest/useJoinTeam';
import { useSetRecoilState } from 'recoil';
import {
  joinTeamCompleteModalState,
  joinTeamRefusedModalState,
} from '../../recoil/atom';

interface JoinTeamModalProps {
  isModalVisible: boolean;
  setIsModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  teamId?: string;
  userId?: string | number;
  contestId?: string;
}
const JoinTeamModal: React.FC<JoinTeamModalProps> = ({
  isModalVisible,
  setIsModalVisible,
  teamId,
  contestId,
}) => {
  const handleJoinTeam = useJoinTeam(teamId as string, contestId as string);
  const handleLeftButtonClick = () => {
    setIsModalVisible(false);
  };
  //응답에 따라 모달창을 변경
  const handleRightButtonClick = async () => {
    try {
      await handleJoinTeam.mutate();
      console.log('Success: A');
      setIsModalVisible(false);
      setIsCompleteModalVisible(true);
    } catch (error: any) {
      if (error.response && error.response.status === 409) {
        console.log('Conflict: B 409');
      } else {
        console.error('Error:', error);
      }
      setIsRefusedModalVisible(true);
      setIsModalVisible(false);
    }
  };
  const handleCloseButtonClick = () => {
    setIsModalVisible(false);
  };

  const setIsCompleteModalVisible = useSetRecoilState(
    joinTeamCompleteModalState,
  );
  const setIsRefusedModalVisible = useSetRecoilState(joinTeamRefusedModalState);
  return (
    <TwoButtonModal
      leftButton={{
        text: '취소',
        onClickFunc: handleLeftButtonClick,
      }}
      rightButton={{
        text: '신청하기',
        onClickFunc: handleRightButtonClick,
      }}
      $isModalVisible={isModalVisible}
      onCloseClickFunc={handleCloseButtonClick}
    >
      <JoinTeamModalInner />
    </TwoButtonModal>
  );
};
export default JoinTeamModal;
