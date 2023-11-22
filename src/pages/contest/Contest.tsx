import styled from 'styled-components';
import ContestInfo from '../../components/contest/ContestInfo';
import RecruitTeamList from '../../components/contest/RecruitTeamList';
import { useSetRecoilState, useRecoilValue } from 'recoil';
import { headerSelectedState, loginInfoState } from '../../recoil/atom';
import { useEffect } from 'react';
import { Headers } from '../../constants/Header';

const Contest = () => {
  const loginInfo = useRecoilValue(loginInfoState);
  const setHeaderSelected = useSetRecoilState(headerSelectedState);
  useEffect(() => setHeaderSelected(Headers.list));

  return (
    <ContestLayout>
      <ContestInfo />
      <hr />
      <RecruitTeamList isLogin={loginInfo.isLogin} />
    </ContestLayout>
  );
};
const ContestLayout = styled.div`
  max-width: 122.4rem;
  margin: auto;
  margin: 3rem auto 5rem auto;
`;
export default Contest;
