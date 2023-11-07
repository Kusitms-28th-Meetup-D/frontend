import { styled } from 'styled-components';
import Recruiting from '../../components/competitionList/CompetitionRecruiting';

const CompetitionList = () => {
  return (
    <CompetitionLayout>
      <Recruiting />
    </CompetitionLayout>
  );
};

export default CompetitionList;

const CompetitionLayout = styled.div`
  margin: 0 auto;

  @media ${({ theme }) => theme.devices.mobile} {
  }
  @media ${({ theme }) => theme.devices.tablet} {
  }
  @media ${({ theme }) => theme.devices.desktop} {
    width: 1250px;
  }
`;
