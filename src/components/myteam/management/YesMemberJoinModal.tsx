import styled from 'styled-components';
import { useChangeMemberStatus } from '../../../hooks/myTeam/useChangeMemberStatus';
import { ProfileProps } from '../../../interface/Contest';
import ProfileBoxMember from '../../common/ProfileBoxMember';
import TwoButtonModal from '../../common/TwoButtonModal';

interface YesMemberJoinModalProps {
  isModalVisible: boolean;
  setIsModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  teamId?: string;
  profileProps: ProfileProps;
}
const YesMemberJoinModal: React.FC<YesMemberJoinModalProps> = ({
  isModalVisible,
  setIsModalVisible,
  teamId,
  profileProps,
}) => {
  const handleChangeMember = useChangeMemberStatus({
    teamId: teamId as string,
    memberId: profileProps.teamMemberId as unknown as string,
    role: '2', //팀원
  });
  const handleLeftButtonClick = () => {
    setIsModalVisible(false);
  };
  const handleRightButtonClick = () => {
    handleChangeMember.mutate();
    setIsModalVisible(false);
  };
  const handleCloseButtonClick = () => {
    setIsModalVisible(false);
  };
  return (
    <TwoButtonModal
      leftButton={{
        text: '조금 더 생각해 볼게요',
        onClickFunc: handleLeftButtonClick,
      }}
      rightButton={{
        text: '네, 함께할게요',
        onClickFunc: handleRightButtonClick,
      }}
      $isModalVisible={isModalVisible}
      onCloseClickFunc={handleCloseButtonClick}
    >
      <ModalInner>
        <Title>
          {profileProps.teamMemberName} 님과 팀원으로 함께하시겠어요?
        </Title>
        <Content>팀원으로 합류한 이후에는 취소가 불가능해요.</Content>
        <ProfileBoxMember
          hasBorder={true}
          hasProfileButton={false}
          isBgColorWhite={false}
          memberInfo={profileProps}
        />
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
const Title = styled.div`
  ${(props) => props.theme.fonts.heading4};
  color: ${(props) => props.theme.colors.primary60};
`;
const Content = styled.div`
  ${(props) => props.theme.fonts.bodyM};
  color: ${(props) => props.theme.colors.gray90};
  margin-bottom: 2rem;
`;
export default YesMemberJoinModal;
