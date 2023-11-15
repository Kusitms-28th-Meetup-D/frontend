import { styled } from 'styled-components';
import PaymentChargeHeader from '../../components/payment/PaymentChargeHeader';
import PaymentChargeBox from '../../components/payment/PaymentChargeBox';

const PaymentCharge = () => {
  return (
    <PaymentChargeContainer>
      <PaymentChargeHeader />
      <PaymentChargeBox />
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
