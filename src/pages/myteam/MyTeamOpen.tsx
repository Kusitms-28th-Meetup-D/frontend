import { styled } from 'styled-components';
import MyTeamOpenBox from '../../components/myteam/open/MyTeamOpenBox';
import { useOpenedTeam } from '../../hooks/myTeam/useOpenedTeam';
import { useRecoilValue } from 'recoil';
import { loginInfoState } from '../../recoil/atom';
import MyTeamEmpty from '../../components/myteam/MyTeamEmpty';
const MyTeamOpen = () => {
  const { openedTeam } = useOpenedTeam();
  const loginInfo = useRecoilValue(loginInfoState);
  console.log(openedTeam);
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
            contestId={myTeamOpen.contestId}
          />
        ))}{' '}
      {openedTeam && openedTeam.data.length == 0 && (
        <MyTeamEmpty text="아직 오픈한 팀이 없어요" />
      )}
    </MyTeamOpenContainer>
  );
};

export default MyTeamOpen;

const MyTeamOpenContainer = styled.div`
  width: 122.4rem;
  margin: 0 auto;
`;
