import styled from 'styled-components';
import ContestInfo from '../../components/contest/ContestInfo';
import RecruitTeamList from '../../components/contest/RecruitTeamList';
import { useSetRecoilState } from 'recoil';
import { headerSelectedState } from '../../recoil/atom';
import { useEffect } from 'react';
import { Headers } from '../../constants/Header';

const Contest = () => {
  const setHeaderSelected = useSetRecoilState(headerSelectedState);
  useEffect(() => setHeaderSelected(Headers.list));
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
