import styled from 'styled-components';
import useActiveTeam from '../../hooks/myTeam/useActiveTeam';
import MyTeamActiveContainer from '../../components/myteam/active/MyTeamActiveContainer';
import MyTeamEmpty from '../../components/myteam/MyTeamEmpty';
import { TextAnimation } from '../../styles/animation';
import { motion } from 'framer-motion';

const MyTeamActive = () => {
  const { activeTeamData } = useActiveTeam();

  return (
    <ActiveLayout initial="hidden" animate="visible" variants={TextAnimation}>
      {activeTeamData?.data.data.map((each) => (
        <MyTeamActiveContainer {...each}></MyTeamActiveContainer>
      ))}
      {activeTeamData && activeTeamData.data.data.length == 0 && (
        <MyTeamEmpty text="아직 활동중인 팀이 없어요" />
      )}
    </ActiveLayout>
  );
};
const ActiveLayout = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 3rem;
`;
export default MyTeamActive;
