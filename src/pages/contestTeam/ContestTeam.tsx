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
import { TEAM_DETAIL_STATUS } from '../../constants/Contest';
import TeamMembers from '../../components/contestTeam/TeamMembers';
import useJoinTeam from '../../hooks/contest/useJoinTeam';

const ContestTeam = () => {
  const { teamId, contestId } = useParams();
  const { contestTeamDetailData, isLoading } = useContestTeamDetailInfo(
    teamId as string,
  );
  const userLogininfo = useRecoilValue(loginInfoState);
  const setHeaderSelected = useSetRecoilState(headerSelectedState);
  const navigate = useNavigate();
  const handleJoinTeam = useJoinTeam(teamId as string);
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

  if (
    contestTeamDetailData?.data.data.status ==
    TEAM_DETAIL_STATUS._1_내가오픈한경우
  ) {
    navigate(`/myTeam/${userLogininfo.data?.userId}/${contestId}/${teamId}`);
  }
  console.log(contestTeamDetailData);
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
      <TeamMembers
        memberDatas={contestTeamDetailData?.data.data.teamMemeberInfos}
        leftMember={contestTeamDetailData?.data.data.leftMember}
        cur={contestTeamDetailData?.data.data.cur}
        max={contestTeamDetailData?.data.data.max}
      />
      <FlexBox>
        {contestTeamDetailData?.data.data.status ==
          TEAM_DETAIL_STATUS._2_남이오픈한경우_내가지원안함 && (
          <>
            <CustomButton
              $isActive={true}
              onClick={() => handleJoinTeam.mutate()}
            >
              합류 신청하기 →
            </CustomButton>
          </>
        )}
        {contestTeamDetailData?.data.data.status ==
          TEAM_DETAIL_STATUS._3_남이오픈한경우_내가지원완료_승인 && (
          <>
            <CustomButton>합류 신청하기 →</CustomButton>
            <CustomMessage>이미 합류 승인된 팀입니다.</CustomMessage>
          </>
        )}{' '}
        {contestTeamDetailData?.data.data.status ==
          TEAM_DETAIL_STATUS._4_남이오픈한경우_내가지원완료_반려 && (
          <>
            <CustomButton>합류 신청하기 →</CustomButton>
            <CustomMessage>이미 지원이 반려된 팀입니다.</CustomMessage>
          </>
        )}{' '}
        {contestTeamDetailData?.data.data.status ==
          TEAM_DETAIL_STATUS._5_남이오픈한경우_내가지원완료_승인반려아님 && (
          <>
            <CustomButton
              $isActive={true}
              onClick={() =>
                navigate(`/myteam/${userLogininfo.data?.userId}/apply`)
              }
            >
              지원 현황보기 →
            </CustomButton>
            <CustomMessage>이미 지원을 완료한 팀입니다.</CustomMessage>
          </>
        )}
      </FlexBox>
    </TeamLayout>
  );
};
const TeamLayout = styled.div`
  max-width: 122.4rem;
  margin: auto;

  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  /* align-items: center; */
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
const FlexBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.6rem;
`;
const CustomButton = styled.button<{ $isActive?: boolean }>`
  width: 25.5rem;
  height: 6.4rem;

  border-radius: 3.2rem;
  border: 1px solid
    ${(props) =>
      props.$isActive
        ? props.theme.colors.primary20
        : props.theme.colors.gray50};

  background-color: ${(props) =>
    props.$isActive ? props.theme.colors.primary60 : props.theme.colors.gray10};

  ${(props) => props.theme.fonts.buttonL};
  color: ${(props) =>
    props.$isActive ? props.theme.colors.white : props.theme.colors.gray40};

  cursor: ${(props) => (props.$isActive ? 'pointer' : 'default')};
`;
const CustomMessage = styled.div`
  ${(props) => props.theme.fonts.buttonL};
  color: ${(props) => props.theme.colors.gray70};
`;
export default ContestTeam;
