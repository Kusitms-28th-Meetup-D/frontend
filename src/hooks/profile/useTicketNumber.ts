import { useQuery } from 'react-query';
import getTicketNumber from '../../apis/profile/getTicketNumber';
import { useSetRecoilState } from 'recoil';
import { loginModalState } from '../../recoil/atom';

export const useTicketNumber = () => {
  const setIsLoginModalVisible = useSetRecoilState(loginModalState);
  const { data: TicketNumberData, isLoading } = useQuery(
    'ticketNumber',
    () => getTicketNumber(),
    {
      retry: 0, //이거다!!
      // 에러가 발생했을 때 실행될 콜백
      onError: (error) => {
        setIsLoginModalVisible(true);
        // navigate('/login');
        console.error('로그인이 필요한 에러가 발생했습니다:', error);
        console.log(error);
      },
    },
  );

  return { TicketNumberData, isLoading };
};

export default useTicketNumber;
