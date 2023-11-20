import { useMutation, useQueryClient } from 'react-query';
import { RequestChangeMemberState } from '../../interface/MyTeam';
import patchChangeMemberStatus from '../../apis/myTeam/patchChangeMemberStatus';

interface UseChangeMemberStatus {
  mutate: () => void;
}

export function useChangeMemberStatus(
  requestData: RequestChangeMemberState,
): UseChangeMemberStatus {
  const queryClient = useQueryClient();

  const { mutate } = useMutation(
    'changeMemberStatus',
    () => patchChangeMemberStatus(requestData),
    {
      onSuccess: () => {
        queryClient.invalidateQueries();
      },
    },
  );
  return { mutate };
}
