import { useMutation, useQueryClient } from 'react-query';
import { ProfileCraete } from '../../interface/Profile';
import postProfileCreate from '../../apis/profile/postProfileCreate';

interface UseProfileCreate {
  mutate: () => void;
}

export function useProfileCreate(profiles: ProfileCraete): UseProfileCreate {
  const queryClient = useQueryClient();

  const { mutate } = useMutation(() => postProfileCreate(profiles), {
    onSuccess: () => {
      queryClient.invalidateQueries('profiles');
    },
  });
  return { mutate };
}
