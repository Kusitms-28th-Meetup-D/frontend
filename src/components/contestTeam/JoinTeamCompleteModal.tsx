import styled from 'styled-components';

import glassSrc from '/assets/images/common/glasses.svg';
import { useNavigate } from 'react-router-dom';
import OneSquareButtonModal from '../common/OneSquareButtonModal';
import { useRecoilValue } from 'recoil';
import { loginInfoState } from '../../recoil/atom';

interface JoinTeamCompleteModalProps {
  isModalVisible: boolean;
  setIsModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  userId?: string;
}
const JoinTeamCompleteModal: React.FC<JoinTeamCompleteModalProps> = ({
  isModalVisible,
  setIsModalVisible,
  userId,
}) => {
  const navigate = useNavigate();
  const loginInfo = useRecoilValue(loginInfoState);

  const handleButtonClick = () => {
    setIsModalVisible(false);
    navigate(`/myteam/${loginInfo.data?.userId}/apply`);
  };
  const handleCloseButtonClick = () => {
    setIsModalVisible(false);
    navigate(`/myteam/${userId}/apply`);
  };

  return (
    <OneSquareButtonModal
      button={{
        text: '지원 현황 확인하러 가기',
        onClickFunc: handleButtonClick,
      }}
      $isModalVisible={isModalVisible}
      onCloseClickFunc={handleCloseButtonClick}
    >
      <JoinTeamCompleteModalInner>
        <JoinTeamCompleteModalimg src={glassSrc} />
        <JoinTeamCompleteModalTitle>
          팀 합류 신청이 완료되었어요!
        </JoinTeamCompleteModalTitle>
        <JoinTeamCompleteModalContent>
          최종 합류 여부가 결정되면 이메일로 알림을 보내드려요.
        </JoinTeamCompleteModalContent>
      </JoinTeamCompleteModalInner>
    </OneSquareButtonModal>
  );
};
const JoinTeamCompleteModalInner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.8rem;

  padding: 5rem;
`;
const JoinTeamCompleteModalimg = styled.img`
  width: 12.7rem;
`;
const JoinTeamCompleteModalTitle = styled.div`
  ${({ theme }) => theme.fonts.heading4};
  color: ${({ theme }) => theme.colors.primary60};
`;
const JoinTeamCompleteModalContent = styled.div`
  ${({ theme }) => theme.fonts.bodyL};
  color: ${({ theme }) => theme.colors.gray90};
`;
export default JoinTeamCompleteModal;
