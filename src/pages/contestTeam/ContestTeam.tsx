import styled from 'styled-components';
import {
  ProfileBoxProps,
  ResponseContestTeamDetailInfo,
} from '../../interface/Contest';

import undoSrc from '/assets/images/common/undo.svg';
import { LeaderBox, Role } from '../../components/contest/RecruitTeamItem';
import ProfileBoxMember from '../../components/common/ProfileBoxMember';
import { useSetRecoilState } from 'recoil';
import { headerSelectedState } from '../../recoil/atom';
import { Headers } from '../../constants/Header';
import { useEffect } from 'react';
import useContestTeamDetailInfo from '../../hooks/useContestTeamDetailInfo';
const DUMMY: ResponseContestTeamDetailInfo = {
  status: 200,
  message: '요청이 성공했습니다.',
  data: {
    leaderInfo: {
      teamMemberId: 1,
      teamMemberName: '오진영',
      teamMemberImage:
        'http://k.kakaocdn.net/dn/cY1oTv/btszi4PMkzZ/XEjRJGzXI6FR2clvBixTB0/img_640x640.jpg',
      teamMemberTask: ['백엔드 개발자'],
      teamMemberMajor: ['소프트웨어학과'],
    },
    leaderMessage: '봄 감자가 맛있답니다.',
    max: 7,
    cur: 2,
    location: '서울특별시',
    endDate: '2023-12-25 09:00:00.0',
    notice:
      '창업 학회, 마케팅 공모전 수상 경력이 여러 번 있어서 믿고 따라오셔도 될 것 같습니다!\n제가 전략 기획 쪽을 담당할 테니, UX/UI 디자인을 잘하시는 팀원을 만나고 싶어요!\n그리고 아이디어가 많으신 분들 환영합니다!\n+) 팀 모집은 제가 하지만, 팀 구성되고 난 후에는 따로 리더를 뽑을 계획입니다!',
    leftMember: 5,
    teamMemeberInfos: [
      {
        teamMemberId: 2,
        teamMemberName: '갓진우',
        teamMemberImage:
          'http://k.kakaocdn.net/dn/cEd0CR/btrYlyKU8c9/CB2QnlVAd5GKEHHGHov2eK/img_640x640.jpg',
        teamMemberTask: ['갓예진'],
        teamMemberMajor: ['갓민정'],
      },
    ],
    status: 1,
  },
};

const ContestTeam = () => {
  const teamLeaderBoxProps: ProfileBoxProps = {
    hasProfileButton: true,
    isBgColorWhite: false,
    memberInfo: DUMMY.data.leaderInfo,
    hasBorder: false,
  };
  // const { contestTeamDetailData } = useContestTeamDetailInfo('1');
  const setHeaderSelected = useSetRecoilState(headerSelectedState);
  useEffect(() => setHeaderSelected(Headers.list));
  return (
    <TeamLayout>
      <TeamUndo>
        <UndoImg src={undoSrc} />
        {'공모전으로 돌아가기'}
      </TeamUndo>
      <TeamTitle>
        {/* {contestTeamDetailData?.data.data.leaderInfo.teamMemberName}님의 팀 */}
        {DUMMY.data.leaderInfo.teamMemberName}님의 팀
      </TeamTitle>
      <TeamLeaderContainer>
        <LeaderBox>
          <Role>팀장</Role>
          <ProfileBoxMember {...teamLeaderBoxProps} />
        </LeaderBox>
        <TeamLeaderInfoBox>
          <TeamLeaderTitle>
            팀장의 한 마디
            <div />
          </TeamLeaderTitle>
          <TeamLeaderIntroduce>{DUMMY.data.leaderMessage}</TeamLeaderIntroduce>
          <TeamStatusBox>
            <TeamStatusItem>
              모집 현황 : <span>{DUMMY.data.cur}명</span> / {DUMMY.data.max}명{' '}
            </TeamStatusItem>
            <TeamStatusItem> 활동 지역 : {DUMMY.data.location}</TeamStatusItem>
            <TeamStatusItem>
              활동 종료 예정일 : {DUMMY.data.endDate}
            </TeamStatusItem>
          </TeamStatusBox>
        </TeamLeaderInfoBox>
      </TeamLeaderContainer>
      <TeamNoticeContainer>
        <TeamNoticeTitle>모집 공고</TeamNoticeTitle>
        <TeamNoticeContent>{DUMMY.data.notice}</TeamNoticeContent>
      </TeamNoticeContainer>
    </TeamLayout>
  );
};
const TeamLayout = styled.div`
  max-width: 122.4rem;
  margin: auto;

  display: flex;
  flex-direction: column;
  gap: 4.4rem;
`;
const TeamUndo = styled.div`
  ${(props) => props.theme.fonts.bodyXXL};
  color: ${(props) => props.theme.colors.gray70};

  display: flex;
  align-items: center;

  /* margin-top: 2rem 0; */
`;
const UndoImg = styled.img`
  width: 1.2rem;
  margin-right: 2rem;
`;
const TeamTitle = styled.div`
  ${(props) => props.theme.fonts.heading3};
  color: ${(props) => props.theme.colors.gray100};
`;
const TeamLeaderContainer = styled.div`
  display: flex;
  gap: 2rem;
`;
const TeamLeaderInfoBox = styled.div`
  flex-grow: 1;
  /* height: 22.4rem; */

  display: flex;
  flex-direction: column;
  gap: 2rem;

  ${(props) => props.theme.fonts.subtitleXL};
  border: 1px solid ${(props) => props.theme.colors.gray20};
  border-radius: 1rem;

  color: ${(props) => props.theme.colors.gray90};
  background-color: ${(props) => props.theme.colors.primary10};

  padding: 2.5rem 4rem;
`;
const TeamLeaderTitle = styled.div`
  color: ${(props) => props.theme.colors.gray90};

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;

  width: 100%;
  > div {
    flex-grow: 1; //너비를 제외하고 최대로 차지
    height: 1px;
    border-top: 1px solid ${(props) => props.theme.colors.primary40};
  }
`;
const TeamLeaderIntroduce = styled.div`
  width: 100%;
  height: 100px;

  border: 1px solid ${(props) => props.theme.colors.gray40};
  border-radius: 1.2rem;
  background-color: ${(props) => props.theme.colors.white};

  color: ${(props) => props.theme.colors.primary60};

  display: flex;
  justify-content: center;
  align-items: center;
`;
const TeamStatusBox = styled.div`
  width: 100%;
  /* height: 100px; */

  color: ${(props) => props.theme.colors.primary60};

  display: flex;
  /* justify-content: center; */
  align-items: center;
  gap: 6rem;
`;
const TeamStatusItem = styled.div`
  color: ${(props) => props.theme.colors.gray90};
  span {
    color: ${(props) => props.theme.colors.primary60};
  }
`;
const TeamNoticeContainer = styled.div`
  width: 100%;

  border: 1px solid ${(props) => props.theme.colors.gray20};
  border-radius: 1rem;
  background-color: ${(props) => props.theme.colors.gray5};
  color: ${(props) => props.theme.colors.gray90};

  padding: 3.3rem 4.5rem;

  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
const TeamNoticeTitle = styled.div`
  ${(props) => props.theme.fonts.subtitleXXL};
`;
const TeamNoticeContent = styled.div`
  ${(props) => props.theme.fonts.bodyXL};

  border: 1px solid ${(props) => props.theme.colors.gray40};
  border-radius: 1rem;
  background-color: ${(props) => props.theme.colors.white};

  padding: 2.5rem 3rem;

  white-space: break-spaces;
`;
export default ContestTeam;
