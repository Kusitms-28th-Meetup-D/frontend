import getProfile from '../../apis/profile/getProfile';
import { useQuery } from 'react-query';

export const useProfile = (userId?: string) => {
  const { data: profileData, isLoading } = useQuery(
    'profile',
    () =>
      getProfile({
        userId: userId,
      }),
    {
      onSuccess: () => {
        // queryClient.invalidateQueries('modifyProfile');
        //새로고침이나 리렌더링
      },
    },
  );

  return { profileData, isLoading };
};

export default useProfile;
