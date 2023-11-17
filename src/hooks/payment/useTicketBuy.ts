import { useMutation, useQueryClient } from 'react-query';
import { RequestTicketBuy } from '../../interface/Payment';
import patchTicketBuy from '../../apis/payment/patchTicketBuy';
import { paymentKeys } from '../../keys/paymentKeys';

interface UseTicketBuy {
  mutate: () => void;
}

export function useTicketBuy(buyAmount: RequestTicketBuy): UseTicketBuy {
  const queryClient = useQueryClient();

  const { mutate } = useMutation(
    paymentKeys.all,
    () => patchTicketBuy(buyAmount),
    {
      onSuccess: () => {
        queryClient.invalidateQueries();
      },
    },
  );
  return { mutate };
}
