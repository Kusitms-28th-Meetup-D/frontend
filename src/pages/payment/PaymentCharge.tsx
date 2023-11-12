import { styled } from 'styled-components';
import ChargeHeader from '../../components/payment/ChargeHeader';

const PaymentCharge = () => {
  return (
    <PaymentChargeContainer>
      <ChargeHeader />
    </PaymentChargeContainer>
  );
};

export default PaymentCharge;

const PaymentChargeContainer = styled.div`
  margin: 0 auto;

  @media ${({ theme }) => theme.devices.mobile} {
  }
  @media ${({ theme }) => theme.devices.tablet} {
  }
  @media ${({ theme }) => theme.devices.desktop} {
    max-width: 122.4rem;
  }
`;
