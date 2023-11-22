import styled from 'styled-components';
import useActiveTeam from '../../hooks/myTeam/useActiveTeam';
import MyTeamActiveContainer from '../../components/myteam/active/MyTeamActiveContainer';
import MyTeamEmpty from '../../components/myteam/MyTeamEmpty';

const MyTeamActive = () => {
  const { activeTeamData } = useActiveTeam();
  console.log(activeTeamData);

  return (
    <ApplyLayout>
      {activeTeamData?.data.data.map((each) => (
        <MyTeamActiveContainer {...each}></MyTeamActiveContainer>
      ))}
      {activeTeamData && activeTeamData.data.data.length == 0 && (
        <MyTeamEmpty text="아직 활동중인 팀이 없어요" />
      )}
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
