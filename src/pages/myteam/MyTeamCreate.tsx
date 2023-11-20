import { styled } from 'styled-components';
import ContestInfo from '../../components/contest/ContestInfo';
import MyTeamCreateOpen from '../../components/myteam/MyTeamCreateOpen';
import ButtonBox from '../../components/myteam/ButtonBox';
import { useSetRecoilState } from 'recoil';
import { useEffect, useState } from 'react';
import { headerSelectedState } from '../../recoil/atom';
import { Headers } from '../../constants/Header';
import { RequestTeamOpen } from '../../interface/MyTeam';

const MyTeamCreate = () => {
  const setHeaderSelected = useSetRecoilState(headerSelectedState);
  useEffect(() => setHeaderSelected(Headers.myTeam));

  const [teamOpen, setTeamOpen] = useState<RequestTeamOpen>({
    contestId: '',
    max: 0,
    location: 0,
    endDate: '',
    leaderMessage: '',
    notice: '',
    chatLink: '',
  });

  const handleTeamOpenChange = (newTeamOpen: RequestTeamOpen) => {
    setTeamOpen(newTeamOpen);
  };

  return (
    <MyTeamCreateContainer>
      <ContestInfo />
      <MyTeamCreateOpen onTeamOpenChange={handleTeamOpenChange} />
      <ButtonBox teamOpen={teamOpen} />
    </MyTeamCreateContainer>
  );
};

export default MyTeamCreate;

const MyTeamCreateContainer = styled.div`
  max-width: 122.4rem;
  margin: auto;
`;
