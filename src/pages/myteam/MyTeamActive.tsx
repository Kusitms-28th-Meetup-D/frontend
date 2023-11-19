import styled from 'styled-components';
import useActiveTeam from '../../hooks/myTeam/useActiveTeam';
import MyTeamActiveContainer from '../../components/myteam/active/MyTeamActiveContainer';
import { ActiveTeamData } from '../../interface/MyTeam';

const MyTeamActive = () => {
  const { activeTeamData } = useActiveTeam();
  console.log(activeTeamData);


  return (
    <ApplyLayout>
      {activeTeamData?.data.data.map((each) => (
        <MyTeamActiveContainer {...each}></MyTeamActiveContainer>
      ))}
      {/* {DUMMY.map((each) => (
        <MyTeamActiveContainer {...each}></MyTeamActiveContainer>
      ))} */}
    </ApplyLayout>
  );
};
const ApplyLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 3rem;
`;
export default MyTeamActive;
