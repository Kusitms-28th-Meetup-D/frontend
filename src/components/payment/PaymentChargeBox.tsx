import { styled } from 'styled-components';
import { chargeList } from '../../constants/payment';
import ChargeBox from './ChargeBox';
import { useEffect, useState } from 'react';
import Title from '../common/Title';
import Button from '../common/Button';
import { useTicketCount } from '../../hooks/payment/useTicketCount';
import { useTicketBuy } from '../../hooks/payment/useTicketBuy';
import OneButtonModal from '../common/OneButtonModal';
import { useNavigate } from 'react-router-dom';
import PossessionTicket from './PossessionTicket';

const PaymentChargeBox = () => {
  const { ticketCount } = useTicketCount();
  const [chargeTicket, setChargeTicket] = useState(1);
  const [selectedChargeBoxId, setSelectedChargeBoxId] = useState(0);
  const [afterTicket, setAfterTicket] = useState(
    (ticketCount?.data?.ticketCount ?? 0) + chargeTicket,
  );

  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    setAfterTicket((ticketCount?.data.ticketCount ?? 0) + chargeTicket);
  }, [ticketCount, chargeTicket]);

  const handleChargeBoxSelect = (id: number) => {
    setSelectedChargeBoxId(id);
    if (id === 0) {
      setChargeTicket(1);
    } else if (id === 1) {
      setChargeTicket(5);
    } else if (id === 2) {
      setChargeTicket(10);
    } else if (id === 3) {
      setChargeTicket(15);
    } else if (id === 4) {
      setChargeTicket(20);
    }
  };
  const ticketChargeMutation = useTicketBuy({ buyAmount: chargeTicket });
  const handleTicketChargeClick = () => {
    ticketChargeMutation.mutate();
    setModalOpen(true);
  };

  const navigate = useNavigate();

  return (
    <PaymentChargeContainer>
      <TitleBox>
        <Title>충전 수량 선택</Title>
      </TitleBox>
      <PaymentChargeBoxContainer>
        <ChargeBoxContainer>
          {chargeList.map((charge) => (
            <ChargeBox
              key={charge.id}
              count={charge.count}
              price={charge.price}
              isSelected={charge.id === selectedChargeBoxId}
              onSelect={() => handleChargeBoxSelect(charge.id)}
            />
          ))}
        </ChargeBoxContainer>
        <ChargeCalcBoxContainer>
          <CalcContent>
            현재 보유 티켓
            <Ticket src={'/assets/images/common/ticket.svg'} />
            <p>{ticketCount?.data.ticketCount}장</p>
          </CalcContent>
          <CalcContent>
            <h1>+</h1> 충전 티켓
            <Ticket src={'/assets/images/common/ticket.svg'} />
            <span>{chargeTicket}장</span>
          </CalcContent>
          <CalcTotalHr />
          <CalcContent>
            충전 후 보유 티켓
            <Ticket src={'/assets/images/common/ticket.svg'} />
            <span>{afterTicket}장</span>
          </CalcContent>
          <CalcHr />
          <div>
            <p>지금 티켓을 충전하시면,</p>
            <p>
              <span>총 {afterTicket}명</span>의 한 줄 추천사를
            </p>
            <p>언제든지 자유롭게 열람하실 수 있어요!</p>
          </div>
          <ButtonBox>
            <Button onClick={handleTicketChargeClick}>
              <LightningIcon src={'/assets/images/payment/lightning.svg'} />
              티켓 충전하기
            </Button>
          </ButtonBox>
          {modalOpen && (
            <OneButtonModal
              button={{
                text: '닫기',
                onClickFunc: () => {
                  setModalOpen(false);
                  navigate('/');
                },
              }}
              onCloseClickFunc={() => {
                setModalOpen(false);
              }}
              $isModalVisible={modalOpen}
            >
              <ModalImage
                src={'/assets/images/payment/payment_complete_modal.svg'}
                alt="payment_complete_modal"
              />
              <ModalTitle>티켓 충전이 완료되었어요!</ModalTitle>
              <ModalContent>
                <p>티켓으로 한 줄 추천사를 열람하고,</p>
                <p>Wanteam에서 딱 맞는 팀원을 한번에 찾아보세요.</p>
              </ModalContent>
              <PossessionTicket />
            </OneButtonModal>
          )}
        </ChargeCalcBoxContainer>
      </PaymentChargeBoxContainer>
    </PaymentChargeContainer>
  );
};

export default PaymentChargeBox;

const PaymentChargeContainer = styled.div`
  margin: 4rem 0;
`;

const PaymentChargeBoxContainer = styled.div`
  display: flex;
  gap: 3rem;
`;

const ChargeBoxContainer = styled.div`
  width: 65%;
  display: flex;
  flex-direction: column;
  gap: 1.8rem;
`;

const ChargeCalcBoxContainer = styled.div`
  width: 35%;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.gray5};
  padding: 4rem 6rem;
  gap: 2.5rem;
  border-radius: 12px;
  p {
    ${({ theme }) => theme.fonts.bodyXL};
    color: ${({ theme }) => theme.colors.gray90};
  }
  p > span {
    color: ${({ theme }) => theme.colors.primary60};
  }
`;

const CalcContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 1.2rem;
  ${({ theme }) => theme.fonts.heading4};
  color: ${({ theme }) => theme.colors.gray90};
  white-space: nowrap;

  h1 {
    width: 100%;
    text-align: left;
  }
  p {
    ${({ theme }) => theme.fonts.subtitleXL};
    color: ${({ theme }) => theme.colors.gray90};
  }
  span {
    ${({ theme }) => theme.fonts.subtitleXL};
    color: ${({ theme }) => theme.colors.primary60};
  }
`;

const Ticket = styled.img`
  width: 3.3rem;
  height: 3rem;
`;

const CalcTotalHr = styled.hr`
  width: 100%;
  border: 0.2px solid ${({ theme }) => theme.colors.gray30};
`;

const CalcHr = styled.hr`
  width: 100%;
  border: 0.5px solid ${({ theme }) => theme.colors.gray50};
`;

const LightningIcon = styled.img`
  width: 1.6rem;
  height: 2.7rem;
`;

const TitleBox = styled.div`
  margin-bottom: 1rem;
`;

const ButtonBox = styled.div`
  padding: 0 6rem;
`;

const ModalImage = styled.img`
  margin: 2rem 0;
`;

const ModalTitle = styled.div`
  ${({ theme }) => theme.fonts.heading2_1};
  color: ${({ theme }) => theme.colors.gray90};
`;

const ModalContent = styled.div`
  ${({ theme }) => theme.fonts.bodyXL};
  color: ${({ theme }) => theme.colors.gray70};
  text-align: center;
  margin: 3rem 0;
`;
