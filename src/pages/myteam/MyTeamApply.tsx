import styled from 'styled-components';
import { ResponseAppliedTeam } from '../../interface/MyTeam';
import MyTeamApplyContainer from '../../components/myteam/apply/MyTeamApplyContainer';

const DUMMY: ResponseAppliedTeam = {
  status: 200,
  message: '요청이 성공했습니다.',
  data: [
    {
      teamId: 1,
      teamMemberSize: 1,
      applyMemberSize: 0,
      teamMemberInfos: [
        {
          teamMemberId: 3,
          teamMemberName: '맹구',
          teamMemberImage:
            'http://k.kakaocdn.net/dn/1G9kp/btsAot8liOn/8CWudi3uy07rvFNUkk3ER0/img_640x640.jpg\t',
          teamMemberTask: [],
          teamMemberMajor: [],
        },
      ],
      applyMemberInfos: [],
      contestTitle:
        "[아모레퍼시픽/두리코스메틱등] 뷰티 대기업에서 마케팅/연구개발/MD '실무스펙' 한번에 쌓고 서류합격 확률 200%올리기",
      contestImage: [
        'https://www.wevity.com/upload/contest/20231030101137_0309ea76.jpg',
        'https://www.wevity.com/upload/contest/20231030100653_e642b132.jpg',
      ],
    },
  ],
};
const MyTeamApply = () => {
  // const { appliedTeamData } = useAppliedTeam();
  return (
    <ApplyLayout>
      {DUMMY.data.map((each) => (
        <MyTeamApplyContainer each={each}></MyTeamApplyContainer>
      ))}
    </ApplyLayout>
  );
};
const ApplyLayout = styled.div``;
export default MyTeamApply;
