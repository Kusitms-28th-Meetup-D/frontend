import styled from 'styled-components';
import { useChangeMemberStatus } from '../../../hooks/myTeam/useChangeMemberStatus';
import { ProfileProps } from '../../../interface/Contest';
import TwoButtonModal from '../../common/TwoButtonModal';
import ProfileBoxMember from '../../common/ProfileBoxMember';

interface NoMemberJoinModalProps {
  isModalVisible: boolean;
  setIsModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  teamId?: string;
  profileProps: ProfileProps;
}
const NoMemberJoinModal: React.FC<NoMemberJoinModalProps> = ({
  isModalVisible,
  setIsModalVisible,
  teamId,
  profileProps,
}) => {
  const handleChangeMember = useChangeMemberStatus({
    teamId: teamId as string,
    memberId: profileProps.teamMemberId as unknown as string,
    role: '3', //반려
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
        text: '네, 거절할게요',
        onClickFunc: handleRightButtonClick,
      }}
      $isModalVisible={isModalVisible}
      onCloseClickFunc={handleCloseButtonClick}
    >
      <ModalInner>
        <Title>{profileProps.teamMemberName}님의 합류를 거절하시겠어요?</Title>
        <Content>합류를 거절한 이후에는 취소가 불가능해요.</Content>
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
export default NoMemberJoinModal;
