import { styled } from 'styled-components';

interface ChargeBoxProps {
  count: string;
  price: string;
  isSelected: boolean;
  onSelect: () => void;
}

const ChargeBox = ({ count, price, isSelected, onSelect }: ChargeBoxProps) => {
  return (
    <>
      <ChargeBoxContainer $isSelected={isSelected} onClick={onSelect}>
        <Radio type="radio" name="charge" checked={isSelected} readOnly />
        <Ticket src={'/assets/images/common/ticket.svg'} />
        <h3>티켓 {count}장</h3>
        <p>{price} 원</p>
      </ChargeBoxContainer>
    </>
  );
};

export default ChargeBox;

const ChargeBoxContainer = styled.label<{ $isSelected: boolean }>`
  display: flex;
  align-items: center;
  gap: 2rem;
  padding: 2.6rem 3.4rem;
  border-radius: 12px;
  background: ${({ theme }) => theme.colors.primary10};
  cursor: pointer;

  border: 2px solid
    ${(props) => (props.$isSelected ? props.theme.colors.primary40 : 'none')};
  h3 {
    ${({ theme }) => theme.fonts.bodyXL};
    color: ${({ theme }) => theme.colors.gray90};
    width: 100%;
  }
  p {
    ${({ theme }) => theme.fonts.subtitleXL};
    color: ${({ theme }) => theme.colors.gray90};
    white-space: nowrap;
  }
`;

const Radio = styled.input`
  vertical-align: middle;
  appearance: none;
  width: 30px;
  height: 22px;
  border: 1px solid ${({ theme }) => theme.colors.gray50};
  border-radius: 50%;
  cursor: pointer;
  background: transparent;
  transition: background-image 0.3s, border-color 0.3s;

  &:checked {
    background-image: url('/assets/images/payment/radioSelected.svg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }
`;

const Ticket = styled.img`
  width: 3.3rem;
  height: 3rem;
`;
