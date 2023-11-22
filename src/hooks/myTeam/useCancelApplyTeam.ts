import { useMutation, useQueryClient } from 'react-query';
import { deleteApplyTeam } from '../../apis/myTeam/deleteApplyTeam';

export function useCancelApplyTeam(teamId: number) {
  const queryClient = useQueryClient();

  const { mutate } = useMutation('applyTeam', () => deleteApplyTeam(teamId), {
    onSuccess: () => {
      queryClient.invalidateQueries();
    },
  });
  return { mutate };
}
