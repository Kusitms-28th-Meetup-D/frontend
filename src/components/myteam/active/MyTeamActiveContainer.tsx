import styled from 'styled-components';
import { ActiveTeamData } from '../../../interface/MyTeam';
import starSrc from '/assets/images/common/star.svg';
import TeamMemberScrollBox from './TeamMemberScrollBox';

const MyTeamActiveContainer: React.FC<ActiveTeamData> = (props) => {
  return (
    <Layout>
      <ContestInfoContainer>
        <TitleBox>
          <Title>{props.contestTitle}</Title>
          <ContestImg src={props?.contestImage[0]} />
        </TitleBox>
        <ContentBox>
          <KakaotalkLink>
            카카오톡 오픈채팅방 링크 :
            <a href={props.chatLink}> {props.chatLink}</a>
          </KakaotalkLink>
          <TeamInfoBox>
            <TeamInfoItem>
              <span>팀원 : </span>
              {props.memberSize}명
            </TeamInfoItem>{' '}
            <TeamInfoItem>
              <span>활동 지역 : </span>
              {props.location}
            </TeamInfoItem>{' '}
            <TeamInfoItem>
              <span>활동 종료 예정일 : </span>
              {props.endDate}
            </TeamInfoItem>{' '}
            <TeamInfoItem>
              <div>팀장의 한마디 : </div>
              {props.leaderMessage}
            </TeamInfoItem>{' '}
            <TeamInfoItem>
              <div>모집 공고 : </div>
              {props.notice}
            </TeamInfoItem>
          </TeamInfoBox>
        </ContentBox>
      </ContestInfoContainer>
      <MemberTitle>
        <StarImg src={starSrc} />
        <span>합류한 팀원들</span>
        <span>총 {props.memberSize}명</span>
      </MemberTitle>
      <TeamMemberScrollBox
        teamLeaderInfo={props.leaderInfo}
        teamMembersInfo={props.teamMemberInfos}
      />
    </Layout>
  );
};
const Layout = styled.div`
  width: 100%;
  /* height: 80.3rem; */
  background-color: ${(props) => props.theme.colors.primary10};

  border: 1px solid ${(props) => props.theme.colors.primary10};
  border-radius: 1.4rem;

  display: flex;
  flex-direction: column;
  gap: 2rem;

  padding: 3rem 4rem;
`;
const ContestInfoContainer = styled.div`
  display: flex;
  justify-content: center;
  /* align-items: center; */
  gap: 2rem;
`;
//공모전 제목 및 이미지 박스
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

// 공모전 링크 및 정보 박스
const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-items: center;

  flex-grow: 1;
`;
const KakaotalkLink = styled.div`
  width: 100%;

  ${(props) => props.theme.fonts.subtitleM};
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.primary40};

  display: flex;
  /* justify-content: center; */
  align-items: center;

  border-radius: 1.2rem;
  border: 1px soild ${(props) => props.theme.colors.gray20};

  padding: 1.3rem 2.8rem;
  a {
    text-decoration: underline;
  }
`;
const TeamInfoBox = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
  gap: 0.7rem;

  border-radius: 0.8rem;
  background-color: ${(props) => props.theme.colors.white};

  padding: 2.1rem 2.5rem;
`;
const TeamInfoItem = styled.div`
  ${(props) => props.theme.fonts.bodyM};
  color: ${(props) => props.theme.colors.gray90};

  span,
  div {
    ${(props) => props.theme.fonts.subtitleM};
  }
`;
const MemberTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  & span:nth-child(2) {
    ${(props) => props.theme.fonts.heading4};
    color: ${(props) => props.theme.colors.primary90};
  }
  & span:nth-child(3) {
    ${(props) => props.theme.fonts.subtitleL};
    color: ${(props) => props.theme.colors.primary40};
  }
`;
const StarImg = styled.img`
  width: 2.8rem;
`;
export default MyTeamActiveContainer;
