import { useMutation, useQueryClient } from 'react-query';
import { RequestRecruitComplete } from '../../interface/MyTeam';
import patchRecruitComplete from '../../apis/myTeam/patchRecruitComplete';

interface UseRecruitComplete {
  mutate: () => void;
}

export function useRecruitComplete(
  requestData: RequestRecruitComplete,
): UseRecruitComplete {
  const queryClient = useQueryClient();

  const { mutate } = useMutation(
    'recruitComplete',
    () => patchRecruitComplete(requestData),
    {
      onSuccess: () => {
        queryClient.invalidateQueries();
      },
    },
  );
  return { mutate };
}
