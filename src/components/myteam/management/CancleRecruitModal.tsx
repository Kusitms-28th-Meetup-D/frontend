import styled from 'styled-components';
import TwoButtonModal from '../../common/TwoButtonModal';

import glassSrc from '/assets/images/common/warning.svg';
import { useRecruitComplete } from '../../../hooks/myTeam/useRecruitComplete';
import { useNavigate, useParams } from 'react-router-dom';

interface CancleRecruitModalProps {
  isModalVisible: boolean;
  setIsModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  teamId?: string;
}
const CancleRecruitModal: React.FC<CancleRecruitModalProps> = ({
  isModalVisible,
  setIsModalVisible,
  teamId,
}) => {
  const navigate = useNavigate();
  const { userId } = useParams();

  const handleCompleteRecruit = useRecruitComplete({
    teamId: teamId as string,
  });
  const handleLeftButtonClick = () => {
    setIsModalVisible(false);
  };
  const handleRightButtonClick = () => {
    handleCompleteRecruit.mutate();
    setIsModalVisible(false);
    navigate(`/myteam/${userId}/open`);
  };
  const handleCloseButtonClick = () => {
    setIsModalVisible(false);
  };
  return (
    <TwoButtonModal
      leftButton={{
        text: '아니요, 계속 모집할게요',
        onClickFunc: handleLeftButtonClick,
      }}
      rightButton={{
        text: '네, 모집 취소할게요',
        onClickFunc: handleRightButtonClick,
      }}
      $isModalVisible={isModalVisible}
      onCloseClickFunc={handleCloseButtonClick}
    >
      <ModalInner>
        <Img src={glassSrc} />
        <Title>팀원 모집을 취소하시겠어요?</Title>
        <Content>
          팀원 모집 취소 후에는 지금까지의 팀 정보가 모두 삭제돼요.
        </Content>
      </ModalInner>
    </TwoButtonModal>
  );
};
const ModalInner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  padding: 3rem;
`;
const Img = styled.img`
  width: 13rem;
  margin: 3rem;
`;
const Title = styled.div`
  ${(props) => props.theme.fonts.heading4};
  color: ${(props) => props.theme.colors.primary60};
`;
const Content = styled.div`
  ${(props) => props.theme.fonts.bodyM};
  color: ${(props) => props.theme.colors.gray90};
  margin-bottom: 2rem;
  text-align: center;
  white-space: break-spaces;
`;
export default CancleRecruitModal;
