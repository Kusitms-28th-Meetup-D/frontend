import styled from 'styled-components';
import ContestInfo from '../../components/contest/ContestInfo';
import RecruitTeamList from '../../components/contest/RecruitTeamList';

const Contest = () => {
  return (
    <ContestLayout>
      <ContestInfo />
      <hr />
      <RecruitTeamList />
    </ContestLayout>
  );
};
const ContestLayout = styled.div`
  max-width: 122.4rem;
  margin: auto;
`;
export default Contest;
