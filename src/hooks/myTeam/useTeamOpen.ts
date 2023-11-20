import { useMutation, useQueryClient } from 'react-query';
import { RequestTeamOpen } from '../../interface/MyTeam';
import postTeamOpen from '../../apis/myTeam/postTeamOpen';
import { myteamKeys } from '../../keys/myteamKeys';

interface UseTeamOpen {
  mutate: () => void;
}

export function UseTeamOpen(teamOpen: RequestTeamOpen): UseTeamOpen {
  const queryClient = useQueryClient();

  const { mutate } = useMutation(myteamKeys.all, () => postTeamOpen(teamOpen), {
    onSuccess: () => {
      queryClient.invalidateQueries();
    },
  });
  return { mutate };
}
