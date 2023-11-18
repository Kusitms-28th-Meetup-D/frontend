import { styled } from 'styled-components';
import ContestInfo from '../../components/contest/ContestInfo';
import MyTeamCreateOpen from '../../components/myteam/MyTeamCreateOpen';

const MyTeamCreate = () => {
  return (
    <MyTeamCreateContainer>
      <ContestInfo />
      <MyTeamCreateOpen />
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
