import { styled } from 'styled-components';
import MyTeamHeader from '../../components/team/MyTeamHeader';
import { Headers } from '../../constants/Header';
import { useSetRecoilState } from 'recoil';
import { headerSelectedState } from '../../recoil/atom';
import { useEffect } from 'react';

const MyTeam = () => {
  const setHeaderSelected = useSetRecoilState(headerSelectedState);
  useEffect(() => setHeaderSelected(Headers.myTeam));

  return (
    <MyTeamLayout>
      <MyTeamHeader />
    </MyTeamLayout>
  );
};

export default MyTeam;

const MyTeamLayout = styled.div`
  margin: 0 auto;

  @media ${({ theme }) => theme.devices.mobile} {
  }
  @media ${({ theme }) => theme.devices.tablet} {
  }
  @media ${({ theme }) => theme.devices.desktop} {
    max-width: 122.4rem;
  }
`;
