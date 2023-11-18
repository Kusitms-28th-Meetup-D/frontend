import styled from 'styled-components';
import { ProfileBoxProps, ProfileProps } from '../../interface/Contest';

import undoSrc from '/assets/images/common/undo.svg';
import { LeaderBox, Role } from '../../components/contest/RecruitTeamItem';
import ProfileBoxMember from '../../components/common/ProfileBoxMember';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { headerSelectedState, loginInfoState } from '../../recoil/atom';
import { Headers } from '../../constants/Header';
import { useEffect } from 'react';
import useContestTeamDetailInfo from '../../hooks/contest/useContestTeamDetailInfo';
import { useNavigate, useParams } from 'react-router-dom';

const ContestTeam = () => {
  const { teamId ,contestId} = useParams();
  const { contestTeamDetailData, isLoading } = useContestTeamDetailInfo(
    teamId as string,
  );
  const userLogininfo = useRecoilValue(loginInfoState);
  const setHeaderSelected = useSetRecoilState(headerSelectedState);
  const navigate = useNavigate();
  useEffect(() => setHeaderSelected(Headers.list));
  const teamLeaderBoxProps: ProfileBoxProps = isLoading
    ? ({} as ProfileBoxProps)
    : {
        hasProfileButton: true,
        isBgColorWhite: false,
        memberInfo: contestTeamDetailData?.data.data.leaderInfo as ProfileProps,
        hasBorder: false,
        width: 20,
        height: 27.6,
      };

  if (contestTeamDetailData?.data.data.status == 1) {
    navigate(`/myTeam/${userLogininfo.data?.userId}/${contestId}/${teamId}`);
  }
  return isLoading ? (
    <div>로딩중</div>
  ) : (
    <TeamLayout>
      <TeamUndo onClick={() => navigate(-1)}>
        <UndoImg src={undoSrc} />
        {'공모전으로 돌아가기'}
      </TeamUndo>
      <TeamTitle>
        {contestTeamDetailData?.data.data.leaderInfo.teamMemberName}님의 팀
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
          <TeamLeaderIntroduce>
            {contestTeamDetailData?.data.data.leaderMessage}
          </TeamLeaderIntroduce>
          <TeamStatusBox>
            <TeamStatusItem>
              모집 현황 : <span>{contestTeamDetailData?.data.data.cur}명</span>{' '}
              / {contestTeamDetailData?.data.data.max}명{' '}
            </TeamStatusItem>
            <TeamStatusItem>
              {' '}
              활동 지역 : {contestTeamDetailData?.data.data.location}
            </TeamStatusItem>
            <TeamStatusItem>
              활동 종료 예정일 : {contestTeamDetailData?.data.data.endDate}
            </TeamStatusItem>
          </TeamStatusBox>
        </TeamLeaderInfoBox>
      </TeamLeaderContainer>
      <TeamNoticeContainer>
        <TeamNoticeTitle>모집 공고</TeamNoticeTitle>
        <TeamNoticeContent>
          {contestTeamDetailData?.data.data.notice}
        </TeamNoticeContent>
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

  margin-top: 3rem;

  cursor: pointer;
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
