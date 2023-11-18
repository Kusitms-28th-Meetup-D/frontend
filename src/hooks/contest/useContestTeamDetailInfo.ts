import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import getContestTeamDetailInfo from '../../apis/contest/getContestTeamDetailInfo';

export const useContestTeamDetailInfo = (teamId: string) => {
  const navigate = useNavigate();

  const { data: contestTeamDetailData, isLoading } = useQuery(
    'contestTeamDetailInfo',
    () =>
      getContestTeamDetailInfo({
        teamId: teamId,
      }),
    {
      retry: 0, //이거다!!
      // 에러가 발생했을 때 실행될 콜백
      onError: (error) => {
        navigate('/login');
        console.error('에러가 발생했습니다:', error);
        console.log(error);
        // 에러가 발생하면 로그인 페이지로 리다이렉트
      },
    },
  );

  return { contestTeamDetailData, isLoading };
};

export default useContestTeamDetailInfo;