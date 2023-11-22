import { useState } from 'react';
import { styled } from 'styled-components';
import TwoButtonModal from '../common/TwoButtonModal';
import { useNavigate, useParams } from 'react-router-dom';
import { RequestTeamOpen } from '../../interface/MyTeam';
import { UseTeamOpen } from '../../hooks/myTeam/useTeamOpen';
import OneSquareButtonModal from '../common/OneSquareButtonModal';

interface ButtonBoxProps {
  teamOpen: RequestTeamOpen;
  isButtonActivate: boolean;
  setIsButtonActivate: React.Dispatch<React.SetStateAction<boolean>>;
}

const ButtonBox = ({
  teamOpen,
  isButtonActivate,
}: // setIsButtonActivate,
ButtonBoxProps) => {
  const [openCancelModal, setOpenCancelModal] = useState(false);
  const [openCompleteModal, setOpenCompleteModal] = useState(false);
  const [openCompleteFinalModal, setOpenCompleteFinalModal] = useState(false);
  const { contestId } = useParams();
  const navigate = useNavigate();
  openCompleteFinalModal;

  const teamOpenMutation = UseTeamOpen(teamOpen);

  const handleCompleteModalClick = () => {
    setOpenCompleteModal(false);
    setOpenCompleteFinalModal(true);
    teamOpenMutation.mutate();
  };
  const handleCompleteButton = () => {
    if (isButtonActivate) setOpenCompleteModal(true);
  };
  return (
    <>
      <ButtonBoxContainer>
        <CancelButton onClick={() => setOpenCancelModal(true)}>
          취소
        </CancelButton>
        <CompleteButton
          $isButtonActivate={isButtonActivate}
          onClick={handleCompleteButton}
        >
          완료
        </CompleteButton>
        {openCancelModal && (
          <TwoButtonModal
            leftButton={{
              text: '네, 취소할게요',
              onClickFunc: () => navigate(`/list/${contestId}`),
            }}
            rightButton={{
              text: '아니요, 계속 작성할게요',
              onClickFunc: () => setOpenCancelModal(false),
            }}
            onCloseClickFunc={() => setOpenCancelModal(false)}
            $isModalVisible={openCancelModal}
          >
            <ModalCloseImg
              src={'/assets/images/myteam/close_button.svg'}
              alt={'close_button'}
            />
            <ModalContent>
              <h1>팀 오픈을 취소하시겠어요?</h1>
              <p>취소 시 작성한 모두 사라지며, 복구할 수 없어요.</p>
            </ModalContent>
          </TwoButtonModal>
        )}

        {openCompleteModal && (
          <TwoButtonModal
            leftButton={{
              text: '한 번만 더 검토할게요',
              onClickFunc: () => setOpenCompleteModal(false),
            }}
            rightButton={{
              text: '네, 오픈할게요!',
              onClickFunc: handleCompleteModalClick,
            }}
            onCloseClickFunc={() => setOpenCompleteModal(false)}
            $isModalVisible={openCompleteModal}
          >
            <ModalCloseImg
              src={'/assets/images/myteam/complete_button.svg'}
              alt={'complete_button'}
            />
            <ModalContent>
              <h1>팀 오픈하시겠어요?</h1>
              <p>멋진 공고네요! 똑똑한 팀원들을 맞이할 준비 되셨나요?</p>
            </ModalContent>
          </TwoButtonModal>
        )}

        {openCompleteFinalModal && (
          <OneSquareButtonModal
            button={{
              text: '오픈한 팀 보러 가기',
              onClickFunc: () => navigate(`/list/${contestId}`),
            }}
            onCloseClickFunc={() => setOpenCompleteFinalModal(false)}
            $isModalVisible={openCompleteFinalModal}
          >
            <ModalCloseImg
              src={'/assets/images/myteam/complete_final_button.svg'}
              alt={'complete_button'}
            />
            <ModalContent>
              <h1>팀 오픈이 완료되었어요!</h1>
              <p>지원자들의 프로필을 확인하고 딱 맞는 팀원과 합류하세요.</p>
            </ModalContent>
          </OneSquareButtonModal>
        )}
      </ButtonBoxContainer>
    </>
  );
};

export default ButtonBox;

const ButtonBoxContainer = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
  justify-content: center;
  margin-bottom: 8rem;
`;

const Button = styled.button`
  border-radius: 36px;
  ${({ theme }) => theme.fonts.bodyL};
  padding: 0.8rem 4.5rem;
`;

const CancelButton = styled(Button)`
  color: ${({ theme }) => theme.colors.primary40};
  border: 1px solid ${({ theme }) => theme.colors.primary40};
  background: ${({ theme }) => theme.colors.white};
`;

const CompleteButton = styled(Button)<{ $isButtonActivate: boolean }>`
  color: ${({ theme }) => theme.colors.gray60};
  border: 1px solid ${({ theme }) => theme.colors.gray10};
  background: ${({ theme }) => theme.colors.gray10};

  border: 1px solid
    ${(props) =>
      props.$isButtonActivate
        ? props.theme.colors.primary20
        : props.theme.colors.gray50};

  background-color: ${(props) =>
    props.$isButtonActivate
      ? props.theme.colors.primary60
      : props.theme.colors.gray10};

  ${(props) => props.theme.fonts.buttonL};
  color: ${(props) =>
    props.$isButtonActivate
      ? props.theme.colors.white
      : props.theme.colors.gray40};

  cursor: ${(props) => (props.$isButtonActivate ? 'pointer' : 'default')};
`;

const ModalCloseImg = styled.img`
  margin-top: 6rem;
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem 0 4rem 0;
  gap: 0.5rem;

  h1 {
    ${({ theme }) => theme.fonts.heading4};
    color: ${({ theme }) => theme.colors.primary60};
  }
  p {
    ${({ theme }) => theme.fonts.bodyL};
    color: ${({ theme }) => theme.colors.gray90};
  }
`;
