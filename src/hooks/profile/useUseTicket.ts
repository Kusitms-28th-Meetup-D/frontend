import { useMutation } from 'react-query';
import postUseTicket from '../../apis/profile/postUseTicket';
import { useNavigate } from 'react-router-dom';

// export const useUseTicket = (purchaseUserId: string) => {
//   const { data: useTicketData, isLoading: isUseTicketLoading } = useQuery(
//     'useTicket',
//     () => postUseTicket({ purchaseUserId: purchaseUserId }),
//   );

//   return { useTicketData, isUseTicketLoading };
// };

interface UseUseTicket {
  mutate: () => void;
}

export function useUseTicket(purchaseUserId: string): UseUseTicket {
  const navigate = useNavigate();

  const { mutate } = useMutation(
    'useTicket',
    () => postUseTicket({ purchaseUserId: purchaseUserId }),
    {
      retry: 0, //이거다!!
      // 에러가 발생했을 때 실행될 콜백
      onError: (error) => {
        navigate('/login');
        console.error('티켓을 사용하는데 에러가 발생했습니다:', error);
        console.log(error);
        // 에러가 발생하면 로그인 페이지로 리다이렉트
      },
    },
  );
  return { mutate };
}

export default useUseTicket;
