import styled from 'styled-components';
import ContestInfo from '../../components/contest/ContestInfo';

const Contest = () => {
  return (
    <ContestLayout>
      <ContestInfo />
    </ContestLayout>
  );
};
const ContestLayout = styled.div`
  max-width: 122.4rem;
  margin: auto;
`;
export default Contest;
