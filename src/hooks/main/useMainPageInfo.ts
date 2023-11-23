import { useQuery } from 'react-query';
import getMainData from '../../apis/main/getMainData';

export const useMainPageInfo = () => {
  const { data: mainPageInfoData } = useQuery('mainPageinfo', () =>
    getMainData(),
  );

  return { mainPageInfoData };
};

export default useMainPageInfo;
