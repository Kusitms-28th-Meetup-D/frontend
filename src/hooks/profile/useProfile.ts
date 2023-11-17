import getProfile from '../../apis/profile/getProfile';
import { useQuery } from 'react-query';

export const useProfile = () => {
  const { data: profileData, isLoading } = useQuery('profile', () =>
    getProfile(),
  );

  return { profileData, isLoading };
};

export default useProfile;
