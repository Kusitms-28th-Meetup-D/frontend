import { useState } from 'react';
import { styled } from 'styled-components';
import TwoButtonModal from '../common/TwoButtonModal';
import { useNavigate, useParams } from 'react-router-dom';

const ButtonBox = () => {
  const [openCancelModal, setOpenCancelModal] = useState(false);
  const [openCompleteModal, setCompleteModal] = useState(false);
  openCompleteModal;
  const { contestId } = useParams();
  const navigate = useNavigate();

  return (
    <>
      <ButtonBoxContainer>
        <CancelButton onClick={() => setOpenCancelModal(true)}>
          취소
        </CancelButton>
        <CompleteButton onClick={() => setCompleteModal(true)}>
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

const CompleteButton = styled(Button)`
  color: ${({ theme }) => theme.colors.gray60};
  border: 1px solid ${({ theme }) => theme.colors.gray10};
  background: ${({ theme }) => theme.colors.gray10};
`;

const ModalCloseImg = styled.img`
  margin-top: 6rem;
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem 0 4rem 0;
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
