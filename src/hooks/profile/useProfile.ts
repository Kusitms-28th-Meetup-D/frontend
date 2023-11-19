import getProfile from '../../apis/profile/getProfile';
import { useQuery } from 'react-query';

export const useProfile = (userId?: string) => {
  const { data: profileData, isLoading } = useQuery('profile', () =>
    getProfile({
      userId: userId,
    }),
  );

  return { profileData, isLoading };
};

export default useProfile;
