import { styled } from 'styled-components';
import MyTeamHeader from '../../components/myteam/MyTeamHeader';
import { Headers } from '../../constants/Header';
import { useSetRecoilState } from 'recoil';
import { headerSelectedState } from '../../recoil/atom';
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

const MyTeam = () => {
  const setHeaderSelected = useSetRecoilState(headerSelectedState);
  useEffect(() => setHeaderSelected(Headers.myTeam));

  return (
    <MyTeamLayout>
      <MyTeamHeader />
      <Outlet />
    </MyTeamLayout>
  );
};

export default MyTeam;

const MyTeamLayout = styled.div`
  max-width: 122.4rem;
  margin: 0 auto 5rem auto;
`;
