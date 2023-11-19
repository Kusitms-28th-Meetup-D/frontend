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
  max-width: 122.4rem;
  margin: auto;
`;
