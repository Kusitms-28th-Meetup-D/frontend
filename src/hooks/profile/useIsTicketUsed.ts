import { useQuery } from 'react-query';
import getIsTicketUsed from '../../apis/profile/getIsTicketUsed';

export const useIsTicketUsed = (targetUserId: string) => {
  const { data: IsTicketUsedData } = useQuery('isTicketUsed', () =>
    getIsTicketUsed({ targetUserId: targetUserId }),
  );

  return { IsTicketUsedData };
};

export default useIsTicketUsed;
