import { styled } from 'styled-components';
import MyTeamOpenBox from '../../components/myteam/open/MyTeamOpenBox';
import { useOpenedTeam } from '../../hooks/myTeam/useOpenedTeam';

const MyTeamOpen = () => {
  const { openedTeam } = useOpenedTeam();

  return (
    <MyTeamOpenContainer>
      {openedTeam &&
        openedTeam.data.length > 0 &&
        openedTeam.data.map((myTeamOpen) => (
          <MyTeamOpenBox key={myTeamOpen.teamId} myTeamOpen={myTeamOpen} />
        ))}
    </MyTeamOpenContainer>
  );
};

export default MyTeamOpen;

const MyTeamOpenContainer = styled.div`
  width: 122.4rem;
  margin: 0 auto;
`;
