import { useQuery } from 'react-query';
import getTicketNumber from '../../apis/profile/getTicketNumber';

export const useTicketNumber = () => {
  const { data: TicketNumberData, isLoading } = useQuery('ticketNumber', () =>
    getTicketNumber(),
  );

  return { TicketNumberData, isLoading };
};

export default useTicketNumber;
