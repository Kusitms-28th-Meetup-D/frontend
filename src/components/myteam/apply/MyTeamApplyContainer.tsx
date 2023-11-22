import styled from 'styled-components';
import { AppliedTeamData } from '../../../interface/MyTeam';
import ProfileBoxMember from '../../common/ProfileBoxMember';
import { ProfileBoxProps } from '../../../interface/Contest';
import { Role } from '../../contest/RecruitTeamItem';
import { useNavigate } from 'react-router-dom';
import { useCancelApplyTeam } from '../../../hooks/myTeam/useCancelApplyTeam';

const MyTeamApplyContainer: React.FC<AppliedTeamData> = (props) => {
  const teamLeaderBoxProps: ProfileBoxProps = {
    hasBorder: true,
    hasProfileButton: false,
    isBgColorWhite: false,
    memberInfo: props.leaderInfo,
  };
  const navigate = useNavigate();
  const cancelApplyTeamMutation = useCancelApplyTeam(props.teamId);

  const handleCancelApplyClick = () => {
    cancelApplyTeamMutation.mutate();
  };

  return (
    <Layout>
      <TitleBox>
        <Title>{props.contestTitle}</Title>
        <ContestImg src={props?.contestImage[0]} />
      </TitleBox>

      <TeamBoxRight>
        <TeamBoxTop onClick={handleCancelApplyClick}>지원 취소하기</TeamBoxTop>
        <TeamBoxBottom>
          <TeamLeaderBox>
            <TeamLeaderEmptyBox>
              <Role>팀장</Role>
              <ProfileBoxMember {...teamLeaderBoxProps} />
            </TeamLeaderEmptyBox>
            <TeamInfoButton
              onClick={() =>
                navigate(`/list/${props.contestId}/${props.teamId}`)
              }
            >
              자세히 보러가기
            </TeamInfoButton>
          </TeamLeaderBox>
          <TeamInfoBox>
            <TeamJoinStatus>
              팀 합류 여부 :
              <TeamJoinStatusBox $status={props.status}>
                {props.status}
              </TeamJoinStatusBox>
            </TeamJoinStatus>
            <TeamLeaderIntroduceTitle>
              팀장의 한 마디
              <div />
            </TeamLeaderIntroduceTitle>
            <TeamLeaderIntroduce>{props.leaderMessage}</TeamLeaderIntroduce>
            <TeamStatusBox>
              <TeamStatusItem>
                모집 현황 : <span>{props.cur}명</span> / {props.max}명
              </TeamStatusItem>
              <TeamStatusItem>활동 지역 : {props.location}</TeamStatusItem>
              <TeamStatusItem>
                활동 종료 예정일 : {props.endDate}
              </TeamStatusItem>
            </TeamStatusBox>
          </TeamInfoBox>
        </TeamBoxBottom>
      </TeamBoxRight>
    </Layout>
  );
};
const Layout = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.colors.primary10};

  border: 1px solid ${(props) => props.theme.colors.primary10};
  border-radius: 1.4rem;

  display: flex;
  justify-content: space-between;
  gap: 2rem;

  padding: 3rem 4rem;
`;
const TitleBox = styled.div`
  width: 17rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-items: center;
`;
const Title = styled.div`
  ${(props) => props.theme.fonts.subtitleS};
  color: ${(props) => props.theme.colors.gray90};
  width: 100%;
`;
const ContestImg = styled.img`
  width: 16.9rem;
  /* height: 23.1rem; */
  border-radius: 0.5rem;
`;

//팀장 컴포넌트 박스
const TeamLeaderBox = styled.div`
  width: 17rem;
  /* height: 100%; */

  /* flex-grow: 1; */

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;

  margin-top: 2rem;
`;
const TeamLeaderEmptyBox = styled.div`
  position: relative;
  ${(props) => props.theme.fonts.subtitleS};
`;
const TeamInfoButton = styled.button`
  height: 3rem;

  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.primary40};
  border-radius: 0.8rem;

  display: flex;
  justify-content: center;
  align-items: center;
`;

//팀 정보 박스
const TeamInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
  gap: 1rem;

  flex-grow: 1;

  ${(props) => props.theme.fonts.subtitleM}
  border: 1px solid ${(props) => props.theme.colors.gray20};
  border-radius: 0.8rem;

  padding: 2.7rem 3.6rem;
  margin-top: 2rem;
`;

const TeamBoxRight = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const TeamBoxTop = styled.div`
  display: flex;
  justify-content: flex-end;
  cursor: pointer;

  ${(props) => props.theme.fonts.bodyL}
  color: ${(props) => props.theme.colors.primary90};
`;

const TeamBoxBottom = styled.div`
  display: flex;
  gap: 2rem;
`;

const TeamJoinStatus = styled.div`
  display: flex;
  align-items: center;

  gap: 0.5rem;
  /* border-radius: 0.7rem; */
`;
const TeamJoinStatusBox = styled.div<{ $status: any }>`
  display: flex;
  align-items: center;
  justify-content: center;

  /* width: 5.2rem; */
  height: 3.3rem;

  border-radius: 0.7rem;
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => {
    if (props.$status === '합류') {
      return '#83C877';
    } else if (props.$status === '검토 중') {
      return '#F5BD68';
    } else if (props.$status === '반려') {
      return '#D9635D';
    } else {
      console.log('민정아 반환값 잘못줬다.');
      return '#83C877'; // 다른 경우 투명색 또는 다른 적절한 기본값
    }
  }};

  padding: 0.3rem 0.8rem;
`;

const TeamLeaderIntroduceTitle = styled.div`
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

//재사용

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
export default MyTeamApplyContainer;
