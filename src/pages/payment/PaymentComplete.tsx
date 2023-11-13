import { styled } from 'styled-components';
import Complete from '../../components/payment/Complete';

const PaymentComplete = () => {
  return (
    <PaymentCompleteContainer>
      <Complete />
    </PaymentCompleteContainer>
  );
};

export default PaymentComplete;

const PaymentCompleteContainer = styled.div`
  margin: 0 auto;

  @media ${({ theme }) => theme.devices.mobile} {
  }
  @media ${({ theme }) => theme.devices.tablet} {
  }
  @media ${({ theme }) => theme.devices.desktop} {
    width: 64.6rem;
  }
`;
