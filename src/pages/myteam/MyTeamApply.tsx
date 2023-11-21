import styled from 'styled-components';
import useAppliedTeam from '../../hooks/myTeam/useAppliedTeam';
import MyTeamApplyContainer from '../../components/myteam/apply/MyTeamApplyContainer';

const MyTeamApply = () => {
  const { appliedTeamData } = useAppliedTeam();

  return (
    <ApplyLayout>
      {appliedTeamData?.data.data.map((each) => (
        <MyTeamApplyContainer {...each}></MyTeamApplyContainer>
      ))}
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
export default MyTeamApply;
