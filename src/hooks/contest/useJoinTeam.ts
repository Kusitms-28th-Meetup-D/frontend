import { useMutation } from 'react-query';
import postJoinTeam from '../../apis/contest/postJoinTeam';

// export const useJoinTeam = (teamId: string) => {
//   const { data: joinTeamData } = useQuery('joinTeam', () =>
//     postJoinTeam({
//       teamId: teamId as string,
//     }),
//   );

//   return { joinTeamData };
// };

// export default useJoinTeam;

interface UseJoinTeam {
  mutate: () => void;
}
export function useJoinTeam(teamId: string): UseJoinTeam {
  const { mutate } = useMutation(
    'joinTeam',
    () =>
      postJoinTeam({
        teamId: teamId as string,
      }),
    {},
  );
  return { mutate };
}

export default useJoinTeam;
