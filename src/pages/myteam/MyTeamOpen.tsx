import { styled } from 'styled-components';
import MyTeamOpenBox from '../../components/myteam/open/MyTeamOpenBox';
import { useOpenedTeam } from '../../hooks/myTeam/useOpenedTeam';
import { useRecoilValue } from 'recoil';
import { loginInfoState } from '../../recoil/atom';
const MyTeamOpen = () => {
  const { openedTeam } = useOpenedTeam();
  const loginInfo = useRecoilValue(loginInfoState);
  return (
    <MyTeamOpenContainer>
      {openedTeam &&
        openedTeam.data.length > 0 &&
        openedTeam.data.map((myTeamOpen) => (
          <MyTeamOpenBox
            key={myTeamOpen.teamId}
            myTeamOpen={myTeamOpen}
            teamId={myTeamOpen.teamId}
            userId={loginInfo.data?.userId}
            // contestId={myTeamOpen.contestId}
          />
        ))}
    </MyTeamOpenContainer>
  );
};

export default MyTeamOpen;

const MyTeamOpenContainer = styled.div`
  width: 122.4rem;
  margin: 0 auto;
`;
