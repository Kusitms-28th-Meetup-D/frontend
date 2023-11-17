import { useMutation, useQuery } from 'react-query';
import postUseTicket from '../../apis/profile/postUseTicket';

export const useUseTicket = (purchaseUserId: string) => {
  const { data: useTicketData, isLoading: isUseTicketLoading } = useQuery(
    'useTicket',
    () => postUseTicket({ purchaseUserId: purchaseUserId }),
  );

  return { useTicketData, isUseTicketLoading };
};

interface UseUseTicket {
  mutate: () => void;
}

export function useUseTicket2(purchaseUserId: string): UseUseTicket {
  const { mutate } = useMutation(
    'useTicket',
    () => postUseTicket({ purchaseUserId: purchaseUserId }),
    {},
  );
  return { mutate };
}

export default useUseTicket2;
