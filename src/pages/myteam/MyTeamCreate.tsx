import { styled } from 'styled-components';
import ContestInfo from '../../components/contest/ContestInfo';
import MyTeamCreateOpen from '../../components/myteam/MyTeamCreateOpen';
import ButtonBox from '../../components/myteam/ButtonBox';
import { useSetRecoilState } from 'recoil';
import { useEffect } from 'react';
import { headerSelectedState } from '../../recoil/atom';
import { Headers } from '../../constants/Header';

const MyTeamCreate = () => {
  const setHeaderSelected = useSetRecoilState(headerSelectedState);
  useEffect(() => setHeaderSelected(Headers.myTeam));

  return (
    <MyTeamCreateContainer>
      <ContestInfo />
      <MyTeamCreateOpen />
      <ButtonBox />
    </MyTeamCreateContainer>
  );
};

export default MyTeamCreate;

const MyTeamCreateContainer = styled.div`
  margin: 0 auto;

  @media ${({ theme }) => theme.devices.mobile} {
  }
  @media ${({ theme }) => theme.devices.tablet} {
  }
  @media ${({ theme }) => theme.devices.desktop} {
    max-width: 122.4rem;
  }
`;
