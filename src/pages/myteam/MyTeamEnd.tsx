import { styled } from 'styled-components';
import MyTeamEndBox from '../../components/myteam/end/MyTeamEndBox';
import { useEndTeam } from '../../hooks/myTeam/useEndTeam';
import MyTeamEmpty from '../../components/myteam/MyTeamEmpty';
import { TextAnimation } from '../../styles/animation';
import { motion } from 'framer-motion';

const MyTeamEnd = () => {
  const { endTeam } = useEndTeam();

  return (
    <MyTeamEndContainer
      initial="hidden"
      animate="visible"
      variants={TextAnimation}
    >
      {endTeam &&
        endTeam.data.length > 0 &&
        endTeam.data.map((myEndTeam) => (
          <MyTeamEndBox key={myEndTeam.contestId} endTeam={myEndTeam} />
        ))}{' '}
      {endTeam && endTeam.data.length == 0 && (
        <MyTeamEmpty text="아직 활동이 종료된 팀이 없어요" />
      )}
    </MyTeamEndContainer>
  );
};

export default MyTeamEnd;

const MyTeamEndContainer = styled(motion.div)`
  width: 122.4rem;
  margin: 0 auto;
`;
