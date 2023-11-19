import { styled } from 'styled-components';
import Recruiting from '../../components/competitionList/CompetitionRecruiting';
import CompetitionSearch from '../../components/competitionList/CompetitionSearch';
import CompetitionListBox from '../../components/competitionList/CompetitionListBox';
import { useSetRecoilState } from 'recoil';
import { headerSelectedState } from '../../recoil/atom';
import { useEffect } from 'react';
import { Headers } from '../../constants/Header';

const CompetitionList = () => {
  const setHeaderSelected = useSetRecoilState(headerSelectedState);
  useEffect(() => setHeaderSelected(Headers.list));
  return (
    <CompetitionLayout>
      <Recruiting />
      <CompetitionSearch />
      <CompetitionListBox />
    </CompetitionLayout>
  );
};

export default CompetitionList;

const CompetitionLayout = styled.div`
  max-width: 122.4rem;
  margin: auto;
`;
