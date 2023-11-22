import { useState } from 'react';
import TwoButtonModal from '../common/TwoButtonModal';
import JoinTeamModalInner from './JoinTeamModalInner';
import useJoinTeam from '../../hooks/contest/useJoinTeam';
import JoinTeamCompleteModal from './JoinTeamCompleteModal';
import JoinTeamRefusedModal from './JoinTeamRefusedModal';

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
  userId,
  contestId,
}) => {
  const handleJoinTeam = useJoinTeam(teamId as string,contestId as string);
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

  const [isCompleteModalVisible, setIsCompleteModalVisible] = useState(false);
  const [isRefusedModalVisible, setIsRefusedModalVisible] = useState(false);
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
      <JoinTeamCompleteModal
        isModalVisible={isCompleteModalVisible}
        setIsModalVisible={setIsCompleteModalVisible}
        userId={userId as string}
      />
      <JoinTeamRefusedModal
        isModalVisible={isRefusedModalVisible}
        setIsModalVisible={setIsRefusedModalVisible}
        userId={userId as string}
      />
    </TwoButtonModal>
  );
};
export default JoinTeamModal;
