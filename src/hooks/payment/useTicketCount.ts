import { useQuery } from 'react-query';
import { paymentKeys } from '../../keys/paymentKeys';
import { ResponseTicketCount } from '../../interface/Payment';
import { getTicketCount } from '../../apis/payment/getTicketCount';

interface UseTicketCount {
  ticketCount?: ResponseTicketCount;
}

export function useTicketCount(): UseTicketCount {
  const { data: ticketCount } = useQuery(paymentKeys.all, () =>
    getTicketCount(),
  );
  return { ticketCount };
}
