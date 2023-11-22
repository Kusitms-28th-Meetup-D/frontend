import styled from 'styled-components';
import TwoButtonModal from '../../common/TwoButtonModal';

import glassSrc from '/assets/images/common/glasses.svg';
import { useRecruitComplete } from '../../../hooks/myTeam/useRecruitComplete';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { loginInfoState } from '../../../recoil/atom';
import { useNavigate, useParams } from 'react-router-dom';

interface CompleteRecruitModalProps {
  isModalVisible: boolean;
  setIsModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  teamId?: string;
}
const CompleteRecruitModal: React.FC<CompleteRecruitModalProps> = ({
  isModalVisible,
  setIsModalVisible,
  teamId,
}) => {
  const navigate = useNavigate();
  const loginInfo = useRecoilValue(loginInfoState);
  const handleCompleteRecruit = useRecruitComplete({
    teamId: teamId as string,
  });
  const handleLeftButtonClick = () => {
    setIsModalVisible(false);
  };
  const handleRightButtonClick = () => {
    handleCompleteRecruit.mutate();
    setIsModalVisible(false);
    navigate(`myteam/${loginInfo.data?.userId}/active`);
  };
  const handleCloseButtonClick = () => {
    setIsModalVisible(false);
  };
  return (
    <TwoButtonModal
      leftButton={{
        text: '취소',
        onClickFunc: handleLeftButtonClick,
      }}
      rightButton={{
        text: '모집 완료하기',
        onClickFunc: handleRightButtonClick,
      }}
      $isModalVisible={isModalVisible}
      onCloseClickFunc={handleCloseButtonClick}
    >
      <ModalInner>
        <Img src={glassSrc} />
        <Title>팀원 모집을 완료하시겠어요?</Title>
        <Content>
          {
            '모집 완료 시 팀원들의 이메일로 카카오톡 오픈채팅방 링크가\n전달되고 더 이상 팀원을 모집할 수 없어요.'
          }
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
  width: 10rem;
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
  white-space: break-spaces;
  text-align: center;
`;
export default CompleteRecruitModal;
