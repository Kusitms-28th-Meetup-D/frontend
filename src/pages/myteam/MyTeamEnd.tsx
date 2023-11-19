import { styled } from 'styled-components';
import MyTeamEndBox from '../../components/myteam/end/MyTeamEndBox';

const MyTeamEnd = () => {
  return (
    <MyTeamEndContainer>
      <MyTeamEndBox></MyTeamEndBox>
      <MyTeamEndBox></MyTeamEndBox>
      <MyTeamEndBox></MyTeamEndBox>
    </MyTeamEndContainer>
  );
};

export default MyTeamEnd;

const MyTeamEndContainer = styled.div`
  width: 122.4rem;
  margin: 0 auto;
`;
