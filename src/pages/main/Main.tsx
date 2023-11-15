import { Headers } from '../../constants/Header';
import { headerSelectedState } from '../../recoil/atom';
import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';

const Main = () => {
  const setHeaderSelected = useSetRecoilState(headerSelectedState);
  useEffect(() => setHeaderSelected(Headers.none));

  return <div>main1!!</div>;
};
export default Main;
