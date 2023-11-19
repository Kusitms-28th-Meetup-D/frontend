import styled from 'styled-components';

import {
  ContestTeamList,
  ProfileBoxProps,
  ProfileProps,
} from '../../interface/Contest';
import ProfileBoxMember from '../common/ProfileBoxMember';
import { useNavigate } from 'react-router-dom';
// import ProfileBoxLeader from '../common/ProfileBoxLeader';

const RecruitTeamItem = ({ teamData }: { teamData: ContestTeamList }) => {
  //props에서 팀 리더 데이터 추출
  const teamLeaderDataProps: ProfileBoxProps = {
    hasProfileButton: true,
    isBgColorWhite: false,
    hasBorder: false,
    memberInfo: teamData.leaderInfo,
    width: 20,
    height: 27.6,
  };
  const navigate = useNavigate();
  return (
    <ItemLayout>
      <LeaderBox>
        <Role>팀장</Role>
        <ProfileBoxMember {...teamLeaderDataProps} />
        {/* <LeaderInfoBox infoData={data.leaer} /> */}
      </LeaderBox>  
      <MemberBox>
        <Role>팀원</Role>
        <TeamInfoBox>
          <TO>
            모집 현황 : {teamData.cur}/{teamData.max}
          </TO>
          <IntroduceTitle>
            <Hr />
            <div>팀장의 한 마디</div>
            <Hr />
          </IntroduceTitle>
          <IntroduceContent>{teamData.leaderMessage}</IntroduceContent>
          <GoTeamButton onClick={() => navigate(`./${teamData.teamId}`)}>
            팀 자세히 보러가기
          </GoTeamButton>
        </TeamInfoBox>
        <MemberInfoContainer>
          {teamData.cur == 0 ? (
            <NoMember>모집된 팀원이 없습니다.</NoMember>
          ) : (
            teamData.teamMemeberInfos.map(
              (member: ProfileProps, index: any) => {
                const teamMemberDataProps: ProfileBoxProps = {
                  hasProfileButton: false,
                  isBgColorWhite: false,
                  hasBorder: true,
                  memberInfo: member,
                  // width: 13.2,
                  // height: 16.3,
                };
                return (
                  <ProfileBoxMember {...teamMemberDataProps} key={index} />
                );
              },
            )
          )}
        </MemberInfoContainer>
      </MemberBox>
    </ItemLayout>
  );
};
const ItemLayout = styled.div`
  display: flex;
  gap: 2.4rem;
`;
export const Role = styled.div`
  position: absolute;
  left: -1px;
  top: -1.5rem;

  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.primary40};

  border-radius: 0.8rem;

  width: 4.1rem;
  height: 3rem;
  padding: 0.4rem 0.8rem;
`;
export const LeaderBox = styled.div`
  position: relative;

  ${(props) => props.theme.fonts.subtitleS};
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.primary10};

  border: 1px solid ${(props) => props.theme.colors.primary40};
  border-radius: 0.8rem;

  display: flex;
  justify-content: center;
  align-items: center;

  min-width: 20rem;
  /* height: 23rem; */
`;
const MemberBox = styled.div`
  position: relative;
  display: flex;

  ${(props) => props.theme.fonts.subtitleS};
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.gray5};

  border: 1px solid ${(props) => props.theme.colors.gray20};
  border-radius: 0.8rem;

  flex-grow: 1;
  /* width: 100%; */
  /* height: 23rem; */
`;
const TeamInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: ce; */
  align-items: center;
  gap: 1rem;

  width: 25rem;

  padding: 2rem;
`;
const TO = styled.div`
  ${(props) => props.theme.fonts.subtitleXS};
  font-weight: 700;
  color: ${(props) => props.theme.colors.primary40};

  width: 100%;
`;
const IntroduceTitle = styled.div`
  ${(props) => props.theme.fonts.subtitleS};
  color: ${(props) => props.theme.colors.gray90};

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;

  width: 100%;
  > div:nth-child(2) {
    flex-shrink: 0; //너비만큼 차지
  }
`;
const Hr = styled.div`
  width: 30px;
  height: 1px;

  flex-grow: 1; //너비를 제외하고 최대로 차지

  border-top: 1px solid ${(props) => props.theme.colors.primary40};
  /* background-color: ${(props) => props.theme.colors.primary40}; */
`;
const IntroduceContent = styled.div`
  ${(props) => props.theme.fonts.subtitleM};
  color: ${(props) => props.theme.colors.primary90};
  background-color: ${(props) => props.theme.colors.white};

  border: 1px solid ${(props) => props.theme.colors.primary40};
  border-radius: 0.8rem;

  width: 100%;
  padding: 3.5rem;

  flex-grow: 1; //너비 최대로!!!!!!!

  display: flex;
  justify-content: center;
  align-items: center;
`;
const GoTeamButton = styled.button`
  ${(props) => props.theme.fonts.subtitleXS};
  color: rgba(255, 255, 255, 0.8);
  background-color: ${(props) => props.theme.colors.primary40};

  border: 1px solid ${(props) => props.theme.colors.primary40};
  border-radius: 0.8rem;

  width: 100%;
  padding: 0.5rem;
`;
const MemberInfoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.2rem;
  overflow-x: scroll;

  max-width: 72rem;
  /* max-width: 100%; */

  padding: 2.8rem;

  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
    border-radius: 6px;
    background: rgba(255, 255, 255, 0.4);
  }
  &::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.colors.primary60};
    border-radius: 6px;
  }
`;
const NoMember = styled.div`
  color: ${(props) => props.theme.colors.primary90};
  ${(props) => props.theme.fonts.subtitleM};

  width: 72rem;

  display: flex;
  justify-content: center;
  align-items: center;
`;
export default RecruitTeamItem;
